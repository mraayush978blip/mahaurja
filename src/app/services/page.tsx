"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { Flame, Factory, FlaskConical, TreePine, Recycle } from "lucide-react";

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

export default function Services() {
  const { t } = useTranslation();

  return (
    <main className="page-padding">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {t("services_title")}
        </motion.h1>

        {/* Conversion Processes */}
        <section className="mt-12">
          <motion.h2 className="text-3xl font-bold mb-8 text-primary" variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t("serv_conv_title")}
          </motion.h2>
          
          <div className="grid-2">
            <motion.div 
              className="card border-l-4 border-accent"
              variants={fadeUpVariant} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Flame className="w-10 h-10 text-accent" />
                <h3 className="text-2xl font-semibold">{t("serv_thermo_title")}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t("serv_thermo_desc")}</p>
            </motion.div>

            <motion.div 
              className="card border-l-4 border-primary"
              variants={fadeUpVariant} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <FlaskConical className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-semibold">{t("serv_bio_title")}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t("serv_bio_desc")}</p>
            </motion.div>
          </div>
        </section>

        {/* Feedstocks & Products */}
        <section className="mt-16 decor-bg relative rounded-2xl p-8 bg-gray-50 border border-gray-100 shadow-sm">
          <motion.h2 className="text-3xl font-bold mb-8 text-primary relative z-10" variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t("serv_feed_title")}
          </motion.h2>

          <motion.div 
            className="grid-2 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Wood Pellets Tech Card */}
            <motion.div className="bg-white rounded-xl shadow-md overflow-hidden" variants={fadeUpVariant}>
              <div className="bg-primary text-white p-6 flex items-center gap-4">
                <TreePine className="w-8 h-8" />
                <h3 className="text-xl font-bold m-0 text-white">{t("serv_wood_title")}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{t("serv_wood_desc")}</p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-semibold text-gray-700">Dimensions</td>
                        <td className="py-2 text-right text-gray-600">6mm - 8mm</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-semibold text-gray-700">Durability</td>
                        <td className="py-2 text-right text-gray-600">{"> 97.5%"}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold text-gray-700">Ash Content</td>
                        <td className="py-2 text-right text-gray-600">{"< 1.5%"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Agro Residues Tech Card */}
            <motion.div className="bg-white rounded-xl shadow-md overflow-hidden" variants={fadeUpVariant}>
              <div className="bg-accent text-white p-6 flex items-center gap-4">
                <Recycle className="w-8 h-8" />
                <h3 className="text-xl font-bold m-0 text-white">{t("serv_agro_title")}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{t("serv_agro_desc")}</p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-semibold text-gray-700">Shape</td>
                        <td className="py-2 text-right text-gray-600">Briquette / Custom</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-semibold text-gray-700">Moisture</td>
                        <td className="py-2 text-right text-gray-600">{"< 10%"}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold text-gray-700">Density</td>
                        <td className="py-2 text-right text-gray-600">{"> 1.1 g/cm³"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
