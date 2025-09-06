import BookingProcess from "@/components/booking-process";
// import VideoTestimonials from "@/components/customer-testimonials";
import HeroCarousel from "@/components/HeroCarousel";
import ModernHero from "@/components/modern-hero";
import PetCareInfo from "@/components/pet-care-info";
import PetServices from "@/components/pet-services";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen mt-24 md:mt-28">
      <HeroCarousel />
      <ModernHero />
      <PetServices />
      <WhyChooseUs />
      <PetCareInfo />
      {/* <VideoTestimonials /> */}
      <BookingProcess />
      <TestimonialsSection />
    </main>
  );
}
