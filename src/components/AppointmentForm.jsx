import { CheckCircle2 } from "lucide-react"

import Form from "./Form"

const AppointmentForm = ({ variant = "white", customPetTypes, customServices, showFeatures = true }) => {
  const features = [
    "Certified Paravet Medical Care",
    "Strict 4°C Cold-Chain Integrity.",
    "Premium USA-Imported Vials.",
    "Zero Travel, Zero Stress.",
  ]

  return (
    <section className="w-full">
      {/* 4 Trust Points Above Form */}
      {showFeatures && (
        <div className="mb-5 sm:mb-6 space-y-2.5 sm:space-y-3 px-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 stroke-[2.2]" />
              <span className={`font-semibold text-sm sm:text-base ${variant === "white" ? "text-gray-800" : "text-white"}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="relative">
        <div className={`${variant === "white" ? "bg-white shadow-2xl" : "bg-white/10 backdrop-blur-xl border border-white/20"} rounded-[2rem] p-6 sm:p-8 md:p-10`}>
          {/* Form Header */}
          <div className="text-center mb-8">
            <h3 className={`text-3xl sm:text-4xl ${variant === "white" ? "text-gray-900" : "text-white"} mb-3`}>Book Your Appointment</h3>
          </div>
          <Form
            variant={variant === "white" ? "light" : "glass"}
            customPetTypes={customPetTypes}
            customServices={customServices}
          />
        </div>
      </div>
    </section>
  )
}

export default AppointmentForm
