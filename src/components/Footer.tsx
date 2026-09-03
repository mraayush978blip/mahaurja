"use client";

import { Leaf, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#0f172a] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(245, 158, 11, 0.4) 0%, transparent 40%)' }} />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 border-b border-white/10 pb-16 mb-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity">
              <img src="/assets/images/logo2.png" alt="Mahaurja Logo" style={{ height: "48px", objectFit: "contain" }} />
            </Link>
            <p className="text-slate-300 text-[0.95rem] leading-relaxed max-w-md mb-8">
              {t("contact_subtitle") || "Leading India's transition to green thermal power with premium, high-efficiency biomass pellets."}
            </p>
            <div className="inline-block bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-slate-300 font-medium">
              <span className="text-slate-400">LLPIN:</span> <span className="text-white">ACS-7398</span>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent inline-block"></span> 
              {t("contact_title")}
            </h3>
            <div className="space-y-5">
              <div className="group">
                <p className="text-accent font-semibold mb-1 text-sm">{t("contact_name")} <span className="text-slate-400 font-normal ml-1">— Founder & Director</span></p>
              </div>
              
              <a href="tel:+919340212401" className="flex items-center justify-center md:justify-start gap-3 group transition-all">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 border border-transparent group-hover:border-accent/30 transition-colors">
                  <Phone className="w-4 h-4 text-slate-300 group-hover:text-accent" />
                </div>
                <span className="text-slate-200 text-sm font-medium group-hover:text-white">+91 9340212401</span>
              </a>

              <a href="mailto:harsh@bharatindustrialrenewables.com" className="flex items-center justify-center md:justify-start gap-3 group transition-all">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 border border-transparent group-hover:border-accent/30 transition-colors">
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-accent" />
                </div>
                <span className="text-slate-200 text-sm font-medium group-hover:text-white break-all">harsh@bharatindustrialrenewables.com</span>
              </a>
            </div>
          </div>
          
          {/* Location Column */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent inline-block"></span> 
              Location
            </h3>
            <div className="flex items-start justify-center md:justify-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                <MapPin className="w-4 h-4 text-slate-300" />
              </div>
              <p className="text-slate-300 text-[0.9rem] leading-relaxed pt-1.5">
                288, Lokmanya Tilak Path, Ujjain Road, Railway Crossing ke paas, Badnagar, Jila Ujjain (M.P.) 456771
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} MAHAURJA. All rights reserved.</p>
          <div className="flex items-center gap-2 opacity-80 tracking-wide text-xs uppercase">
            {t("footer_tagline") || "Clean Fuel | Better Future | Economic Gain | Env Protection | Sust. Growth"}
          </div>
        </div>
      </div>
    </footer>
  );
}
