const fs = require('fs');

const replacements = [
  // SERVICES PAGE
  ["सेवाएँ एवं <span style={{ color: \"#86efac\" }}>प्रौद्योगिकी</span>", "Services & <span style={{ color: \"#86efac\" }}>Technology</span>"],
  ["Our Mission टिकाऊ पारिस्थितिक तंत्र की वास्तविक क्षमता को अनलॉक करके वैश्विक हरित ऊर्जा the global green energy transition. We believe energy is not just a utility but a responsibility.", "Our mission is to unlock the true potential of sustainable ecosystems and accelerate the global green energy transition. We believe energy is not just a utility but a responsibility."],
  ["बायोमास स्वच्छ, गतिशीलिक \\(ब्लेंड अनुकूलन\\), और मैकेनिकल \\(उच्च दक्षता ब्लेंड के लिए ऑप्टिमाइज की मिश्रण में परिवर्तित करना\\)", "Transforming biomass into clean, dynamic (blend optimization), and mechanical (high efficiency blend) energy mixtures."],
  ["रासायतोपविषय प्रक्रियाओं को तोड़ने के लिए सूक्ष्मजीवों का उपयोग करके कुशल जैव-उत्पादित बनाना।", "Using microorganisms to break down complex processes to create efficient bio-derived products."],
  ["आकार: लंबाई - 6 मिमी तथा \\| अधिकतम नमी: 9.9/15% \\| राख: \\&lt; 1.5%", "Size: Length - 6mm | Max Moisture: 9.9/15% | Ash: &lt; 1.5%"],
  ["कृषि पराली एवं अवशेष के लिए डिजाइन किया गया बायोमास ब्रिकेट।", "Biomass briquettes designed for agricultural stubble and residue."],
  ["ग्राहकानुसार अनुकूलित", "Custom Engineered"],
  
  // PAGE PAGE
  ["More Energy, बेहतर दक्षता और बेहतर रिटर्न", "More energy, better efficiency, and better returns"],
  ["Low Emissions, स्वच्छ वातावरण और सतत विकास", "Low emissions, clean environment, and sustainable development"],

  // CONTACT PAGE
  ["हमारी टीम से जुड़ें और बेहतर बायोमास ऊर्जा समाधान के लिए हमसे \\{t\\(\"nav_contact\" as any\\)\\}।", "Connect with our team for better biomass energy solutions."]
];

const files = [
  'src/app/page.tsx',
  'src/app/services/page.tsx',
  'src/app/contact/page.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [hi, en] of replacements) {
      const regex = new RegExp(hi, 'g');
      content = content.replace(regex, en);
    }
    fs.writeFileSync(file, content);
  }
}
console.log("Done");
