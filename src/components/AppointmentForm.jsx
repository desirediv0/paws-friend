import { Sparkles } from "lucide-react"

import Form from "./Form"

const AppointmentForm = ({ variant = "white", customPetTypes, customServices }) => {
  return (
    <section className="w-full ">
      <div className="relative">
        <div className={`${variant === "white" ? "bg-white shadow-2xl" : "bg-white/10 backdrop-blur-xl border border-white/20"} rounded-[2rem] p-6 sm:p-8 md:p-10`}>
          {/* Form Header */}
          <div className="text-center mb-8">
            <h3 className={`text-3xl sm:text-4xl  ${variant === "white" ? "text-gray-900" : "text-white"} mb-3`}>Book Your Appointment</h3>
            <p className={`text-[10px] sm:text-xs font-black ${variant === "white" ? "text-gray-600" : "text-white/70"} mb-6 uppercase tracking-[0.2em] `}>Professional Home Visits - Offers on Treatments</p>
            
            <div className={`inline-flex items-center ${variant === "white" ? "bg-[#F05434] text-white" : "bg-white/10 text-white border border-white/20"} px-4 py-2 rounded-full shadow-lg`}>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <p className="text-[10px] sm:text-xs font-bold tracking-tight ">🎉 Special Offers Available - Up to 30% OFF!</p>
            </div>
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
