"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { User, Phone, Mail, MapPin, Send, Leaf, Building, Factory, Flame, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main style={{ backgroundColor: "#f8fafc", paddingBottom: "6rem", minHeight: "100vh" }}>
      
      {/* HEADER SECTION */}
      <section style={{ padding: "8rem 0 3rem 0", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "#06402b", marginBottom: "1rem" }}>
            {t("nav_contact" as any)}
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ height: "1px", width: "40px", background: "#16a34a" }} />
            <Leaf size={16} color="#16a34a" />
            <div style={{ height: "1px", width: "40px", background: "#16a34a" }} />
          </div>
          <p style={{ fontSize: "1.1rem", color: "#4b5563", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Connect with our team for better biomass energy solutions.
          </p>
        </motion.div>
      </section>

      {/* MAIN CARD */}
      <section style={{ padding: "0 2rem" }}>
        <div className="container responsive-container-padding" style={{ maxWidth: "1400px", margin: "0 auto", padding: 0 }}>
          <motion.div 
            style={{ 
              background: "#ffffff", 
              borderRadius: "24px", 
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)", 
              overflow: "hidden", 
              display: "flex", flexWrap: "wrap",
              border: "1px solid rgba(0,0,0,0.03)" 
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            
            {/* LEFT SIDE: Contact Info */}
            <motion.div 
              variants={fadeUpVariant}
              className="responsive-child"
              style={{ 
                flex: "1 1 400px", 
                position: "relative",
                background: "#06402b",
                color: "white", 
                display: "flex", 
                flexDirection: "column",
                overflow: "hidden"
              }}
            >
              {/* Abstract Light Green Curves at Top Right */}
              <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", borderRadius: "50%", background: "#4ade80", opacity: 0.2 }} />
              <div style={{ position: "absolute", top: "-100px", right: "-10px", width: "250px", height: "250px", borderRadius: "50%", background: "#16a34a", opacity: 0.2 }} />
              <div style={{ position: "absolute", top: "20px", right: "-80px", width: "150px", height: "150px", borderRadius: "50%", background: "#86efac", opacity: 0.1 }} />

              {/* Dotted pattern overlay */}
              <div style={{ position: "absolute", top: "2rem", left: "2rem", width: "100px", height: "100px", backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 2px, transparent 2px)", backgroundSize: "15px 15px", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "4rem", left: "2rem", width: "100px", height: "100px", backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 2px, transparent 2px)", backgroundSize: "15px 15px", opacity: 0.5 }} />

              {/* Factory Image Blended at the Bottom */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", backgroundImage: "url('/assets/images/about.png')", backgroundSize: "cover", backgroundPosition: "center bottom", zIndex: 0 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "65%", background: "linear-gradient(to bottom, #06402b 0%, rgba(6,64,43,0.7) 40%, rgba(6,64,43,0.85) 100%)", zIndex: 0 }} />

              <div style={{ position: "relative", zIndex: 2, padding: "4rem 3rem" }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "white", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                  Let's work together
                </h2>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#86efac", marginBottom: "0.2rem", lineHeight: 1.2 }}>
                  To build a green future.
                </h2>
                
                <div style={{ width: "40px", height: "3px", background: "#f59e0b", margin: "1.5rem 0", borderRadius: "2px" }} />
                
                <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)", marginBottom: "0.5rem", lineHeight: 1.6, fontWeight: 500 }}>
                  Connect with our expert team.
                </p>
                <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)", marginBottom: "3rem", lineHeight: 1.6, fontWeight: 500 }}>
                  We are always ready for your questions, suggestions, and collaboration opportunities.
                </p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.15)" }}>
                      <User size={18} color="white" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "white", marginBottom: "2px" }}>Harsh Jain</div>
                      <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>Founder & Director</div>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.15)" }}>
                      <Phone size={18} color="white" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", minHeight: "42px" }}>
                      <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>+91 9340212401</span>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.15)" }}>
                      <Mail size={18} color="white" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", minHeight: "42px" }}>
                      <a href="mailto:harsh@bharatindustrialrenewables.com" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.9)", textDecoration: "none", wordBreak: "break-all" }}>harsh@bharatindustrialrenewables.com</a>
                    </div>
                  </div>
                  
                  <a href="https://maps.app.goo.gl/YG5JFpEyDqnC76A59" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem", textDecoration: "none" }} className="group">
                    <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.15)" }} className="group-hover:bg-[#16a34a] transition-colors">
                      <MapPin size={18} color="white" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", minHeight: "42px" }}>
                      <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }} className="group-hover:text-white transition-colors">288, Lokmanya Tilak Path, Ujjain Road,<br/>Railway Crossing ke paas, Badnagar,<br/>Jila Ujjain (M.P.) 456771</span>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Bottom Left decorative leaf */}
              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", zIndex: 1 }}>
                <Leaf size={150} color="#166534" fill="#166534" style={{ opacity: 0.5, transform: "rotate(45deg)" }} />
              </div>
            </motion.div>

            {/* RIGHT SIDE: Contact Form */}
            <motion.div 
              variants={fadeUpVariant}
              style={{ flex: "1 1 500px", padding: "4rem", background: "#ffffff" }}
            >
              <h3 style={{ fontSize: "1.8rem", marginBottom: "0.5rem", color: "#111", fontWeight: 800 }}>Send us a message</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2rem" }}>
                <div style={{ width: "30px", height: "2px", background: "#f59e0b" }} />
                <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>Fill in your details, our team will contact you shortly.</span>
              </div>
              
              <form 
                onSubmit={(e) => { e.preventDefault(); alert('Your information has been successfully sent!'); }} 
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 45%" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                      {t("rfq_name" as any)} <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                        <User size={18} />
                      </div>
                      <input type="text" placeholder="Rajesh Kumar" required style={{ width: "100%", padding: "0.8rem 1rem 0.8rem 2.5rem", border: "1px solid #d1d5db", borderRadius: "8px", background: "#ffffff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }} />
                    </div>
                  </div>
                  <div style={{ flex: "1 1 45%" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                      {t("rfq_company" as any)} <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                        <Building size={18} />
                      </div>
                      <input type="text" placeholder="ABC Steel Industries" required style={{ width: "100%", padding: "0.8rem 1rem 0.8rem 2.5rem", border: "1px solid #d1d5db", borderRadius: "8px", background: "#ffffff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }} />
                    </div>
                  </div>
                </div>
                
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 45%" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                      {t("rfq_phone" as any)} <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                        <Phone size={18} />
                      </div>
                      <input type="tel" placeholder="+91 98765 43210" required style={{ width: "100%", padding: "0.8rem 1rem 0.8rem 2.5rem", border: "1px solid #d1d5db", borderRadius: "8px", background: "#ffffff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }} />
                    </div>
                  </div>
                  <div style={{ flex: "1 1 45%" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                      {t("rfq_email" as any)} <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                        <Mail size={18} />
                      </div>
                      <input type="email" placeholder="rajesh@company.com" required style={{ width: "100%", padding: "0.8rem 1rem 0.8rem 2.5rem", border: "1px solid #d1d5db", borderRadius: "8px", background: "#ffffff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }} />
                    </div>
                  </div>
                </div>
                
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 45%" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                      {t("rfq_boiler" as any)}
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                        <Factory size={18} />
                      </div>
                      <input type="text" placeholder="e.g. 5 TPH Fire Tube Boiler" style={{ width: "100%", padding: "0.8rem 1rem 0.8rem 2.5rem", border: "1px solid #d1d5db", borderRadius: "8px", background: "#ffffff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }} />
                    </div>
                  </div>
                  <div style={{ flex: "1 1 45%" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                      {t("rfq_size" as any)}
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", pointerEvents: "none" }}>
                        <Clock size={18} />
                      </div>
                      <select style={{ width: "100%", padding: "0.8rem 1rem 0.8rem 2.5rem", border: "1px solid #d1d5db", borderRadius: "8px", background: "#ffffff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "all 0.2s", appearance: "none" }} onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }}>
                        <option value="">Select size</option>
                        <option value="6mm">6mm - Industrial Use</option>
                        <option value="8mm">8mm - High Efficiency</option>
                        <option value="10mm">10mm - Large Plants</option>
                        <option value="custom">Custom Size</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                    Target GCV (kcal/kg)
                  </label>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                      <Flame size={18} />
                    </div>
                    <input type="text" placeholder="e.g. 4500 kcal/kg" style={{ width: "100%", padding: "0.8rem 1rem 0.8rem 2.5rem", border: "1px solid #d1d5db", borderRadius: "8px", background: "#ffffff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                    Additional Information / Requirements
                  </label>
                  <textarea placeholder="Monthly quantity, delivery location..." rows={3} style={{ width: "100%", padding: "1rem", border: "1px solid #d1d5db", borderRadius: "8px", background: "#ffffff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", resize: "vertical", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }} />
                </div>
                
                <motion.button 
                  type="submit" 
                  style={{ border: "none", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "1rem", padding: "1rem", fontSize: "1rem", fontWeight: 600, cursor: "pointer", background: "#06402b", color: "white", borderRadius: "8px" }}
                  whileHover={{ scale: 1.02, backgroundColor: "#047857" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} /> Send Message 
                </motion.button>
                
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "0.5rem" }}>
                  <ShieldCheck size={14} color="#16a34a" />
                  <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>Your information is 100% safe and will be kept confidential.</span>
                </div>
              </form>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: "4rem 2rem 0 2rem" }}>
        <div className="container responsive-container-padding" style={{ maxWidth: "1400px", margin: "0 auto", padding: 0 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            style={{
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              border: "4px solid #dcfce7",
              boxShadow: "0 20px 40px rgba(22, 163, 74, 0.15)",
              background: "#115e3b",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
            whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(22, 163, 74, 0.25)" }}
          >
            <a 
              href="https://maps.app.goo.gl/YG5JFpEyDqnC76A59" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: "block", width: "100%" }}
            >
              <img 
                src="/assets/images/mapdes.png" 
                alt="Mahaurja Plant Location" 
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
