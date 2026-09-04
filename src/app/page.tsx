"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import {
  Flame, Factory, Leaf, Trees, Sun, FlaskConical,
  CircleDollarSign, TrendingDown, ShieldCheck, Zap,
  ChevronRight, Wheat, Package, ArrowRight,
  Droplet, Clock, TrendingUp, Cloud
} from "lucide-react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// ─── Animation Variants ───────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

// ─── Animated Counter ─────────────────────────────────────
function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      className="font-black text-5xl md:text-6xl text-white leading-none"
    >
      {value}
      {suffix}
    </motion.span>
  );
}

// ─── Feedstock card ───────────────────────────────────────
const feedItems = [
  { icon: "🥜", key: "feed_1", image: "/assets/images/straw.png" }, // Using straw placeholder for now
  { icon: "🌲", key: "feed_2", image: "/assets/images/wood.png" },
  { icon: "🌾", key: "feed_3", image: "/assets/images/groundnut.png" },
  { icon: "🌱", key: "feed_4", image: "/assets/images/husk.jpg" }, // Sprout fallback
];

// ─── ROI Calculation ──────────────────────────────────────
const savingsMultiplier: Record<string, number> = { coal: 0.55, diesel: 0.72, gas: 0.60 };

export default function Home() {
  const { t } = useTranslation();
  const [rotatorIdx, setRotatorIdx] = useState(0);
  const [fuelType, setFuelType] = useState<"coal" | "diesel" | "gas">("diesel");
  const [monthlySpend, setMonthlySpend] = useState(200000);
  const [activeFeed, setActiveFeed] = useState<number | null>(null);

  // Rotator
  useEffect(() => {
    const id = setInterval(() => setRotatorIdx((p) => (p === 0 ? 1 : 0)), 4500);
    return () => clearInterval(id);
  }, []);

  const savings = Math.round(monthlySpend * savingsMultiplier[fuelType]);
  const co2Annual = Math.round((monthlySpend / 10000) * (fuelType === "coal" ? 2.3 : fuelType === "diesel" ? 2.68 : 2.02) * 12);

  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (Video Background)
      ══════════════════════════════════════════════════════════ */}
      <section className="hero-video-section" id="home">
        {/* Video Background — lazy loaded, muted, loop */}
        <div className="video-bg-wrapper" aria-hidden="true">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            {/* 
              🎬 HIGH-QUALITY PLACEHOLDER — cinematic green agriculture/harvest aerial.
              Replace with your pellet/biomass video later by placing your file
              at /public/assets/hero-bg.mp4 and updating the src below.
            */}
            {/* Primary: Local Optimized Video (Fast Loading) */}
            <source
              src="/hero-bg-optimized.mp4"
              type="video/mp4"
            />
          </video>
          <div className="video-overlay" />
        </div>

        {/* Hero Content */}
        <motion.div
          className="hero-content-box"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="hero-badge">
            <Leaf size={14} /> BHARAT INDUSTRIAL & RENEWABLES LLP
          </motion.div>

          <motion.h1 variants={fadeUp} className="hero-h1">
            {t("hero_h1" as any)}
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-h2">
            {t("hero_h2" as any)}
          </motion.p>

          {/* Rotator */}
          <motion.div variants={fadeUp} className="hero-rotator-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatorIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="hero-rotator-text"
              >
                {rotatorIdx === 0 ? t("hero_rotator_1" as any) : t("hero_rotator_2" as any)}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="hero-ctas">
            <Link href="#rfq" className="btn-hero-primary">
              {t("hero_cta_primary" as any)} <ArrowRight size={18} />
            </Link>
            <Link href="#scale" className="btn-hero-secondary">
              {t("hero_cta_secondary" as any)}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — PROBLEM vs MAHAURJA WAY (AESTHETIC)
      ══════════════════════════════════════════════════════════ */}
      <section className="pvs-section section-padding" style={{ background: "linear-gradient(to bottom, #f7faf9, #e9f2eb)" }}>
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} style={{ position: "relative" }}>

          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ display: "inline-block", background: "#e8f3ec", color: "#196639", padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1rem" }}>🌱 Clean Energy • Green Future</span>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.5rem" }}>
              {t("pvs_section_title" as any)}
            </h2>
            <p style={{ color: "#555", fontSize: "1.1rem" }}>No more wasted residue, now the fuel for the nation's clean energy.</p>
          </motion.div>

          <div className="responsive-flex-wrap" style={{ display: "flex", gap: "5rem", justifyContent: "center", alignItems: "flex-start", position: "relative", zIndex: 2 }}>
            {/* Challenge */}
            <motion.div variants={fadeUp} className="responsive-child" style={{ flex: "1 1 400px", background: "#fcf0f0", borderRadius: "24px", padding: "2.5rem", border: "1px solid #fae1e1", boxShadow: "0 20px 40px rgba(220,53,69,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
                <div style={{ background: "#dc3545", color: "white", padding: "8px", borderRadius: "50%" }}>
                  <TrendingDown size={24} />
                </div>
                <h3 style={{ fontSize: "1.5rem", color: "#4a1515", fontWeight: 700, margin: 0 }}>{t("pvs_challenge_title" as any)}</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <li style={{ display: "flex", gap: "12px", color: "#555" }}><span style={{ color: "#fff", background: "#dc3545", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px" }}>✗</span>{t("pvs_challenge_p1" as any)}</li>
                <li style={{ display: "flex", gap: "12px", color: "#555" }}><span style={{ color: "#fff", background: "#dc3545", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px" }}>✗</span>{t("pvs_challenge_p2" as any)}</li>
              </ul>
            </motion.div>

            {/* Connecting Flexible Rope */}
            <div className="hide-on-mobile" style={{ position: "absolute", left: "50%", top: "45%", transform: "translate(-50%, -50%)", width: "120px", height: "120px", zIndex: 1, pointerEvents: "none" }}>
              <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                {/* Flexible dashed rope path curving from top-left to bottom-right */}
                <path d="M 0,30 C 60,30 60,100 120,100" stroke="#16a34a" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round" />
                {/* Arrowhead at the end of the rope */}
                <path d="M 105,85 L 120,100 L 105,115" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Solution */}
            <motion.div variants={fadeUp} className="responsive-child" style={{ flex: "1 1 400px", background: "#f0fdf4", borderRadius: "24px", padding: "2.5rem", border: "1px solid #dcfce7", boxShadow: "0 20px 40px rgba(22,163,74,0.05)", marginTop: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
                <div style={{ background: "#16a34a", color: "white", padding: "8px", borderRadius: "50%" }}>
                  <Leaf size={24} />
                </div>
                <h3 style={{ fontSize: "1.5rem", color: "#114524", fontWeight: 700, margin: 0 }}>{t("pvs_solution_title" as any)}</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <li style={{ display: "flex", gap: "12px", color: "#555" }}><span style={{ color: "#fff", background: "#16a34a", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px" }}>✓</span>{t("pvs_solution_p1" as any)}</li>
                <li style={{ display: "flex", gap: "12px", color: "#555" }}><span style={{ color: "#fff", background: "#16a34a", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px" }}>✓</span>{t("pvs_solution_p2" as any)}</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — FEEDSTOCK & FUEL ENGINEERING (PHOTO GRID)
      ══════════════════════════════════════════════════════════ */}
      <section className="feed-section section-padding bg-light" style={{ paddingBottom: "2rem" }}>
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>

          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ display: "inline-block", background: "#e8f3ec", color: "#196639", padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1rem" }}>🌿 Waste to Wealth</span>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.5rem" }}>
              {t("feed_section_title" as any)}
            </h2>
            <p style={{ color: "#555", fontSize: "1.1rem" }}>{t("feed_section_sub" as any)}</p>
          </motion.div>

          <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {feedItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", height: "100%" }}
                whileHover={{ y: -6, boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}
              >
                {/* Top Half */}
                <div style={{ padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#222" }}>{t(`${item.key}_title` as any)}</h4>
                      <p style={{ margin: 0, fontSize: "0.8rem", color: "#777", marginTop: "4px" }}>{t("nav_sustainability" as any)}</p>
                    </div>
                  </div>
                </div>
                {/* Bottom Half (Image) */}
                <div style={{ width: "100%", height: "180px", flexShrink: 0, backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Flagship Blend Banner */}
          <motion.div variants={fadeUp} style={{ background: "linear-gradient(135deg, #0f5132 0%, #1a8b54 100%)", borderRadius: "24px", padding: "2.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem", color: "white", boxShadow: "0 20px 40px rgba(15,81,50,0.3)" }}>
            <div className="responsive-child" style={{ flex: "1 1 300px" }}>
              <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1rem", border: "1px solid rgba(255,255,255,0.2)" }}>⭐ {t("feed_flagship_sub" as any)}</span>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, margin: "0 0 1rem 0", color: "white" }}>{t("feed_flagship_title" as any)}</h3>
              <p style={{ opacity: 0.9, fontSize: "0.95rem", lineHeight: 1.6, margin: 0, maxWidth: "450px", color: "white" }}>{t("feed_flagship_desc" as any)}</p>
            </div>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 500 }}><Flame size={18} color="#facc15" /> High Heat Capacity</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 500 }}><Leaf size={18} color="#4ade80" /> Low Carbon Emissions</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 500 }}><ShieldCheck size={18} color="#60a5fa" /> 100% Sustainable Fuel</div>
              </div>

              <div style={{ background: "rgba(0,0,0,0.2)", border: "2px solid rgba(255,255,255,0.2)", borderRadius: "16px", padding: "1.5rem", textAlign: "center", minWidth: "200px" }}>
                <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.8, marginBottom: "8px" }}>TARGET GCV</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#facc15", lineHeight: 1 }}>5,000+</div>
                <div style={{ fontSize: "1rem", fontWeight: 600, marginTop: "4px" }}>🔥 kcal/kg</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — TECHNICAL SPECIFICATION MATRIX (AESTHETIC)
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#f8fdfa", position: "relative", overflow: "hidden" }}>
        {/* Background Leaves */}
        <div style={{ position: "absolute", top: "-20px", left: "-50px", transform: "rotate(135deg)", opacity: 0.15, filter: "blur(8px)", zIndex: 1 }}>
          <Leaf size={300} color="#16a34a" strokeWidth={1} fill="#16a34a" />
        </div>
        <div style={{ position: "absolute", top: "20%", right: "-80px", transform: "rotate(-45deg)", opacity: 0.15, filter: "blur(10px)", zIndex: 1 }}>
          <Leaf size={250} color="#15803d" strokeWidth={1} fill="#15803d" />
        </div>
        <div style={{ position: "absolute", bottom: "-50px", left: "15%", transform: "rotate(45deg)", opacity: 0.1, filter: "blur(12px)", zIndex: 1 }}>
          <Leaf size={350} color="#4ade80" strokeWidth={1} fill="#4ade80" />
        </div>

        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} style={{ position: "relative", zIndex: 2 }}>
          
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ display: "inline-block", background: "#e8f3ec", color: "#196639", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>
              🌱 Better Technology, Better Future
            </span>
            <h2 className="section-title" style={{ fontSize: "2.8rem", fontWeight: 800, color: "#064024", marginBottom: "0.5rem" }}>
              {t("spec_section_title" as any)}
            </h2>
            <p style={{ color: "#444", fontSize: "1.1rem", fontWeight: 500 }}>
              Our premium technology is designed for high energy, low emissions, and a sustainable future.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ background: "#fff", borderRadius: "24px", overflowX: "auto", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", border: "1px solid #eaeaea", maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ minWidth: "700px" }}>
            {/* Header Row */}
            <div style={{ display: "flex", background: "#0c5836", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>
              <div style={{ flex: "1.2", padding: "1.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <FlaskConical size={20} /> {t("spec_param" as any)}
              </div>
              <div style={{ flex: "1", padding: "1.5rem", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {t("spec_standard" as any)}
              </div>
              <div style={{ flex: "1.2", padding: "1.5rem", background: "#116b43", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <Leaf size={20} /> {t("spec_premium" as any)}
              </div>
            </div>

            {/* Body Rows */}
            {[
              { 
                icon: <Flame color="#16a34a" size={20} />, iconBg: "#dcfce7", feature: t("spec_gcv" as any), 
                normal: t("spec_gcv_std" as any), 
                premiumIcon: <Flame color="#ea580c" size={24} />, premiumTitle: "5,000+ kcal/kg", premiumDesc: t("spec_gcv_prem" as any)
              },
              { 
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#16a34a"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>, iconBg: "#dcfce7", feature: t("spec_moisture" as any), 
                normal: t("spec_moisture_std" as any), 
                premiumIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#16a34a"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>, premiumTitle: t("spec_moisture_prem" as any), premiumDesc: t("spec_moisture_prem" as any)
              },
              { 
                icon: <Sun color="#16a34a" size={20} />, iconBg: "#dcfce7", feature: t("spec_ash" as any), 
                normal: `${t("spec_ash_std" as any)} | ${t("spec_ash_std" as any)}`, 
                premiumIcon: <ShieldCheck color="#16a34a" size={24} />, premiumTitle: t("spec_ash_prem" as any), premiumDesc: t("spec_ash_prem" as any)
              },
              { 
                icon: <Leaf color="#16a34a" size={20} />, iconBg: "#dcfce7", feature: "Smoke & Dust", 
                normal: "High Volume", 
                premiumIcon: <ShieldCheck color="#16a34a" size={24} />, premiumTitle: "Minimal Emissions", premiumDesc: "Clean and Eco-friendly"
              },
              { 
                icon: <ShieldCheck color="#16a34a" size={20} />, iconBg: "#dcfce7", feature: t("spec_quality" as any), 
                normal: t("spec_quality_std" as any), 
                premiumIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>, premiumTitle: t("spec_quality_prem" as any), premiumDesc: "Better durability and reliable operation"
              }
            ].map((row, idx) => (
              <div key={idx} style={{ display: "flex", borderBottom: idx !== 4 ? "1px solid #eaeaea" : "none", color: "#333" }}>
                <div style={{ flex: "1.2", padding: "1.5rem", display: "flex", alignItems: "center", gap: "16px", fontWeight: 600 }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: row.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {row.icon}
                  </div>
                  {row.feature}
                </div>
                <div style={{ flex: "1", padding: "1.5rem", borderLeft: "1px solid #eaeaea", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#666", fontWeight: 500 }}>
                  {row.normal}
                </div>
                <div style={{ flex: "1.2", padding: "1.5rem", background: "#f0fdf4", borderLeft: "1px solid #dcfce7", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {row.premiumIcon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#115e3b", fontSize: "1.1rem" }}>{row.premiumTitle}</div>
                    <div style={{ fontSize: "0.85rem", color: "#16a34a", marginTop: "4px", fontWeight: 500 }}>{row.premiumDesc}</div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </motion.div>

          {/* Bottom Badges */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginTop: "2rem", maxWidth: "1000px", margin: "2rem auto 0" }}>
            {[
              { icon: <Leaf color="#fff" size={18} />, bg: "#16a34a", title: "More Energy", desc: "Better energy generation through high calorific value" },
              { icon: <span style={{ fontSize: "14px", fontWeight: 800, color: "#fff" }}>CO₂</span>, bg: "#0f5132", title: "Low Emissions", desc: "Eco-friendly and clean operation" },
              { icon: <span style={{ fontSize: "18px" }}>🌱</span>, bg: "#c2e6cb", title: "Cost Savings", desc: "Savings through low ash, low moisture, and high efficiency" },
              { icon: <ShieldCheck color="#fff" size={18} />, bg: "#0f5132", title: "Reliable & Safe", desc: "Safe and reliable technology with the highest standards" }
            ].map((badge, idx) => (
              <div key={idx} style={{ flex: "1 1 200px", background: "#fff", borderRadius: "16px", padding: "1rem", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.04)", border: "1px solid #eaeaea" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: badge.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {badge.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "#064024", fontSize: "0.95rem" }}>{badge.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "#666", marginTop: "2px", lineHeight: 1.3 }}>{badge.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — PROOF OF SCALE
      ══════════════════════════════════════════════════════════ */}
      <section className="scale-section section-padding" id="scale">
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="section-title text-white">{t("scale_section_title" as any)}</motion.h2>
          <motion.div variants={stagger} className="scale-grid">
            {[
              { icon: <Package size={36} />, numKey: "scale_1_num", unitKey: "scale_1_unit", descKey: "scale_1_desc" },
              { icon: <Factory size={36} />, numKey: "scale_2_num", unitKey: "scale_2_unit", descKey: "scale_2_desc" },
              { icon: <FlaskConical size={36} />, numKey: "scale_3_num", unitKey: "scale_3_unit", descKey: "scale_3_desc" },
              { icon: <Sun size={36} />, numKey: "scale_4_num", unitKey: "scale_4_unit", descKey: "scale_4_desc" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="scale-card" whileHover={{ y: -6 }}>
                <div className="scale-icon">{item.icon}</div>
                <AnimatedNumber value={t(item.numKey as any)} />
                <div className="scale-unit">{t(item.unitKey as any)}</div>
                <p className="scale-desc">{t(item.descKey as any)}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — ROI & COST ESTIMATOR
      ══════════════════════════════════════════════════════════ */}
      <section className="roi-section section-padding" style={{ background: "#f9fcfb", paddingBottom: "4rem" }}>
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ display: "inline-block", background: "#e8f3ec", color: "#196639", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>
              🌱 Every ton of biomass, better income and a clean future
            </span>
            <h2 className="section-title" style={{ fontSize: "2.8rem", fontWeight: 800, color: "#064024", marginBottom: "1.5rem" }}>
              {t("roi_section_title" as any)}
            </h2>
            <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", alignItems: "center", gap: "1rem", background: "#f2f8f4", padding: "1.2rem 2rem", borderRadius: "100px", borderLeft: "4px solid #ea580c" }}>
              <Leaf color="#16a34a" size={32} />
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#333", textAlign: "left", fontWeight: 500 }}>
                {t("roi_callout" as any)}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ background: "#fff", borderRadius: "24px", padding: "2rem", boxShadow: "0 20px 50px rgba(0,0,0,0.06)", border: "1px solid #eaeaea", display: "flex", gap: "2rem", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Left Column (Inputs) */}
            <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", gap: "2rem" }}>
              
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", fontWeight: 700, color: "#222", fontSize: "1.1rem" }}>
                  <div style={{ background: "#eefdf4", padding: "6px", borderRadius: "8px" }}><Factory size={18} color="#16a34a" /></div>
                  {t("roi_fuel_label" as any)}
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {[
                    { key: "coal", label: t("roi_fuel_coal" as any), icon: <Package size={16} /> },
                    { key: "diesel", label: t("roi_fuel_diesel" as any), icon: <Droplet size={16} /> },
                    { key: "gas", label: t("roi_fuel_gas" as any), icon: <Flame size={16} /> }
                  ].map((f) => (
                    <button 
                      key={f.key} 
                      onClick={() => setFuelType(f.key as any)}
                      style={{ 
                        flex: 1, padding: "12px 10px", borderRadius: "12px", border: fuelType === f.key ? "none" : "1px solid #ddd", 
                        background: fuelType === f.key ? "#0f5132" : "#fff", color: fuelType === f.key ? "#fff" : "#444", 
                        fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "0.9rem", transition: "all 0.2s" 
                      }}
                    >
                      {f.icon} {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem", fontWeight: 700, color: "#222" }}>
                  <span style={{ fontSize: "1.1rem" }}>{t("roi_amount_label" as any)}: <span style={{ color: "#16a34a" }}>₹{monthlySpend.toLocaleString("en-IN")}</span></span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={10000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(+e.target.value)}
                  style={{ width: "100%", height: "8px", borderRadius: "4px", appearance: "none", background: `linear-gradient(to right, #0f5132 ${(monthlySpend - 50000) / 19500}%, #e5e7eb ${(monthlySpend - 50000) / 19500}%)`, outline: "none" }}
                  className="custom-range"
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>
                  <span>₹50K</span><span>₹20L</span>
                </div>
              </div>

              <div style={{ background: "#fafafa", border: "1px dashed #d4d4d8", borderRadius: "16px", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "40px", height: "40px", background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <TrendingDown size={20} color="#16a34a" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: "0.95rem", color: "#222", fontWeight: 700 }}>Data-Driven Estimates</h4>
                  <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem", color: "#666", lineHeight: 1.4 }}>Our calculator uses industry-average calorific values and carbon emission factors to project your real-world savings.</p>
                </div>
              </div>

              <div style={{ background: "#f0fdf4", padding: "1rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "10px", color: "#166534", fontSize: "0.85rem", fontWeight: 500, marginTop: "auto" }}>
                <Clock size={16} /> Adjust the slider or select a fuel to see the estimate.
              </div>
            </div>

            {/* Right Column (Outputs) */}
            <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              
              <div style={{ background: "linear-gradient(135deg, #0f5132 0%, #16a34a 100%)", borderRadius: "20px", padding: "2rem", color: "#fff", textAlign: "center", position: "relative", overflow: "hidden", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Leaf size={150} color="#fff" style={{ position: "absolute", right: "-30px", bottom: "-30px", opacity: 0.1, transform: "rotate(-15deg)" }} />
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                  <div style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><CircleDollarSign size={20} color="#fff" /></div>
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, opacity: 0.9, marginBottom: "8px" }}>{t("roi_savings_title" as any)}</div>
                <div style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1, marginBottom: "1.5rem" }}>₹{savings.toLocaleString("en-IN")}</div>
                <div>
                  <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 500, backdropFilter: "blur(4px)" }}>
                    ↗ Your savings, your profit
                  </span>
                </div>
              </div>

              <div style={{ background: "#f0fdf4", border: "2px solid #dcfce7", borderRadius: "20px", padding: "2rem", color: "#064024", textAlign: "center", position: "relative", overflow: "hidden", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Leaf size={150} color="#16a34a" style={{ position: "absolute", right: "-30px", bottom: "-30px", opacity: 0.05, transform: "rotate(-15deg)" }} />
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                  <div style={{ width: "36px", height: "36px", background: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Leaf size={20} color="#16a34a" /></div>
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.8, marginBottom: "8px" }}>{t("roi_co2_title" as any)}</div>
                <div style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1, marginBottom: "1.5rem", color: "#16a34a" }}>{co2Annual.toLocaleString()}</div>
                <div>
                  <span style={{ display: "inline-block", background: "#dcfce7", color: "#166534", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 700 }}>
                    🍃 Clean Air, Better Tomorrow
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
          
          {/* Bottom Badges */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "1rem", maxWidth: "1200px", margin: "1.5rem auto 0" }}>
            {[
              { icon: <CircleDollarSign color="#16a34a" size={24} />, title: "Low Cost", desc: "Reduced fuel cost and higher savings" },
              { icon: <TrendingUp color="#16a34a" size={24} />, title: "Higher Profits", desc: "More energy, better efficiency, and better returns" },
              { icon: <Cloud color="#16a34a" size={24} />, title: "Environment Friendly", desc: "Low emissions, clean environment, and sustainable development" },
              { icon: <ShieldCheck color="#16a34a" size={24} />, title: "Reliable Solution", desc: "Trust in high-quality biomass pellets" }
            ].map((badge, idx) => (
              <div key={idx} style={{ flex: "1 1 200px", background: "#f8fdfa", borderRadius: "16px", padding: "1rem", display: "flex", alignItems: "center", gap: "12px", border: "none" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {badge.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "#064024", fontSize: "0.95rem" }}>{badge.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "#666", marginTop: "2px", lineHeight: 1.3 }}>{badge.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </section>

    </main>
  );
}
