"use client";

import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-white/10 pb-12 mb-8">
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Leaf className="text-accent w-8 h-8" />
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold tracking-wider leading-none text-white">MAHAURJA</span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-widest mt-1">BHARAT INDUSTRIAL & RENEWABLES</span>
              </div>
            </div>
            <p className="text-slate-300 max-w-xs text-sm">{t("contact_subtitle")}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold mb-4 text-lg">{t("contact_title")}</h3>
              <p className="text-slate-300 text-sm mb-2"><strong>{t("contact_name")}</strong> - Founder & Director</p>
              <p className="text-slate-300 text-sm mb-2 flex items-center justify-center md:justify-start gap-2"><Phone className="w-4 h-4 text-slate-400" /> +91 9340212401</p>
              <p className="text-slate-300 text-sm mb-2 flex items-center justify-center md:justify-start gap-2"><Mail className="w-4 h-4 text-slate-400" /> harsh@bharatindustrialrenewables.com</p>
              <p className="text-slate-300 text-sm"><strong>LLPIN :</strong> ACS-7398</p>
            </div>
            
            <div className="text-center md:text-left max-w-xs">
              <h3 className="text-white font-bold mb-4 text-lg">Location</h3>
              <p className="text-slate-300 text-sm flex items-start justify-center md:justify-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> 
                <span>288, Lokmanya Tilak Path, Ujjain Road, Railway Crossing ke paas, Badnagar, Jila Ujjain (M.P.) 456771</span>
              </p>
            </div>
          </div>

        </div>
        <div className="text-center text-slate-400 text-xs font-medium tracking-wide">
          {t("footer_tagline")}
        </div>
      </div>
    </footer>
  );
}
