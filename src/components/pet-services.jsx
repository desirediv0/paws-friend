"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Heart, Star, Sparkles } from "lucide-react";
import {
  dogtrainer,
  dogwalker,
  groomedtowel,
  homevaccination,
  onlinevetconsultation,
  petboarding,
  placeholder,
  surgerysetup,
  vetexam,
} from "@/assets";
import Image from "next/image";

const services = [
  {
    id: "grooming",
    title: "Pet Grooming Services",
    price: "₹999",
    description:
      "Hire the best pet grooming services from Paws Friend at your home and avoid the travel stress of your furry friend. Our trained groomers are always ready to provide at-home grooming for your cats and dogs at affordable charges. Now, you can keep your pet healthy and fresh with the help of our groomers.",
    features: [
      "Full grooming",
      "Mini grooming",
      "Nail cutting",
      "Ear clipping",
      "Paw massage",
      "Hair trimming",
      "Tick and flea treatment",
    ],
    image: groomedtowel,
  },
  {
    id: "veterinary",
    title: "Veterinary Services",
    price: "₹799",
    description:
      "Are you searching for an expert vet doctor to visit your home and treat your cats and dogs safely? Then, we at Paws Friend provide at-home vet services. Our experienced vet doctor can visit your home to diagnose your pets and provide the best possible treatment.",
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
    id: "training",
    title: "Pet Training Services",
    price: "₹9,999",
    description:
      "If you want to change your dog's behavior and are looking for an expert trainer, then we at Paws Friend provide affordable dog training services. Our expert trainers are always ready to train your dog to strengthen the bond between you and your furry friend.",
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
      "If you are searching for the best pet surgeon to treat your dog or cat, then we are the best destination for your needs. Our experienced team of expert vets offers all types of pet surgery with pre and post-surgery care.",
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
    id: "walking",
    title: "Dog Walking Services",
    price: "₹3,500",
    description:
      "Ready to give your dogs the walks they deserve? Book affordable at-home dog walking services. Our professional dog walkers will come to your home and take the dog for a walk they deserve to stay happy and healthy.",
    features: [
      "Professional dog walkers",
      "Flexible scheduling",
      "Exercise and care",
      "Trusted service",
      "Happy adventures",
      "Regular updates",
    ],
    image: dogwalker,
  },
  {
    id: "boarding",
    title: "Pet Boarding Services",
    price: "₹999",
    description:
      "If you are looking for a comfortable space for your cats and dogs, then Paws Friend provides the best pet boarding services with 24/7 medical facilities. Our pet boarding service is affordable and trusted.",
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
      "If you want an online pet consultation, we are here to help you. Now, you can talk to our vets online on video call and get expert advice about your pet's health. With the help of our 24/7 online vet consultation, you no longer need to visit the vet clinic.",
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
      "Paws Friend brings pet vaccinations to your doorstep, so you don't need to visit the vet clinic to vaccinate your dog or cat. Our vets come to your home and vaccinate your pet to protect them from diseases.",
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2F2F2" }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-[#FF6B6B]" />
            <h1 className="text-4xl font-bold text-gray-800">Paws Friend</h1>
            <Heart className="w-8 h-8 text-[#FF6B6B]" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium pet care services delivered to your doorstep with love and
            expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Services Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[#FF6B6B]" />
                  Our Services
                </h2>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 hover:shadow-md ${
                        activeService.id === service.id
                          ? "text-white shadow-lg transform scale-105"
                          : "text-gray-700 hover:bg-white/50"
                      }`}
                      style={{
                        backgroundColor:
                          activeService.id === service.id
                            ? "#FF6B6B"
                            : "transparent",
                      }}
                    >
                      <div className="font-semibold text-sm leading-tight">
                        {service.title}
                      </div>
                      <div
                        className={`text-xs mt-1 ${
                          activeService.id === service.id
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        Starting from {service.price}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Details */}
              <Card className="shadow-xl border-0 transform transition-all duration-500 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {activeService.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-[#FF6B6B]">
                          {activeService.price}
                        </span>
                        {activeService.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            {activeService.originalPrice}
                          </span>
                        )}
                        {activeService.discount && (
                          <Badge className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90">
                            {activeService.discount}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Star className="w-8 h-8 text-yellow-400 fill-current" />
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Our Services Include:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {activeService.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#FF6B6B]"></div>
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
                      style={{ backgroundColor: "#FF6B6B" }}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call +91 9876543210
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Image */}
              <Card className="shadow-xl border-0 overflow-hidden transform transition-all duration-500 hover:shadow-2xl h-min">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={activeService.image || placeholder}
                      alt={activeService.title}
                      className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-bold text-gray-800 mb-1">
                          Professional Care
                        </h4>
                        <p className="text-sm text-gray-600">
                          Trusted by thousands of pet parents across the city
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <Card
              className="mt-8 shadow-xl border-0"
              style={{ backgroundColor: "#FF6B6B" }}
            >
              <CardContent className="p-6">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Ready to Book?</h3>
                  <p className="mb-4 text-white/90">
                    Contact us now for the best pet care services in your city
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      <span className="font-semibold">+91 9876543210</span>
                    </div>
                    <div className="hidden sm:block text-white/50">|</div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
