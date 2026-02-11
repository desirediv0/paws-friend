"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Heart, Star, Sparkles, X, Menu } from "lucide-react";
import {
  dogtrainer,
  homevaccination,
  onlinevetconsultation,
  petboarding,
  surgerysetup,
  vetexam,
} from "@/assets";
import Image from "next/image";

const services = [
  {
    id: "home-vet-ncr",
    title: "Home Veterinary Services & Vaccination In NCR",
    price: "Contact for pricing",
    description:
      "Expert at-home veterinary care and vaccinations across NCR. Our compassionate vets visit your home for checkups, vaccinations, and urgent support. See the Contact page for full details.",
    features: [
      "Home vet visits",
      "Vaccinations",
      "Routine checkups",
      "Emergency services",
      "Compassionate care",
      "Latest equipment",
    ],
    image: vetexam,
  },
  {
    id: "veterinary",
    title: "Veterinary Services",
    price: "₹799",
    description:
      "Caring for your pet has never been easier. Our home-visit veterinary services ensure expert care without the stress of traveling. From preventive vaccinations to timely check-ups and urgent medical support, we bring trusted healthcare right to your doorstep keeping your beloved pet safe, healthy, and full of life.",
    features: [
      "Pet vaccination",
      "Online consultation",
      "Health checkups",
      "Wound treatment",
      "Medicines",
      "Dental care",
      "Wellness care",
    ],
    image: vetexam,
  },
  {
    id: "vet-visit",
    title: "Vet visit at home",
    price: "₹499",
    description:
      "PawsFriend brings a personalized, 24/7 veterinary service for cats and dogs, right at your doorstep—offering convenience and peace of mind.",
    features: [
      "Vaccinations & Health Checkups",
      "Sick Pet Visits",
      "Dental Care",
      "Surgery & Post-Operative Care",
      "Pain Management & Palliative Care",
    ],
    image: homevaccination,
  },
  {
    id: "training",
    title: "Pet Training Services",
    price: "₹9,999",
    description:
      "Bringing your furry friend home for the first time can be exciting, but they may not be familiar with household norms and lifestyle. At Paws Friend Pet Care Services, we provide complete training for your dog covering essentials like proper greetings, toilet habits, and good behaviour around new people. Training is a vital part of pet adoption, helping your pet adapt and learn to live happily and confidently in a well-structured routine.",
    features: [
      "Behavioral modification",
      "Obedience training",
      "Pee poop training",
      "Guard training",
      "Socialization",
      "Basic commands",
    ],
    image: dogtrainer,
  },
  {
    id: "surgery",
    title: "Pet Surgery Services",
    price: "Contact for pricing",
    description:
      "We understand how much you love your furry friend. Accidents and illnesses can happen anytime pets love to play, explore, and eat things they shouldn't, which sometimes makes them unwell. That's why our team is always ready to help. In case of an emergency, you can easily call us or book an online session with our vet for quick assistance.",
    features: [
      "Pre-surgery consultation",
      "Modern healthcare facilities",
      "Post-surgery care",
      "Transparent pricing",
      "Expert surgeons",
      "24/7 support",
    ],
    image: surgerysetup,
  },
  {
    id: "boarding",
    title: "Pet Boarding Services",
    price: "₹999",
    description:
      "We know life gets busy, and sometimes you can't always be there for your pet. That's where we come in! Our trusted pet sitters provide care right at your home, keeping your furry friend happy and comfortable. Timely walks, Fun play sessions, Healthy meals, Lots of love & care. Because your pet deserves the best even when you're away!",
    features: [
      "24/7 medical facilities",
      "Healthy meals",
      "1.5-acre playground",
      "Pick up & drop facility",
      "24-hour CCTV security",
      "Separate spaces",
    ],
    image: petboarding,
  },
  {
    id: "consultation",
    title: "Online Vet Consultation",
    price: "₹199",
    description:
      "We understand how much you love your furry friend. Accidents and illnesses can happen anytime pets love to play, explore, and eat things they shouldn't, which sometimes makes them unwell. That's why our team is always ready to help. In case of an emergency, you can easily call us or book an online session with our vet for quick assistance.",
    features: [
      "24/7 availability",
      "Video/audio calls",
      "Expert advice",
      "Instant connection",
      "No clinic visits",
      "Veterinary specialists",
    ],
    image: onlinevetconsultation,
  },
  {
    id: "vaccination",
    title: "Pet Vaccination Services",
    price: "Flat 10% Off",
    originalPrice: "Regular rates",
    discount: "10% OFF",
    description:
      "Caring for your pet has never been easier. Our home-visit veterinary services ensure expert care without the stress of traveling. From preventive vaccinations to timely check-ups and urgent medical support, we bring trusted healthcare right to your doorstep keeping your beloved pet safe, healthy, and full of life.",
    features: [
      "Home vaccination",
      "All age groups",
      "Disease protection",
      "Professional vets",
      "Doorstep service",
      "Vaccination schedule",
    ],
    image: homevaccination,
  },
];

