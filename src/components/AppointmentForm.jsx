"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  User,
  Phone,
  Heart,
  Sparkles,
  PawPrint,
  Star,
  Shield,
} from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import dog from "@/assets/dog.png";
import cat from "@/assets/cat.png";
import bird from "@/assets/bird.png";

const AppointmentForm = () => {
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
  const petTypes = [
    { value: "dog", label: "Dog", icon: dog },
    { value: "cat", label: "Cat", icon: cat },
    { value: "bird", label: "Bird", icon: bird },
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
    <section>
      <div className="relative mt-20">
        <div className="bg-white rounded p-8 shadow-2xl border border-gray-200 sticky top-32">
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
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
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
                        {pet.value === "other" ? (
                          <span className="text-4xl">🐾</span>
                        ) : (
                          <Image
                            src={pet.icon}
                            alt={pet.label}
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        )}
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
    </section>
  );
};

export default AppointmentForm;
