"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { Flame, FlaskConical, Leaf, Thermometer, Activity, CheckCircle, Target } from "lucide-react";

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

  return (
    <main style={{ backgroundColor: "#f8fafc", paddingBottom: "0" }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        position: "relative", 
        height: "500px", 
        backgroundImage: "url('/assets/images/about.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center"
      }}>
        {/* Gradient Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(6,64,43,1) 0%, rgba(6,64,43,0.85) 35%, rgba(6,64,43,0) 100%)" }} />
        
        <div className="container responsive-hero-container-padding" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: "600px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid #16a34a", padding: "6px 16px", borderRadius: "20px", color: "#4ade80", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1px", marginBottom: "1.5rem" }}>
              <Leaf size={14} /> ENGINEERING GREEN FUEL
            </div>
            <h1 className="responsive-hero-h1" style={{ fontWeight: 800, color: "white", marginBottom: "1rem", lineHeight: 1.1 }}>
              {t("services_title" as any)}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, maxWidth: "400px" }}>
              {t("hero_h2" as any)}
            </p>
            <div style={{ width: "40px", height: "4px", background: "#f59e0b", marginTop: "2rem", borderRadius: "2px" }} />
          </motion.div>
        </div>
      </section>

      {/* 2. OUR MISSION FLOATING CARD */}
      <section style={{ padding: "0", marginTop: "-60px", position: "relative", zIndex: 10 }}>
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="responsive-flex"
            style={{
              background: "white",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              borderLeft: "8px solid #047857"
            }}
          >
            <div style={{ flex: "1 1 100%", padding: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem", justifyContent: "center" }}>
                <Target size={28} color="#047857" />
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#111", margin: 0 }}>{t("about_mission_title" as any)}</h2>
              </div>
              <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.7, textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
                {t("about_mission_desc" as any)}
              </p>
            </div>
            <div style={{ flex: "1 1 100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem", background: "linear-gradient(90deg, transparent, #f0fdf4)" }}>
              {/* Graphic element matching target */}
              <div style={{ position: "relative", width: "160px", height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Target size={120} color="#16a34a" strokeWidth={1.5} style={{ opacity: 0.8 }} />
                <Leaf size={50} color="#15803d" fill="#15803d" style={{ position: "absolute", bottom: "0px", right: "-10px" }} />
                <Leaf size={35} color="#16a34a" fill="#16a34a" style={{ position: "absolute", bottom: "20px", left: "-10px", transform: "scaleX(-1)" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CONVERSION PROCESSES */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#064024", marginBottom: "0.5rem" }}>
                {t("serv_conv_title" as any)}
              </h2>
              <div style={{ width: "40px", height: "4px", background: "#f59e0b", margin: "0 auto", borderRadius: "2px" }} />
            </motion.div>

            <motion.div variants={stagger} style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {/* Thermochemical Card */}
              <motion.div variants={fadeUp} className="responsive-child" style={{ flex: "1 1 400px", background: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #e5e7eb", display: "flex", gap: "1.5rem", alignItems: "flex-start", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Thermometer size={28} color="#d97706" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>{t("serv_thermo_title" as any)}</h3>
                  <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.6 }}>{t("serv_thermo_desc" as any)}</p>
                </div>
              </motion.div>

              {/* Biochemical Card */}
              <motion.div variants={fadeUp} className="responsive-child" style={{ flex: "1 1 400px", background: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #e5e7eb", display: "flex", gap: "1.5rem", alignItems: "flex-start", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <FlaskConical size={28} color="#15803d" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>{t("serv_bio_title" as any)}</h3>
                  <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.6 }}>{t("serv_bio_desc" as any)}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. FEEDSTOCK & PRODUCTS */}
      <section style={{ padding: "0 0 6rem 0" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#064024", marginBottom: "0.5rem" }}>
                Feedstock & Products
              </h2>
              <div style={{ width: "40px", height: "4px", background: "#16a34a", margin: "0 auto", borderRadius: "2px" }} />
            </motion.div>

            <motion.div variants={stagger} style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {/* {t("serv_wood_title" as any)} Card */}
              <motion.div variants={fadeUp} className="responsive-child" style={{ flex: "1 1 400px", background: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ background: "#06402b", padding: "1.2rem 2rem", display: "flex", alignItems: "center", gap: "12px", color: "white" }}>
                  <Leaf size={20} />
                  <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700 }}>{t("serv_wood_title" as any)}</h3>
                </div>
                <div style={{ padding: "1.5rem 2rem" }}>
                  <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1.5rem" }}>{t("serv_wood_desc" as any)}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f3f4f6", paddingBottom: "0.5rem" }}>
                      <span style={{ color: "#555", fontSize: "0.9rem" }}>Dimensions</span>
                      <strong style={{ color: "#111", fontSize: "0.9rem" }}>6mm - 8mm diameter</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f3f4f6", paddingBottom: "0.5rem" }}>
                      <span style={{ color: "#555", fontSize: "0.9rem" }}>Mechanical Durability</span>
                      <strong style={{ color: "#111", fontSize: "0.9rem" }}>&gt; 97.5%</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem" }}>
                      <span style={{ color: "#555", fontSize: "0.9rem" }}>Ash Content</span>
                      <strong style={{ color: "#111", fontSize: "0.9rem" }}>&lt; 1.5%</strong>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Agri Residue Card */}
              <motion.div variants={fadeUp} className="responsive-child" style={{ flex: "1 1 400px", background: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ background: "#f59e0b", padding: "1.2rem 2rem", display: "flex", alignItems: "center", gap: "12px", color: "white" }}>
                  <Leaf size={20} />
                  <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700 }}>Agricultural Residue</h3>
                </div>
                <div style={{ padding: "1.5rem 2rem" }}>
                  <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1.5rem" }}>{t("serv_agro_desc" as any)}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f3f4f6", paddingBottom: "0.5rem" }}>
                      <span style={{ color: "#555", fontSize: "0.9rem" }}>Shape</span>
                      <strong style={{ color: "#111", fontSize: "0.9rem" }}>Briquette / Pellet</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f3f4f6", paddingBottom: "0.5rem" }}>
                      <span style={{ color: "#555", fontSize: "0.9rem" }}>Moisture</span>
                      <strong style={{ color: "#111", fontSize: "0.9rem" }}>&lt; 10%</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem" }}>
                      <span style={{ color: "#555", fontSize: "0.9rem" }}>Density</span>
                      <strong style={{ color: "#111", fontSize: "0.9rem" }}>&gt; 1.1 g/cc</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS TABLE */}
      <section style={{ padding: "0 0 6rem 0" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#064024", marginBottom: "0.5rem" }}>
                {t("spec_section_title" as any)}
              </h2>
              <div style={{ width: "40px", height: "4px", background: "#f59e0b", margin: "0 auto", borderRadius: "2px" }} />
            </motion.div>

            <motion.div variants={fadeUp} style={{ background: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
                <thead>
                  <tr>
                    <th style={{ background: "#06402b", color: "white", padding: "1.2rem", fontWeight: 700, width: "33%" }}>{t("spec_param" as any)}</th>
                    <th style={{ background: "#06402b", color: "white", padding: "1.2rem", fontWeight: 700, width: "33%", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>{t("spec_standard" as any)}</th>
                    <th style={{ background: "#16a34a", color: "white", padding: "1.2rem", fontWeight: 700, width: "33%" }}>{t("spec_premium" as any)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", fontWeight: 600, color: "#333" }}>{t("spec_gcv" as any)}</td>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", borderLeft: "1px solid #f3f4f6", color: "#555" }}>{t("rfq_size_custom" as any)}</td>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", background: "#f0fdf4", color: "#166534", fontWeight: 700 }}>🔥 {t("spec_gcv_prem" as any)}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", fontWeight: 600, color: "#333" }}>{t("spec_size" as any)}</td>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", borderLeft: "1px solid #f3f4f6", color: "#555" }}>{t("spec_size_val" as any)}</td>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", background: "#f0fdf4", color: "#166534", fontWeight: 700 }}>{t("spec_size_val" as any)}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", fontWeight: 600, color: "#333" }}>{t("spec_moisture" as any)}</td>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", borderLeft: "1px solid #f3f4f6", color: "#555" }}>{t("spec_moisture_std" as any)}</td>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", background: "#f0fdf4", color: "#166534", fontWeight: 700 }}>✅ {t("spec_moisture_prem" as any)}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", fontWeight: 600, color: "#333" }}>{t("spec_ash" as any)}</td>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", borderLeft: "1px solid #f3f4f6", color: "#555" }}>{t("spec_ash_std" as any)}</td>
                    <td style={{ padding: "1.2rem", borderBottom: "1px solid #f3f4f6", background: "#f0fdf4", color: "#166534", fontWeight: 700 }}>✅ {t("spec_ash_prem" as any)}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.2rem", fontWeight: 600, color: "#333" }}>{t("spec_quality" as any)}</td>
                    <td style={{ padding: "1.2rem", borderLeft: "1px solid #f3f4f6", color: "#555" }}>{t("spec_quality_std" as any)}</td>
                    <td style={{ padding: "1.2rem", background: "#f0fdf4", color: "#166534", fontWeight: 700 }}>🏆 {t("spec_quality_prem" as any)}</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. WHY MAHAURJA IS DIFFERENT */}
      <section style={{ position: "relative", overflow: "hidden", background: "#06402b", padding: "6rem 0", color: "white" }}>
        {/* Decorative Background Elements */}
        <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(74, 222, 128, 0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-100px", right: "-50px", opacity: 0.03, transform: "rotate(-15deg)", pointerEvents: "none" }}>
          <Leaf size={450} color="#fff" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: 800, marginBottom: "3rem", color: "#ffffff" }}>
              Why MAHAURJA is Different
            </motion.h2>
            
            <motion.div variants={stagger} style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {[
                { icon: <Activity size={24} color="#86efac" />, title: t("rfq_size_custom" as any), desc: "We don't sell off-the-shelf. Every batch is blended to your specific boiler, GCV, and moisture requirements." },
                { icon: <FlaskConical size={24} color="#86efac" />, title: "Lab Verified Quality", desc: "Every single batch undergoes in-house testing for GCV, moisture, mechanical durability before dispatch." },
                { icon: <CheckCircle size={24} color="#86efac" />, title: "COA with Every Order", desc: "Receive a Certificate of Analysis with every shipment. Full transparency, zero guesswork." },
                { icon: <Leaf size={24} color="#86efac" />, title: "Carbon Neutral Process", desc: "Solar-powered manufacturing + zero-deforestation sourcing = the cleanest industrial fuel in the market." },
              ].map((w, i) => (
                <motion.div key={i} variants={fadeUp} style={{ flex: "1 1 200px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "2rem", transition: "transform 0.3s ease" }} whileHover={{ y: -5, background: "rgba(255,255,255,0.05)" }}>
                  <div style={{ marginBottom: "1.2rem" }}>{w.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.8rem", color: "#ffffff" }}>{w.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#e2e8f0", lineHeight: 1.6 }}>{w.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
