"use client";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  User,
  Phone,
  Mail,
  Heart,
  Sparkles,
  Shield,
  PawPrint,
  Star,
} from "lucide-react";

const Form = ({ customPetTypes, customServices }) => {
  const uniqueId = useId();
  const [formData, setFormData] = useState({
    petType: "",
    petName: "",
    ownerName: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const defaultPetTypes = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "Large Animal", label: "Large Animal" },
    { value: "other", label: "Other" },
  ];

  const petTypes = customPetTypes || defaultPetTypes;

  const defaultServices = [
    "Veterinary Service",
    "Pet Training",
    "Pet Surgery",
    "Pet vaccination",
    "Vet Home Visit",
    "Online Vet Consultation",
    "Pet Grooming",
  ];

  const services = customServices || defaultServices;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setFieldErrors({});

    // Client-side validation
    const errors = {};
    if (!formData.petType) errors.petType = "Please select your pet type";
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.petName.trim()) errors.petName = "Pet name is required";
    if (!formData.ownerName.trim()) errors.ownerName = "Your name is required";
    if (!formData.email.trim()) errors.email = "Email address is required";
    if (!formData.phone.trim()) errors.phone = "Mobile number is required";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitSuccess(false);
      setSubmitMessage("Please fill all required fields before submitting.");
      setIsSubmitting(false);
      return;
    }

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
          <Label className="text-sm font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
            <PawPrint className="w-4 h-4 mr-2" />
            Select Your Pet:
          </Label>
          <select
            value={formData.petType}
            onChange={(e) => {
              setFormData({ ...formData, petType: e.target.value });
              if (fieldErrors.petType) setFieldErrors({ ...fieldErrors, petType: "" });
            }}
            className={`w-full bg-white border text-gray-900 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F05434] focus:border-transparent ${fieldErrors.petType ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
              }`}
          >
            <option value="">-- Select Your Pet --</option>
            {petTypes.map((pet) => (
              <option key={pet.value} value={pet.value}>
                {pet.label}
              </option>
            ))}
          </select>
          {fieldErrors.petType && (
            <p className="text-red-500 text-xs mt-2">{fieldErrors.petType}</p>
          )}
        </div>

        {/* Service Selection */}
        <div>
          <Label className="text-sm font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Choose Service:
          </Label>
          <select
            value={formData.service}
            onChange={(e) => {
              setFormData({ ...formData, service: e.target.value });
              if (fieldErrors.service) setFieldErrors({ ...fieldErrors, service: "" });
            }}
            className={`w-full bg-white border text-gray-900 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F05434] focus:border-transparent ${fieldErrors.service ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
              }`}
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
          {fieldErrors.service && (
            <p className="text-red-500 text-xs mt-1">{fieldErrors.service}</p>
          )}
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label className="text-sm font-bold text-gray-900 mb-2 block">
              Pet Name *
            </Label>
            <Input
              id={`${uniqueId}-petName`}
              type="text"
              required
              className={`bg-white text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base ${fieldErrors.petName ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
                }`}
              placeholder="Your pet's name"
              value={formData.petName}
              onChange={(e) => {
                setFormData({ ...formData, petName: e.target.value });
                if (fieldErrors.petName) setFieldErrors({ ...fieldErrors, petName: "" });
              }}
            />
            {fieldErrors.petName && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.petName}</p>
            )}
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
                className={`pl-9 sm:pl-10 bg-white text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base ${fieldErrors.ownerName ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
                  }`}
                placeholder="Your full name"
                value={formData.ownerName}
                onChange={(e) => {
                  setFormData({ ...formData, ownerName: e.target.value });
                  if (fieldErrors.ownerName) setFieldErrors({ ...fieldErrors, ownerName: "" });
                }}
              />
            </div>
            {fieldErrors.ownerName && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.ownerName}</p>
            )}
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
              className={`pl-9 sm:pl-10 bg-white text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base ${fieldErrors.email ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
                }`}
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
              }}
            />
          </div>
          {fieldErrors.email && (
            <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
          )}
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
              className={`pl-9 sm:pl-10 bg-white text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-[#F05434] focus:border-transparent text-sm sm:text-base ${fieldErrors.phone ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
                }`}
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: "" });
              }}
            />
          </div>
          {fieldErrors.phone && (
            <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
          )}
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
