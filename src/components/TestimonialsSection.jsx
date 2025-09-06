"use client";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } = require("./ui/carousel");

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Ritika M.",
            role: "Dog Parent, Gurgaon",
            quote:
                "PawsFriend’s vet came home for my lab’s vaccination. Super easy and caring! NCR’s best pet service.",
            rating: 5,
            verified: true,
        },
        {
            name: "Aman S.",
            role: "Cat Owner, Noida",
            quote:
                "Booked grooming for my Persian cat. She loved it! Professional and punctual team.",
            rating: 4.5,
            verified: true,
        },
        {
            name: "Priya T.",
            role: "Beagle Parent, Delhi",
            quote:
                "Training sessions helped my beagle behave better. Trainers are friendly and patient.",
            rating: 5,
            verified: true,
        },
        {
            name: "Manish K.",
            role: "Golden Retriever Owner, Faridabad",
            quote:
                "Lab tests at home saved me so much time. Highly recommend for busy pet parents!",
            rating: 5,
            verified: true,
        },
        {
            name: "Simran P.",
            role: "Cat Mom, Dwarka",
            quote: "Easy booking and great offers. My cat’s health is in safe hands.",
            rating: 4,
            verified: true,
        },
        {
            name: "Rahul D.",
            role: "Dog Dad, South Delhi",
            quote: "Support team is responsive and services are top-notch. NCR needed this!",
            rating: 5,
            verified: true,
        },
    ];

    // Carousel logic with auto-scroll
    const [api, setApi] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!api) return;
        const onSelect = () => setCurrentSlide(api.selectedScrollSnap());
        api.on("select", onSelect);
        // Auto-scroll every 3 seconds
        const interval = setInterval(() => {
            api.scrollNext();
        }, 3000);
        return () => {
            api.off("select", onSelect);
            clearInterval(interval);
        };
    }, [api]);

    return (
        <section className="py-10 relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="font-poppins text-3xl md:text-5xl font-bold text-black mb-2 tracking-tight">NCR Pet Parents Love Us!</h1>
                    <p className="text-[#0e134d] text-base md:text-lg">Real reviews from pet owners across NCR</p>
                </div>
                <div className="relative max-w-6xl mx-auto">
                    <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => {
                                // Add extra margin to first and last items
                                let itemClass = "md:basis-1/3 px-2";
                                if (index === 0) itemClass += " ml-6";
                                if (index === testimonials.length - 1) itemClass += " mr-6";
                                return (
                                    <CarouselItem key={index} className={itemClass}>
                                        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full justify-between border border-gray-100">
                                            <div className="flex items-center mb-3">
                                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white font-bold text-lg mr-3 border-2 border-white shadow">
                                                    {testimonial.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-base text-gray-900 mb-0.5 font-poppins">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-xs text-gray-600 mb-0.5 font-opensans">
                                                        {testimonial.role}
                                                    </p>
                                                    {testimonial.verified && (
                                                        <div className="flex items-center text-green-600 text-xs font-medium">
                                                            <svg
                                                                className="w-3 h-3 mr-1"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <circle
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="10"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    fill="white"
                                                                />
                                                                <path
                                                                    d="M9 12l2 2l4-4"
                                                                    stroke="green"
                                                                    strokeWidth="2"
                                                                    fill="none"
                                                                />
                                                            </svg>
                                                            Verified pet parent
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                {[...Array(5)].map((_, i) => {
                                                    const isHalf = testimonial.rating - i === 0.5;
                                                    return (
                                                        <span key={i}>
                                                            {isHalf ? (
                                                                <svg
                                                                    className="w-4 h-4 text-yellow-400 inline"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <defs>
                                                                        <linearGradient id={`half${index}${i}`}>
                                                                            <stop offset="50%" stopColor="#facc15" />
                                                                            <stop
                                                                                offset="50%"
                                                                                stopColor="white"
                                                                                stopOpacity="1"
                                                                            />
                                                                        </linearGradient>
                                                                    </defs>
                                                                    <path
                                                                        fill={`url(#half${index}${i})`}
                                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <Star
                                                                    className={`h-4 w-4 ${i < Math.floor(testimonial.rating)
                                                                        ? "text-yellow-400 fill-yellow-400"
                                                                        : "text-gray-300"
                                                                        }`}
                                                                />
                                                            )}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                            <p className="text-gray-700 text-sm mb-2 font-opensans">
                                                “{testimonial.quote}”
                                            </p>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white hover:text-primary border border-gray-200 shadow" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-gray-200 shadow hover:text-primary" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;