"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X } from "lucide-react";
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="nav-brand">
        <img src="/assets/images/logo.png" alt="Mahaurja Logo" style={{ height: "72px", objectFit: "contain" }} />
      </Link>
      
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
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
            {t("nav_contact")}
          </Link>
        </li>
        <li>
          <button onClick={toggleLang} className="lang-btn">
            EN | हिंदी
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu />
      </button>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
              zIndex: 2000,
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "300px",
              height: "100vh",
              background: "var(--white)",
              zIndex: 2001,
              boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              padding: "2rem"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
              <Link href="/" className="nav-brand" style={{ gap: "0.5rem" }} onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/assets/images/logo.png" alt="Mahaurja Logo" style={{ height: "56px", objectFit: "contain" }} />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)" }}>
                <X size={28} />
              </button>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)", fontSize: "1.1rem", color: pathname === "/" ? "var(--primary-color)" : "var(--text-dark)", fontWeight: pathname === "/" ? 700 : 500 }}>{t("nav_home")}</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)", fontSize: "1.1rem", color: pathname === "/about" ? "var(--primary-color)" : "var(--text-dark)", fontWeight: pathname === "/about" ? 700 : 500 }}>{t("nav_about")}</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)", fontSize: "1.1rem", color: pathname === "/services" ? "var(--primary-color)" : "var(--text-dark)", fontWeight: pathname === "/services" ? 700 : 500 }}>{t("nav_services")}</Link>

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)", fontSize: "1.1rem", color: pathname === "/contact" ? "var(--primary-color)" : "var(--text-dark)", fontWeight: pathname === "/contact" ? 700 : 500 }}>{t("nav_contact")}</Link>
            </div>

            <div style={{ marginTop: "auto" }}>
              <button 
                onClick={toggleLang} 
                style={{ width: "100%", padding: "1rem", background: "var(--primary-color)", color: "white", border: "none", borderRadius: "30px", fontWeight: 600, fontSize: "1rem" }}
              >
                Switch Language (EN / हिंदी)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
