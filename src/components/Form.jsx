"use client";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  User,
  Phone,
  Mail,
  Heart,
  Sparkles,
  Shield,
  PawPrint,
  Star,
} from "lucide-react";
import Image from "next/image";
import { bird, cat, dog } from "@/assets";

const Form = () => {
  const uniqueId = useId();
  const [formData, setFormData] = useState({
    petType: "",
    petName: "",
    ownerName: "",
    email: "",
    phone: "",
    service: "",
    appointmentDate: "",
    appointmentTime: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const petTypes = [
    { value: "dog", label: "Dog", icon: dog },
    { value: "cat", label: "Cat", icon: cat },
    { value: "bird", label: "Bird", icon: bird },
    { value: "other", label: "Other", icon: "🐾" },
  ];

  const services = [
    "Veterinary Service",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          petType: "",
          petName: "",
          ownerName: "",
          email: "",
          phone: "",
          service: "",
          appointmentDate: "",
          appointmentTime: "",
          notes: "",
        });
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(
          result.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePetTypeChange = (petValue) => {
    console.log("[v0] Pet type selected:", petValue);
    setFormData({
      ...formData,
      petType: petValue,
    });
  };

  return (
    <>
      {submitMessage && (
        <div
          className={`mb-6 p-4 rounded-xl text-center ${submitSuccess
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
            }`}
        >
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 ">
        {/* Pet Type Selection */}
        <div>
          <Label className="text-sm font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
            <PawPrint className="w-4 h-4 mr-2" />
            Select Your Pet:
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {petTypes.map((pet) => (
              <div key={pet.value} className="relative">
                <input
                  type="radio"
                  id={`${uniqueId}-${pet.value}`}
                  name={`${uniqueId}-petType`}
                  value={pet.value}
                  className="sr-only"
                  checked={formData.petType === pet.value}
                  onChange={(e) => handlePetTypeChange(e.target.value)}
                />
                <label
                  htmlFor={`${uniqueId}-${pet.value}`}
                  className={`group flex flex-col items-center p-3 sm:p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 relative ${formData.petType === pet.value
                      ? "border-[#F05434] bg-[#F05434]/20 shadow-lg ring-2 ring-[#F05434]/30"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                    }`}
                >
                  {formData.petType === pet.value && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F05434] rounded-full flex items-center justify-center shadow-lg ">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  <span className="text-xl sm:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {pet.value === "other" ? (
                      <span className="text-3xl sm:text-4xl">🐾</span>
                    ) : (
                      <Image
                        src={pet.icon || "/placeholder.svg"}
                        alt={pet.label}
                        width={40}
                        height={40}
                        className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                      />
                    )}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-bold text-center transition-colors duration-300 ${formData.petType === pet.value
                        ? "text-[#F05434]"
                        : "text-gray-900"
                      }`}
                  >
                    {pet.label}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <Label className="text-sm font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Choose Service:
          </Label>
          <select
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className="w-full bg-white border border-gray-300 text-gray-900 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F05434] focus:border-transparent"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label className="text-sm font-bold text-gray-900 mb-2 block">
              Pet Name *
            </Label>
            <Input
              id={`${uniqueId}-petName`}
              type="text"
              required
              className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base"
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
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <Input
                id={`${uniqueId}-ownerName`}
                type="text"
                required
                className="pl-9 sm:pl-10 bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base"
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

        <div>
          <Label className="text-sm font-bold text-gray-900 mb-2 block">
            Email Address *
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <Input
              id={`${uniqueId}-email`}
              type="email"
              required
              className="pl-9 sm:pl-10 bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        {/* Phone Input */}
        <div>
          <Label className="text-sm font-bold text-gray-900 mb-2 block">
            Mobile Number *
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <Input
              id={`${uniqueId}-phone`}
              type="tel"
              required
              className="pl-9 sm:pl-10 bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label className="text-sm font-bold text-gray-900 mb-2 block">
              Preferred Date *
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10" />
              <Input
                id={`${uniqueId}-date`}
                type="date"
                required
                className="pl-9 sm:pl-10 bg-white border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base"
                value={formData.appointmentDate}
                onChange={(e) =>
                  setFormData({ ...formData, appointmentDate: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <Label className="text-sm font-bold text-gray-900 mb-2 block">
              Preferred Time *
            </Label>
            <select
              value={formData.appointmentTime}
              onChange={(e) =>
                setFormData({ ...formData, appointmentTime: e.target.value })
              }
              className="w-full bg-white border border-gray-300 text-gray-900 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F05434] focus:border-transparent"
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
            id={`${uniqueId}-message`}
            rows={3}
            className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl resize-none focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base"
            placeholder="Tell us about any specific concerns or requirements..."
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group w-full bg-[#F05434] hover:bg-[#FF5252] disabled:bg-gray-400 text-white rounded-2xl py-4 sm:py-6 text-base sm:text-lg font-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-0 disabled:cursor-not-allowed disabled:transform-none"
        >
          <div className="flex items-center justify-center">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            <span className="text-sm sm:text-base">
              {isSubmitting ? "Booking..." : "Book Now & Save Up to 30%"}
            </span>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
          </div>
        </Button>

        {/* Trust Badge */}
        <div className="text-center pt-3 sm:pt-4">
          <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#F05434]" />
            Your information is 100% secure & confidential
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
