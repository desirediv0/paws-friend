import { Sparkles } from "lucide-react"

import Form from "./Form"

const AppointmentForm = () => {
  return (
    <section className="w-full">
      <div className="relative">
        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8">
          {/* Form Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Book Your Appointment</h3>
            <div className="inline-flex items-center bg-[#FF6B6B] text-white px-3 sm:px-4 py-2 rounded-full">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <p className="text-xs sm:text-sm font-bold">🎉 Special Offers Available - Up to 30% OFF!</p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default AppointmentForm
