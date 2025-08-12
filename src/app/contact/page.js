"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with email service (EmailJS, server API, etc.)
    console.log("Form submitted:", formData);

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Emergency: +1 (555) 999-8888"],
      color: "coral",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@pawsfriend.com", "support@pawsfriend.com"],
      color: "skyBlue",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Pet Care Lane", "Pet City, CA 90210"],
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
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-softPink to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-coral">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services? Need to schedule an
              appointment? We&apos;re here to help! Reach out to us and
              we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

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
                <div
                  className={`w-16 h-16 bg-${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
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
      <section className="py-20 bg-gradient-to-br from-skyBlue/10 to-softPink/10">
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
                  <div className="w-12 h-12 bg-skyBlue rounded-xl flex items-center justify-center">
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
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg font-medium">
                      Interactive Map
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Google Maps integration
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      TODO: Add Google Maps API key and embed map
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-coral/10 rounded-xl">
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
              Frequently Asked <span className="text-coral">Questions</span>
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
                  "Yes, we provide 24/7 emergency care. Call our emergency line at +1 (555) 999-8888 for immediate assistance.",
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

      <Footer />
    </main>
  );
}
