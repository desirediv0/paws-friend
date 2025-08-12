"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Home, ChevronRight } from "lucide-react";
import Image from "next/image";
import AppointmentModal from "./appointment-modal";

export default function HeroBanner({
  title,
  subtitle,
  description,
  backgroundImage = "/veterinarian-retriever.jpg",
  showContactInfo = true,
  ctaText = "Book Appointment",
  breadcrumbs = [],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Pet care background"
            fill
            className="object-cover"
            priority
          />

          {/* Simple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute top-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-white/80">
              <a
                href="/"
                className="flex items-center hover:text-white transition-colors"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </a>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-2" />
                  <span className="text-white font-medium">{crumb}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            {subtitle && (
              <p className="text-2xl sm:text-3xl font-semibold opacity-95">
                {subtitle}
              </p>
            )}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              {title}
            </h1>

            <p className="text-xl sm:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
              {description}
            </p>

            {/* Simple CTA Button */}
            <div className="pt-8">
              <Button
                size="lg"
                className="px-12 py-6 text-xl font-bold text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",
                  boxShadow: "0 20px 40px rgba(255, 107, 107, 0.3)",
                }}
                onClick={handleBookNow}
              >
                <Heart className="w-6 h-6 mr-3" />
                {ctaText}
              </Button>
            </div>
          </div>
        </div>

        {/* Simple Contact Info Bar */}
        {showContactInfo && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="font-medium">+91 9876543210</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Delhi NCR & Surrounding Areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>24/7 Emergency Services</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
