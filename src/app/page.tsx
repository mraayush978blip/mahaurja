"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { Zap, Leaf, Flame, ShieldCheck, Award, Truck, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <div className="hero-tagline">{t("hero_tagline")}</div>
          <h1>{t("hero_title")}</h1>
          <h2>{t("hero_subtitle")}</h2>
          <Link href="/about" className="btn">{t("hero_cta")}</Link>
        </motion.div>
      </header>

      {/* What is Biomass Briquettes? */}
      <section className="section-padding decor-bg" id="what-is-biomass">
        <motion.div 
          className="grid-2 align-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant}>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
              {t("what_is_biomass_title")}
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "1rem" }}>
              {t("what_is_biomass_desc1")}
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-light)" }}>
              {t("what_is_biomass_desc2")}
            </p>
          </motion.div>
          <motion.div variants={fadeUpVariant}>
            <motion.div 
              whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ background: "url('/assets/images/about-img.jpg') center/cover", height: "400px", borderRadius: "20px", boxShadow: "var(--shadow-lg)" }} 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light decor-bg" id="why-choose-us">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          {t("why_choose_us_title")}
        </motion.h2>
        <motion.div 
          className="grid-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {[
            { icon: Award, title: "wcu_1_title", desc: "wcu_1_desc" },
            { icon: Truck, title: "wcu_2_title", desc: "wcu_2_desc" },
            { icon: Users, title: "wcu_3_title", desc: "wcu_3_desc" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              className="card" 
              variants={fadeUpVariant}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
            >
              <div className="card-icon"><item.icon /></div>
              <h3>{t(item.title as any)}</h3>
              <p style={{ color: "var(--text-light)" }}>{t(item.desc as any)}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Biomass */}
      <section className="section-padding decor-bg" id="why-biomass">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          {t("why_title")}
        </motion.h2>
        <motion.div 
          className="grid-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}
        >
          {[
            { icon: Zap, title: "why_1_title", desc: "why_1_desc" },
            { icon: Leaf, title: "why_2_title", desc: "why_2_desc" },
            { icon: Flame, title: "why_3_title", desc: "why_3_desc" },
            { icon: ShieldCheck, title: "why_4_title", desc: "why_4_desc" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              className="card" 
              variants={fadeUpVariant}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
            >
              <div className="card-icon"><item.icon /></div>
              <h3>{t(item.title as any)}</h3>
              <p style={{ color: "var(--text-light)" }}>{t(item.desc as any)}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-light decor-bg" id="comparison">
        <motion.div 
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className="section-title">{t("comp_title")}</h2>
          <h3 style={{ color: "var(--text-light)" }}>{t("comp_subtitle")}</h3>
        </motion.div>
        
        <motion.div 
          className="table-container"
          style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)", background: "white" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          whileHover={{ scale: 1.01 }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--primary-color)", color: "white" }}>
                <th style={{ padding: "1rem", textAlign: "left" }}>{t("comp_feat")}</th>
                <th className="highlight" style={{ padding: "1rem", textAlign: "left", background: "var(--accent-color)", color: "white" }}>{t("comp_agro")}</th>
                <th style={{ padding: "1rem", textAlign: "left" }}>{t("comp_coal")}</th>
                <th style={{ padding: "1rem", textAlign: "left" }}>{t("comp_wood")}</th>
                <th style={{ padding: "1rem", textAlign: "left" }}>{t("comp_lpg")}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "comp_energy", val1: "3800-4800", val2: "5500-6500", val3: "1500-1800", val4: "11000" },
                { label: "comp_efficiency", val1: "-", val2: "val_better_coal", val3: "val_better_wood", val4: "val_better_lpg", translate: true },
                { label: "comp_combustion", val1: "val_combustion_full", val2: "val_combustion_partial", val3: "val_combustion_partial", val4: "val_combustion_full", translate: true },
                { label: "comp_smoke", val1: "val_smoke_low", val2: "val_smoke_high", val3: "val_smoke_high", val4: "val_smoke_low", translate: true },
                { label: "comp_ash", val1: "< 2-5%", val2: "20-40%", val3: "15-30%", val4: "-" },
                { label: "comp_moisture", val1: "2-5%", val2: "20-25%", val3: "25-35%", val4: "-" },
                { label: "comp_storage", val1: "val_storage_easy", val2: "val_storage_hard", val3: "val_storage_veryhard", val4: "val_storage_lpg", translate: true },
                { label: "comp_env", val1: "val_smoke_low", val2: "val_smoke_high", val3: "val_env_max", val4: "val_smoke_low", translate: true },
                { label: "comp_cost", val1: "val_cost_cheap", val2: "val_cost_coal", val3: "val_cost_wood", val4: "val_cost_lpg", translate: true }
              ].map((row, idx) => (
                <motion.tr key={idx} whileHover={{ backgroundColor: "#f1f5f9" }} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "1rem" }}>{t(row.label as any)}</td>
                  <td className="highlight" style={{ padding: "1rem", fontWeight: 600 }}>{row.translate ? t(row.val1 as any) : row.val1}</td>
                  <td style={{ padding: "1rem" }}>{row.translate ? t(row.val2 as any) : row.val2}</td>
                  <td style={{ padding: "1rem" }}>{row.translate ? t(row.val3 as any) : row.val3}</td>
                  <td style={{ padding: "1rem" }}>{row.translate ? t(row.val4 as any) : row.val4}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)", color: "white", textAlign: "center" }}>
        <motion.div 
          style={{ maxWidth: "800px", margin: "0 auto" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <Award style={{ width: "60px", height: "60px", color: "#4ade80", marginBottom: "1.5rem" }} />
          <h2 style={{ fontSize: "2.5rem", color: "white", marginBottom: "1.5rem" }}>{t("why_tagline")}</h2>
          <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary-color)", border: "none" }}>{t("contact_title")}</Link>
        </motion.div>
      </section>
    </main>
  );
}
