"use client";
import React from "react";
import Image from "next/image";
import { Phone, CheckCircle, Star } from "lucide-react";
import AppointmentForm from "./AppointmentForm";

const HomeVetHero = () => {
    // Note: Using the absolute path for the generated image
    const heroImage = "/vet_home_care_hero.png"; // I will move the image to public folder or use the absolute path in development

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-gray-900">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src={heroImage} 
                    alt="Professional Vet Care" 
                    fill 
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 md:from-black/90 md:via-black/50 md:to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16 md:pt-32 md:pb-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-700">
                        
                        {/* Rating Badge */}
                        {/* <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F05434] bg-gray-800 flex items-center justify-center text-[10px] uppercase font-bold">U{i}</div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                                <span className="text-[10px] font-bold text-white/80">5000+ Happy Pet Parents</span>
                            </div>
                        </div> */}

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight  text-[#F05434]">
                                Trusted vet care & grooming <span className="text-white"> services at doorstep</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-white/80 max-w-lg font-outfit font-medium leading-relaxed">
                                Ease booking and fast services at your doorstep
                            </p>
                        </div>

                        {/* CTA Buttons - Pill Style */}
                        {/* <div className="flex flex-wrap gap-4 pt-4">
                            <a href="tel:+918800682777" className="flex items-center px-8 md:px-10 py-3 md:py-4 bg-[#F05434] text-white rounded-full font-outfit font-bold hover:bg-[#d0452a] transition-all transform hover:scale-105 shadow-xl shadow-[#F05434]/20 border-0 text-sm md:text-base">
                                <Phone className="w-5 h-5 mr-3" />
                                Call Now
                            </a>
                            <a href="https://wa.me/918800682777" className="flex items-center px-8 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-outfit font-bold border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl shadow-black/10 text-sm md:text-base">
                                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                WhatsApp
                            </a>
                        </div> */}
                        {/* Benefits List */}
                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                            {[
                                { text: "Licensed Vets", color: "text-[#F05434]" },
                                { text: "Home Delivery", color: "text-[#F05434]" },
                                { text: "Zero Stress", color: "text-[#F05434]" }
                            ].map((f, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                    <CheckCircle className={`w-5 h-5 ${f.color}`} />
                                    <span className="text-xs font-black tracking-widest uppercase font-outfit">{f.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
                        <div className="absolute -inset-4 bg-[#F05434]/20 blur-3xl rounded-full opacity-30"></div>
                        <AppointmentForm />
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#F05434] to-transparent"></div>
            </div>
        </section>
    );
};

export default HomeVetHero;
