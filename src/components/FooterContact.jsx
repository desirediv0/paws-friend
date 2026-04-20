"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterContact = () => {
    return (
        <section className="py-14 md:py-16 bg-white ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-gradient-to-br from-[#F05434] to-[#d0452a] rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
                    
                    <div className="relative z-10 space-y-4 max-w-xl text-center md:text-left">
                        <span className="text-white/80 text-[10px] uppercase font-black tracking-widest block ">Support</span>
                        <h2 className="text-4xl md:text-5xl font-serif-display italic text-white leading-tight">Contact Us</h2>
                        <p className="text-white/90 text-lg font-medium font-outfit">
                            Need help? We&apos;re here to assist you 24/7 with any questions or concerns.
                        </p>
                    </div>

                    <div className="relative z-10">
                        <a href="#booking" className="inline-block">
                            <Button className="h-16 px-10 bg-white text-[#F05434] hover:bg-sky-900 hover:text-white rounded-full text-lg font-black transition-all group flex items-center shadow-xl ">
                                Schedule a Visit
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </a>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F05434]/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default FooterContact;
