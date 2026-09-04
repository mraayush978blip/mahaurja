"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0b121e] text-slate-300 pt-10 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column - Brand & Copyright */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block bg-white px-4 py-3 rounded-xl mb-4 shadow-md hover:opacity-95 transition-opacity">
              <img src="/assets/images/logo.png" alt="Mahaurja Logo" style={{ height: "48px", objectFit: "contain" }} />
            </Link>
            <p className="text-slate-400 text-sm mb-2">
              Connect with our specialized teams.
            </p>
            <div className="text-slate-500 text-sm mb-4 font-medium flex gap-2">
              <span className="uppercase">LLPIN:</span> 
              <span className="text-slate-300 font-semibold tracking-wide">ACS-7398</span>
            </div>
            <p className="text-slate-600 text-xs mt-auto pt-2">
              © {new Date().getFullYear()} MAHAURJA. All rights reserved.
            </p>
          </div>

          {/* Middle Column - Contact Us */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[#059669] font-bold text-xs tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#059669] inline-block"></span> 
              {t("contact_title")}
            </h3>
            <div className="space-y-3">
              <p className="text-slate-200 font-semibold text-sm mb-3">
                {t("contact_name")} <span className="text-slate-500 font-normal ml-1">— Founder & Director</span>
              </p>

              <a href="tel:+919340212401" className="flex items-center justify-center md:justify-start gap-3 group transition-all">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center group-hover:bg-slate-700 border border-transparent transition-colors">
                  <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </div>
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">+91 9340212401</span>
              </a>

              <a href="mailto:harsh@bharatindustrialrenewables.com" className="flex items-center justify-center md:justify-start gap-3 group transition-all">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center group-hover:bg-slate-700 border border-transparent transition-colors">
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </div>
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors break-all">harsh@bharatindustrialrenewables.com</span>
              </a>
            </div>
          </div>
          
          {/* Right Column - Location & Tagline */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left h-full">
            <h3 className="text-[#059669] font-bold text-xs tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#059669] inline-block"></span> 
              Location
            </h3>
            <a href="https://maps.app.goo.gl/YG5JFpEyDqnC76A59" target="_blank" rel="noopener noreferrer" className="flex items-start justify-center md:justify-start gap-3 group transition-all mb-8">
              <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:bg-slate-700 border border-transparent transition-colors">
                <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </div>
              <p className="text-slate-300 text-[0.85rem] leading-relaxed group-hover:text-white transition-colors">
                288, Lokmanya Tilak Path, Ujjain Road,<br/>Railway Crossing ke paas, Badnagar, Jila<br/>Ujjain (M.P.) 456771
              </p>
            </a>

            <div className="mt-auto w-full flex justify-center md:justify-end">
              <div className="text-[0.6rem] text-slate-600 font-semibold tracking-[0.15em] uppercase whitespace-nowrap overflow-hidden text-ellipsis md:text-right">
                {t("footer_tagline") || "CLEAN FUEL | BETTER FUTURE | ECONOMIC BENEFIT | ENVIRONMENTAL PROTECTION | SUSTAINABLE DEVELOPMENT"}
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
