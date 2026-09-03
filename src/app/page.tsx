"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import {
  Flame, Factory, Leaf, Trees, Sun, FlaskConical,
  CircleDollarSign, TrendingDown, ShieldCheck, Zap,
  ChevronRight, Wheat, Package, ArrowRight
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
  { icon: "🥜", key: "feed_1" },
  { icon: "🌲", key: "feed_2" },
  { icon: "🌾", key: "feed_3" },
  { icon: "🌱", key: "feed_4" },
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
          SECTION 2 — PROBLEM vs MAHAURJA WAY
      ══════════════════════════════════════════════════════════ */}
      <section className="pvs-section section-padding">
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="section-title">{t("pvs_section_title" as any)}</motion.h2>
          <div className="pvs-grid">
            {/* Challenge */}
            <motion.div variants={fadeUp} className="pvs-card pvs-challenge">
              <div className="pvs-card-header">
                <TrendingDown size={28} />
                <h3>{t("pvs_challenge_title" as any)}</h3>
              </div>
              <ul className="pvs-list">
                <li><span className="pvs-icon pvs-bad">✗</span>{t("pvs_challenge_p1" as any)}</li>
                <li><span className="pvs-icon pvs-bad">✗</span>{t("pvs_challenge_p2" as any)}</li>
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div variants={fadeUp} className="pvs-card pvs-solution">
              <div className="pvs-card-header">
                <Leaf size={28} />
                <h3>{t("pvs_solution_title" as any)}</h3>
              </div>
              <ul className="pvs-list">
                <li><span className="pvs-icon pvs-good">✓</span>{t("pvs_solution_p1" as any)}</li>
                <li><span className="pvs-icon pvs-good">✓</span>{t("pvs_solution_p2" as any)}</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — FEEDSTOCK & FUEL ENGINEERING
      ══════════════════════════════════════════════════════════ */}
      <section className="feed-section section-padding bg-light">
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-eyebrow">{t("feed_section_sub" as any)}</motion.p>
          <motion.h2 variants={fadeUp} className="section-title">{t("feed_section_title" as any)}</motion.h2>

          <motion.div variants={stagger} className="feed-grid">
            {feedItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`feed-card ${activeFeed === idx ? "feed-card-active" : ""}`}
                onClick={() => setActiveFeed(activeFeed === idx ? null : idx)}
                whileHover={{ y: -6 }}
              >
                <div className="feed-emoji">{item.icon}</div>
                <h4>{t(`${item.key}_title` as any)}</h4>
                <AnimatePresence>
                  {activeFeed === idx && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="feed-desc"
                    >
                      {t(`${item.key}_desc` as any)}
                    </motion.p>
                  )}
                </AnimatePresence>
                <span className="feed-tap-hint">{activeFeed === idx ? "▲" : "▼"}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Flagship Blend Banner */}
          <motion.div variants={fadeUp} className="flagship-banner">
            <div className="flagship-left">
              <span className="flagship-eyebrow">⭐ {t("feed_flagship_sub" as any)}</span>
              <h3>{t("feed_flagship_title" as any)}</h3>
              <p>{t("feed_flagship_desc" as any)}</p>
            </div>
            <div className="flagship-right">
              <div className="gcv-badge">
                <span className="gcv-num">5,000+</span>
                <span className="gcv-unit">kcal/kg</span>
                <span className="gcv-label">Target GCV</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — TECHNICAL SPECIFICATION MATRIX
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="section-title">{t("spec_section_title" as any)}</motion.h2>
          <motion.div variants={fadeUp} className="table-container spec-table">
            <table>
              <thead>
                <tr>
                  <th>{t("spec_param" as any)}</th>
                  <th>{t("spec_standard" as any)}</th>
                  <th className="highlight">{t("spec_premium" as any)}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("spec_gcv" as any)}</td>
                  <td>{t("spec_gcv_std" as any)}</td>
                  <td className="highlight premium-val">🔥 {t("spec_gcv_prem" as any)}</td>
                </tr>
                <tr>
                  <td>{t("spec_size" as any)}</td>
                  <td>{t("spec_size_val" as any)}</td>
                  <td className="highlight">{t("spec_size_val" as any)}</td>
                </tr>
                <tr>
                  <td>{t("spec_moisture" as any)}</td>
                  <td>{t("spec_moisture_std" as any)}</td>
                  <td className="highlight">✅ {t("spec_moisture_prem" as any)}</td>
                </tr>
                <tr>
                  <td>{t("spec_ash" as any)}</td>
                  <td>{t("spec_ash_std" as any)}</td>
                  <td className="highlight">✅ {t("spec_ash_prem" as any)}</td>
                </tr>
                <tr>
                  <td>{t("spec_quality" as any)}</td>
                  <td>{t("spec_quality_std" as any)}</td>
                  <td className="highlight">🏆 {t("spec_quality_prem" as any)}</td>
                </tr>
              </tbody>
            </table>
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
      <section className="roi-section section-padding bg-light">
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="section-title">{t("roi_section_title" as any)}</motion.h2>
          <motion.p variants={fadeUp} className="roi-callout">{t("roi_callout" as any)}</motion.p>

          <motion.div variants={fadeUp} className="roi-card">
            <div className="roi-inputs">
              <div className="roi-input-group">
                <label>{t("roi_fuel_label" as any)}</label>
                <div className="fuel-selector">
                  {(["coal", "diesel", "gas"] as const).map((f) => (
                    <button key={f} className={fuelType === f ? "active" : ""} onClick={() => setFuelType(f)}>
                      {t(`roi_fuel_${f}` as any)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="roi-input-group">
                <label>
                  {t("roi_amount_label" as any)}:{" "}
                  <strong>₹{monthlySpend.toLocaleString("en-IN")}</strong>
                </label>
                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={10000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(+e.target.value)}
                  className="range-slider"
                />
                <div className="roi-slider-labels">
                  <span>₹50K</span><span>₹20L</span>
                </div>
              </div>
            </div>

            <div className="roi-outputs">
              <motion.div
                className="roi-output-box roi-green"
                key={savings}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CircleDollarSign size={32} />
                <div className="roi-output-val">₹{savings.toLocaleString("en-IN")}</div>
                <div className="roi-output-label">{t("roi_savings_title" as any)}</div>
              </motion.div>

              <motion.div
                className="roi-output-box roi-gold"
                key={co2Annual}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Leaf size={32} />
                <div className="roi-output-val">{co2Annual.toLocaleString()}</div>
                <div className="roi-output-label">{t("roi_co2_title" as any)}</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — RFQ LEADER FORM
      ══════════════════════════════════════════════════════════ */}
      <section className="rfq-section section-padding" id="rfq">
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="rfq-header">
            <h2>{t("rfq_section_title" as any)}</h2>
            <p>{t("rfq_section_sub" as any)}</p>
          </motion.div>

          <motion.form
            variants={fadeUp}
            className="rfq-form"
            onSubmit={(e) => { e.preventDefault(); alert("Your RFQ has been submitted! Our team will contact you within 24 hours."); }}
          >
            <div className="rfq-row">
              <div className="rfq-field">
                <label>{t("rfq_name" as any)}</label>
                <input type="text" placeholder="Rajesh Kumar" required />
              </div>
              <div className="rfq-field">
                <label>{t("rfq_company" as any)}</label>
                <input type="text" placeholder="ABC Steel Industries" required />
              </div>
            </div>
            <div className="rfq-row">
              <div className="rfq-field">
                <label>{t("rfq_phone" as any)}</label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="rfq-field">
                <label>{t("rfq_email" as any)}</label>
                <input type="email" placeholder="rajesh@company.com" />
              </div>
            </div>
            <div className="rfq-row">
              <div className="rfq-field">
                <label>{t("rfq_boiler" as any)}</label>
                <input type="text" placeholder="e.g. 5 TPH Fire Tube Boiler / Textile" required />
              </div>
              <div className="rfq-field">
                <label>{t("rfq_size" as any)}</label>
                <select required>
                  <option value="">Select size</option>
                  <option value="6mm">{t("rfq_size_6" as any)}</option>
                  <option value="8mm">{t("rfq_size_8" as any)}</option>
                  <option value="10mm">{t("rfq_size_10" as any)}</option>
                  <option value="custom">{t("rfq_size_custom" as any)}</option>
                </select>
              </div>
            </div>
            <div className="rfq-row">
              <div className="rfq-field">
                <label>{t("rfq_gcv" as any)}</label>
                <input type="text" placeholder="e.g. 4500 kcal/kg" />
              </div>
              <div className="rfq-field">
                <label>{t("rfq_msg" as any)}</label>
                <input type="text" placeholder="Monthly quantity, delivery location..." />
              </div>
            </div>
            <motion.button
              type="submit"
              className="rfq-submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t("rfq_submit" as any)} <ArrowRight size={18} />
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
}
