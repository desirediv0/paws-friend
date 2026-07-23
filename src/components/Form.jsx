"use client";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Heart,
  Sparkles,
  Shield,
  PawPrint,
  Star,
} from "lucide-react";

const Form = ({ customPetTypes, customServices, isGrid = false }) => {
  const uniqueId = useId();
  const [formData, setFormData] = useState({
    petType: "",
    petName: "",
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
          className={`mb-4 p-3 rounded-xl text-center text-sm ${submitSuccess
            ? "bg-green-50 text-green-800 border border-green-200"
            : "bg-red-50 text-red-800 border border-red-200"
            }`}
        >
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className={isGrid ? "space-y-3 sm:space-y-4" : "space-y-4 sm:space-y-6"}>
        <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" : "space-y-4 sm:space-y-6"}>
          {/* Pet Type Selection */}
          <div>
            <Label className="text-xs sm:text-sm font-bold text-gray-900 mb-1 flex items-center">
              <PawPrint className="w-3.5 h-3.5 mr-1.5 text-[#F05434]" />
              Select Your Pet:
            </Label>
            <select
              value={formData.petType}
              onChange={(e) => {
                setFormData({ ...formData, petType: e.target.value });
                if (fieldErrors.petType) setFieldErrors({ ...fieldErrors, petType: "" });
              }}
              className={`w-full bg-white border text-gray-900 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F05434] focus:border-transparent ${fieldErrors.petType ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
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
              <p className="text-red-500 text-xs mt-1">{fieldErrors.petType}</p>
            )}
          </div>

          {/* Service Selection */}
          <div>
            <Label className="text-xs sm:text-sm font-bold text-gray-900 mb-1 flex items-center">
              <Star className="w-3.5 h-3.5 mr-1.5 text-[#F05434] fill-current" />
              Choose Service:
            </Label>
            <select
              value={formData.service}
              onChange={(e) => {
                setFormData({ ...formData, service: e.target.value });
                if (fieldErrors.service) setFieldErrors({ ...fieldErrors, service: "" });
              }}
              className={`w-full bg-white border text-gray-900 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F05434] focus:border-transparent ${fieldErrors.service ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
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

          {/* Pet Name Input */}
          <div>
            <Label className="text-xs sm:text-sm font-bold text-gray-900 mb-1 block">
              Pet Name *
            </Label>
            <Input
              id={`${uniqueId}-petName`}
              type="text"
              required
              className={`bg-white text-gray-900 placeholder-gray-500 rounded-xl py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#F05434] focus:border-transparent ${fieldErrors.petName ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
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

          {/* Phone Input */}
          <div>
            <Label className="text-xs sm:text-sm font-bold text-gray-900 mb-1 block">
              Mobile Number *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id={`${uniqueId}-phone`}
                type="tel"
                required
                className={`pl-9 bg-white text-gray-900 placeholder-gray-500 rounded-xl py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#F05434] focus:border-transparent ${fieldErrors.phone ? "border-red-500 ring-1 ring-red-400" : "border-gray-300"
                  }`}
                placeholder="+91 91125 61322"
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

          {/* Special Requests Message */}
          <div className={isGrid ? "sm:col-span-2" : ""}>
            <Label className="text-xs sm:text-sm font-bold text-gray-900 mb-1 block">
              Special Requests (Optional)
            </Label>
            <Textarea
              id={`${uniqueId}-message`}
              rows={isGrid ? 2 : 3}
              className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl resize-none py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#F05434] focus:border-transparent"
              placeholder="Tell us about any specific concerns or requirements..."
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group w-full bg-[#F05434] hover:bg-[#FF5252] disabled:bg-gray-400 text-white rounded-2xl py-3 sm:py-4 text-sm sm:text-base font-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01] border-0 disabled:cursor-not-allowed disabled:transform-none"
        >
          <div className="flex items-center justify-center">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span>
              {isSubmitting ? "Booking..." : "Book Now & Save Up to 10%"}
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </div>
        </Button>

        {/* Trust Badge */}
        <div className="text-center pt-1 sm:pt-2">
          <p className="text-[11px] sm:text-xs text-gray-600 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 mr-1 text-[#F05434]" />
            Your information is 100% secure & confidential
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
