"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#D94B4B] text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#D94B4B]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.5 9.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-4.5 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">Paws Friend</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Providing professional pet care services at your doorstep. We're
                committed to the health and happiness of your furry family
                members.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Veterinary Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Pet Grooming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Lab Testing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Pet Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
                  >
                    Vaccinations
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#4DA1FF] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-white/80">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#4DA1FF] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">hello@pawsfriend.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#4DA1FF] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-white/80">
                      123 Pet Care Street
                      <br />
                      Animal City, AC 12345
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#4DA1FF] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-white/80">
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
      <div className="border-t border-white/20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            © {currentYear} Paws Friend. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-[#4DA1FF] transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
