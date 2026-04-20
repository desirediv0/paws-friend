"use client";
import React, { useState } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What services do you provide at home?",
        a: "We provide comprehensive veterinary consultations, vaccinations, basic diagnostics, wound care, and behavioral consultations in the comfort of your home."
    },
    {
        q: "How do I book a home visit?",
        a: "You can book easily through our website form, call us at +91 88006 82777, or send us a WhatsApp message. We'll confirm your slot within minutes."
    },
    {
        q: "Is home care more expensive than a clinic visit?",
        a: "Our home visit charges are very competitive. Considering you save on travel time, petrol, and pet stress, it's often more value-for-money than a regular clinic visit."
    },
    {
        q: "Do you provide emergency services?",
        a: "While we handle many urgent issues at home, for critical emergencies requiring surgery or intensive care, we facilitate immediate transport to our partner clinics."
    },
    {
        q: "Are the vets licensed and experienced?",
        a: "Absolutely. Every veterinarian on our team is fully licensed, background-verified, and has years of experience in clinical practice."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-14 md:py-16 bg-gray-50 overflow-hidden ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[#F05434] text-[10px] uppercase font-black tracking-widest block ">Questions</span>
                    <h2 className="text-4xl md:text-5xl  text-sky-950">Frequently Asked<br />Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-base md:text-lg font-black transition-colors  ${openIndex === i ? "text-[#F05434]" : "text-sky-950 group-hover:text-[#F05434]"}`}>
                                    {faq.q}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? "bg-[#F05434] text-white rotate-180" : "bg-gray-100 text-gray-400"}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>
                            
                            <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-500 font-medium text-base md:text-lg leading-relaxed border-t border-gray-50 pt-4 ">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
