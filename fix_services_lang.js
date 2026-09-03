const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  // 1
  ['Services & <span style={{ color: "#86efac" }}>Technology</span>', '{t("services_title" as any)}'],
  // 2
  ['Precision-engineered biomass fuel solutions for industrial boilers across India.', '{t("hero_h2" as any)}'], // hero_h2 fits here
  // 3
  ['Our Mission', '{t("about_mission_title" as any)}'],
  // 4
  ['Our mission is to unlock the true potential of sustainable ecosystems and accelerate the global green energy transition. We believe energy is not just a utility but a responsibility.', '{t("about_mission_desc" as any)}'],
  // 5
  ['Conversion Processes', '{t("serv_conv_title" as any)}'],
  // 6
  ['Thermochemical Processing', '{t("serv_thermo_title" as any)}'],
  // 7
  ['Biochemical Processing', '{t("serv_bio_title" as any)}'],
  // 8
  ['Wood Pellets', '{t("serv_wood_title" as any)}'],
  // 9
  ['Agricultural Residues', '{t("serv_agro_title" as any)}'],
  // 10
  ['Transforming biomass into clean, dynamic (blend optimization), and mechanical (high efficiency blend) energy mixtures.', '{t("serv_thermo_desc" as any)}'],
  // 11
  ['Using microorganisms to break down complex processes to create efficient bio-derived products.', '{t("serv_bio_desc" as any)}'],
  // 12
  ['Size: Length - 6mm | Max Moisture: 9.9/15% | Ash: &lt; 1.5%', '{t("serv_wood_desc" as any)}'],
  // 13
  ['Biomass briquettes designed for agricultural stubble and residue.', '{t("serv_agro_desc" as any)}'],
  // 14
  ['Custom Engineered', '{t("rfq_size_custom" as any)}']
];

for (const [en, replace] of replacements) {
  const safeEn = en.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const regex = new RegExp(safeEn, 'g');
  content = content.replace(regex, replace);
}

fs.writeFileSync(file, content);
console.log("Done");
