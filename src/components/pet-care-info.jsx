"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  Heart,
  Shield,
  Clock,
  Users,
  Award,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Pet Grooming",
    description:
      "Keep your furry friends healthy, clean & happy with regular grooming. Hire our professional groomers today! Grooming is an essential part of pet care. It includes trimming and cutting unwanted hair to prevent health issues and keep your pet comfortable. Regular grooming ensures your pet stays clean, healthy, and happy. Since every pet has different needs, our professional groomers provide personalized care for your paw some friend.",
  },
  {
    id: 2,
    title: "Pet Sitting Service",
    description:
      "We know life gets busy, and sometimes you can’t always be there for your pet. That’s where we come in! Our trusted pet sitters provide care right at your home, keeping your furry friend happy and comfortable. Timely walks, Fun play sessions, Healthy meals, Lots of love & care. Because your pet deserves the best even when you’re away!",
  },
  {
    id: 3,
    title: "Pet Walking Service",
    description:
      "Walking is essential for everyone and that includes your furry friends. It’s not just exercise, it’s also a way for pets to stay happy, healthy, and active. At Paws Friend Pet Care Clinic, we understand the importance of regular walks. That’s why our professional team is here to help. If you’d like your pet to enjoy a safe and fun walk, we are just a call away. Regular walking helps pets socialize, breathe fresh air, play, and enjoy countless other benefits that keep them physically fit and emotionally content.",
  },
  {
    id: 4,
    title: "Vet On Call",
    description:
      "We understand how much you love your furry friend. Accidents and illnesses can happen anytime pets love to play, explore, and eat things they shouldn’t, which sometimes makes them unwell. That’s why our team is always ready to help. In case of an emergency, you can easily call us or book an online session with our vet for quick assistance.",
  },
  {
    id: 5,
    title: "Pet Training",
    description:
      "Bringing your furry friend home for the first time can be exciting, but they may not be familiar with household norms and lifestyle. At Paws Friend Pet Care Services, we provide complete training for your dog covering essentials like proper greetings, toilet habits, and good behaviour around new people. Training is a vital part of pet adoption, helping your pet adapt and learn to live happily and confidently in a well-structured routine.",
  },
  {
    id: 6,
    title: "Veterinary Services",
    description:
      "Caring for your pet has never been easier. Our home-visit veterinary services ensure expert care without the stress of traveling. From preventive vaccinations to timely check-ups and urgent medical support, we bring trusted healthcare right to your doorstep keeping your beloved pet safe, healthy, and full of life.",
  },
];

const benefits = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Professional Care",
    description:
      "Our in-home pet care team is not only compassionate but also highly trained to meet the unique needs of every pet. From managing daily routines to handling unexpected situations, our professionals ensure your furry friend receives the best possible care. With us by your side, you can focus on your day knowing your pet is safe, comfortable, and in expert hands.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Personalized Attention",
    description:
      "One of the biggest advantages of in-home pet care is the personalized attention your pet receives. Instead of adjusting to a new place, the pet sitter visits your home and cares for your pet in their own familiar environment. This helps your pet feel safe, comfortable, and quickly build trust with the caregiver, reducing stress and ensuring they stay happy and relaxed.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Scheduling",
    description:
      "At Paws Friend Pet Care, we understand that life can be unpredictable. That’s why our services are designed to fit around your busy routine. Whether it’s a last-minute meeting, a long workday, or an urgent trip, our team is just a call away. From daily visits to overnight care, we adjust to the schedule that works best for you and your pet.",
  },
];

