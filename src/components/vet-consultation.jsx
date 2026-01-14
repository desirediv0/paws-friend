"use client"

import Image from "next/image"
import { useState } from "react"
import { FaClock, FaUserMd, FaCheckCircle, FaTimes, FaWhatsapp, FaHeart, FaPaw } from "react-icons/fa"
import { MdPets } from "react-icons/md"

const VetConsultation = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsVisible(false)
            setIsClosing(false)
        }, 300)
    }

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
            "Hi Paws Friend! I'm interested in your Free Online Vet Consultation service. Please help me connect with a veterinarian for my pet.",
        )
        const whatsappUrl = `https://wa.me/919112561322?text=${message}`
        window.open(whatsappUrl, "_blank")
    }

    if (!isVisible) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-all duration-300 ease-bounce ${isClosing ? "opacity-0" : "opacity-100"
                    }`}
                onClick={handleClose}
            />

            {/* Popup Wrapper for Centering */}
            <div className="fixed inset-0 z-[1000] mt-16 md:mt-24 flex items-center justify-center pointer-events-none">
                {/* Popup */}
                <div
                    className={`relative w-full  max-w-4xl mx-2 sm:mx-4 md:mx-0 pointer-events-auto transition-all duration-300 ease-bounce ${isClosing ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"
                        }`}
                >
                    <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-background border border-border px-4 py-6 sm:p-8 ">
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-secondary border border-border text-muted-foreground hover:text-[#F05434] hover:bg-[#F05434]/10 hover:scale-125 transition-all duration-300 ease-bounce active:scale-95 transform-gpu will-change-transform z-10"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                            {/* Left Side - Content */}
                            <div className="space-y-4 sm:space-y-6">
                                {/* Header */}
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="p-2 sm:p-3 bg-[#F05434]/10 rounded-full">
                                            <MdPets className="w-5 h-5 sm:w-6 sm:h-6 text-[#F05434]" />
                                        </div>
                                        <span className="text-[#F05434] font-bold text-xs sm:text-sm uppercase tracking-wider">
                                            🐾 Paws Friend
                                        </span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                        Free Online Vet
                                        <span className="block text-[#F05434]">Consultation</span>
                                    </h2>
                                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                        Get expert veterinary advice for your beloved pet from the comfort of your home. Our certified vets
                                        are available to help with any pet health concerns.
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <FaClock className="w-4 h-4 text-[#F05434] flex-shrink-0" />
                                        <span className="text-foreground text-xs sm:text-sm font-medium">24/7 Availability</span>
                                    </div>

                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <FaUserMd className="w-4 h-4 text-[#F05434] flex-shrink-0" />
                                        <span className="text-foreground text-xs sm:text-sm font-medium">Expert Veterinarians</span>
                                    </div>
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <FaCheckCircle className="w-4 h-4 text-[#F05434] flex-shrink-0" />
                                        <span className="text-foreground text-xs sm:text-sm font-medium">Instant Connection</span>
                                    </div>

                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <FaPaw className="w-4 h-4 text-[#F05434] flex-shrink-0" />
                                        <span className="text-foreground text-xs sm:text-sm font-medium">Pet Care Specialists</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="space-y-3">
                                    <button
                                        onClick={handleWhatsAppClick}
                                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 sm:px-6 sm:py-4 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-bounce active:scale-95 transform-gpu will-change-transform text-sm sm:text-base"
                                    >
                                        <FaWhatsapp className="w-5 h-5" />
                                        <span>Start Free Consultation</span>
                                    </button>
                                </div>

                                {/* Small text */}
                                <p className="text-xs text-muted-foreground text-center">
                                    Professional veterinary consultation • Secure & Private • Free service
                                </p>
                            </div>

                            {/* Right Side - Visual */}
                            <div className="relative flex justify-center items-center">
                                <div className="relative w-32 h-32 sm:w-80 sm:h-80 mx-auto">
                                    <Image
                                        src="/happy-vet-dog-cat.png"
                                        alt="Veterinarian with happy pets"
                                        className="w-full h-full object-cover rounded-full md:rounded-2xl shadow-lg"
                                        width={500}
                                        height={500}
                                    />
                                    {/* Trust badge overlay */}
                                    <div className="absolute top-4 right-4 bg-[#F05434] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                        Certified Vets
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#F05434]/20 rounded-full animate-bounce flex items-center justify-center">
                                    <FaPaw className="w-4 h-4 text-[#F05434]" />
                                </div>
                                <div className="absolute bottom-8 right-4 w-6 h-6 sm:w-10 sm:h-10 bg-[#F05434]/20 rounded-full animate-bounce delay-500 flex items-center justify-center">
                                    <FaHeart className="w-3 h-3 text-[#F05434]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VetConsultation
