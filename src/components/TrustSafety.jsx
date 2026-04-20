"use client";
import React from "react";
import { Shield, Award, Clock, Camera, CheckCircle, MapPin, Heart } from "lucide-react";

const mainBenefits = [
    { text: "Less stress for pets", description: "Familiar environment keeps pets calm." },
    { text: "Personalized attention", description: "One-on-one care without distractions." },
    { text: "No travel or waiting", description: "We come to you, saving your time." },
    { text: "Comfortable home environment", description: "Treatment in their safe space." },
    { text: "Flexible scheduling", description: "Slots available at your convenience." },
    { text: "Photo/video updates", description: "Stay informed throughout the process." }
];

const trustFeatures = [
    {
        title: "Background-verified staff",
        description: "Every team member is vetted strictly for your complete peace of mind.",
        icon: Shield
    },
    {
        title: "Trained & certified",
        description: "Expert care provided by qualified and experienced veterinary specialists.",
        icon: Award
    },
    {
        title: "24/7 availability",
        description: "Round-the-clock support ensuring your pet is never without care.",
        icon: Clock
    },
    {
        title: "Video/photo updates",
        description: "Stay connected with real-time updates and cute moments of your pet.",
        icon: Camera
    },
    {
        title: "Successful visits",
        description: "Trusted by a growing community of thousands of happy pet parents.",
        icon: CheckCircle
    },
    {
        title: "Serving NCR",
        description: "Available across Delhi, Gurgaon, Noida, and Faridabad regions.",
        icon: MapPin
    }
];

const TrustSafety = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Benefits Section */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-[#F05434] uppercase tracking-[0.3em] mb-4">Why choose us</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Why Choose Home Pet Care?
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg md:text-right max-w-sm">
                            We are fully committed to your pet&apos;s well-being, bringing professional care right to your doorstep.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mainBenefits.map((benefit, i) => (
                            <div key={i} className="flex items-start space-x-4 p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-[#F05434]/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="w-10 h-10 rounded-full bg-[#F05434]/10 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-[#F05434]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">{benefit.text}</h4>
                                    <p className="text-sm text-gray-500">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust & Safety Section */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-black text-[#F05434] uppercase tracking-[0.3em] mb-4">Trust & Safety</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">Why Choose Paws Friend?</h3>
                        <p className="text-gray-600 text-lg">
                            We combine professional expertise with the comfort of your home to provide the best care experience for your furry family members.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {trustFeatures.map((item, index) => (
                            <div key={index} className="group relative">
                                <div className="flex items-center space-x-6 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center group-hover:bg-[#F05434] transition-colors duration-300 shadow-xl shadow-gray-200">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed pl-20">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Special Offer Section */}
                <div className="mt-32 p-8 md:p-16 rounded-[3rem] bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#F05434] blur-[120px] opacity-20 -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F05434] blur-[120px] opacity-10 -ml-48 -mb-48"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-2 bg-[#F05434] text-white text-xs font-bold rounded-full uppercase tracking-widest">New Customers Only</span>
                            <h3 className="text-4xl md:text-7xl font-bold leading-tight">First Visit Special</h3>
                            <p className="text-white/70 text-xl max-w-md">Book today and experience premium care with an exclusive introductory offer.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-6">
                            <ul className="space-y-4">
                                {[
                                    "Affordable Home consultation",
                                    "Travel included in Price",
                                    "Same-day slots available",
                                    "Extra discounts on surgery & vaccinations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-white/90">
                                        <div className="w-2 h-2 bg-[#F05434] rounded-full"></div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#booking" className="block w-full py-4 bg-[#F05434] hover:bg-white hover:text-gray-900 text-white text-center rounded-2xl font-bold transition-all transform hover:scale-[1.02]">
                                Claim Offer - Book Now
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrustSafety;
