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
  const router = useRouter()

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

  // Handle responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  return (
    <div className="relative w-full">
      {/* Mobile: Smaller height, Desktop: Larger height */}
      <div className="relative overflow-hidden">
        <Carousel
          setApi={setApi}
          className="h-full w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index}
                onClick={() => router.push(`/contact`)}
                className="h-full p-0 cursor-pointer">
                <div className="relative h-[520px] sm:h-[420px] md:h-[320px] lg:h-[320px] xl:h-[360px] w-full overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={isMobile ? slide.smimg : slide.img}
                    alt="Hero banner"
                    fill
                    className="object-fill transition-transform duration-700"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
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
