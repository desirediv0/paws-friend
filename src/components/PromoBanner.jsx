"use client";
import React from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
    const perks = [
        "Affordable Home consultation",
        "Travel included",
        "Same-day slots available",
        "Extra discounts on surgery & vaccinations"
    ];

    return (
        <section className="relative py-14 md:py-16 overflow-hidden bg-gradient-to-b from-gray-900 to-sky-950 text-white ">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                
                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-[#F05434] text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full shadow-lg ">New Customers Only</span>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl  text-center mb-12">First Visit Special</h2>

                {/* Card */}
                <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                    {/* Inner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F05434]/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
                    
                    <div className="text-center mb-10 relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black mb-2 ">Book today & get:</h3>
                        <div className="h-1 w-20 bg-[#F05434] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12 relative z-10">
                        {perks.map((perk, i) => (
                            <div key={i} className="flex items-center space-x-4 group">
                                <CheckCircle className="w-6 h-6 text-[#F05434] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-lg font-medium text-white/90 ">{perk}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center relative z-10">
                        <a href="#booking" className="inline-block">
                            <Button className="h-16 px-12 bg-white text-[#F05434] hover:bg-[#F05434] hover:text-white rounded-full text-lg font-black transition-all transform hover:scale-105 shadow-xl ">
                                Claim Offer - Book Now
                            </Button>
                        </a>
                    </div>
                </div>

            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F05434]/20 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default PromoBanner;
