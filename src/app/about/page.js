"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Award, Users, Target, Star, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Veterinarian",
      image: "SJ",
      experience: "15+ years",
      specialty: "Small Animal Medicine",
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Veterinarian",
      image: "MC",
      experience: "12+ years",
      specialty: "Surgery & Emergency Care",
    },
    {
      name: "Emily Rodriguez",
      role: "Head Groomer",
      image: "ER",
      experience: "8+ years",
      specialty: "Professional Grooming",
    },
    {
      name: "David Thompson",
      role: "Training Specialist",
      image: "DT",
      experience: "10+ years",
      specialty: "Behavioral Training",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We treat every pet with the same love and care we'd give our own.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to providing the highest quality veterinary care and service.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building lasting relationships with pets and their families.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Using the latest technology and techniques for better pet care.",
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
              About <span className="text-coral">Paws Friend</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we&apos;ve been dedicated to providing exceptional
              care for pets and building lasting relationships with their
              families in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-coral">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Paws Friend was founded in 2010 by Dr. Sarah Johnson with a
                simple mission: to provide compassionate, professional care for
                pets while treating every animal like family.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small veterinary clinic has grown into a
                comprehensive pet care center, serving over 5,000 pets and their
                families. Our commitment to excellence and compassion has
                remained unchanged throughout our journey.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re proud to offer a full range of services including
                veterinary care, grooming, training, and lab services, all
                delivered with the same love and attention to detail that
                inspired our founding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-coral/20 to-skyBlue/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-softPink to-skyBlue/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-6xl">🏥</span>
                      </div>
                      <p className="text-gray-600 text-lg font-medium">
                        Established 2010
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        15+ years of excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-skyBlue/10 to-softPink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-coral">Mission</span> & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing the highest quality pet care while
              building lasting relationships with pets and their families.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-coral rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-coral">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to providing
              the best care for your beloved pets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-center"
              >
                <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {member.image}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-coral font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">
                  {member.experience} experience
                </p>
                <p className="text-gray-500 text-xs">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-coral to-coral/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Happy Pets" },
              { number: "15+", label: "Years Experience" },
              { number: "4.9", label: "Average Rating" },
              { number: "24/7", label: "Emergency Care" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-coral">Paws Friend</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go above and beyond to ensure your pets receive the best care
              possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Licensed veterinarians with years of experience",
              "State-of-the-art equipment and facilities",
              "Compassionate and gentle approach to pet care",
              "Same-day results for most lab tests",
              "Emergency care available 24/7",
              "Transparent pricing with no hidden fees",
              "Follow-up care and support included",
              "Pet-friendly environment designed for comfort",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
