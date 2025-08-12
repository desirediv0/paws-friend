"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    review:
      "Paws Friend's grooming service is exceptional! My Golden Retriever Max looks amazing after every session. The team is professional and my pet feels comfortable with them. Highly recommended!",
    service: "Pet Grooming",
    image: "/happy-indian-woman-dog.png",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Gurgaon",
    rating: 5,
    review:
      "The veterinary service at home is a game-changer! Dr. Sarah visited our home for my cat's vaccination. No stress for my pet, and the service was top-notch. Thank you Paws Friend!",
    service: "Veterinary Service",
    image: "/indian-man-with-cat.png",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Noida",
    rating: 5,
    review:
      "Amazing dog training service! My Labrador was very naughty, but after 3 sessions with Paws Friend trainers, he's now well-behaved and obedient. Worth every rupee!",
    service: "Pet Training",
    image: "/indian-woman-labrador.png",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Delhi NCR",
    rating: 5,
    review:
      "The pet boarding facility is fantastic! Left my two dogs for a week vacation. They were well-cared for with regular updates and photos. My pets were happy and healthy when I returned.",
    service: "Pet Boarding",
    image: "/indian-man-with-dogs.png",
  },
  {
    id: 5,
    name: "Meera Joshi",
    location: "Faridabad",
    rating: 5,
    review:
      "Dog walking service is excellent! The walker is punctual and takes great care of my Beagle. I get regular updates with photos during walks. Highly satisfied with the service!",
    service: "Dog Walking",
    image: "/indian-woman-beagle.png",
  },
  {
    id: 6,
    name: "Arjun Malhotra",
    location: "Ghaziabad",
    rating: 5,
    review:
      "Online vet consultation saved my day! My cat was unwell late at night, and I got immediate help through video call. The vet was knowledgeable and provided great advice. Affordable too!",
    service: "Online Consultation",
    image: "/placeholder-3hl19.png",
  },
];

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F2F2F2" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px bg-gray-400 w-16"></div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FF6B6B" }}
            >
              <Quote className="w-4 h-4 text-white" />
            </div>
            <div className="h-px bg-gray-400 w-16"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what pet parents
            across Delhi NCR say about Paws Friend services.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-8">
          <Card className="max-w-4xl mx-auto shadow-lg border-0 overflow-hidden">
            <CardContent className="p-8 bg-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-full overflow-hidden border-4"
                    style={{ borderColor: "#FF6B6B" }}
                  >
                    <Image
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-gray-300 mb-4 mx-auto md:mx-0" />

                  {/* Review Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                    "{testimonials[currentIndex].review}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].location}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#FF6B6B" }}
                    >
                      {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-2 bg-white hover:bg-gray-50"
            style={{ borderColor: "#FF6B6B" }}
          >
            <ChevronLeft className="w-5 h-5" style={{ color: "#FF6B6B" }} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-2 bg-white hover:bg-gray-50"
            style={{ borderColor: "#FF6B6B" }}
          >
            <ChevronRight className="w-5 h-5" style={{ color: "#FF6B6B" }} />
          </Button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8" : "hover:scale-110"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#FF6B6B" : "#D1D5DB",
              }}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "#FF6B6B" }}
            >
              500+
            </div>
            <p className="text-gray-600">Happy Pet Parents</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "#FF6B6B" }}
            >
              4.9/5
            </div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "#FF6B6B" }}
            >
              1000+
            </div>
            <p className="text-gray-600">Services Completed</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to give your pet the best care? Join hundreds of satisfied
            customers!
          </p>
          <Button
            size="lg"
            className="text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: "#FF6B6B" }}
          >
            Book Your Service Now
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Call us at +91 9876543210 or book online
          </p>
        </div>
      </div>
    </section>
  );
}
