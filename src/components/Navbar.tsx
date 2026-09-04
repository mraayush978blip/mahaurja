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
              maxWidth: "85vw",
              height: "100vh",
              background: "#051f11", // Dark green theme
              zIndex: 2001,
              boxShadow: "-10px 0 30px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem",
              overflowY: "auto"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <Link href="/" className="nav-brand" style={{ gap: "0.5rem", background: "white", padding: "0.5rem", borderRadius: "10px" }} onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/assets/images/logo.png" alt="Mahaurja Logo" style={{ height: "40px", objectFit: "contain" }} />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", color: "white", padding: "0.5rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={24} />
              </button>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: "1 0 auto" }}>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "1rem", borderRadius: "12px", background: pathname === "/" ? "rgba(255,255,255,0.1)" : "transparent", fontSize: "1.1rem", color: pathname === "/" ? "#4ade80" : "#cbd5e1", fontWeight: pathname === "/" ? 700 : 500, transition: "all 0.2s" }}>{t("nav_home")}</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "1rem", borderRadius: "12px", background: pathname === "/about" ? "rgba(255,255,255,0.1)" : "transparent", fontSize: "1.1rem", color: pathname === "/about" ? "#4ade80" : "#cbd5e1", fontWeight: pathname === "/about" ? 700 : 500, transition: "all 0.2s" }}>{t("nav_about")}</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "1rem", borderRadius: "12px", background: pathname === "/services" ? "rgba(255,255,255,0.1)" : "transparent", fontSize: "1.1rem", color: pathname === "/services" ? "#4ade80" : "#cbd5e1", fontWeight: pathname === "/services" ? 700 : 500, transition: "all 0.2s" }}>{t("nav_services")}</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "1rem", borderRadius: "12px", background: pathname === "/contact" ? "rgba(255,255,255,0.1)" : "transparent", fontSize: "1.1rem", color: pathname === "/contact" ? "#4ade80" : "#cbd5e1", fontWeight: pathname === "/contact" ? 700 : 500, transition: "all 0.2s" }}>{t("nav_contact")}</Link>
            </div>

            <div style={{ marginTop: "2rem", paddingBottom: "2rem" }}>
              <button 
                onClick={toggleLang} 
                style={{ width: "100%", padding: "1rem", background: "#16a34a", color: "white", border: "none", borderRadius: "12px", fontWeight: 600, fontSize: "1rem", cursor: "pointer", transition: "background 0.2s" }}
                onMouseOver={(e) => e.currentTarget.style.background = "#15803d"}
                onMouseOut={(e) => e.currentTarget.style.background = "#16a34a"}
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
