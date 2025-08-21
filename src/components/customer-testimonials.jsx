"use client"

import { useRef, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const videoTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Gurgaon",
    service: "Pet Grooming",
    thumbnail: "/woman-golden-retriever-grooming.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    name: "Rahul Gupta",
    location: "Delhi",
    service: "Veterinary Service",
    thumbnail: "/vet-consultation.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    name: "Neha Agarwal",
    location: "Noida",
    service: "Pet Training",
    thumbnail: "/woman-training-labrador.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    name: "Amit Singh",
    location: "Faridabad",
    service: "Pet Boarding",
    thumbnail: "/man-two-dogs-boarding.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 5,
    name: "Shreya Verma",
    location: "Ghaziabad",
    service: "Dog Walking",
    thumbnail: "/woman-beagle-walk.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 6,
    name: "Vikash Kumar",
    location: "Sohna",
    service: "Online Consultation",
    thumbnail: "/man-cat-video-call.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
]

export default function VideoTestimonials() {
  const videoRefs = useRef({})

  useEffect(() => {
    // Start all videos in muted autoplay loop mode
    const timer = setTimeout(() => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          video.muted = true
          video.currentTime = 0
          video.play().catch(console.log)
        }
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from Pet Parents
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Watch authentic testimonials from our satisfied customers sharing their experiences
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {videoTestimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="group cursor-pointer">
                  {/* Video Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02]">
                    <div className="aspect-[3/5] relative">
                      {/* Video Element */}
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[testimonial.id] = el
                          }
                        }}
                        className="w-full h-full object-cover"
                        poster={testimonial.thumbnail}
                        preload="metadata"
                        muted
                        loop
                        playsInline
                        autoPlay
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>

                    {/* Customer Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 text-white">
                      <h3 className="font-semibold text-base sm:text-lg mb-1">{testimonial.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-200 mb-1">{testimonial.location}</p>
                      <p className="text-xs text-[#F05434] font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6" />
          <CarouselNext className="hidden sm:flex -right-4 lg:-right-6" />
        </Carousel>
      </div>
    </section>
  )
}