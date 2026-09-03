"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Building, Factory, Anchor, Target, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { num: "2,00,000+", label: "Sq. Ft. Facility" },
    { num: "120 TPD", label: "Production Capacity" },
    { num: "550 kW", label: "Solar Powered" },
    { num: "100%", label: "Lab Tested Batches" },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="inner-page-hero">
        <div className="inner-page-hero-overlay" />
        <motion.div
          className="inner-page-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inner-page-eyebrow">
            <Leaf size={14} /> BHARAT INDUSTRIAL & RENEWABLES LLP
          </span>
          <h1>{t("about_title")}</h1>
          <p>LLPIN: ACS-7398 | Founder & Director: Harsh Jain</p>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </motion.div>
        ))}
      </section>

      {/* Mission */}
      <section className="section-padding">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mission-block">
            <div className="mission-icon"><Target size={40} /></div>
            <div>
              <h2>{t("about_mission_title")}</h2>
              <p>{t("about_mission_desc")}</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Locations & Facilities — full-bleed dark section */}
      <section className="facilities-section">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="facilities-header">
            <span className="inner-page-eyebrow"><Building size={14} /> Our Presence</span>
            <h2>{t("about_loc_title")}</h2>
          </motion.div>
          <motion.div variants={stagger} className="facilities-full-grid">

            <motion.div variants={fadeUp} className="facility-full-card" whileHover={{ scale: 1.015 }}>
              <div className="ffc-accent ffc-green" />
              <div className="ffc-icon"><Building size={36} /></div>
              <h3>{t("about_hq_title")}</h3>
              <p>{t("about_hq_desc")}</p>
              <div className="ffc-detail">
                <span className="ffc-label">📍 Address</span>
                <span>288, Lokmanya Tilak Path, Near Railway Crossing, Ujjain Road, Barnagar, Dist. Ujjain (M.P.) 456771</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="facility-full-card facility-full-card--featured" whileHover={{ scale: 1.015 }}>
              <div className="ffc-accent ffc-amber" />
              <div className="ffc-icon ffc-icon--amber"><Factory size={36} /></div>
              <h3>{t("about_mfg_title")}</h3>
              <p>{t("about_mfg_desc")}</p>
              <div className="ffc-stats-row">
                <div className="ffc-stat"><strong>120 TPD</strong><span>Daily Output</span></div>
                <div className="ffc-stat"><strong>36,000+</strong><span>MT / Year</span></div>
                <div className="ffc-stat"><strong>550 kW</strong><span>Solar Power</span></div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="facility-full-card" whileHover={{ scale: 1.015 }}>
              <div className="ffc-accent ffc-green" />
              <div className="ffc-icon"><Anchor size={36} /></div>
              <h3>{t("about_term_title")}</h3>
              <p>{t("about_term_desc")}</p>
              <div className="ffc-detail">
                <span className="ffc-label">🌐 Region</span>
                <span>Central India · Pan-India Supply Network · Export Ready</span>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </section>

      {/* Leadership — full-width banner */}
      <section className="leadership-section">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="leadership-banner">
            {/* Left: identity */}
            <div className="lb-left">
              <div className="lb-avatar"><Users size={52} /></div>
              <div>
                <h2>Harsh Jain</h2>
                <span className="lb-role">Founder &amp; Director · MAHAURJA</span>
              </div>
            </div>

            {/* Center: bio */}
            <div className="lb-bio">
              <p>
                Driving India's biomass energy revolution through precision-engineered pellet solutions.
                Building MAHAURJA to replace fossil fuels with clean, cost-effective, and reliable
                green thermal power for industrial India.
              </p>
              <div className="lb-tags">
                <span>♻️ Green Energy Pioneer</span>
                <span>🏭 Industrial Innovation</span>
                <span>🌱 Zero Deforestation</span>
              </div>
            </div>

            {/* Right: contact */}
            <div className="lb-contact">
              <a href="tel:+919340212401" className="lb-contact-item">
                <span className="lb-contact-icon">📞</span>
                <div>
                  <span className="lb-contact-label">Phone</span>
                  <span className="lb-contact-val">+91 9340212401</span>
                </div>
              </a>
              <a href="mailto:harsh@bharatindustrialrenewables.com" className="lb-contact-item">
                <span className="lb-contact-icon">✉️</span>
                <div>
                  <span className="lb-contact-label">Email</span>
                  <span className="lb-contact-val">harsh@bharatindustrialrenewables.com</span>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
