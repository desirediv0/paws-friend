import BookingProcess from "@/components/booking-process";
// import VideoTestimonials from "@/components/customer-testimonials";
import HeroCarousel from "@/components/HeroCarousel";
import ModernHero from "@/components/modern-hero";
import PetCareInfo from "@/components/pet-care-info";
import PetServices from "@/components/pet-services";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ModernHero />
      <PetServices />
      <WhyChooseUs />
      <PetCareInfo />
      {/* <VideoTestimonials /> */}
      <BookingProcess />
    </main>
  );
}
