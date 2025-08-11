"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Heart,
  PawPrint,
} from "lucide-react";

const AppointmentModal = ({ isOpen, onClose }) => {
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
    // Handle form submission
    console.log("Appointment booked:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-coral to-coral rounded-xl flex items-center justify-center">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-charcoal">
                Book Appointment
              </h2>
              <p className="text-sm text-muted-foreground">
                Special Offers Available on All Services
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Pet Type Selection */}
          <div>
            <Label className="text-sm font-semibold text-brand-charcoal mb-3 block">
              Select Pet Type:
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
                      setFormData({ ...formData, petType: e.target.value })
                    }
                  />
                  <label
                    htmlFor={pet.value}
                    className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      formData.petType === pet.value
                        ? "border-coral bg-softPink"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl mb-2">{pet.icon}</span>
                    <span className="text-sm font-medium text-brand-charcoal">
                      {pet.label}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <Label
              htmlFor="service"
              className="text-sm font-semibold text-brand-charcoal mb-2 block"
            >
              Select Service:
            </Label>
            <Select
              value={formData.service}
              onValueChange={(value) =>
                setFormData({ ...formData, service: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="-- Select Service --" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Pet & Owner Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="petName"
                className="text-sm font-semibold text-brand-charcoal mb-2 block"
              >
                Pet Name *
              </Label>
              <Input
                id="petName"
                type="text"
                required
                placeholder="Enter your pet's name"
                value={formData.petName}
                onChange={(e) =>
                  setFormData({ ...formData, petName: e.target.value })
                }
              />
            </div>
            <div>
              <Label
                htmlFor="ownerName"
                className="text-sm font-semibold text-brand-charcoal mb-2 block"
              >
                Your Name *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="ownerName"
                  type="text"
                  required
                  className="pl-10"
                  placeholder="Your full name"
                  value={formData.ownerName}
                  onChange={(e) =>
                    setFormData({ ...formData, ownerName: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="phone"
                className="text-sm font-semibold text-brand-charcoal mb-2 block"
              >
                Your Mobile No *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  required
                  className="pl-10"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="date"
                className="text-sm font-semibold text-brand-charcoal mb-2 block"
              >
                Preferred Date *
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="date"
                  type="date"
                  required
                  className="pl-10"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="time"
                className="text-sm font-semibold text-brand-charcoal mb-2 block"
              >
                Preferred Time *
              </Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Select
                  value={formData.time}
                  onValueChange={(value) =>
                    setFormData({ ...formData, time: value })
                  }
                >
                  <SelectTrigger className="w-full pl-10">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <Label
              htmlFor="message"
              className="text-sm font-semibold text-brand-charcoal mb-2 block"
            >
              Additional Notes
            </Label>
            <Textarea
              id="message"
              rows={3}
              placeholder="Any specific concerns or requirements..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-coral to-coral hover:from-coral hover:to-coral text-white rounded py-5 text-lg font-bold shadow-lg shadow-coral/25 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <Heart className="w-5 h-5 mr-2" />
            Book Now & Get upto 30% Discount
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
