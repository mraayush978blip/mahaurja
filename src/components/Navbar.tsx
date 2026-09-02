"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${pathname === "/" ? "home-nav" : ""}`}>
      <div className="nav-brand">
        <Leaf className="text-accent" style={{ width: "32px", height: "32px", color: "var(--accent-color)" }} />
        <div className="nav-brand-text">
          <span className="brand-title">MAHAURJA</span>
          <span className="brand-subtitle">BHARAT INDUSTRIAL & RENEWABLES</span>
        </div>
      </div>
      
      {/* Desktop Links */}
      <ul className="nav-links">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            {t("nav_home")}
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            {t("nav_about")}
          </Link>
        </li>
        <li>
          <Link href="/services" className={pathname === "/services" ? "active" : ""}>
            {t("nav_services")}
          </Link>
        </li>
        <li>
          <Link href="/sustainability" className={pathname === "/sustainability" ? "active" : ""}>
            {t("nav_sustainability")}
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
            {t("nav_contact")}
          </Link>
        </li>
        <li>
          <button onClick={toggleLang} className="lang-btn" style={{ fontWeight: 600, padding: "0.5rem 1rem", background: "rgba(0,0,0,0.05)", borderRadius: "20px" }}>
            EN | हिंदी
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ display: "none" }} // Handled via CSS media queries, but kept simple here
      >
        <Menu />
      </button>

      {/* Simplified Mobile Menu Toggle for demonstration (CSS handles it normally) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              background: "white",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee", fontSize: "1.1rem" }}>{t("nav_home")}</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee", fontSize: "1.1rem" }}>{t("nav_about")}</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee", fontSize: "1.1rem" }}>{t("nav_services")}</Link>
            <Link href="/sustainability" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee", fontSize: "1.1rem" }}>{t("nav_sustainability")}</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee", fontSize: "1.1rem" }}>{t("nav_contact")}</Link>
            <button onClick={toggleLang} style={{ alignSelf: "flex-start", padding: "0.75rem 1.5rem", background: "var(--primary-color)", color: "white", border: "none", borderRadius: "30px", fontWeight: 600, marginTop: "0.5rem" }}>
              EN | हिंदी
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
