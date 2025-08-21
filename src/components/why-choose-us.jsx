"use client"

import { Heart, Users, Dumbbell, GraduationCap, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const features = [
  {
    icon: Heart,
    title: "Wellness Approach",
    description:
      "We focus on your pet's overall well-being keeping them physically healthy, mentally active, and emotionally happy with complete care and love.",
  },
  {
    icon: Users,
    title: "VIP Memberships",
    description:
      "Enjoy special benefits with our VIP plan priority booking, exclusive discounts, and access to members-only events for you and your pet.",
  },
  {
    icon: Dumbbell,
    title: "Pet Fitness Programs",
    description:
      "We provide fun and safe fitness activities for your pets to keep them strong, active, and happy. Our programs are designed to improve their stamina, reduce health risks, and make sure they enjoy a healthy lifestyle every day. With regular exercise and playful workouts, we help your furry friends live longer, healthier, and more joyful lives.",
  },
  {
    icon: GraduationCap,
    title: "Pet Health Seminars",
    description:
      "Our seminars focus on pet health, nutrition, and overall well-being. These sessions are designed to guide pet parents with the right knowledge, from healthy diets to preventive care and lifestyle tips. By attending, you'll gain practical information to keep your pets safe, strong, and happy, while also building trust with experts who care about your furry friends as much as you do.",
  },
]

export default function WhyChooseUs() {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (title) => {
    if (expandedCard === title) {
      setExpandedCard(null)
    } else {
      setExpandedCard(title)
    }
  }

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gray-400 w-16"></div>
            <div className="w-8 h-8 bg-[#F05434] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="h-px bg-gray-400 w-16"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what makes Paws Friend the perfect choice for your beloved pet&apos;s care and well-being
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-[#F05434] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#F05434] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {expandedCard === feature.title
                      ? feature.description
                      : feature.description.length > 100
                        ? `${feature.description.substring(0, 100)}...`
                        : feature.description}
                  </p>

                  {feature.description.length > 100 && (
                    <button
                      onClick={() => toggleCard(feature.title)}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#F05434] to-[#F05434]/80 hover:from-[#F05434]/90 hover:to-[#F05434]/70 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                    >
                      <span>{expandedCard === feature.title ? "Show Less" : "Learn More"}</span>
                      {expandedCard === feature.title ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
