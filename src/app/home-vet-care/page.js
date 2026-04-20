import HomeVetHero from "@/components/HomeVetHero";
import HomePetServices from "@/components/HomePetServices";
import VetReviews from "@/components/VetReviews";
import FAQSection from "@/components/FAQSection";
import ExpertCare from "@/components/ExpertCare";
import WhyChooseSide from "@/components/WhyChooseSide";
import PromoBanner from "@/components/PromoBanner";
import CareSteps from "@/components/CareSteps";
import TrustGrid from "@/components/TrustGrid";
import FooterContact from "@/components/FooterContact";

export const metadata = {
  title: "Professional Vet & Pet Care at Your Home | Paws Friend",
  description: "Licensed veterinary care at your doorstep. No travel, no stress. Same-day visits available in Delhi NCR. Book now for a stress-free pet consultation.",
};

export default function HomeVetCarePage() {
  return (
    <main className="min-h-screen bg-white ">
      {/* 01. Hero Section with Booking Form (Screenshot #1) */}
      <div id="booking">
        <HomeVetHero />
      </div>

      {/* 02. Expert Care Stats & Banner (Screenshot #2) */}
      <ExpertCare />

      {/* 03. Why Choose Side (Image + Checklist) (Screenshot #6) */}
      <WhyChooseSide />

      {/* 04. First Visit Special Promo (Screenshot #7) */}
      <PromoBanner />

      {/* 05. Step-by-step Care Guide (Screenshot #3 & #4) */}
      <CareSteps />

      {/* 06. All Pet Services (Screenshot #5) */}
      <HomePetServices />

      {/* 07. Trust Grid (6 Cards) (Screenshot #7 & #8) */}
      <TrustGrid />

      {/* 08. Reviews (Screenshot #7) */}
      <VetReviews />

      {/* 09. FAQ (Screenshot #8) */}
      <FAQSection />

      {/* 10. Contact Us Banner (Screenshot #8) */}
      <FooterContact />

      {/* Simple Navigation Footer */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center space-x-8">
            <a href="#booking" className="text-sm font-black text-sky-950 border-b-2 border-transparent hover:border-[#F05434] transition-all ">Book Visit</a>
            <a href="/" className="text-sm font-black text-sky-950 border-b-2 border-transparent hover:border-[#F05434] transition-all ">Back to Home</a>
          </div>
        </div>
      </section>
    </main>
  );
}
