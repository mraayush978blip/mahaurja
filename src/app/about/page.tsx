"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Award, Droplets, Truck, HeartHandshake, TreePine } from "lucide-react";
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

export default function About() {
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
          {t("about_title")}
        </motion.h1>
      </header>

      <section className="section-padding">
        <motion.div 
          className="grid-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant}>
            <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>{t("about_desc1")}</p>
            <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>{t("about_desc2")}</p>
            <p style={{ fontSize: "1.2rem" }}>{t("about_desc3")}</p>
          </motion.div>
          <motion.div variants={fadeUpVariant}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ background: "url('/assets/images/about-img.jpg') center/cover", height: "400px", borderRadius: "20px", boxShadow: "var(--shadow-lg)", backgroundColor: "#cbd5e1" }} 
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="section-padding bg-light">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          {t("features_title")}
        </motion.h2>
        <motion.div 
          className="grid-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {[
            { icon: Award, title: "feat_1" },
            { icon: Droplets, title: "feat_2" },
            { icon: Truck, title: "feat_3" },
            { icon: HeartHandshake, title: "feat_5" },
            { icon: TreePine, title: "feat_4" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              className="card" 
              variants={fadeUpVariant}
              whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="card-icon"><item.icon /></div>
              <h3>{t(item.title as any)}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
