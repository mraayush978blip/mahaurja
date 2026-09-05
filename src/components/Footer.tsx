"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#18181a] text-[#a1a1aa] pt-16 pb-20 border-t border-slate-800 font-sans">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Left Column - About */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-base mb-2">
              About
            </h3>
            <div className="flex w-full mb-6">
              <div className="h-[1px] bg-[#059669] w-8"></div>
              <div className="h-[1px] bg-slate-700 flex-1"></div>
            </div>
            
            <p className="text-[13px] leading-loose text-slate-300">
              MAHAURJA is a globally recognized startup, registered as a Green Tech and Clean Tech enterprise. We are an innovative company dedicated to converting agricultural waste into valuable, clean energy resources.
            </p>
          </div>

          {/* Middle Column - Menu */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-base mb-2">
              Menu
            </h3>
            <div className="flex w-full mb-6">
              <div className="h-[1px] bg-[#059669] w-8"></div>
              <div className="h-[1px] bg-slate-700 flex-1"></div>
            </div>
            
            <ul className="flex flex-col space-y-4 text-[13px] text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services & Technology</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Right Column - Contact */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-base mb-2">
              Contact
            </h3>
            <div className="flex w-full mb-6">
              <div className="h-[1px] bg-[#059669] w-8"></div>
              <div className="h-[1px] bg-slate-700 flex-1"></div>
            </div>
            
            <div className="flex flex-col space-y-6 text-[13px] text-slate-300 leading-relaxed">
              <div className="flex flex-col gap-2">
                <span className="text-slate-400">Phone & WhatsApp:</span>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+919340212401" className="flex items-center gap-1.5 text-[#4ade80] hover:text-white transition-colors bg-[#4ade80]/10 px-3 py-1.5 rounded-lg border border-[#4ade80]/20 font-medium">
                    <Phone size={14} /> Call
                  </a>
                  <a href="https://wa.me/919340212401" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#22c55e] hover:text-white transition-colors bg-[#22c55e]/10 px-3 py-1.5 rounded-lg border border-[#22c55e]/20 font-medium">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400">Email:</span>
                <a href="mailto:harsh@bharatindustrialrenewables.com" className="flex items-center gap-2 text-slate-300 hover:text-[#4ade80] transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-[#4ade80]">
                  <Mail size={16} /> harsh@bharatindustrialrenewables.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400">Address:</span>
                <a href="https://maps.app.goo.gl/YG5JFpEyDqnC76A59" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-slate-300 hover:text-[#4ade80] transition-colors group">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-slate-500 group-hover:text-[#4ade80] transition-colors" />
                  <span className="underline underline-offset-4 decoration-slate-700 group-hover:decoration-[#4ade80] transition-colors">
                    288, Lokmanya Tilak Path, Ujjain Road,<br/>
                    Railway Crossing ke paas, Badnagar,<br/>
                    Jila Ujjain (M.P.) 456771. India
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
