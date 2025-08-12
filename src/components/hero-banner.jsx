"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export default function HeroBanner({
  title,
  subtitle,
  description,
  backgroundImage = "/happy-pets-owner.png",
  showContactInfo = true,
  ctaText = "Book Now",
  ctaAction,
}) {
  return (
    <div
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt="Pet care background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6">
          {subtitle && (
            <p className="text-lg sm:text-xl font-medium opacity-90">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="px-8 py-3 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              style={{ backgroundColor: "#FF6B6B" }}
              onClick={ctaAction}
            >
              {ctaText}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      {showContactInfo && (
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: "#FF6B6B" }} />
                <span className="font-medium">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "#FF6B6B" }} />
                <span>Delhi NCR & Surrounding Areas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: "#FF6B6B" }} />
                <span>24/7 Emergency Services</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
