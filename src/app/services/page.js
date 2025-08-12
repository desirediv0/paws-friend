import HeroBanner from "@/components/hero-banner";
import PetServices from "@/components/pet-services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2F2F2" }}>
      <HeroBanner
        title="Our Pet Care Services"
        subtitle="Professional Care for Your Beloved Pets"
        description="Discover our comprehensive range of pet care services designed to keep your furry friends healthy, happy, and well-cared for. From grooming to veterinary care, we bring professional services right to your doorstep."
        backgroundImage="/veterinarian-retriever.jpg"
        breadcrumbs={["Services"]}
      />

      <div id="services">
        <PetServices />
      </div>
    </div>
  );
}
