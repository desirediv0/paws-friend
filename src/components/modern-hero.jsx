"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Phone,
  Heart,
  Star,
  Shield,
  Clock,
  User,
  PawPrint,
  Sparkles,
  ArrowRight,
  Award,
  Users,
  Zap,
} from "lucide-react";

const ModernHero = () => {
  const [showFloatingWidget, setShowFloatingWidget] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    petType: "",
    petName: "",
    ownerName: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setShowFloatingWidget(window.scrollY > 100);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  const petTypes = [
    { value: "dog", label: "Dog", icon: "🐕" },
    { value: "cat", label: "Cat", icon: "🐱" },
    { value: "bird", label: "Bird", icon: "🐦" },
    { value: "rabbit", label: "Rabbit", icon: "🐰" },
    { value: "other", label: "Other", icon: "🐾" },
  ];

  const services = [
    "Veterinary Service",
    "Dog Walking",
    "Pet Grooming",
    "Pet Training",
    "Pet Boarding",
    "Pet Surgery",
    "Online Vet Consultation",
    "Vet Home Visit",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    // Handle form submission
  };

  return (
    <>
      <section className="relative min-h-screen bg-[#f2f2f2] overflow-hidden">
        {/* Clean Background with Subtle Elements */}
        <div className="absolute inset-0">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f2f2f2]/80 via-[#f2f2f2]/60 to-[#f2f2f2]/80"></div>

          {/* Subtle floating elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF6B6B]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-80 h-80 bg-[#FF6B6B]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-40 w-72 h-72 bg-[#FF6B6B]/25 rounded-full blur-3xl"></div>
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

            {/* Right Column - Form */}
            <div className="relative mt-20">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 sticky top-32">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    Book Your Appointment
                  </h3>
                  <div className="inline-flex items-center bg-[#FF6B6B] text-white px-4 py-2 rounded-full">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <p className="text-sm font-bold">
                      🎉 Special Offers Available - Up to 30% OFF!
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Pet Type Selection */}
                  <div>
                    <Label className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                      <PawPrint className="w-4 h-4 mr-2" />
                      Select Your Pet:
                    </Label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {petTypes.map((pet) => (
                        <div key={pet.value} className="relative">
                          <input
                            type="radio"
                            id={pet.value}
                            name="petType"
                            value={pet.value}
                            className="sr-only"
                            checked={formData.petType === pet.value}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                petType: e.target.value,
                              })
                            }
                          />
                          <label
                            htmlFor={pet.value}
                            className={`group flex flex-col items-center p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                              formData.petType === pet.value
                                ? "border-[#FF6B6B] bg-[#FF6B6B]/10 shadow-lg"
                                : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                              {pet.icon}
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              {pet.label}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <Label className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      Choose Service:
                    </Label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-white border border-gray-300 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    >
                      <option value="">-- Select Your Service --</option>
                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-white text-gray-900"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Input Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-bold text-gray-900 mb-2 block">
                        Pet Name *
                      </Label>
                      <Input
                        id="petName"
                        type="text"
                        required
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                        placeholder="Your pet's name"
                        value={formData.petName}
                        onChange={(e) =>
                          setFormData({ ...formData, petName: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-bold text-gray-900 mb-2 block">
                        Your Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="ownerName"
                          type="text"
                          required
                          className="pl-10 bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                          placeholder="Your full name"
                          value={formData.ownerName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ownerName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <Label className="text-sm font-bold text-gray-900 mb-2 block">
                      Mobile Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        required
                        className="pl-10 bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-bold text-gray-900 mb-2 block">
                        Preferred Date *
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                        <Input
                          id="date"
                          type="date"
                          required
                          className="pl-10 bg-white border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-bold text-gray-900 mb-2 block">
                        Preferred Time *
                      </Label>
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full bg-white border border-gray-300 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option
                            key={time}
                            value={time}
                            className="bg-white text-gray-900"
                          >
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label className="text-sm font-bold text-gray-900 mb-2 block">
                      Special Requests
                    </Label>
                    <Textarea
                      id="message"
                      rows={3}
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl resize-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                      placeholder="Tell us about any specific concerns or requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="group w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-2xl py-6 text-lg font-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-0"
                  >
                    <div className="flex items-center justify-center">
                      <Heart className="w-6 h-6 mr-3" />
                      <span>Book Now & Save Up to 30%</span>
                      <Sparkles className="w-6 h-6 ml-3" />
                    </div>
                  </Button>

                  {/* Trust Badge */}
                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-600 flex items-center justify-center">
                      <Shield className="w-4 h-4 mr-2 text-[#FF6B6B]" />
                      Your information is 100% secure & confidential
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Widget */}
      {isClient && showFloatingWidget && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 transform hover:scale-110 border-0"
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
