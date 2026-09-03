const fs = require('fs');

const files = [
  'src/app/page.tsx',
  'src/app/services/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/about/page.tsx'
];

// Dictionary of exact string replacements we want to make
// For page.tsx (sections 3, 4, 6)
let replacements = {
  // Feedstock section
  "प्रकृति से निर्मित। बेजोड़ प्रदर्शन के लिए परिष्कृत।": "{t(\"feed_section_title\" as any)}",
  "प्राकृतिक अवशेष, अब ऊर्जा का सबसे बड़ा स्रोत।": "{t(\"feed_section_sub\" as any)}",
  "स्वच्छ ईंधन विकल्प": "{t(\"nav_sustainability\" as any)}", // fallback
  "प्रीमियम काजू-शेल ब्रिकेट्स": "{t(\"feed_flagship_title\" as any)}",
  "हम उच्च ऊर्जा वाले काजू के छिलकों को उन्नत कृषि अवशेषों के साथ मिश्रित करके तैयार करते हैं, जिससे बनी प्रीमियम ब्रिकेट्स में होती है 5,000+ kcal/kg की जबरदस्त GCV क्षमता।": "{t(\"feed_flagship_desc\" as any)}",
  
  // Technical specs section
  "तकनीकी विशेषताएं": "{t(\"spec_section_title\" as any)}",
  "हमारी प्रीमियम तकनीक उच्च ऊर्जा, कम उत्सर्जन और स्थायी भविष्य के लिए डिज़ाइन की गई है।": "Our premium technology is designed for high energy, low emissions, and a sustainable future.",
  "विशेषताएं": "{t(\"spec_param\" as any)}",
  "सामान्य बॉयलर": "{t(\"spec_standard\" as any)}",
  "महाऊर्जा बॉयलर": "{t(\"spec_premium\" as any)}",
  "GCV (ग्रॉस कैलोरीफिक वैल्यू)": "{t(\"spec_gcv\" as any)}",
  "साधारण गुणवत्ता ईंधन": "{t(\"spec_gcv_std\" as any)}",
  "उच्च कैलोरीफिक वैल्यू": "{t(\"spec_gcv_prem\" as any)}", // Actually "लक्ष्य 5,000+ kcal/kg" is spec_gcv_prem in hi
  
  "नमी का स्तर": "{t(\"spec_moisture\" as any)}",
  "8-15% / कभी-कभी 20% तक": "{t(\"spec_moisture_std\" as any)}",
  "अधिक दक्षता और बेहतर दहन": "{t(\"spec_moisture_prem\" as any)}", // fallback
  
  "राख की मात्रा": "{t(\"spec_ash\" as any)}",
  "अधिक | नियंत्रण नहीं": "{t(\"spec_ash_std\" as any)}",
  "साफ और कुशल संचालन": "{t(\"spec_ash_prem\" as any)}",

  "सुरक्षा मानक": "{t(\"spec_quality\" as any)}",
  "सामान्य सुरक्षा मानक": "{t(\"spec_quality_std\" as any)}",
  "उच्चतम सुरक्षा मानक (ICQA)": "{t(\"spec_quality_prem\" as any)}",
  
  // ROI Section
  "पैसा जलाना बंद करें। बायोमास अपनाएं।": "{t(\"roi_section_title\" as any)}",
  "क्या आप जानते हैं? डीजल और एलपीजी जैसे महंगे ईंधन की तुलना में महाऊर्जा बायोमास पैलेट्स पर स्विच करने से आपकी ईंधन लागत में <strong>4 गुना तक की बचत</strong> हो सकती है।": "Did you know? Switching to MAHAURJA Biomass Pellets can reduce your industrial heating and fuel costs up to <strong>4 times</strong> compared to expensive fossil fuels like Diesel and LPG.",
  "आपका वर्तमान ईंधन": "{t(\"roi_fuel_label\" as any)}",
  "कोयला": "{t(\"roi_fuel_coal\" as any)}",
  "डीजल / एलपीजी": "{t(\"roi_fuel_diesel\" as any)}",
  "प्राकृतिक गैस": "{t(\"roi_fuel_gas\" as any)}",
  "मासिक ईंधन खर्च": "{t(\"roi_amount_label\" as any)}",
  "अनुमानित मासिक बचत": "{t(\"roi_savings_title\" as any)}",
  "वार्षिक CO₂ बचत (टन)": "{t(\"roi_co2_title\" as any)}",
  "स्लाइडर को एडजस्ट करें या ईंधन चुनें और अनुमान देखें।": "Adjust the slider or select a fuel to see the estimate.",
  "आपकी बचत, आपका मुनाफा": "Your savings, your profit"
};

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [hi, key] of Object.entries(replacements)) {
      // Just do a simple global replace for these exact strings
      // Note: we have to handle the fact that some strings might be in HTML text vs attributes,
      // but in this case they are mostly raw text.
      // If we replace raw text with {t(...)}, we need to make sure we don't double brace.
      // E.g. <h2>तकनीकी विशेषताएं</h2> -> <h2>{t("spec_section_title" as any)}</h2>
      
      const regex = new RegExp(hi, 'g');
      content = content.replace(regex, key);
    }
    fs.writeFileSync(file, content);
  }
}

console.log("Done");
