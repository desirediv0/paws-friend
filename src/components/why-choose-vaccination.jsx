"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Home, Syringe, FileText } from "lucide-react";

const points = [
    {
        icon: Home,
        title: "Convenient Vaccinations at Home",
        description:
            "No need to worry about taking your pet to the clinic. With PawsFriend, we bring the vaccination service directly to your doorstep, making it hassle-free and stress-free for both you and your furry friend.",
    },
    {
        icon: Syringe,
        title: "Premium, US Imported Vaccines",
        description:
            "We only use US imported, high-quality vaccines to ensure that your pet gets the best possible protection against common diseases, giving you peace of mind that your pet is in safe hands.",
    },
    {
        icon: FileText,
        title: "Complete Digital & Physical Records",
        description:
            "We maintain both digital and physical records of all vaccinations and treatments, making it easy for you to track your pet's health history. You’ll always have access to the most up-to-date information when you need it.",
    },
];

export default function WhyChooseVaccination() {
    return (
        <section className="py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        Why Choose PawsFriend for Your Pet’s Vaccination?
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-px bg-gray-300 w-16" />
                        <div className="w-8 h-8 bg-[#F05434] rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                        <div className="h-px bg-gray-300 w-16" />
                    </div>
                    <p className="text-[#0e134d] text-base md:text-lg max-w-2xl mx-auto font-semibold">
                        Trusted, convenient, and high-quality vaccination care—right at your doorstep.
                    </p>
                </div>

                {/* Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {points.map((point, idx) => {
                        const Icon = point.icon;
                        return (
                            <Card
                                key={idx}
                                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
                            >
                                <CardContent className="p-8 text-center">
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-16 h-16 bg-[#F05434] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#F05434] transition-colors duration-300">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {point.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
