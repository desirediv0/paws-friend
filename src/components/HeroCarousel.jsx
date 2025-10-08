"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Image from "next/image";
import { desktop1, desktop2, desktop3, mobile1, mobile2, mobile3 } from "@/assets";
import { useRouter } from "next/navigation";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const slides = [
    {
      img: desktop1,
      smimg: mobile1,
    },
    {
      img: desktop2,
      smimg: mobile2,
    },
    {
      img: desktop3,
      smimg: mobile3,
    },
  ];

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle responsive detection
  useEffect(() => {
    if (!isClient) return;

    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkMobile();

    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [isClient]);

  // Handle autoplay functionality
  useEffect(() => {
    if (!api || !autoplay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, autoplay]);

  // Update current slide index when carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Don't render until client-side
  if (!isClient) {
    return (
      <div className="relative w-full h-[200px] md:h-[400px] bg-gray-200 animate-pulse rounded-lg hidden md:block">
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-400">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full mx-auto hidden md:block">
      <div className="relative overflow-hidden w-full">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                onClick={() => router.push(`/contact`)}
                className="pl-0 cursor-pointer"
              >
                <div className="relative w-full">
                  {/* Mobile Image - Small screens */}
                  <div className="block md:hidden">
                    <div className="relative w-full h-[70vh] overflow-hidden">
                      <Image
                        src={slide.smimg}
                        alt={`Hero banner ${index + 1} mobile`}
                        fill
                        className="object-fill object-center"
                        priority={index === 0}
                        sizes="100vw"
                      />
                    </div>
                  </div>

                  {/* Desktop Image - Medium and larger screens */}
                  <div className="hidden md:block">
                    <div className="relative w-full h-[350px]  overflow-hidden">
                      <Image
                        src={slide.img}
                        alt={`Hero banner ${index + 1} desktop`}
                        fill
                        className="object-fill object-center"
                        priority={index === 0}
                        sizes="(min-width: 768px) 100vw, 100vw"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>




      </div>
    </div>
  );
};

export default HeroCarousel;