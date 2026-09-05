"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Building, Factory, Anchor, Target, Leaf, Users, MapPin, Phone, Mail, CheckCircle2, Sun, BarChart3, Building2, Trees } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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

  return (
    <main style={{ backgroundColor: "#f4f7f6", paddingBottom: "4rem" }}>
      {/* 1. HERO SECTION WITH IMAGE */}
      <section style={{ 
        position: "relative", 
        width: "100%", 
        minHeight: "500px", 
        display: "flex",
        alignItems: "center",
        padding: "8rem 0 4rem 0",
        overflow: "hidden"
      }}>
        <Image 
          src="/assets/images/about.png" 
          alt="About Mahaurja" 
          fill 
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority 
        />
        {/* Dark gradient overlay so text is readable */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, rgba(6,64,36,0.9) 0%, rgba(6,64,36,0.6) 40%, rgba(6,64,36,0.1) 100%)", zIndex: 1 }} />
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ maxWidth: "600px", color: "white" }}>
            <motion.div variants={fadeUp} style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(255,215,0,0.4)", padding: "6px 16px", borderRadius: "24px", fontSize: "0.85rem", fontWeight: 700, color: "#fcd34d", marginBottom: "1.5rem" }}>
              <Leaf size={14} /> BHARAT INDUSTRIAL & RENEWABLES LLP
            </motion.div>
            <motion.h1 variants={fadeUp} style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.1, color: "white" }}>
              {t("about_title")}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: 1.6, marginBottom: "2rem", color: "white" }}>
              {t("hero_h2" as any)}
            </motion.p>
            <motion.div variants={fadeUp} style={{ fontSize: "0.9rem", opacity: 0.9, borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1rem", display: "flex", gap: "12px", alignItems: "center", color: "white" }}>
              <span>LLPIN: <strong style={{ color: "#fcd34d" }}>ACS7398</strong></span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span>Founder & Director: Harsh Jain</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BANNER (OVERLAPPING HERO) */}
      <section style={{ position: "relative", zIndex: 10, marginTop: "-40px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ 
              background: "#0a4a2a", 
              borderRadius: "16px", 
              padding: "2rem", 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "2rem", 
              justifyContent: "space-between", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              color: "white"
            }}>
            {[
              { icon: <Building2 size={24} color="#fcd34d" />, num: "2,00,000+", label: "SQ. FT. FACILITY" },
              { icon: <BarChart3 size={24} color="#fcd34d" />, num: "120 TPD", label: "PRODUCTION CAPACITY" },
              { icon: <Sun size={24} color="#fcd34d" />, num: "550 kW", label: "SOLAR POWERED" },
              { icon: <CheckCircle2 size={24} color="#fcd34d" />, num: "100%", label: "LAB TESTED BATCHES" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", flex: "1 1 200px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fcd34d", lineHeight: 1.2 }}>{stat.num}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, opacity: 0.8, letterSpacing: "1px", marginTop: "4px" }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION BOX */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "3rem",
              display: "flex",
              alignItems: "center",
              gap: "3rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              flexWrap: "wrap"
            }}>
            
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#eefdf4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Target size={40} color="#16a34a" />
              </div>
            </div>

            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#064024", marginBottom: "1rem" }}>{t("about_mission_title")}</h2>
              <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.6, margin: 0 }}>
                {t("about_mission_desc")}
              </p>
            </div>

            <div style={{ flexShrink: 0, position: "relative" }}>
              {/* Fallback graphic matching target aesthetic */}
              <div style={{ position: "relative", width: "200px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Target size={150} color="#16a34a" strokeWidth={1} style={{ opacity: 0.2 }} />
                <Target size={100} color="#15803d" strokeWidth={2} style={{ position: "absolute", opacity: 0.5 }} />
                <Leaf size={60} color="#16a34a" fill="#16a34a" style={{ position: "absolute", bottom: "10px", right: "20px" }} />
                <Leaf size={40} color="#15803d" fill="#15803d" style={{ position: "absolute", bottom: "30px", left: "20px", transform: "scaleX(-1)" }} />
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. OUR PRESENCE (DARK GREEN SECTION) */}
      <section style={{ background: "#083c24", padding: "5rem 0 10rem 0", color: "white" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", border: "1px solid rgba(255,215,0,0.5)", color: "#fcd34d", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>
                <MapPin size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} /> OUR PRESENCE
              </span>
              <h2 style={{ fontSize: "2.8rem", fontWeight: 800, marginBottom: "0.5rem", color: "white" }}>
                {t("about_loc_title")}
              </h2>
              <div style={{ width: "40px", height: "4px", background: "#fcd34d", margin: "0 auto", borderRadius: "2px" }} />
            </motion.div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              
              {/* Card 1 */}
              <motion.div variants={fadeUp} style={{ flex: "1 1 300px", background: "#0a4a2a", borderRadius: "20px", padding: "2rem", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <Building size={24} color="#4ade80" />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "white" }}>{t("about_hq_title")}</h3>
                <p style={{ opacity: 0.9, color: "white", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem", flex: 1 }}>{t("about_hq_desc")}</p>
                <a href="https://maps.app.goo.gl/YG5JFpEyDqnC76A59" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(0,0,0,0.2)", padding: "1.2rem", borderRadius: "12px", display: "block", textDecoration: "none" }} className="group hover:bg-black/40 transition-colors">
                  <div style={{ fontSize: "0.75rem", color: "#fcd34d", fontWeight: 700, letterSpacing: "1px", marginBottom: "8px" }}><MapPin size={12} style={{ display: "inline", marginRight: "4px" }} /> ADDRESS</div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.9, lineHeight: 1.5, color: "white" }} className="group-hover:text-[#fcd34d] transition-colors">288, Lokmanya Tilak Path, Near Railway Crossing, Ujjain Road, Barnagar, Dist. Ujjain (MP) 456771</div>
                </a>
              </motion.div>

              {/* Card 2 (Featured) */}
              <motion.div variants={fadeUp} style={{ flex: "1 1 300px", background: "#0c5836", borderRadius: "20px", padding: "2rem", border: "1px solid #fcd34d", display: "flex", flexDirection: "column", transform: "translateY(-10px)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(252,211,77,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <Factory size={24} color="#fcd34d" />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "white" }}>{t("about_mfg_title")}</h3>
                <p style={{ opacity: 0.9, color: "white", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem", flex: 1 }}>{t("about_mfg_desc")}</p>
                <div style={{ display: "flex", gap: "1rem", background: "rgba(0,0,0,0.2)", padding: "1rem", borderRadius: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#fcd34d", fontWeight: 800, fontSize: "1.1rem" }}>120 TPD</div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, opacity: 0.8, letterSpacing: "0.5px" }}>DAILY OUTPUT</div>
                  </div>
                  <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#fcd34d", fontWeight: 800, fontSize: "1.1rem" }}>36,000+</div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, opacity: 0.8, letterSpacing: "0.5px" }}>MT / YEAR</div>
                  </div>
                  <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#fcd34d", fontWeight: 800, fontSize: "1.1rem" }}>550 kW</div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, opacity: 0.8, letterSpacing: "0.5px" }}>SOLAR POWER</div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeUp} style={{ flex: "1 1 300px", background: "#0a4a2a", borderRadius: "20px", padding: "2rem", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <Anchor size={24} color="#4ade80" />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "white" }}>{t("about_term_title")}</h3>
                <p style={{ opacity: 0.9, color: "white", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem", flex: 1 }}>{t("about_term_desc")}</p>
                <div style={{ background: "rgba(0,0,0,0.2)", padding: "1.2rem", borderRadius: "12px" }}>
                  <div style={{ fontSize: "0.75rem", color: "#60a5fa", fontWeight: 700, letterSpacing: "1px", marginBottom: "8px" }}><MapPin size={12} style={{ display: "inline", marginRight: "4px" }} /> REGION</div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.9, lineHeight: 1.5, color: "white" }}>Central India – Pan India Supply Network Export Ready</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FOUNDER PROFILE */}
      <section style={{ padding: "0 0 1rem 0", marginTop: "-120px", position: "relative", zIndex: 10 }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "3rem",
              display: "flex",
              gap: "2rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
            
            {/* Avatar & Name */}
            <div style={{ flex: "1 1 200px", textAlign: "center", minWidth: "200px" }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "0 auto 1.5rem", overflow: "hidden", border: "4px solid #0c5836", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/assets/images/ceo.jpg" alt="Harsh Jain" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#111", margin: "0 0 4px 0" }}>Harsh Jain</h2>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ea580c", textTransform: "uppercase", letterSpacing: "1px" }}>FOUNDER & DIRECTOR</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ea580c", textTransform: "uppercase", letterSpacing: "1px" }}>MAHAURJA</div>
            </div>

            {/* Bio & Pills */}
            <div style={{ flex: "2 1 400px", padding: "0 1rem" }}>
              <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7, margin: "0 0 1.5rem 0" }}>
                Driving India's biomass energy revolution through precision-engineered pellet solutions. Building MAHAURJA to replace fossil fuels with clean, cost-effective, and reliable green thermal power for industrial India.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", background: "#f0fdf4", color: "#166534", padding: "6px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #dcfce7" }}><Leaf size={14} /> Green Energy Pioneer</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", background: "#f0fdf4", color: "#166534", padding: "6px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #dcfce7" }}><Factory size={14} /> Industrial Innovation</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", background: "#f0fdf4", color: "#166534", padding: "6px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #dcfce7" }}><Trees size={14} /> Zero Deforestation</span>
              </div>
            </div>

            {/* Contact Blocks */}
            <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ background: "#f9fafb", border: "1px solid #f3f4f6", padding: "1.2rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", flexShrink: 0 }}><Phone size={16} color="#444" /></div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#777", fontWeight: 600, letterSpacing: "0.5px" }}>PHONE</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111" }}>+91 9340212401</div>
                </div>
              </div>
              <div style={{ background: "#f9fafb", border: "1px solid #f3f4f6", padding: "1.2rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", flexShrink: 0 }}><Mail size={16} color="#444" /></div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#777", fontWeight: 600, letterSpacing: "0.5px" }}>EMAIL</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111", wordBreak: "break-all" }}>harsh@bharatindustrial<br/>renewables.com</div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}