const faqs = [
  {
    question: "How To Take Care Of Pet?",
    answer:
      "Make sure they are living in a neat and clean environment. It is really important for them to have a clean environment to feel comfortable and cozy. Play with them, groom them weekly or monthly, take them for regular checkups. Paws Friend home pet care services are the best to help you with the same.",
  },
  {
    question: "How To Ensure Safety Of Your Pet?",
    answer:
      "To ensure your pet’s safety, always keep them in a secure and clean environment, free from toxic plants, chemicals, or sharp objects. Use collars, ID tags, or microchips in case they get lost, and never leave them unattended outdoors. Provide proper training so they understand basic commands and avoid dangerous situations. Regular vet visits, vaccinations, and parasite control also protect their health. Most importantly, always supervise them during walks, play, and travel to keep them safe and happy.",
  },
  {
    question: "What Are The Pet Care Services Charges?",
    answer:
      "Our pet care services are competitively priced starting from ₹499 for basic services. Pricing varies based on the type of service, duration, and specific requirements. We offer transparent pricing with no hidden costs. Contact us at +91 8800682777 for detailed pricing information.",
  },
  {
    question: "Do You Provide Emergency Pet Care Services?",
    answer:
      "Yes, we provide 24/7 emergency pet care services. Our experienced veterinarians and pet care professionals are available round the clock to handle any emergency situations. Call us immediately at +91 9112561322 for urgent pet care needs.",
  },
  {
    question: "Are Your Pet Care Professionals Certified?",
    answer:
      "All our pet care professionals undergo extensive background checks and are certified in pet care, first aid, and handling different breeds. We ensure that only qualified and experienced individuals take care of your beloved pets.",
  },
];

export default function PetCareInfo() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const confirmCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`
  }

  const confirmWhatsApp = (phoneNumber) => {
    const message = "Hello, I would like to inquire about your pet care services.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2F2F2" }}>
      {/* Header Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Paws Friend Advanced Pet Care Services
            </h1>
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pets are not just animals they are a part of our family. Their comfort and health matter the most, and that is why we bring pet care directly to your home. From vet visits, vaccination, and grooming to basic care we make everything easy and stress-free for both pets and parents. Dogs, cats, or birds, every pet has unique needs, and our trained professionals understand how to care for them with love and patience. Choosing the right pet care means choosing happiness and safety for your furry and feathered friends.
            </p>
          </div>

          {/* Promotional Banner */}
          <div className="mb-12">
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-blue-100 relative flex-col md:flex-row">
                  <div className="flex items-center gap-4 my-2 md:my-0">
                    <div className="bg-white p-3 rounded-full">
                      <Stethoscope className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Need expert vet help online?
                      </h3>
                      <p className="text-gray-600">Connect with vet on call</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      className="text-white font-semibold px-8 py-3 bg-[#F05434]"

                      onClick={() => confirmCall('+918800682777')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Vet On Call
                    </Button>
                    <div className="bg-gray-800 text-white px-4 py-2 rounded-full">
                      <span className="text-sm font-bold">15% Off</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: "#F05434" }}
                    >
                      {service.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Benefits Of In-House Pet Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choosing in-house pet care comes with many benefits for both you and your furry friend. It helps in reducing behavioural issues by providing a safe and familiar environment. These services also support your pet’s mental health and emotional well-being through personalized care, companionship, and engaging playtime right at home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: "#F05434" }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Promotional Banner 2 */}
          <Card className="overflow-hidden border-0 shadow-lg mb-12">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-green-100 flex-col md:flex-row">
                <div className="flex items-center gap-4 my-2 md:my-0">
                  <div className="bg-white p-3 rounded-full">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Protect your pet with our
                    </h3>
                    <p className="text-gray-600">
                      at-home vaccination services
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    className="text-white font-semibold px-8 py-3"
                    style={{ backgroundColor: "#F05434" }}
                    onClick={() => confirmWhatsApp('+918800682777')}
                  >
                    Enquire Now
                  </Button>
                  <div className="bg-gray-800 text-white px-4 py-2 rounded-full">
                    <span className="text-sm font-bold">12% Off</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>


      <div className="py-16 px-4" style={{ backgroundColor: "#F2F2F2" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Paws Friend – The First Choice for Pet Care Near You
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Paws Friend, we haven’t built this legacy overnight. It’s the result of dedication, consistent improvement,
                and truly listening to what pet parents need. Our goal is simple — keeping your furry companion happy, healthy, and loved.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                    style={{ backgroundColor: "#F05434" }}
                  >
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Every member of our expert team goes through strict background checks and training. We make sure they are not just
                    qualified, but also genuinely passionate about caring for pets.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                    style={{ backgroundColor: "#F05434" }}
                  >
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We keep pet parents connected through video calls, photos, and short updates. This way, you’ll always know your
                    little one is safe and happy, while you focus on your day.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/veterinarian-retriever.jpg"
                alt="Professional vet with dog"
                className="rounded-2xl shadow-xl max-w-full h-auto"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our pet care services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {index + 1}. {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div
                        className="h-1 w-16 mb-4 rounded"
                        style={{ backgroundColor: "#F05434" }}
                      ></div>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
