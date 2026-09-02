"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { ShieldCheck, Map, LeafyGreen, BadgeCheck, Globe2 } from "lucide-react";

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

export default function Sustainability() {
  const { t } = useTranslation();

  const certifications = [
    { name: "SFI", desc: "Sustainable Forestry Initiative" },
    { name: "PEFC", desc: "Programme for the Endorsement of Forest Certification" },
    { name: "FSC®", desc: "Forest Stewardship Council" },
    { name: "SBP", desc: "Sustainable Biomass Program" },
    { name: "SURE", desc: "Sustainable Resources Verification Scheme" }
  ];

  return (
    <main className="page-padding">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <LeafyGreen className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="section-title mb-4">{t("sust_title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to the environment is absolute. We don't just claim to be green; we prove it through rigorous audits, traceable supply chains, and zero-deforestation policies.
          </p>
        </motion.div>

        {/* Responsible Sourcing Policy */}
        <section className="mb-20">
          <motion.div 
            className="card bg-primary text-white p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <div className="md:w-1/3 flex justify-center">
              <ShieldCheck className="w-32 h-32 text-accent" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-white">{t("sust_rsp_title")}</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                {t("sust_rsp_desc")}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Track & Trace Supply Chain */}
        <section className="mb-20 decor-bg relative py-12">
          <div className="relative z-10 flex flex-col md:flex-row-reverse gap-12 items-center">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <Map className="w-full h-48 text-gray-300 mb-4" strokeWidth={1} />
                <div className="flex items-center gap-3 text-sm text-gray-500 justify-center font-medium">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                  Live Tracking Ecosystem Active
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">{t("sust_track_title")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t("sust_track_desc")}
              </p>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-center gap-3">
                  <BadgeCheck className="text-primary w-6 h-6" /> Block-chain verified custody
                </li>
                <li className="flex items-center gap-3">
                  <BadgeCheck className="text-primary w-6 h-6" /> Geo-fenced harvesting zones
                </li>
                <li className="flex items-center gap-3">
                  <BadgeCheck className="text-primary w-6 h-6" /> Real-time carbon accounting
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Global Certifications Grid */}
        <section className="text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">{t("sust_cert_title")}</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">{t("sust_cert_desc")}</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3"
                variants={fadeUpVariant}
                whileHover={{ y: -5, boxShadow: "var(--shadow-md)" }}
              >
                <Globe2 className="w-10 h-10 text-accent opacity-80" />
                <h3 className="font-bold text-xl text-gray-800">{cert.name}</h3>
                <p className="text-xs text-gray-500 leading-tight">{cert.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
