"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HelpCircle, Clock, Leaf, Truck, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const faqs = [
  {
    question: "Why choose MAHAURJA?",
    answer: "Choosing MAHAURJA means partnering with a forward-thinking company dedicated to sustainability, innovation, and impact. We don't just provide products; we offer solutions that address some of the most pressing environmental challenges. Our expertise in converting waste into valuable resources, coupled with our commitment to quality and research, ensures that you're not only getting the best in the market but also contributing to a greener future."
  },
  {
    question: "What is MAHAURJA?",
    answer: "MAHAURJA is a pioneering company focused on converting agricultural and organic waste into biomass pellets and briquettes. We create sustainable waste management solutions that benefit both rural and urban environments."
  },
  {
    question: "How does your biomass production process work?",
    answer: "We utilize advanced processes that treat organic waste in a controlled environment to produce premium green fuel. Our method is environmentally friendly and helps significantly reduce carbon emissions compared to traditional fossil fuels."
  },
  {
    question: "What are the key benefits of using your biomass pellets?",
    answer: "Our biomass pellets offer high calorific value, very low ash content, and consistent mechanical durability, making them a highly efficient and eco-friendly alternative to coal and other traditional fossil fuels for industrial heating."
  },
  {
    question: "What industries can benefit from MAHAURJA products?",
    answer: "Our products serve a variety of sectors including manufacturing, power generation, textiles, pharmaceuticals, food processing, and any industry utilizing industrial boilers."
  },
  {
    question: "How do your biomass briquettes compare to traditional fuels?",
    answer: "Our biomass briquettes offer higher energy output, lower emissions, and are derived entirely from renewable resources, making them a cost-effective and eco-friendly alternative to fossil fuels."
  },
  {
    question: "Where is MAHAURJA located?",
    answer: "Our facility is located at 288, Lokmanya Tilak Path, Ujjain Road, Railway Crossing ke paas, Badnagar, Jila Ujjain (M.P.) 456771. India."
  },
  {
    question: "How can I purchase MAHAURJA products?",
    answer: "You can contact us directly via our website, email, or phone. We also collaborate with industrial distributors to make our sustainable fuel products more accessible."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const { t } = useTranslation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* 1. HERO SECTION WITH IMAGE */}
      <section style={{ 
        position: "relative", 
        width: "100%", 
        minHeight: "200px", 
        backgroundImage: "url('/assets/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "6rem 0 1rem 0"
      }}>
        {/* Dark gradient overlay so text is readable */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, rgba(6,64,36,0.9) 0%, rgba(6,64,36,0.6) 40%, rgba(6,64,36,0.1) 100%)" }} />
        
        <div className="container responsive-hero-container-padding" style={{ position: "relative", zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ maxWidth: "600px", color: "white" }}>
            <motion.div variants={fadeUp} style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(255,215,0,0.4)", padding: "6px 16px", borderRadius: "24px", fontSize: "0.85rem", fontWeight: 700, color: "#fcd34d", marginBottom: "1.5rem" }}>
              <HelpCircle size={14} /> WE'RE HERE TO HELP
            </motion.div>
            <motion.h1 className="responsive-hero-h1" variants={fadeUp} style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.1, color: "white" }}>
              FAQ
            </motion.h1>
            <motion.p className="responsive-hero-p" variants={fadeUp} style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: 1.6, marginBottom: "2rem", color: "white" }}>
              Find quick answers to your questions about our sustainable biomass fuels, industrial solutions, and delivery processes.
            </motion.p>
            <motion.div variants={fadeUp} style={{ fontSize: "0.9rem", opacity: 0.9, borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1rem", display: "flex", gap: "12px", alignItems: "center", color: "white" }}>
              <Link href="/" className="hover:text-[#fcd34d] transition-colors">Home</Link>
              <span style={{ opacity: 0.5 }}>/</span>
              <span style={{ color: "#fcd34d", fontWeight: 600 }}>FAQ</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS/SUPPORT BANNER (OVERLAPPING HERO) */}
      <section style={{ position: "relative", zIndex: 10, marginTop: "-40px" }}>
        <div className="container responsive-container-padding">
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
              { icon: <Clock size={24} color="#fcd34d" />, title: "24/7", subtitle: "SUPPORT AVAILABLE" },
              { icon: <Leaf size={24} color="#fcd34d" />, title: "100%", subtitle: "ORGANIC BIOMASS" },
              { icon: <Truck size={24} color="#fcd34d" />, title: "PAN-INDIA", subtitle: "DELIVERY NETWORK" },
              { icon: <ShieldCheck size={24} color="#fcd34d" />, title: "ISO 9001", subtitle: "CERTIFIED QUALITY" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", flex: "1 1 200px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fcd34d", lineHeight: 1.2 }}>{stat.title}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, opacity: 0.8, letterSpacing: "1px", marginTop: "4px" }}>{stat.subtitle}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "6rem 0 6rem 0" }}>
        <div className="container responsive-container-padding mx-auto max-w-[900px]">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111", marginBottom: "1rem" }}>
              Frequently Asked Questions
            </h2>
            <div style={{ width: "80px", height: "4px", backgroundColor: "#0f5132", margin: "0 auto", borderRadius: "2px" }}></div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} style={{ borderBottom: "1px solid transparent" }}>
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      background: "transparent",
                      border: "none",
                      padding: "0.5rem 0",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: isOpen ? "#0f5132" : "#333", flexShrink: 0, transition: "background-color 0.3s" }}></div>
                    <span style={{ fontSize: "1.15rem", fontWeight: isOpen ? 700 : 500, color: isOpen ? "#0f5132" : "#222", transition: "all 0.3s" }}>
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          backgroundColor: "#0f5132",
                          color: "white",
                          padding: "1.5rem",
                          borderRadius: "12px",
                          marginTop: "1rem",
                          fontSize: "1rem",
                          lineHeight: 1.7,
                          boxShadow: "0 10px 25px rgba(15,81,50,0.15)"
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