export default function PetServices() {
  const [activeService, setActiveService] = useState(services[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-6 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-[#F05434]" />
            <h1 className="text-2xl lg:text-6xl font-bold text-black">
              Paws Friend
            </h1>
            <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-[#F05434]" />
          </div>
          <p className="text-base lg:text-xl text-[#0e134d]  max-w-2xl mx-auto px-4 font-semibold ">
            Premium pet care services delivered to your doorstep with love and
            expertise
          </p>
        </div>

        <div className="lg:hidden mb-6">
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-[#F05434] hover:bg-[#F05434]/90 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 mr-2" />
            ) : (
              <Menu className="w-4 h-4 mr-2" />
            )}
            {isMobileMenuOpen ? "Close Services" : "Browse Services"}
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Services Sidebar */}
          <div
            className={`lg:col-span-1 ${isMobileMenuOpen ? "block" : "hidden lg:block"
              }`}
          >
            <Card className="lg:sticky lg:top-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 lg:p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-[#F05434]" />
                  Our Services
                </h2>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setActiveService(service);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left p-3 lg:p-4 rounded-lg transition-all duration-300 hover:shadow-md ${activeService.id === service.id
                        ? "text-white shadow-lg transform scale-105"
                        : "text-gray-700 hover:bg-white/50"
                        }`}
                      style={{
                        backgroundColor:
                          activeService.id === service.id
                            ? "#F05434"
                            : "transparent",
                      }}
                    >
                      <div className="font-semibold text-sm leading-tight">
                        {service.title}
                      </div>
                      <div
                        className={`text-xs mt-1 ${activeService.id === service.id
                          ? "text-white/80"
                          : "text-gray-500"
                          }`}
                      >
                        Starting @ only {service.price}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid gap-6 lg:gap-8">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Service Details */}
                <Card className="shadow-xl border-0 transform transition-all duration-500 hover:shadow-2xl bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                          {activeService.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-2xl lg:text-3xl font-bold text-[#F05434]">
                            {activeService.price}
                          </span>
                          {activeService.originalPrice && (
                            <span className="text-base lg:text-lg text-gray-500 line-through">
                              {activeService.originalPrice}
                            </span>
                          )}
                          {activeService.discount && (
                            <Badge className="bg-[#F05434] text-white hover:bg-[#F05434]/90 text-xs">
                              {activeService.discount}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current flex-shrink-0" />
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                      {activeService.description}
                    </p>

                    <div className="mb-6 lg:mb-8">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Our Services Include:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {activeService.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#F05434] flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        className="w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                        style={{ backgroundColor: "#F05434" }}
                        onClick={() => {
                          const message = encodeURIComponent(
                            `Hi Paws Friend! I want to book ${activeService.title} (${activeService.price}). Please provide more details and confirm my booking.`
                          );
                          const whatsappUrl = `https://wa.me/918800682777?text=${message}`;
                          window.open(whatsappUrl, "_blank");
                        }}
                      >
                        Book Now
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-[#F05434] text-[#F05434] hover:bg-[#F05434] hover:text-white transition-all duration-300 bg-transparent"
                        onClick={() => {
                          window.location.href = "tel:+918800682777";
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call +91 8800682777
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Image */}
                <Card className="shadow-xl border-0 overflow-hidden transform transition-all duration-500 hover:shadow-2xl h-min">
                  <CardContent className="p-0 flex flex-col max-h-full justify-between">
                    <div className="relative">
                      <Image
                        src={activeService.image || "/placeholder.svg"}
                        alt={activeService.title}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 hover:scale-110"
                        width={500}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 lg:p-4">
                          <h4 className="font-bold text-gray-800 mb-1 text-sm lg:text-base">
                            Professional Care
                          </h4>
                          <p className="text-xs lg:text-sm text-gray-600">
                            Trusted by thousands of pet parents across the city
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="shadow-xl border-0"
                      style={{ backgroundColor: "#F05434" }}
                    >
                      <div className="p-4 lg:p-6">
                        <div className="text-center text-white">
                          <h3 className="text-xl lg:text-2xl font-bold mb-2">
                            Ready to Book?
                          </h3>
                          <p className="mb-4 text-white/90 text-sm lg:text-base">
                            Contact us now for the best pet care services in
                            your city
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                              <span className="font-semibold text-sm lg:text-base">
                                +91 8800682777
                              </span>
                            </div>
                            <div className="hidden sm:block text-white/50">
                              |
                            </div>
                            <div className="flex items-center gap-2">
                              <Heart className="w-4 h-4 lg:w-5 lg:h-5" />
                              <span className="text-sm lg:text-base">
                                Available 24/7
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
