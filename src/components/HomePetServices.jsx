"use client";
import React from "react";
import { Stethoscope, Syringe, Ambulance, ArrowRight, FlaskConical, ShowerHead } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Veterinary Consultation",
        desc: "Expert diagnosis and treatment plans from licensed vets at your home.",
        icon: Stethoscope,
        color: "bg-[#F05434]/10 text-[#F05434]"
    },
    {
        title: "Vaccinations",
        desc: "Essential immunizations to keep your furry friends safe and healthy.",
        icon: Syringe,
        color: "bg-[#F05434]/10 text-[#F05434]"
    },
    {
        title: "Lab Testing",
        desc: "Accurate diagnostic tests to ensure early detection and proper treatment.",
        icon: FlaskConical,
        color: "bg-[#F05434]/10 text-[#F05434]"
    },
    {
        title: "Pet Grooming",
        desc: "Professional grooming services to keep your pet clean and comfortable.",
        icon: ShowerHead,
        color: "bg-[#F05434]/10 text-[#F05434]"
    },
    {
        title: "Emergency Care",
        desc: "Immediate medical attention for urgent pet health concerns.",
        icon: Ambulance,
        color: "bg-[#F05434]/10 text-[#F05434]"
    }
];

const HomePetServices = () => {
    return (
        <section className="py-14 md:py-16 bg-gray-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[#F05434] text-[10px] uppercase font-black tracking-widest block ">Service</span>
                    <h2 className="text-4xl md:text-5xl  text-sky-950">Pet Services</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((s, i) => (
                        <div key={i} className="group p-6 md:p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-[#F05434]/30 hover:shadow-2xl transition-all duration-500 flex flex-col items-start h-full">
                            <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#F05434] group-hover:text-white group-hover:scale-110 transition-all duration-300`}>
                                <s.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl text-sky-950 mb-4">{s.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow">
                                {s.desc}
                            </p>
                            <a href="#booking" className="w-full">
                                <Button className="w-full bg-[#F05434] hover:bg-[#d0452a] text-white font-black rounded-full h-12 shadow-md shadow-[#F05434]/20 transition-all">
                                    Book Now
                                </Button>
                            </a>
                        </div>
                    ))}

                    {/* Final CTA Card - Styled like the green one in screenshot but with brand Coral */}
                    <div className="p-8 md:p-10 rounded-[2rem] bg-[#F05434]/10 border-2 border-white flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F05434]/10 blur-3xl -mr-16 -mt-16"></div>
                        <h4 className="text-3xl md:text-4xl font-serif-display italic text-sky-950 mb-4 relative z-10">Book your Appointment!!</h4>
                        <p className="text-sky-900/70 font-bold mb-10 relative z-10 leading-relaxed ">Schedule a Visit with our expert vets and staff to keep your pet happy and healthy.</p>
                        
                        <a href="#booking" className="inline-block relative z-10">
                            <Button className="h-14 px-10 bg-[#F05434] text-white hover:bg-[#d0452a] rounded-full font-black shadow-xl shadow-[#F05434]/20 transition-all">
                                Schedule a Visit
                            </Button>
                        </a>

                        {/* Icon Overlay */}
                        <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700 w-32 h-32">
                           <Stethoscope className="w-full h-full text-[#F05434]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePetServices;
