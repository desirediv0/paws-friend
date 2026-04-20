"use client";
import React from "react";
import { ShieldCheck, GraduationCap, Clock, Video, Heart, MapPin } from "lucide-react";

const TrustGrid = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Background-verified staff",
            desc: "Every team member is vetted strictly for your complete peace of mind."
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Trained & certified",
            desc: "Expert care provided by qualified and experienced veterinary specialists."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 availability",
            desc: "Round-the-clock support ensuring your pet is never without care."
        },
        {
            icon: <Video className="w-6 h-6" />,
            title: "Video/photo updates",
            desc: "Stay connected with real-time updates and cute moments of your pet."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Successful visits",
            desc: "Trusted by a growing community of thousands of happy pet parents."
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Serving NCR",
            desc: "Available across Delhi, Gurgaon, Noida, and Faridabad regions."
        }
    ];

    return (
        <section className="py-14 md:py-16 bg-gray-100/50 overflow-hidden ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[#F05434] text-[10px] uppercase font-black tracking-widest block ">Trust & Safety</span>
                    <h2 className="text-4xl md:text-5xl  text-sky-950">
                        Why Choose <span className="text-[#F05434]">Paws Friend?</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium ">
                        We combine professional expertise with the comfort of your home to provide the best care experience for your furry family members.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
                            <div className="w-14 h-14 bg-sky-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F05434] group-hover:rotate-6 transition-all duration-300">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-black text-sky-950 mb-3 ">{f.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed ">{f.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustGrid;
