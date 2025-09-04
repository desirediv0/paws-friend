"use client"

import { useState } from "react"
import { Phone } from "lucide-react"

// Simple WhatsApp icon component
const WhatsAppIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
    </svg>
)

// Instagram icon component
const InstagramIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
)

export default function FloatingBottomBar() {
    const [showCallDialog, setShowCallDialog] = useState(false)
    const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false)

    const phoneNumbers = [
        {
            number: "+918800682777",
            office: "Main Office",
            location: "314, Sec 23, Gurgaon, Haryana 122017",
        },
    ]

    const whatsAppNumbers = [
        {
            number: "+918800682777",
            office: "Main Office",
            location: "314, Sec 23, Gurgaon, Haryana 122017",
        },
    ]

    const handleCallClick = () => {
        setShowCallDialog(true)
    }

    const handleWhatsAppClick = () => {
        setShowWhatsAppDialog(true)
    }

    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/pawsfriend__", "_blank")
    }

    const confirmCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`
        setShowCallDialog(false)
    }

    const confirmWhatsApp = (phoneNumber) => {
        const message = "Hello! I'm interested in your pet services. Can you please provide more information?"
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
        setShowWhatsAppDialog(false)
    }

    return (
        <>
            {/* Floating Bottom Bar */}
            {/* Mobile/Tablet - Full Width Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 md:hidden">
                <div className="flex items-center">
                    {/* Call Button */}
                    <button
                        onClick={handleCallClick}
                        className="flex items-center justify-center flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 w-full transition-all duration-300"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        <span>Call Us</span>
                    </button>

                    {/* WhatsApp Button */}
                    <button
                        onClick={handleWhatsAppClick}
                        className="flex items-center justify-center flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 w-full transition-all duration-300"
                    >
                        <WhatsAppIcon className="w-5 h-5 mr-2" />
                        <span>WhatsApp</span>
                    </button>

                    {/* Instagram Button */}
                    <button
                        onClick={handleInstagramClick}
                        className="flex items-center justify-center flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 w-full transition-all duration-300"
                    >
                        <InstagramIcon className="w-5 h-5 mr-2" />
                        <span>Instagram</span>
                    </button>
                </div>
            </div>

            {/* Desktop - Floating Right Bottom Corner */}
            <div className="fixed bottom-6 right-6 z-40 hidden md:block">
                <div className="flex flex-col space-y-4">
                    {/* Call Button */}
                    <button
                        onClick={handleCallClick}
                        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                    >
                        <Phone className="w-7 h-7 text-white" />
                    </button>

                    {/* WhatsApp Button */}
                    <button
                        onClick={handleWhatsAppClick}
                        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                    >
                        <WhatsAppIcon className="w-7 h-7 text-white" />
                    </button>

                    {/* Instagram Button */}
                    <button
                        onClick={handleInstagramClick}
                        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                    >
                        <InstagramIcon className="w-7 h-7 text-white" />
                    </button>
                </div>
            </div>

            {/* Call Dialog */}
            {showCallDialog && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-gray-900 font-bold text-xl mb-4">Choose Office to Call</h3>
                            <div className="space-y-4">
                                {phoneNumbers.map((phone) => (
                                    <div
                                        key={phone.number}
                                        className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
                                        onClick={() => confirmCall(phone.number)}
                                    >
                                        <h4 className="text-gray-900 font-semibold text-lg mb-1">{phone.office}</h4>
                                        <p className="text-blue-600 font-bold text-xl mb-1">{phone.number}</p>
                                        <p className="text-gray-500 text-sm">{phone.location}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setShowCallDialog(false)}
                                className="mt-6 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors w-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* WhatsApp Dialog */}
            {showWhatsAppDialog && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <WhatsAppIcon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-gray-900 font-bold text-xl mb-4">Choose Office for WhatsApp</h3>
                            <div className="space-y-4">
                                {whatsAppNumbers.map((whatsapp) => (
                                    <div
                                        key={whatsapp.number}
                                        className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer"
                                        onClick={() => confirmWhatsApp(whatsapp.number)}
                                    >
                                        <h4 className="text-gray-900 font-semibold text-lg mb-1">{whatsapp.office}</h4>
                                        <p className="text-green-600 font-bold text-xl mb-1">{whatsapp.number}</p>
                                        <p className="text-gray-500 text-sm">{whatsapp.location}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setShowWhatsAppDialog(false)}
                                className="mt-6 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors w-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
