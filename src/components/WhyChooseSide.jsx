"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseSide = () => {
    const reasons = [
        "Less stress for pets",
        "Personalized attention",
        "No travel or waiting",
        "Comfortable home environment",
        "Flexible scheduling",
        "Photo/video updates"
    ];

    return (
        <section className="py-14 md:py-16 bg-white overflow-hidden font-outfit">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    
                    {/* Left Image Section */}
                    <div className="relative animate-in fade-in slide-in-from-left duration-700">
                        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-gray-100">
                            <Image 
                                src="/vet_at_home.png" 
                                alt="Vet examining dog at home" 
                                width={800}
                                height={600}
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Badge over image */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-2xl z-20 hidden md:block border-2 border-gray-50">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-[#F05434] rounded-full flex items-center justify-center text-white font-black text-xl font-outfit">4.9</div>
                                <div>
                                    <div className="font-black text-sky-950 font-outfit">Expert Rating</div>
                                    <div className="text-xs text-gray-400 font-bold tracking-widest uppercase font-outfit">Trusted Care</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700">
                        <div className="space-y-4">
                            <span className="text-[#F05434] text-[10px] uppercase font-black tracking-[0.3em] block font-outfit">Benefits</span>
                            <h2 className="text-4xl md:text-5xl  text-sky-950 leading-tight">Why Choose Home<br />Pet Care?</h2>
                            <p className="text-gray-500 font-medium text-lg max-w-lg leading-relaxed font-outfit">
                                We are fully committed to your pet&apos;s well-being, bringing professional care right to your doorstep.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                            {reasons.map((reason, i) => (
                                <div key={i} className="flex items-center space-x-3 group">
                                    <div className="w-6 h-6 bg-[#F05434]/10 text-[#F05434] rounded-full flex items-center justify-center group-hover:bg-[#F05434] group-hover:text-white transition-all">
                                        <Check className="w-3.5 h-3.5 stroke-[4px]" />
                                    </div>
                                    <span className="font-bold text-sky-900 group-hover:text-[#F05434] transition-colors font-outfit">{reason}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <a href="#booking" className="inline-block">
                                <Button className="h-14 px-10 bg-[#F05434] hover:bg-[#d0452a] text-white font-black rounded-full shadow-lg shadow-[#F05434]/20 transition-all transform hover:scale-105 font-outfit">
                                    Schedule a Visit
                                </Button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseSide;
