import type { Metadata } from "next";
import { Inter, Mukta, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/hooks/useTranslation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mukta = Mukta({ weight: ["400", "500", "600", "700"], subsets: ["latin", "devanagari"], variable: "--font-mukta" });
const notoSans = Noto_Sans_Devanagari({ weight: ["400", "600", "700", "800"], subsets: ["devanagari"], variable: "--font-noto-sans" });

export const metadata: Metadata = {
  title: "Mahaurja - Bharat Industrial & Renewables",
  description: "Clean Energy • Empowered Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mukta.variable} ${notoSans.variable}`}>
        <TranslationProvider>
          <Navbar />
          {children}
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
