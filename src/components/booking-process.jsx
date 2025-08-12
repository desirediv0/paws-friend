"use client";

import { Search, Calendar, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingProcess() {
  const steps = [
    {
      number: "01",
      title: "Select Service",
      description:
        "Select the desired service from the given list that you are looking for.",
      icon: Search,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-500",
      borderColor: "border-orange-200",
    },
    {
      number: "02",
      title: "Book Your Day",
      description:
        "Contact us and book an appointment for your pet by completing the payment process.",
      icon: Calendar,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      borderColor: "border-blue-200",
    },
    {
      number: "03",
      title: "Have Relax",
      description:
        "Now, sit back and relax. Wait for our pet caretaker to arrive at your home as planned.",
      icon: Coffee,
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      borderColor: "border-green-200",
    },
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F2F2F2" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your Pet Care Partner.
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-cyan-400 w-16"></div>
            <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="h-px bg-cyan-400 w-16"></div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Arrow - Hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <svg
                    width="48"
                    height="24"
                    viewBox="0 0 48 24"
                    fill="none"
                    className="text-gray-300"
                  >
                    <path
                      d="M2 12C2 12 12 2 24 12C36 22 46 12 46 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M40 8L46 12L40 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}

              {/* Step Card */}
              <div
                className={`${step.bgColor} ${step.borderColor} border-2 rounded-3xl p-8 text-center relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Step Number */}
                <div className="absolute top-4 right-6">
                  <span className="text-4xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Label */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                    Step
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon size={64} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#FF6B6B" }}
          >
            Start Booking Process
          </Button>
          <p className="text-gray-600 mt-4">
            Call us at{" "}
            <span className="font-semibold text-gray-800">+91 9876543210</span>{" "}
            for immediate assistance
          </p>
        </div>
      </div>
    </section>
  );
}
