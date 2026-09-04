"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

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
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping and Delivery Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Refund Return Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
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
            
            <div className="flex flex-col space-y-4 text-[13px] text-slate-300 leading-relaxed">
              <div>
                <span className="text-slate-300">Phone: </span>
                <a href="tel:+919340212401" className="hover:text-white transition-colors">+91 9340 212 401</a>
              </div>
              <div>
                <span className="text-slate-300">Email: </span>
                <a href="mailto:harsh@bharatindustrialrenewables.com" className="hover:text-white transition-colors">harsh@bharatindustrialrenewables.com</a>
              </div>
              <div>
                <span className="text-slate-300">Address: </span>
                <a href="https://maps.app.goo.gl/YG5JFpEyDqnC76A59" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  288, Lokmanya Tilak Path, Ujjain Road,<br/>
                  Railway Crossing ke paas, Badnagar,<br/>
                  Jila Ujjain (M.P.) 456771. India
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
