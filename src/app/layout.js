import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBottomBar from "@/components/FloatingBottomBar";
import VetConsultation from "@/components/vet-consultation";
import Script from "next/script";

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
  metadataBase: new URL("https://pawsfriend.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paws Friend - Professional Pet Care Services",
    description:
      "Professional veterinary care, grooming, training, and lab services for your beloved pets.",
    url: "https://pawsfriend.in",
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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17519548132" strategy="afterInteractive"></Script>
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17519548132');
          `}
        </Script>
      </head>
      <body className="antialiased  text-gray-900 overflow-x-hidden bg-[url('/bg-mobile.jpg')] md:bg-[url('/bg-big.jpg')]">
        <Header />
        <div className="relative">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F2F2F2]/30 via-[#F2F2F2]/50 to-[#F2F2F2]/50 md:from-[#F2F2F2]/50 md:via-[#F2F2F2]/60 md:to-[#F2F2F2]/60"></div>

            {/* Subtle floating elements - hidden on mobile */}
            <div className="hidden md:block absolute top-20 left-20 w-64 h-64 bg-[#F05434]/50 rounded-full blur-3xl"></div>
            <div className="hidden md:block absolute top-40 right-32 w-80 h-80 bg-[#F05434]/50 rounded-full blur-3xl"></div>
            <div className="hidden md:block absolute bottom-32 left-40 w-72 h-72 bg-[#F05434]/50 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            {children}
            <VetConsultation />
            <FloatingBottomBar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
