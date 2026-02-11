"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import HeroBanner from "@/components/hero-banner";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["Emergency: +91- 880 068 2777"],
      color: "coral",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["connect@pawsfriend.in"],
      color: "skyBlue",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [" 694, Near Ansal Plaza, Sector 23, Gurugram, Haryana 122017"],
      color: "coral",
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Mon-Fri: 8:00 AM - 6:00 PM",
        "Sat: 9:00 AM - 5:00 PM",
        "Sun: 10:00 AM - 4:00 PM",
      ],
      color: "skyBlue",
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroBanner
        title="Contact Us"
        subtitle="Get in Touch with Paws Friend"
        description="We're here to help you and your furry friends. Contact us for any queries or book an appointment today."
        backgroundImage="/contact-hero-pets.jpg"
        breadcrumbs={["Contact"]}
      />

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#F05434] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-[#F05434]/10 to-[#F05434]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AppointmentForm />

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-min">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-[#F05434] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Find Us
                    </h2>
                    <p className="text-gray-600">Visit our clinic</p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.9332894008799!2d77.04333508101759!3d28.51244852506217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1936eecdd3e9%3A0x9d61d7857cf1cfef!2sBigway%20Production!5e1!3m2!1sen!2sin!4v1759137887033!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="mt-6 p-4 bg-[#F05434]/10 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Getting Here
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Located in the heart of Pet City, we&apos;re easily
                    accessible by car, public transportation, or walking. Free
                    parking available on-site.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#F05434]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and policies.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What are your operating hours?",
                answer:
                  "We&apos;re open Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 5:00 PM, and Sunday 10:00 AM - 4:00 PM. Emergency care is available 24/7.",
              },
              {
                question: "Do I need to make an appointment?",
                answer:
                  "While walk-ins are welcome, we recommend booking an appointment to ensure minimal wait times and better service.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, credit cards, debit cards, and pet insurance. We also offer payment plans for major procedures.",
              },
              {
                question: "Do you offer emergency services?",
                answer:
                  "Yes, we provide 24/7 emergency care. Call our emergency line at +91- 8800682777 for immediate assistance.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
