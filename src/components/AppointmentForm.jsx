

import Form from "./Form"

const AppointmentForm = ({ variant = "white", customPetTypes, customServices, }) => {

  return (
    <section className="w-full">


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
