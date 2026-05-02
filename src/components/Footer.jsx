"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,

  Instagram,
  Heart,
  Star,
  Sparkles,
  PawPrint,
  Award,
  Shield,

  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2F2F2] text-gray-900 relative overflow-hidden z-0">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#F05434] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#F05434] rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Link
                  href="/"
                  className="flex items-center space-x-4 group cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src="/logo.jpg"
                      alt="Paws Friend Logo"
                      width={60}
                      height={60}
                      className="rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-gray-900/90 leading-relaxed mb-6">
                Providing professional pet care services at your doorstep. We&apos;re
                committed to the health and happiness of your furry family
                members with love and care!
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs">
                  <Award className="w-3 h-3 mr-1 text-gray-900" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs">
                  <Shield className="w-3 h-3 mr-1 text-gray-900" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs">
                  <Star className="w-3 h-3 mr-1 text-gray-900" />
                  <span>5-Star</span>
                </div>
              </div>

              <div className="flex space-x-4">


                <a
                  href="https://www.instagram.com/pawsfriend__"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-5 h-5 text-gray-900" />
                </a>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-gray-900" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Home Vet Care", href: "/home-vet-care" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-900/80 hover:text-gray-900 transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <PawPrint className="w-5 h-5 mr-2 text-gray-900" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Veterinary Care",
                  "Pet Grooming",
                  "Lab Testing",
                  "Emergency Care",
                  "Vaccinations",
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="text-gray-900/80 hover:text-gray-900 transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-900" />
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-900/80">+91 8800682777</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-900/80">connect@pawsfriend.in</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-900/80">
                      314, Sec 23, Gurgaon,
                      <br />
                      Haryana 122017
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-gray-900/80">
                      Mon-Fri: 8AM-8PM
                      <br />
                      Sat-Sun: 9AM-6PM
                      <br />
                      Emergency: 24/7
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20 py-6 pb-20 md:pb-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-900/80 text-sm mb-4 md:mb-0 flex items-center">
            <Heart className="w-4 h-4 mr-2 text-gray-900" />© {currentYear} Paws
            Friend. Made with love for your pets!
          </div>
          <div className="flex space-x-6 text-sm">
            {[{ name: "Privacy Policy", href: "/privacy-policy" }, { name: "Terms of Service", href: "/terms" },].map(
              (link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-900/80 hover:text-gray-900 transition-colors duration-300 hover:scale-105"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
