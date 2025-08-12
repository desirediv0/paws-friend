import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata = {
  title: "Paws Friend - Professional Pet Care Services",
  description:
    "Professional veterinary care, grooming, training, and lab services for your beloved pets. Book appointments online with licensed vets and certified groomers.",
  keywords:
    "veterinary, pet care, grooming, training, lab tests, pet health, veterinary clinic",
  authors: [{ name: "Paws Friend" }],
  creator: "Paws Friend",
  publisher: "Paws Friend",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pawsfriend.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paws Friend - Professional Pet Care Services",
    description:
      "Professional veterinary care, grooming, training, and lab services for your beloved pets.",
    url: "https://pawsfriend.com",
    siteName: "Paws Friend",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paws Friend - Professional Pet Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paws Friend - Professional Pet Care Services",
    description:
      "Professional veterinary care, grooming, training, and lab services for your beloved pets.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Veterinary",
              name: "Paws Friend",
              description:
                "Professional veterinary care, grooming, training, and lab services for pets",
              url: "https://pawsfriend.com",
              logo: "https://pawsfriend.com/logo.png",
              image: "https://pawsfriend.com/hero-image.jpg",
              telephone: "+1-555-123-4567",
              email: "info@pawsfriend.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Pet Care Lane",
                addressLocality: "Pet City",
                addressRegion: "CA",
                postalCode: "90210",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.0522,
                longitude: -118.2437,
              },
              openingHours: [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-17:00",
                "Su 10:00-16:00",
              ],
              sameAs: [
                "https://facebook.com/pawsfriend",
                "https://instagram.com/pawsfriend",
                "https://twitter.com/pawsfriend",
              ],
            }),
          }}
        />
      </head> */}
      <body className="antialiased bg-[#f2f2f2] text-gray-900 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
