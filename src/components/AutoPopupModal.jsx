"use client";

import { useState, useEffect, useRef } from "react";
import { PawPrint, X, Sparkles, Gift } from "lucide-react";
import Form from "./Form";

const AutoPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Initial popup after 5 seconds of page load
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Auto popup interval every 1 minute (60,000 ms)
    const intervalTimer = setInterval(() => {
      setIsOpen(true);
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden relative border border-orange-100 my-auto animate-in zoom-in-95 duration-300">
        
        {/* Header with gradient & offer */}
        <div className="bg-gradient-to-r from-[#F05434] via-[#f76a4c] to-[#FF8E8E] p-4 sm:p-5 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center space-x-3 pr-8">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1 bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase w-fit mb-1">
                <Gift className="w-3 h-3 text-yellow-300" />
                <span>Special Offer Available</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                Book Your Vet Visit Today
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body with Form */}
        <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
          <Form />
        </div>

        {/* Footer Subtitle */}
        <div className="bg-orange-50/60 border-t border-orange-100 p-3 text-center">
          <p className="text-xs font-semibold text-gray-600 flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#F05434]" />
            Instant Confirmation & Home Visit Available
          </p>
        </div>

      </div>
    </div>
  );
};

export default AutoPopupModal;
