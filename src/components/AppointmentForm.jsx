"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Phone, MapPin, Heart } from "lucide-react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    service: "",
    date: "",
    time: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const services = [
    "Veterinary Checkup",
    "Grooming Service",
    "Lab Tests",
    "Training Session",
    "Emergency Care",
  ];

  const petTypes = ["Dog", "Cat", "Bird", "Rabbit", "Other"];

  return (
    <section className="bg-[#FFD9D4] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-6">
            Book Your Appointment
          </h2>
          <p className="text-xl text-[#2B2B2B]/80 max-w-2xl mx-auto">
            Schedule a visit with our expert pet care team. We'll come to your
            home at your convenience to provide the best care for your furry
            friend.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                  placeholder="Enter your address"
                />
              </div>
            </div>

            {/* Pet Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  <Heart className="w-4 h-4 inline mr-2" />
                  Pet Name *
                </label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                  placeholder="Enter your pet's name"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  Pet Type *
                </label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                >
                  <option value="">Select pet type</option>
                  {petTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Service and Schedule */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                >
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] font-semibold mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white"
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-[#2B2B2B] font-semibold mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F25C5C] focus:outline-none transition-all duration-300 bg-white resize-none"
                placeholder="Any special requirements or concerns about your pet..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                className="bg-[#F25C5C] hover:bg-[#E54B4B] text-white rounded-lg px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </Button>
            </div>

            {/* Note */}
            <div className="text-center text-[#2B2B2B]/60 text-sm">
              * Required fields. We'll confirm your appointment within 2 hours.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
