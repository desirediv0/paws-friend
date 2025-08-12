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

          {/* Subtle floating elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF6B6B]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-80 h-80 bg-[#FF6B6B]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-40 w-72 h-72 bg-[#FF6B6B]/30 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-10 lg:pt-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-[#FF6B6B] text-white rounded-full text-sm font-bold shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                <Star className="w-4 h-4 mr-2 fill-current" />
                Trusted by 10,000+ Pet Families
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>

              {/* Main Headline */}
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Premium Pet Care
                  <span className="block text-[#FF6B6B]">At Your Doorstep</span>
                </h1>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Professional Healthcare Services for Dogs & Cats
                  </h2>
                  <p className="text-xl text-gray-700 font-medium">
                    🏆 Award-Winning Veterinarians • 🚀 Same Day Service • 💝
                    Caring Touch
                  </p>
                </div>

                {/* Contact Section */}
                <div className="space-y-6">
                  {/* Primary CTA */}
                  <div className="group bg-[#FF6B6B] p-1 rounded-2xl shadow-xl">
                    <div className="bg-white text-gray-900 px-8 py-6 rounded-2xl flex items-center justify-between group-hover:bg-gray-50 transition-all duration-300">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center mr-4">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            +91 98765 43210
                          </span>
                          <p className="text-sm text-gray-600">
                            24/7 Emergency Available
                          </p>
                        </div>
                      </div>
                      <Zap className="w-6 h-6 text-[#FF6B6B]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="grid grid-cols-2 gap-6 pt-4">
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
                    className="group bg-white border border-gray-200 shadow-lg p-4 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#FF6B6B] rounded-xl flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-900 text-sm">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Floating Widget */}
      {isClient && showFloatingWidget && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 transform hover:scale-110 border-0"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-black text-sm">Quick Book</div>
              <div className="text-xs opacity-90">30% Off Today!</div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      )}
    </>
  );
};

export default ModernHero;
