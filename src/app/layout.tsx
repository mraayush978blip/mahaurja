import type { Metadata, Viewport } from "next";
import { Inter, Mukta, Noto_Sans_Devanagari, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/hooks/useTranslation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mukta = Mukta({ weight: ["400", "500", "600", "700"], subsets: ["latin", "devanagari"], variable: "--font-mukta" });
const notoSans = Noto_Sans_Devanagari({ weight: ["400", "600", "700", "800"], subsets: ["devanagari"], variable: "--font-noto-sans" });
const playfair = Playfair_Display({ weight: ["400", "600", "700", "900"], subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Mahaurja - Bharat Industrial & Renewables",
  description: "Clean Energy • Empowered Future",
  openGraph: {
    title: "Mahaurja - Bharat Industrial & Renewables",
    description: "Custom-Engineered Biomass Pellets replacing fossil fuels 24/7 with reliable, high-energy green thermal power.",
    images: [
      {
        url: "/assets/images/about.png",
        width: 1200,
        height: 630,
        alt: "Mahaurja Clean Energy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahaurja - Bharat Industrial & Renewables",
    description: "Clean Energy • Empowered Future",
    images: ["/assets/images/about.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { Splash } from "@/components/Splash";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
                document.documentElement.classList.add('production-protection');
                document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
                document.addEventListener('dragstart', function(e) { e.preventDefault(); });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${mukta.variable} ${notoSans.variable} ${playfair.variable}`}>
        <TranslationProvider>
          <Splash />
          <Navbar />
          {children}
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
