"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, Clock, Leaf, Truck, ShieldCheck, Plus, Minus, Headset, ArrowRight } from "lucide-react";
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

const faqs_en = [
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

const faqs_hi = [
  {
    question: "महाऊर्जा को ही क्यों चुनें?",
    answer: "महाऊर्जा को चुनने का मतलब है एक ऐसी दूरदर्शी कंपनी के साथ साझेदारी करना जो स्थिरता, नवाचार और सकारात्मक प्रभाव के लिए समर्पित है। हम सिर्फ उत्पाद नहीं बेचते; हम ऐसे समाधान पेश करते हैं जो पर्यावरण की गंभीर चुनौतियों का समाधान करते हैं।"
  },
  {
    question: "महाऊर्जा क्या है?",
    answer: "महाऊर्जा एक अग्रणी कंपनी है जो कृषि और जैविक कचरे को बायोमास पेलेट्स और ब्रिकेट्स में बदलने पर केंद्रित है। हम टिकाऊ अपशिष्ट प्रबंधन समाधान बनाते हैं जो ग्रामीण और शहरी दोनों वातावरणों को लाभ पहुंचाते हैं।"
  },
  {
    question: "आपकी बायोमास उत्पादन प्रक्रिया कैसे काम करती है?",
    answer: "हम उन्नत प्रक्रियाओं का उपयोग करते हैं जो प्रीमियम हरित ईंधन का उत्पादन करने के लिए एक नियंत्रित वातावरण में जैविक कचरे का उपचार करते हैं। हमारी विधि पर्यावरण के अनुकूल है और पारंपरिक जीवाश्म ईंधन की तुलना में कार्बन उत्सर्जन को काफी कम करने में मदद करती है।"
  },
  {
    question: "आपके बायोमास पेलेट्स का उपयोग करने के प्रमुख लाभ क्या हैं?",
    answer: "हमारे बायोमास पेलेट्स उच्च कैलोरी मान, बहुत कम राख सामग्री और लगातार यांत्रिक स्थायित्व प्रदान करते हैं, जिससे वे औद्योगिक हीटिंग के लिए कोयले और अन्य पारंपरिक जीवाश्म ईंधन का एक अत्यधिक कुशल और पर्यावरण के अनुकूल विकल्प बन जाते हैं।"
  },
  {
    question: "महाऊर्जा उत्पादों से किन उद्योगों को लाभ हो सकता है?",
    answer: "हमारे उत्पाद विनिर्माण, बिजली उत्पादन, वस्त्र, फार्मास्यूटिकल्स, खाद्य प्रसंस्करण और औद्योगिक बॉयलरों का उपयोग करने वाले किसी भी उद्योग सहित विभिन्न क्षेत्रों की सेवा करते हैं।"
  },
  {
    question: "आपके बायोमास ब्रिकेट्स की तुलना पारंपरिक ईंधन से कैसे की जाती है?",
    answer: "हमारे बायोमास ब्रिकेट्स अधिक ऊर्जा उत्पादन, कम उत्सर्जन प्रदान करते हैं, और पूरी तरह से नवीकरणीय संसाधनों से प्राप्त होते हैं, जिससे वे जीवाश्म ईंधन के लिए एक लागत प्रभावी और पर्यावरण के अनुकूल विकल्प बन जाते हैं।"
  },
  {
    question: "महाऊर्जा कहाँ स्थित है?",
    answer: "हमारी सुविधा 288, लोकमान्य तिलक पथ, उज्जैन रोड, रेलवे क्रॉसिंग के पास, बड़नगर, जिला उज्जैन (म.प्र.) 456771. भारत में स्थित है।"
  },
  {
    question: "मैं महाऊर्जा उत्पाद कैसे खरीद सकता हूँ?",
    answer: "आप हमारी वेबसाइट, ईमेल या फोन के माध्यम से सीधे हमसे संपर्क कर सकते हैं। हम अपने टिकाऊ ईंधन उत्पादों को अधिक सुलभ बनाने के लिए औद्योगिक वितरकों के साथ भी सहयोग करते हैं।"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const { lang, t } = useTranslation();
  
  const currentFaqs = lang === "hi" ? faqs_hi : faqs_en;

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

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {currentFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} style={{ 
                  background: isOpen ? "#f0fdf4" : "#ffffff",
                  border: isOpen ? "1px solid #16a34a" : "1px solid #e2e8f0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow: isOpen ? "0 10px 25px -5px rgba(22, 163, 74, 0.1), 0 8px 10px -6px rgba(22, 163, 74, 0.1)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)"
                }}>
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      background: "transparent",
                      border: "none",
                      padding: "1.25rem 1.5rem",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem", fontWeight: isOpen ? 700 : 600, color: isOpen ? "#166534" : "#1e293b", transition: "all 0.3s" }}>
                      {faq.question}
                    </span>
                    <div style={{ 
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      width: "32px", height: "32px", borderRadius: "50%", 
                      background: isOpen ? "#16a34a" : "#f1f5f9", 
                      color: isOpen ? "white" : "#64748b",
                      transition: "all 0.3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            padding: "0 1.5rem 1.5rem 1.5rem",
                            color: "#475569",
                            fontSize: "1rem",
                            lineHeight: 1.7,
                          }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Crazy CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              marginTop: "5rem",
              background: "linear-gradient(135deg, #064024 0%, #16a34a 100%)",
              borderRadius: "24px",
              padding: "3rem 2rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(22, 163, 74, 0.4)"
            }}
          >
            {/* Background glowing orb */}
            <div style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "300px",
              height: "300px",
              background: "rgba(255, 255, 255, 0.1)",
              filter: "blur(40px)",
              borderRadius: "50%",
              zIndex: 0
            }} />
            
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                padding: "1rem",
                borderRadius: "50%",
                marginBottom: "1.5rem",
                display: "inline-flex",
                color: "white"
              }}>
                <Headset size={40} />
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: "1rem", lineHeight: 1.2 }}>
                Still have questions?
              </h3>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "2rem", maxWidth: "500px" }}>
                Can't find the answer you're looking for? Our dedicated support team is ready to help you with anything you need.
              </p>
              <Link 
                href="/contact" 
                className="group"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "white",
                  color: "#064024",
                  padding: "1rem 2rem",
                  borderRadius: "99px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                }}
              >
                Contact Us
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
