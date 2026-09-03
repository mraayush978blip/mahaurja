"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { Zap, Leaf, Flame, Factory, Trees, CircleDollarSign, Building2, FlaskConical, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [activeTab, setActiveTab] = useState(0);
  const [fuelType, setFuelType] = useState<"coal" | "diesel" | "gas">("coal");
  const [fuelAmount, setFuelAmount] = useState(1000);
  const [currentRotatorIndex, setCurrentRotatorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotatorIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // CO2 savings estimates per ton/liter of displaced fuel
  const co2SavingsMap = {
    coal: 2.3, // tons CO2 saved per ton of coal displaced
    diesel: 2.68, // kg CO2 per liter (approx 0.00268 tons per liter, but let's assume tons for simplicity in the slider)
    gas: 2.02, 
  };
  
  // Adjusted multiplier for display purposes
  const fuelMultiplier = fuelType === "coal" ? 2.3 : fuelType === "diesel" ? 2.68 : 2.02;
  const estimatedCo2Savings = Math.round(fuelAmount * fuelMultiplier);
  const estimatedCostSavings = "4x";

  const industries = [
    {
      id: 0,
      icon: Zap,
      tabTitle: "ind_tab_1",
      title: "ind_title_1",
      desc: "ind_desc_1",
      metric: "ind_metric_1"
    },
    {
      id: 1,
      icon: Factory,
      tabTitle: "ind_tab_2",
      title: "ind_title_2",
      desc: "ind_desc_2",
      metric: "ind_metric_2"
    },
    {
      id: 2,
      icon: Trees,
      tabTitle: "ind_tab_3",
      title: "ind_title_3",
      desc: "ind_desc_3",
      metric: "ind_metric_3"
    }
  ];

  return (
    <main className="home-page">
      {/* 1. Hero Section: The "AHA!" Moment */}
      <header className="hero ultra-minimal">
        <motion.div 
          className="hero-content-centered"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUpVariant}>{t("hero_title")}</motion.h1>
          <motion.h2 variants={fadeUpVariant}>{t("hero_subtitle")}</motion.h2>
          
          <motion.div variants={fadeUpVariant} style={{ height: "40px", margin: "1.5rem 0", position: "relative", display: "flex", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRotatorIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ position: "absolute", fontWeight: 600, color: "var(--accent-color)", fontSize: "1.2rem", background: "rgba(245, 158, 11, 0.1)", padding: "0.5rem 1.5rem", borderRadius: "30px" }}
              >
                {currentRotatorIndex === 0 ? t("hero_rotator_1" as any) : t("hero_rotator_2" as any)}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={fadeUpVariant} style={{ marginTop: "2rem" }}>
            <Link href="#how-it-works" className="btn btn-primary">
              {t("hero_cta")}
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* 2. Interactive 3-Step Explanation */}
      <section className="section-padding bg-light decor-bg" id="how-it-works">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-title" variants={fadeUpVariant}>
            {t("home_step_title")}
          </motion.h2>
          
          <div className="step-tracker">
            <motion.div className="step-card" variants={fadeUpVariant} whileHover={{ y: -5 }}>
              <div className="step-number">1</div>
              <div className="step-icon"><Trees /></div>
              <h3>{t("step_1_title")}</h3>
              <p>{t("step_1_desc")}</p>
            </motion.div>
            
            <motion.div className="step-connector" variants={fadeUpVariant}></motion.div>
            
            <motion.div className="step-card" variants={fadeUpVariant} whileHover={{ y: -5 }}>
              <div className="step-number">2</div>
              <div className="step-icon"><Factory /></div>
              <h3>{t("step_2_title")}</h3>
              <p>{t("step_2_desc")}</p>
            </motion.div>
            
            <motion.div className="step-connector" variants={fadeUpVariant}></motion.div>
            
            <motion.div className="step-card" variants={fadeUpVariant} whileHover={{ y: -5 }}>
              <div className="step-number">3</div>
              <div className="step-icon"><Flame /></div>
              <h3>{t("step_3_title")}</h3>
              <p>{t("step_3_desc")}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. Interactive Benefits Switcher */}
      <section className="section-padding" id="industry-benefits">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-title" variants={fadeUpVariant}>
            {t("home_industry_title")}
          </motion.h2>

          <div className="tab-switcher">
            <div className="tab-nav">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <button 
                    key={ind.id}
                    className={`tab-btn ${activeTab === ind.id ? "active" : ""}`}
                    onClick={() => setActiveTab(ind.id)}
                  >
                    <Icon className="tab-icon" />
                    <span>{t(ind.tabTitle as any)}</span>
                  </button>
                )
              })}
            </div>
            
            <div className="tab-content-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="tab-content-card"
                >
                  <div className="tab-content-inner">
                    <h3>{t(industries[activeTab].title as any)}</h3>
                    <p className="tab-desc">{t(industries[activeTab].desc as any)}</p>
                    
                    <div className="tab-metric">
                      <Zap className="metric-icon" />
                      <div>
                        <h4 style={{ fontWeight: 700 }}>Key Impact</h4>
                        <p>{t(industries[activeTab].metric as any)}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Scale & Confidence Gallery */}
      <section className="section-padding bg-light decor-bg">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-title" variants={fadeUpVariant}>
            {t("home_scale_title" as any)}
          </motion.h2>

          <motion.div className="grid-2" variants={staggerContainer}>
            <motion.div 
              className="card" 
              variants={fadeUpVariant}
              whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
            >
              <div className="card-icon"><Box /></div>
              <h3>{t("scale_1_title" as any)}</h3>
              <p>{t("scale_1_desc" as any)}</p>
            </motion.div>

            <motion.div 
              className="card" 
              variants={fadeUpVariant}
              whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
            >
              <div className="card-icon"><FlaskConical /></div>
              <h3>{t("scale_2_title" as any)}</h3>
              <p>{t("scale_2_desc" as any)}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. Interactive Cost & CO2 Reduction Estimator */}
      <section className="section-padding" id="calculator">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-title" variants={fadeUpVariant}>
            {t("calc_title")}
          </motion.h2>

          <motion.div className="calculator-card" variants={fadeUpVariant}>
            <div className="calc-inputs">
              <div className="input-group">
                <label>{t("calc_fuel_label")}</label>
                <div className="fuel-selector">
                  <button className={fuelType === "coal" ? "active" : ""} onClick={() => setFuelType("coal")}>{t("calc_fuel_coal")}</button>
                  <button className={fuelType === "diesel" ? "active" : ""} onClick={() => setFuelType("diesel")}>{t("calc_fuel_diesel")}</button>
                  <button className={fuelType === "gas" ? "active" : ""} onClick={() => setFuelType("gas")}>{t("calc_fuel_gas")}</button>
                </div>
              </div>

              <div className="input-group">
                <label>{t("calc_amount_label")} : <strong>{fuelAmount.toLocaleString()}</strong></label>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100"
                  value={fuelAmount} 
                  onChange={(e) => setFuelAmount(parseInt(e.target.value))}
                  className="range-slider"
                />
              </div>
            </div>

            <div className="calc-outputs">
              <div className="output-box green">
                <Leaf className="output-icon" />
                <div className="output-value">{estimatedCo2Savings.toLocaleString()}</div>
                <div className="output-label">{t("calc_savings_co2")}</div>
              </div>
              <div className="output-box gold">
                <CircleDollarSign className="output-icon" />
                <div className="output-value">{estimatedCostSavings}</div>
                <div className="output-label">{t("calc_savings_cost")}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
