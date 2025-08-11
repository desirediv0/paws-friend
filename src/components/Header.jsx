"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Heart, MapPin } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: "Home", href: "#home", active: true },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 rounded-full ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl border border-[#FF6B6B]/10"
            : "bg-white/90 backdrop-blur-sm shadow-lg"
        }`}
        style={{
          width: "90%",
          maxWidth: "1400px",
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Left */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Paws Friend Logo"
                  width={60}
                  height={60}
                  className="rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 group ${
                    item.active
                      ? "text-white bg-[#FF6B6B] shadow-lg shadow-[#FF6B6B]/25"
                      : "text-gray-700 hover:text-[#FF6B6B] hover:bg-[#FF6B6B]/5"
                  }`}
                >
                  {item.name}
                  {!item.active && (
                    <div className="absolute inset-0 rounded-xl bg-[#FF6B6B]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                  )}
                </a>
              ))}
            </nav>

            {/* Right Side - Contact Info + CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Emergency Contact */}
              <div className="flex items-center space-x-3 text-gray-600 hover:text-[#FF6B6B] transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B6B]/20 transition-all duration-300">
                  <Phone className="w-5 h-5 text-[#FF6B6B]" />
                </div>
                <div className="hidden xl:block">
                  <p className="text-sm font-semibold text-gray-900">
                    Emergency Care
                  </p>
                  <p className="text-xs text-gray-500">+1 (555) 123-PAWS</p>
                </div>
              </div>

              {/* Book Appointment Button */}
              <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] hover:from-[#FF5252] hover:to-[#FF6B6B] text-white rounded-xl px-8 py-3 text-sm font-bold shadow-lg shadow-[#FF6B6B]/25 hover:shadow-xl hover:shadow-[#FF6B6B]/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                <Heart className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="w-12 h-12 bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                <Menu className="w-6 h-6 text-[#FF6B6B]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 lg:hidden mobile-menu">
          <div className="flex justify-end items-start pt-4 px-4">
            <div
              className={`bg-white rounded-3xl w-full max-w-sm shadow-2xl border border-[#FF6B6B]/10 transform transition-all duration-500 ease-out ${
                isMenuOpen
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-full opacity-0 scale-95"
              }`}
            >
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-6 pb-4 border-b border-[#FF6B6B]/10">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logo.jpg"
                    alt="Paws Friend Logo"
                    width={50}
                    height={50}
                    className="rounded-xl shadow-lg"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-[#FF6B6B]">
                      PAWS FRIEND
                    </h2>
                    <p className="text-xs text-gray-500 font-medium">
                      Pawfectly Devoted
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleMenu}
                  className="w-10 h-10 bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 rounded-xl flex items-center justify-center transition-all duration-200"
                >
                  <X className="w-5 h-5 text-[#FF6B6B]" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="p-6 pb-4">
                <div className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-4 rounded-xl font-semibold transition-all duration-200 ${
                        item.active
                          ? "text-white bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] shadow-lg shadow-[#FF6B6B]/25"
                          : "text-gray-700 hover:text-[#FF6B6B] hover:bg-[#FF6B6B]/5"
                      }`}
                      onClick={toggleMenu}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: "slideInRight 0.3s ease-out forwards",
                      }}
                    >
                      <span>{item.name}</span>
                      {item.active && <Heart className="w-4 h-4" />}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA Section */}
              <div className="p-6 pt-4 border-t border-[#FF6B6B]/10 space-y-4">
                {/* Emergency Contact */}
                <div className="flex items-center space-x-3 p-4 bg-[#FF6B6B]/5 rounded-xl border border-[#FF6B6B]/10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Emergency Care
                    </p>
                    <p className="text-xs text-gray-500">+1 (555) 123-PAWS</p>
                  </div>
                </div>

                {/* Book Appointment Button */}
                <Button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] hover:from-[#FF5252] hover:to-[#FF6B6B] text-white rounded-xl py-4 text-base font-bold shadow-lg shadow-[#FF6B6B]/25 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Heart className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 1024px) {
          header {
            width: 85% !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
