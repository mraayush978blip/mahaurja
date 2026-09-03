"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Building, Factory, Anchor } from "lucide-react";
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
    <main className="page-padding">
      <div className="container">
        <header className="text-center mb-16">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("about_title")}
          </motion.h1>
        </header>

        {/* Our Mission */}
        <section className="mb-20 decor-bg relative py-12 rounded-2xl bg-white shadow-sm border border-gray-100">
          <motion.div 
            className="text-center max-w-4xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">{t("about_mission_title")}</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t("about_mission_desc")}
            </p>
          </motion.div>
        </section>

        {/* Locations & Facilities */}
        <section className="bg-light p-10 md:p-16 rounded-3xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            {t("about_loc_title")}
          </motion.h2>

          <motion.div 
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Headquarters */}
            <motion.div 
              className="card border-t-4 border-primary"
              variants={fadeUpVariant}
              whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Building className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("about_hq_title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("about_hq_desc")}</p>
            </motion.div>

            {/* Manufacturing */}
            <motion.div 
              className="card border-t-4 border-accent"
              variants={fadeUpVariant}
              whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("about_mfg_title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("about_mfg_desc")}</p>
            </motion.div>

            {/* Terminals */}
            <motion.div 
              className="card border-t-4 border-primary"
              variants={fadeUpVariant}
              whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Anchor className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("about_term_title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("about_term_desc")}</p>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
