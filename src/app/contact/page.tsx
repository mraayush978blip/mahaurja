"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { User, Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main>
      <header className="page-header">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("contact_title")}
        </motion.h1>
      </header>

      <section className="section-padding bg-light" style={{ minHeight: "80vh", display: "flex", alignItems: "center", position: "relative" }}>
        
        {/* Decorative Background Elements */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(5, 150, 105, 0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(245, 158, 11, 0.03) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <motion.div 
          className="grid-2" 
          style={{ background: "#ffffff", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.05)", overflow: "hidden", maxWidth: "1200px", margin: "0 auto", padding: 0, position: "relative", zIndex: 1, border: "1px solid rgba(0,0,0,0.03)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          
          {/* Left Side: Contact Details */}
          <motion.div 
            variants={fadeUpVariant}
            style={{ padding: "5rem 4rem", background: "var(--primary-color)", color: "white", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            {/* Elegant glassmorphism shapes */}
            <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "300px", height: "300px", background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)", borderRadius: "50%", backdropFilter: "blur(10px)" }} />
            <div style={{ position: "absolute", bottom: "-50px", left: "-50px", width: "200px", height: "200px", background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)", borderRadius: "50%", backdropFilter: "blur(10px)" }} />
            
            <h2 style={{ fontSize: "2.8rem", marginBottom: "1.5rem", color: "white", position: "relative", zIndex: 1 }}>{t("contact_title")}</h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.8, position: "relative", zIndex: 1 }}>{t("contact_subtitle")}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "12px" }}>
                  <User style={{ color: "white", width: "24px", height: "24px" }} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "1.2rem", color: "white", marginBottom: "4px" }}>{t("contact_name")}</div>
                  <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)" }}>Founder & Director</div>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "12px" }}>
                  <Phone style={{ color: "white", width: "24px", height: "24px" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", height: "48px" }}>
                  <span style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)" }}>+91 9340212401</span>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "12px" }}>
                  <Mail style={{ color: "white", width: "24px", height: "24px" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", height: "48px" }}>
                  <a href="mailto:harsh@bharatindustrialrenewables.com" style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>harsh@bharatindustrialrenewables.com</a>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "12px" }}>
                  <MapPin style={{ color: "white", width: "24px", height: "24px" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", minHeight: "48px" }}>
                  <span style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>288, Lokmanya Tilak Path, Ujjain Road, Railway Crossing ke paas, Badnagar, Jila Ujjain (M.P.) 456771</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            variants={fadeUpVariant}
            style={{ padding: "5rem 4rem", background: "#ffffff" }}
          >
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--text-dark)", fontWeight: 700 }}>Send us a message</h3>
            <p style={{ color: "var(--text-light)", marginBottom: "3rem", fontSize: "1.1rem" }}>Fill out the form below and we will get back to you shortly.</p>
            
            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Message Sent Successfully!'); }} 
              style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}
            >
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 45%" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-dark)" }}>First Name</label>
                  <input type="text" placeholder="John" required style={{ width: "100%", padding: "1rem 1.2rem", border: "1px solid #e2e8f0", borderRadius: "12px", background: "#f8fafc", fontFamily: "inherit", fontSize: "1rem", outline: "none", transition: "all 0.3s ease" }} onFocus={(e) => { e.target.style.borderColor = "var(--secondary-color)"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 4px rgba(5,150,105,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }} />
                </div>
                <div style={{ flex: "1 1 45%" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-dark)" }}>Last Name</label>
                  <input type="text" placeholder="Doe" required style={{ width: "100%", padding: "1rem 1.2rem", border: "1px solid #e2e8f0", borderRadius: "12px", background: "#f8fafc", fontFamily: "inherit", fontSize: "1rem", outline: "none", transition: "all 0.3s ease" }} onFocus={(e) => { e.target.style.borderColor = "var(--secondary-color)"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 4px rgba(5,150,105,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-dark)" }}>Email Address</label>
                <input type="email" placeholder="john@company.com" required style={{ width: "100%", padding: "1rem 1.2rem", border: "1px solid #e2e8f0", borderRadius: "12px", background: "#f8fafc", fontFamily: "inherit", fontSize: "1rem", outline: "none", transition: "all 0.3s ease" }} onFocus={(e) => { e.target.style.borderColor = "var(--secondary-color)"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 4px rgba(5,150,105,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }} />
              </div>
              
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-dark)" }}>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" style={{ width: "100%", padding: "1rem 1.2rem", border: "1px solid #e2e8f0", borderRadius: "12px", background: "#f8fafc", fontFamily: "inherit", fontSize: "1rem", outline: "none", transition: "all 0.3s ease" }} onFocus={(e) => { e.target.style.borderColor = "var(--secondary-color)"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 4px rgba(5,150,105,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }} />
              </div>
              
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-dark)" }}>{t("contact_inquiry")}</label>
                <select required style={{ width: "100%", padding: "1rem 1.2rem", border: "1px solid #e2e8f0", borderRadius: "12px", background: "#f8fafc", fontFamily: "inherit", fontSize: "1rem", outline: "none", transition: "all 0.3s ease", appearance: "none" }} onFocus={(e) => { e.target.style.borderColor = "var(--secondary-color)"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 4px rgba(5,150,105,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }}>
                  <option value="">Select an option</option>
                  <option value="buy">{t("contact_opt_buy")}</option>
                  <option value="sell">{t("contact_opt_sell")}</option>
                  <option value="sustainability">{t("contact_opt_sus")}</option>
                  <option value="media">{t("contact_opt_media")}</option>
                  <option value="hr">{t("contact_opt_hr")}</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-dark)" }}>{t("contact_msg")}</label>
                <textarea placeholder="How can we help you?" required rows={4} style={{ width: "100%", padding: "1rem 1.2rem", border: "1px solid #e2e8f0", borderRadius: "12px", background: "#f8fafc", fontFamily: "inherit", fontSize: "1rem", outline: "none", resize: "vertical", transition: "all 0.3s ease" }} onFocus={(e) => { e.target.style.borderColor = "var(--secondary-color)"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 4px rgba(5,150,105,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }} />
              </div>
              
              <motion.button 
                type="submit" 
                className="btn" 
                style={{ border: "none", width: "100%", justifyContent: "center", marginTop: "1rem", padding: "1.2rem", fontSize: "1.1rem", cursor: "pointer", background: "var(--primary-color)", color: "white", borderRadius: "12px" }}
                whileHover={{ scale: 1.02, backgroundColor: "var(--secondary-color)" }}
                whileTap={{ scale: 0.98 }}
              >
                {t("contact_submit")} <Send style={{ width: "18px", marginLeft: "8px" }} />
              </motion.button>
            </form>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}
