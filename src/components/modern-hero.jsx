"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  Phone,
  Star,
  Clock,
  Sparkles,
  ArrowRight,
  Award,
  Users,
  Zap,
} from "lucide-react";
import AppointmentForm from "./AppointmentForm";

const ModernHero = () => {
  const [showFloatingWidget, setShowFloatingWidget] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setShowFloatingWidget(window.scrollY > 150);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  return (
    <>
      <section className="relative min-h-screen bg-[#F2F2F2] overflow-hidden">
        {/* Clean Background with Subtle Elements */}
        <div className="absolute inset-0">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2F2F2]/80 via-[#F2F2F2]/60 to-[#F2F2F2]/80"></div>

          {/* Subtle floating elements - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-20 w-64 h-64 bg-[#FF6B6B]/30 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute top-40 right-32 w-80 h-80 bg-[#FF6B6B]/30 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute bottom-32 left-40 w-72 h-72 bg-[#FF6B6B]/30 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 mt-20 md:mt-2">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 lg:pt-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#FF6B6B] text-white rounded-full text-xs sm:text-sm font-bold shadow-lg">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 fill-current" />
                <span className="whitespace-nowrap">
                  Trusted by 10,000+ Pet Families
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </div>

              {/* Main Headline */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                  Premium Pet Care
                  <span className="block text-[#FF6B6B]">At Your Doorstep</span>
                </h1>

                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                    Professional Healthcare Services for Dogs & Cats
                  </h2>
                  <p className="text-sm sm:text-base lg:text-xl text-gray-700 font-medium leading-relaxed">
                    🏆 Award-Winning Veterinarians • 🚀 Same Day Service • 💝
                    Caring Touch
                  </p>
                </div>

                {/* Contact Section */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Primary CTA */}
                  <div className="group bg-[#FF6B6B] p-1 rounded-2xl shadow-xl">
                    <div className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-2xl flex items-center justify-between group-hover:bg-gray-50 transition-all duration-300">
                      <div className="flex items-center min-w-0 flex-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 block truncate">
                            +91 98765 43210
                          </span>
                          <p className="text-xs sm:text-sm text-gray-600">
                            24/7 Emergency Available
                          </p>
                        </div>
                      </div>
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B6B] flex-shrink-0 ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
                {[
                  {
                    icon: Award,
                    text: "Licensed Vets",
                  },
                  {
                    icon: Clock,
                    text: "Same Day Service",
                  },
                  {
                    icon: Users,
                    text: "Expert Training",
                  },
                  {
                    icon: Sparkles,
                    text: "Premium Grooming",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 shadow-lg p-3 sm:p-4 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF6B6B] rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-900 text-xs sm:text-sm">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Appointment Form */}
            <div className="mt-8 lg:mt-20">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Widget */}
      {isClient && showFloatingWidget && (
        <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-full p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 sm:space-x-3 transform hover:scale-110 border-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="font-black text-xs sm:text-sm">Quick Book</div>
              <div className="text-xs opacity-90">30% Off Today!</div>
            </div>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      )}
    </>
  );
};

export default ModernHero;
