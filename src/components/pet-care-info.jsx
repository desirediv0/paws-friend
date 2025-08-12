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
      "One of the most important processes of pet care is pet grooming. Pet grooming involves cutting and trimming of unwanted hairs which can create health issues for your pet. Regular trimming and cutting is really important for them. However, time interval for different pets can be different so hire our professional pet groomer.",
  },
  {
    id: 2,
    title: "Pet Sitting Service",
    description:
      "Pet sitting service is so simple to understand. Whenever you are busy or travelling outside of your hometown and can't take your friend there then we are there to help you. Our experienced team of pet care takers are there to make them feel home. They take good care of your pet. Your pet would get timely walk, play session included healthy meal and fun activities.",
  },
  {
    id: 3,
    title: "Pet Walking Service",
    description:
      "Walking is important for everyone as we know. Walking is a great session of exercise even if it is us human. And we at Paws Friend pet care clinic knows this very well. So, if you want your furry friend to go on a walk with one of our professionals then we are just a call away. Regular walking is really necessary for the pets as it gives them time to socialize, to breathe fresh air, to play and many other things.",
  },
  {
    id: 4,
    title: "Vet On Call",
    description:
      "We know how much you love your pet. There's no prediction for any mishaps. They are pet, they love to play, they love to eat whatever they want and they can get under the weather really easily. And if it's an emergency case then our team is there to assist you with the same. You can quickly give us a call or book a session with our vet doctor online.",
  },
  {
    id: 5,
    title: "Pet Training",
    description:
      "When you take your fluffy friend for the first time to your home, they are not very versed with norms and lifestyle. At Paws Friend pet care services we provide full fledged training to your dog such as greeting, answering nature's call, behaviour around new people etc. This is also one of the most important part of a pet adoption where you teach them to live a life according to a standard.",
  },
  {
    id: 6,
    title: "Veterinary Services",
    description:
      "With our at-home veterinary services, your pet's health is always in safe hands. From vaccinations to routine check-ups, our veterinary services are designed to offer convenience and peace of mind. Whether you need emergency assistance from a vet, you will receive professional healthcare advice to keep your furry friend happy and healthy.",
  },
];

const benefits = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Professional Care",
    description:
      "Household pet care providers are actually trained and professional team. Our team understands unique needs of different pets and are trained to handle any mishaps. With the professional help, you can be assured that your pet is in good hands while you take care of your errands.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Personalized Attention",
    description:
      "The other benefits of hiring online pet care services is your pet gets personalized attention. What exactly does in home pet care sessions means that the pet sitter comes to pet owner's home to take care of the pet. This is how pet gets comfortable with pet sitter and stay familiar with environment.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Scheduling",
    description:
      "Our Paws Friend Pet care home services are really flexible so if you have got any last minute urgent meeting or you have busy schedule, we are just a call away. Our professional team is always there to provide daily visits or overnight care or any of the schedule that suits you.",
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
      "Ensure your pet's safety by pet-proofing your home, keeping toxic substances away, providing proper identification tags, maintaining regular vet checkups, and supervising them during outdoor activities. Our trained professionals follow strict safety protocols during all services.",
  },
  {
    question: "What Are The Pet Care Services Charges?",
    answer:
      "Our pet care services are competitively priced starting from ₹799 for basic services. Pricing varies based on the type of service, duration, and specific requirements. We offer transparent pricing with no hidden costs. Contact us at +91 9876543210 for detailed pricing information.",
  },
  {
    question: "Do You Provide Emergency Pet Care Services?",
    answer:
      "Yes, we provide 24/7 emergency pet care services. Our experienced veterinarians and pet care professionals are available round the clock to handle any emergency situations. Call us immediately at +91 9876543210 for urgent pet care needs.",
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2F2F2" }}>
      {/* Header Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Paws Friend Advanced Pet Care Services
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As discussed above, there are different procedures for different
              pets. We at Paws Friend understand the needs and requirements of
              your pet and help them accordingly. Our professional team takes
              care of your little friend. So here is how we can help your pet:
            </p>
          </div>

          {/* Promotional Banner */}
          <div className="mb-12">
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-blue-100 relative">
                  <div className="flex items-center gap-4">
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
                      className="text-white font-semibold px-8 py-3"
                      style={{ backgroundColor: "#FF6B6B" }}
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
                      style={{ backgroundColor: "#FF6B6B" }}
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
              There are a lot of advantages of hiring in-house pet care services
              as it really helps in behavioural issues. The other thing which is
              important for your pet is pet&apos;s mental health and emotional
              well being which is focused through household pet care sessions
              companionship and playtime.
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
                    style={{ backgroundColor: "#FF6B6B" }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Promotional Banner 2 */}
          <Card className="overflow-hidden border-0 shadow-lg mb-12">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex items-center gap-4">
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
                    style={{ backgroundColor: "#FF6B6B" }}
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

      {/* Why Choose Us Section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#F2F2F2" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Paws Friend is the first choice for anyone looking out for pet
                care near me. We haven&apos;t got this legacy really easily. We
                have worked hard by continuously improving and listening to our
                clients demands which ultimately makes our furry buddy happy.
                Here are the reasons which makes us stand apart:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                    style={{ backgroundColor: "#FF6B6B" }}
                  >
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    All of the individuals in our expert team goes extreme
                    background check. This is to verify they are actually
                    trained and qualified to be a pet care taker.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                    style={{ backgroundColor: "#FF6B6B" }}
                  >
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We always keep updating pet owners with video call, photos
                    and videos. This is to ensure that everything is going well
                    and you can focus on your day.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                    style={{ backgroundColor: "#FF6B6B" }}
                  >
                    <Clock className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We are there to help you 24/7 for 365 days. We know your pet
                    is really dear to you and they are dear to us as well.
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
                        style={{ backgroundColor: "#FF6B6B" }}
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
