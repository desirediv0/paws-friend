"use client";

import { Heart, Users, Dumbbell, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Wellness Approach",
    description:
      "Comprehensive wellness approach to pet care, addressing physical health, mental stimulation, and emotional well-being",
  },
  {
    icon: Users,
    title: "VIP Memberships",
    description:
      "VIP membership programs with exclusive perks, such as priority booking, discounts, and access to members-only events",
  },
  {
    icon: Dumbbell,
    title: "Pet Fitness Programs",
    description:
      "Fitness and exercise programs to keep pets active and healthy, showcasing a commitment to their physical well-being",
  },
  {
    icon: GraduationCap,
    title: "Pet Health Seminars",
    description:
      "Educational seminars on pet health, nutrition, and general well-being, positioning your business as a trusted source of knowledge",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gray-400 w-16"></div>
            <div className="w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="h-px bg-gray-400 w-16"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what makes Paws Friend the perfect choice for your beloved
            pet&apos;s care and well-being
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#FF6B6B] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
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
