"use client";
import React from "react";
import {
  Scissors,
  Stethoscope,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  Calendar,
  Star,
  PawPrint,
  Shield,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Play,
  Gift,
  TrendingUp,
} from "lucide-react";

const PawsFriendServices = () => {
  const services = [
    {
      id: 1,
      title: "Pet Grooming",
      icon: Scissors,
      description:
        "Professional grooming services to keep your pet looking and feeling their best",
      features: [
        "Full grooming",
        "Mini grooming",
        "Nail cutting",
        "Ear clipping",
        "Paw massage",
        "Hair trimming",
        "Tick & flea treatment",
      ],
      startingPrice: "₹999",
      originalPrice: "₹1349",
    },
    {
      id: 2,
      title: "Veterinary Services",
      icon: Stethoscope,
      description:
        "Complete healthcare solutions with licensed veterinarians at your doorstep",
      features: [
        "Health checkups",
        "Vaccinations",
        "Medical treatment",
        "Emergency care",
        "Surgery consultation",
        "Health certificates",
      ],
      startingPrice: "₹799",
      originalPrice: "₹1199",
    },
    {
      id: 3,
      title: "Pet Training",
      icon: GraduationCap,
      description:
        "Expert training programs to help your pet learn good behavior and obedience",
      features: [
        "Basic obedience",
        "Behavioral training",
        "Puppy training",
        "Advanced commands",
        "Socialization",
        "Problem solving",
      ],
      startingPrice: "₹1299",
      originalPrice: "₹1799",
    },
    {
      id: 4,
      title: "Pet Surgery",
      icon: Heart,
      description:
        "Advanced surgical procedures performed by experienced veterinary surgeons",
      features: [
        "Minor surgeries",
        "Spaying/neutering",
        "Dental procedures",
        "Emergency surgery",
        "Post-op care",
        "Recovery support",
      ],
      startingPrice: "₹2999",
      originalPrice: "₹4299",
    },
    {
      id: 5,
      title: "Dog Walking",
      icon: MapPin,
      description:
        "Regular exercise and outdoor activities to keep your dog healthy and happy",
      features: [
        "Daily walks",
        "Exercise routines",
        "Socialization",
        "Fresh air time",
        "Health monitoring",
        "Flexible scheduling",
      ],
      startingPrice: "₹599",
      originalPrice: "₹899",
    },
    {
      id: 6,
      title: "Pet Boarding",
      icon: Shield,
      description:
        "Safe and comfortable boarding services when you're away from home",
      features: [
        "24/7 supervision",
        "Comfortable lodging",
        "Regular meals",
        "Exercise time",
        "Medical care",
        "Daily updates",
      ],
      startingPrice: "₹1599",
      originalPrice: "₹2199",
    },
    {
      id: 7,
      title: "Online Vet Consultation",
      icon: Phone,
      description: "Get expert veterinary advice from the comfort of your home",
      features: [
        "Video consultation",
        "Health assessment",
        "Prescription services",
        "Follow-up care",
        "Emergency guidance",
        "Medical records",
      ],
      startingPrice: "₹399",
      originalPrice: "₹699",
    },
    {
      id: 8,
      title: "Pet Vaccinations",
      icon: Shield,
      description: "Complete vaccination programs to protect your pet's health",
      features: [
        "Core vaccines",
        "Booster shots",
        "Health certificates",
        "Vaccination schedules",
        "Preventive care",
        "Health monitoring",
      ],
      startingPrice: "₹899",
      originalPrice: "₹1299",
    },
  ];

  const handleBookNow = (service) => {
    alert(
      `Booking ${service.title} service! We'll call you back within 10 minutes.`
    );
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header Section */}
      <div className="relative py-20 bg-[#FF6B6B] overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-32 w-36 h-36 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-bold shadow-lg mb-8">
            <Gift className="w-4 h-4 mr-2" />
            <Star className="w-4 h-4 mr-2 fill-current" />
            Special 30% OFF - Limited Time!
            <Sparkles className="w-4 h-4 ml-2" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Our Professional
            <span className="block text-white">Pet Services</span>
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Professional, caring, and convenient pet services delivered right to
            your doorstep. Your pet's health and happiness is our top priority!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, number: "10,000+", label: "Happy Families" },
              { icon: Award, number: "24/7", label: "Available" },
              { icon: Shield, number: "100%", label: "Licensed" },
              { icon: Clock, number: "Same Day", label: "Service" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-[#FF6B6B] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <TrendingUp className="w-3 h-3 mr-1 fill-current" />
                    30% OFF
                  </div>
                </div>

                {/* Service Icon */}
                <div className="relative p-6 pb-4">
                  <div className="w-20 h-20 bg-[#FF6B6B] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-500 italic">
                        +{service.features.length - 4} more services...
                      </div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-gray-400 line-through text-sm">
                        {service.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {service.startingPrice}
                      </span>
                      <span className="text-sm text-gray-600">per session</span>
                    </div>
                    <p className="text-xs text-green-600 font-semibold">
                      Starting from • Home Service Available
                    </p>
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => handleBookNow(service)}
                    className="group w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-2xl py-4 font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Now</span>
                    <PawPrint className="w-5 h-5 group-hover:animate-bounce" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Service Spotlight */}
      <div className="py-16 bg-[#FF6B6B] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-bold">
                <Sparkles className="w-4 h-4 mr-2" />
                Featured Service - Most Popular!
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Pet Grooming Services
              </h2>

              <p className="text-xl text-white/90 leading-relaxed">
                Hire the best pet grooming services from Paws Friend at your
                home and avoid the travel stress of your furry friend. Our
                trained groomers are always ready to provide at-home grooming
                for your cats and dogs at affordable charges.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Starting from ₹999
                </h3>
                <p className="text-white/90">
                  Now, you can keep your pet healthy and fresh with the help of
                  our groomers. Our grooming services include full grooming,
                  mini grooming, nail cutting, ear clipping, paw massage, hair
                  trimming, tick and flea treatment, and more.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    alert(
                      "Booking Pet Grooming service! We'll call you back within 10 minutes."
                    )
                  }
                  className="group bg-white text-[#FF6B6B] px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Now</span>
                  <PawPrint className="w-5 h-5 group-hover:animate-bounce" />
                </button>

                <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+91 9876543210</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Simulated Pet Image */}
                <div className="relative bg-white/20 rounded-2xl p-8 mb-6 overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                      <PawPrint className="w-16 h-16 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Pet Groomer
                    </h4>
                    <p className="text-white/80">Treat your pet today!</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="bg-white/20 text-white px-6 py-4 rounded-2xl text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Phone className="w-5 h-5" />
                      <span className="text-xl font-bold">+91 9876543210</span>
                    </div>
                    <p className="text-sm opacity-90">
                      Call for instant booking
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4">
                      <div className="text-lg font-bold text-white line-through">
                        ₹1349
                      </div>
                      <div className="text-xs text-white/70">per session</div>
                    </div>
                    <div className="bg-[#FF6B6B] rounded-xl p-4">
                      <div className="text-lg font-bold text-white">₹999</div>
                      <div className="text-xs text-white/80">per session</div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookNow(services[0])}
                    className="w-full bg-white text-[#FF6B6B] rounded-2xl py-4 font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-8">
            Ready to Give Your Pet the Best Care?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Phone CTA */}
            <div className="bg-[#FF6B6B] p-1 rounded-2xl group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-900 rounded-2xl p-6 group-hover:bg-[#FF6B6B] transition-all duration-500">
                <Phone className="w-12 h-12 text-[#FF6B6B] group-hover:text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Now</h3>
                <p className="text-3xl font-black text-white mb-2">
                  +91 9876543210
                </p>
                <p className="text-gray-300 text-sm">
                  24/7 Emergency Available
                </p>
              </div>
            </div>

            {/* Online Booking CTA */}
            <div className="bg-[#FF6B6B] p-1 rounded-2xl group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-900 rounded-2xl p-6 group-hover:bg-[#FF6B6B] transition-all duration-500">
                <Calendar className="w-12 h-12 text-[#FF6B6B] group-hover:text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Book Online
                </h3>
                <p className="text-lg font-bold text-white mb-2">
                  Quick & Easy
                </p>
                <p className="text-gray-300 text-sm">
                  Get 30% off your first service
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Award, text: "Award Winning Service" },
              { icon: Heart, text: "10k+ Happy Pets" },
              { icon: Clock, text: "Same Day Service" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <item.icon className="w-5 h-5 text-[#FF6B6B]" />
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PawsFriendServices;
