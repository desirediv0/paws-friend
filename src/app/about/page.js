import HeroBanner from "@/components/hero-banner";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Shield, Activity } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#F2F2F2" }}>
      <HeroBanner
        title="About Paws Friend"
        subtitle="Your Trusted Pet Care Partner"
        description="Welcome to our pet care sanctuary, where passion meets expertise. We specialize in training, grooming, walking, boarding, and veterinary services with a team of dedicated professionals."
        backgroundImage="/happy-pets-vet.png"
      />

      {/* Mission, Vision, Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Paws Friend is dedicated to keeping pets healthy and happy at
                  all times. We offer comprehensive services including grooming,
                  walking, training, and veterinary care with a team of
                  passionate pet lovers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We aspire to be the premier pet care service provider,
                  ensuring every pet feels safe, happy, and loved in our
                  presence. Your furry friends deserve nothing but the best.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Values
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#FF6B6B" }}
                    ></div>
                    <span className="text-gray-600">
                      <strong>Love:</strong> We care for every pet
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#FF6B6B" }}
                    ></div>
                    <span className="text-gray-600">
                      <strong>Knowledge:</strong> Expert pet care
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#FF6B6B" }}
                    ></div>
                    <span className="text-gray-600">
                      <strong>Trust:</strong> Always doing what's best
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#FF6B6B" }}
                    ></div>
                    <span className="text-gray-600">
                      <strong>Health:</strong> Optimal pet wellness
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#FF6B6B" }}
                    ></div>
                    <span className="text-gray-600">
                      <strong>Family:</strong> Pets are family
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pet Care Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Specialized Care for Your Pets
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Dogs Care */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/happy-dog-icon.png"
                    alt="Dog"
                    className="w-15 h-15 rounded-full"
                    width={500}
                    height={500}
                  />
                  <h3 className="text-3xl font-bold text-gray-800">For Dogs</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Activity
                      className="w-5 h-5 mt-1"
                      style={{ color: "#FF6B6B" }}
                    />
                    <p className="text-gray-600">
                      Regular walks and playtime to keep dogs physically active
                      and mentally stimulated
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity
                      className="w-5 h-5 mt-1"
                      style={{ color: "#FF6B6B" }}
                    />
                    <p className="text-gray-600">
                      Balanced and nutritious diet tailored to individual needs
                      and health conditions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity
                      className="w-5 h-5 mt-1"
                      style={{ color: "#FF6B6B" }}
                    />
                    <p className="text-gray-600">
                      Regular health check-ups and vaccination schedules
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cats Care */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/happy-cat-icon.png"
                    alt="Cat"
                    className="w-15 h-15 rounded-full"
                    width={500}
                    height={500}
                  />
                  <h3 className="text-3xl font-bold text-gray-800">For Cats</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Activity
                      className="w-5 h-5 mt-1"
                      style={{ color: "#FF6B6B" }}
                    />
                    <p className="text-gray-600">
                      Balanced nutrition with special dietary considerations for
                      health conditions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity
                      className="w-5 h-5 mt-1"
                      style={{ color: "#FF6B6B" }}
                    />
                    <p className="text-gray-600">
                      Clean and comfortable environment with engaging playtime
                      activities
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity
                      className="w-5 h-5 mt-1"
                      style={{ color: "#FF6B6B" }}
                    />
                    <p className="text-gray-600">
                      Regular brushing to prevent matting and reduce shedding
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Expert Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our experienced veterinarians and pet care specialists are dedicated
            to providing the highest quality care for your beloved pets.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder-8lr3j.png"
                  alt="Dr. Deepak Malik"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  width={500}
                  height={500}
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Dr. Deepak Malik
                </h3>
                <p className="text-gray-600 mb-4">Senior Veterinarian</p>
                <p className="text-sm text-gray-500">
                  Specializing in home visits, surgery, and comprehensive pet
                  health care
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Image
                  src="/indian-female-veterinarian.png"
                  alt="Dr. Diksha Moun"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  width={500}
                  height={500}
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Dr. Diksha Moun
                </h3>
                <p className="text-gray-600 mb-4">Veterinary Specialist</p>
                <p className="text-sm text-gray-500">
                  Expert in pet training, vaccination, and online consultations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
