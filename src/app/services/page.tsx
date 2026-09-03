"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { Flame, FlaskConical, Leaf, Thermometer, Activity, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } }
};

export default function Services() {
  const { t } = useTranslation();

  const process = [
    {
      icon: <Thermometer size={32} />,
      title: t("serv_thermo_title"),
      desc: t("serv_thermo_desc"),
      color: "amber",
    },
    {
      icon: <FlaskConical size={32} />,
      title: t("serv_bio_title"),
      desc: t("serv_bio_desc"),
      color: "green",
    },
  ];

  const feedstocks = [
    {
      title: t("serv_wood_title"),
      desc: t("serv_wood_desc"),
      specs: [
        { label: "Dimensions", value: "6mm – 8mm diameter" },
        { label: "Mechanical Durability", value: "> 97.5%" },
        { label: "Ash Content", value: "< 1.5%" },
      ],
      color: "green",
    },
    {
      title: t("serv_agro_title"),
      desc: t("serv_agro_desc"),
      specs: [
        { label: "Shape", value: "Briquette / Pellet" },
        { label: "Moisture", value: "< 10%" },
        { label: "Density", value: "> 1.1 g/cc" },
      ],
      color: "amber",
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="inner-page-hero services-hero">
        <div className="inner-page-hero-overlay" />
        <motion.div
          className="inner-page-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inner-page-eyebrow"><Flame size={14} /> Engineering Green Fuel</span>
          <h1>{t("services_title")}</h1>
          <p>Precision-engineered biomass fuel solutions for industrial boilers across India</p>
        </motion.div>
      </section>

      {/* Conversion Processes */}
      <section className="section-padding">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="section-title">{t("serv_conv_title")}</motion.h2>
          <motion.div variants={stagger} className="process-grid">
            {process.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className={`process-card process-${p.color}`} whileHover={{ y: -5 }}>
                <div className={`process-icon-wrap process-icon-${p.color}`}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Feedstocks & Products */}
      <section className="section-padding bg-light">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="section-title">{t("serv_feed_title")}</motion.h2>
          <motion.div variants={stagger} className="feedstock-product-grid">
            {feedstocks.map((f, i) => (
              <motion.div key={i} variants={fadeUp} className={`feedstock-product-card feedstock-${f.color}`} whileHover={{ y: -4 }}>
                <div className={`feedstock-product-header feedstock-header-${f.color}`}>
                  <Leaf size={20} />
                  <h3>{f.title}</h3>
                </div>
                <p className="feedstock-desc">{f.desc}</p>
                <div className="feedstock-specs">
                  {f.specs.map((s, j) => (
                    <div key={j} className="feedstock-spec-row">
                      <span>{s.label}</span>
                      <strong>{s.value}</strong>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="section-title">{t("spec_section_title")}</motion.h2>
          <motion.div variants={fadeUp} className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{t("spec_param")}</th>
                  <th>{t("spec_standard")}</th>
                  <th className="highlight">{t("spec_premium")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("spec_gcv")}</td>
                  <td>{t("spec_gcv_std")}</td>
                  <td className="highlight">🔥 {t("spec_gcv_prem")}</td>
                </tr>
                <tr>
                  <td>{t("spec_size")}</td>
                  <td>{t("spec_size_val")}</td>
                  <td className="highlight">{t("spec_size_val")}</td>
                </tr>
                <tr>
                  <td>{t("spec_moisture")}</td>
                  <td>{t("spec_moisture_std")}</td>
                  <td className="highlight">✅ {t("spec_moisture_prem")}</td>
                </tr>
                <tr>
                  <td>{t("spec_ash")}</td>
                  <td>{t("spec_ash_std")}</td>
                  <td className="highlight">✅ {t("spec_ash_prem")}</td>
                </tr>
                <tr>
                  <td>{t("spec_quality")}</td>
                  <td>{t("spec_quality_std")}</td>
                  <td className="highlight">🏆 {t("spec_quality_prem")}</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* Why MAHAURJA */}
      <section className="section-padding services-why-section">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="section-title" style={{ color: "white" }}>
            Why MAHAURJA is Different
          </motion.h2>
          <motion.div variants={stagger} className="why-grid">
            {[
              { icon: <Activity size={28} />, title: "Custom Engineered", desc: "We don't sell off-the-shelf. Every batch is blended to your specific boiler, GCV, and moisture requirements." },
              { icon: <FlaskConical size={28} />, title: "Lab Verified Quality", desc: "Every single batch undergoes in-house testing for GCV, moisture, mechanical durability before dispatch." },
              { icon: <CheckCircle size={28} />, title: "COA with Every Order", desc: "Receive a Certificate of Analysis with every shipment. Full transparency, zero guesswork." },
              { icon: <Leaf size={28} />, title: "Carbon Neutral Process", desc: "Solar-powered manufacturing + zero-deforestation sourcing = the cleanest industrial fuel in the market." },
            ].map((w, i) => (
              <motion.div key={i} variants={fadeUp} className="why-card" whileHover={{ y: -5 }}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
