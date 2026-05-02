"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ExpertCare = () => {
    const stats = [
        { value: "20000+", label: "HOME VISITS" },
        { value: "15000+", label: "SUCCESSFUL TREATMENTS" },
        { value: "5000+", label: "HAPPY PET PARENTS" },
        // { value: "50+", label: "EXPERT VETS" }
    ];

    return (
        <section className="py-14 py-16 bg-white overflow-hidden ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
                    
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                        <span className="text-[#F05434] text-[10px] uppercase font-black tracking-[0.3em] block mb-2 ">Veterinary Services</span>
                        <h2 className="text-4xl md:text-6xl   text-sky-950 leading-tight">Experience Veterinary Service at Your Home</h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-lg ">
                            Provide your pets with the best medical care without the stress of travel. Our licensed veterinarians come to your home for comprehensive checkups, vaccinations, diagnostics, and treatments. Ensure your furry friend&apos;s health with professional care that&apos;s convenient for you and comfortable for them. Book a home visit today.
                        </p>
                        <a href="#booking" className="inline-block">
                            <Button className="h-14 px-8 bg-[#F05434] hover:bg-[#d0452a] text-white font-black rounded-full flex items-center shadow-lg transition-all transform hover:scale-105">
                                Schedule a Visit
                                <span className="ml-2">→</span>
                            </Button>
                        </a>
                    </div>

                    <div className="relative animate-in fade-in slide-in-from-right duration-700">
                        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 aspect-video md:aspect-[4/3] lg:aspect-video">
                            <Image 
                                src="/expert_care_puppies.png" 
                                alt="Happy puppies running" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F05434]/10 rounded-full blur-3xl -z-0"></div>
                    </div>

                </div>

                {/* Stats Grid */}
                <div className="border-t border-gray-100 pt-10 grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {stats.map((s, i) => (
                        <div key={i} className="space-y-2 group">
                            <div className="text-3xl md:text-5xl   text-sky-900 group-hover:text-[#F05434] transition-colors duration-500">{s.value}</div>
                            <div className="text-[10px] md:text-xs font-black tracking-widest text-[#F05434] uppercase ">{s.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExpertCare;
