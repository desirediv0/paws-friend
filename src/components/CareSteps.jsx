"use client";
import React from "react";
import Image from "next/image";

const CareSteps = () => {
    const steps = [
        {
            number: "01",
            title: "Book in 30 seconds",
            description: "Choose date & time that works for you."
        },
        {
            number: "02",
            title: "Vet Comes Home",
            description: "Licensed professional visits you at your doorstep."
        },
        {
            number: "03",
            title: "Treatment or Clinic Support",
            description: "Home care or seamless shift to clinic if required."
        }
    ];

    return (
        <section className="py-14 md:py-16 bg-white overflow-hidden ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="text-center mb-16">
                    <span className="text-[#F05434] text-[10px] uppercase font-black tracking-widest block mb-4 ">How it works</span>
                    <h2 className="text-4xl md:text-5xl  text-sky-900 leading-tight">
                        Simple and clear steps to care<br />for your lovely pet
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    
                    {/* Left Image */}
                    <div className="relative animate-in fade-in slide-in-from-left duration-700">
                        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 aspect-[4/3] border border-gray-100">
                            <Image 
                                src="/care_steps.png" 
                                alt="Booking appointment at home" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F05434]/10 rounded-full blur-2xl -z-0"></div>
                    </div>

                    {/* Right Steps */}
                    <div className="space-y-10 animate-in fade-in slide-in-from-right duration-700">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-start space-x-6 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#F05434]/10 rounded-full flex items-center justify-center text-[#F05434] font-black text-xs border border-[#F05434]/20 group-hover:bg-[#F05434] group-hover:text-white transition-all duration-300 ">
                                    {step.number}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-sky-950 group-hover:text-[#F05434] transition-colors ">{step.title}</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed ">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CareSteps;
