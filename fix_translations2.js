const fs = require('fs');

const replacements = [
  // ABOUT PAGE
  ["हमारा उद्देश्य है कृषि अवशेषों को स्वच्छ ऊर्जा में बदलना और भारत के हर किसान और उद्योग के लिए एक स्थायी भविष्य बनाना।", "{t(\"hero_h2\" as any)}"],
  
  // PAGE.TSX remaining
  ["बेकार अवशेष नहीं, अब बनेगा देश की clean energy का ईंधन।", "No more wasted residue, now the fuel for the nation's clean energy."],
  ["⭐ हमारी मुख्य विशेषता", "⭐ {t(\"feed_flagship_sub\" as any)}"],
  ["हम उच्च ऊर्जा वाले काजू के छिलकों को उन्नत कृषि अवशेषों के साथ मिश्रित करके तैयार करते हैं, जिससे बनी प्रीमियम ब्रिकेट्स में होती है 5,000+ kcal/kg की जबरदस्त GCV क्षमता।", "{t(\"feed_flagship_desc\" as any)}"],
  ["उच्च ऊष्मा क्षमता", "High Heat Capacity"],
  ["कम कार्बन उत्सर्जन", "Low Carbon Emissions"],
  ["100% सतत ईंधन", "100% Sustainable Fuel"],
  ["🌱 बेहतर टेक्नोलॉजी, बेहतर भविष्य", "🌱 Better Technology, Better Future"],
  ["GCV (ग्रॉस कैलोरीफिक वैल्यू)", "{t(\"spec_gcv\" as any)}"],
  ["≤ 8% नमी", "{t(\"spec_moisture_prem\" as any)}"],
  ["न्यूनतम राख निर्माण", "{t(\"spec_ash_prem\" as any)}"],
  ["धुआं और धूल", "Smoke & Dust"],
  ["{t(\"spec_ash_std\" as any)}मात्रा में", "High Volume"],
  ["न्यूनतम उत्सर्जन", "Minimal Emissions"],
  ["स्वच्छ और पर्यावरण अनुकूल", "Clean and Eco-friendly"],
  ["सामान्य {t(\"spec_quality\" as any)}", "{t(\"spec_quality_std\" as any)}"],
  ["उच्चतम {t(\"spec_quality\" as any)} (ICQA)", "{t(\"spec_quality_prem\" as any)}"],
  ["बेहतर durability और भरोसेमंद संचालन", "Better durability and reliable operation"],
  ["{t(\"spec_ash_std\" as any)}ऊर्जा", "More Energy"],
  ["ऊँची कैलोरीफिक वैल्यू से बेहतर ऊर्जा उत्पादन", "Better energy generation through high calorific value"],
  ["कम उत्सर्जन", "Low Emissions"],
  ["पर्यावरण के अनुकूल और स्वच्छ संचालन", "Eco-friendly and clean operation"],
  ["लागत में बचत", "Cost Savings"],
  ["कम राख, कम नमी और {t(\"spec_ash_std\" as any)}दक्षता से {t(\"spec_ash_std\" as any)}बचत", "Savings through low ash, low moisture, and high efficiency"],
  ["विश्वसनीय और सुरक्षित", "Reliable & Safe"],
  ["उच्चतम मानकों के साथ सुरक्षित और भरोसेमंद तकनीक", "Safe and reliable technology with the highest standards"],
  ["🌱 हर टन बायोमास, बेहतर आय और स्वच्छ भविष्य", "🌱 Every ton of biomass, better income and a clean future"],
  ["क्या आप जानते हैं? डीजल और एलपीजी जैसे महंगे ईंधन की तुलना में महाऊर्जा बायोमास पैलेट्स पर स्विच करने से आपकी ईंधन लागत में <strong>4 गुना तक की बचत</strong> हो सकती है।", "{t(\"roi_callout\" as any)}"],
  ["वार्षिक CO₂ बचत (टन)", "{t(\"roi_co2_title\" as any)}"],
  ["🍃 स्वच्छ हवा, बेहतर कल", "🍃 Clean Air, Better Tomorrow"],
  ["कम लागत", "Low Cost"],
  ["ईंधन लागत में कमी और {t(\"spec_ash_std\" as any)}बचत", "Reduced fuel cost and higher savings"],
  ["उच्च मुनाफा", "Higher Profits"],
  ["{t(\"spec_ash_std\" as any)}ऊर्जा, बेहतर दक्षता और बेहतर रिटर्न", "More energy, better efficiency, and better returns"],
  ["पर्यावरण हितैषी", "Environment Friendly"],
  ["कम उत्सर्जन, स्वच्छ वातावरण और सतत विकास", "Low emissions, clean environment, and sustainable development"],
  ["भरोसेमंद समाधान", "Reliable Solution"],
  ["उच्च गुणवत्ता बायोमास पैलेट्स पर भरोसा करें", "Trust in high-quality biomass pellets"],

  // CONTACT PAGE
  ["संपर्क करें", "{t(\"nav_contact\" as any)}"],
  ["हमारी टीम से जुड़ें और बेहतर बायोमास ऊर्जा समाधान के लिए हमसे संपर्क करें।", "Connect with our team for better biomass energy solutions."],
  ["आइए साथ मिलकर", "Let's work together"],
  ["हरित भविष्य बनाएं।", "To build a green future."],
  ["हमारी विशेषज्ञ टीम से जुड़ें।", "Connect with our expert team."],
  ["हम आपके सवालों, सुझावों और सहयोग के अवसरों के लिए हमेशा तैयार हैं।", "We are always ready for your questions, suggestions, and collaboration opportunities."],
  ["हमें संदेश भेजें", "Send us a message"],
  ["अपनी जानकारी भरें, हमारी टीम आपसे जल्द ही संपर्क करेगी।", "Fill in your details, our team will contact you shortly."],
  ["आपकी जानकारी सफलतापूर्वक भेज दी गई है!", "Your information has been successfully sent!"],
  ["पूरा नाम", "{t(\"rfq_name\" as any)}"],
  ["कंपनी / प्लांट का नाम", "{t(\"rfq_company\" as any)}"],
  ["फोन नंबर", "{t(\"rfq_phone\" as any)}"],
  ["ईमेल पता", "{t(\"rfq_email\" as any)}"],
  ["बॉयलर का प्रकार / उद्योग", "{t(\"rfq_boiler\" as any)}"],
  ["पेलेट साइज", "{t(\"rfq_size\" as any)}"],
  ["6mm - औद्योगिक उपयोग", "6mm - Industrial Use"],
  ["8mm - हाई एफिशिएंसी", "8mm - High Efficiency"],
  ["10mm - बड़े प्लांट", "10mm - Large Plants"],
  ["कस्टम साइज", "Custom Size"],
  ["लक्ष्य GCV (kcal/kg)", "Target GCV (kcal/kg)"],
  ["अतिरिक्त जानकारी / आवश्यकता", "Additional Information / Requirements"],
  ["संदेश भेजें", "Send Message"],
  ["आपकी जानकारी 100% सुरक्षित है और गोपनीय रखी जाएगी।", "Your information is 100% safe and will be kept confidential."],
  ["सबमिट करें", "Submit"],

  // SERVICES PAGE
  ["सेवाएँ एवं प्रौद्योगिकी", "{t(\"nav_services\" as any)}"],
  ["हमारा मिशन", "Our Mission"],
  ["हमारा मिशन टिकाऊ पारिस्थितिक तंत्र की वास्तविक क्षमता को अनलॉक करके वैश्विक हरित ऊर्जा", "Our mission is to unlock the true potential of sustainable ecosystems and accelerate"],
  ["संक्रमण को गति देना है। हम मानते हैं कि ऊर्जा सिर्फ एक सुविधा नहीं बल्कि एक जिम्मेदारी है।", "the global green energy transition. We believe energy is not just a utility but a responsibility."],
  ["रूपांतरण प्रक्रियाएँ", "Conversion Processes"],
  ["थर्मोकेमिकल प्रसंस्करण", "Thermochemical Processing"],
  ["बायोमास स्वच्छ, गतिशील (ब्लेंड अनुकूलन), और मैकेनिकल (उच्च दक्षता ब्लेंड के", "Transforming biomass into clean, dynamic (blend optimization), and mechanical (high efficiency blend)"],
  ["लिए ऑन्शिगाइज़ की मिश्रण में परिवर्तित करना)", "energy mixtures."],
  ["जैव रासायनिक प्रसंस्करण", "Biochemical Processing"],
  ["रसायतोपविष्य प्रक्रियाओं को तोड़ने के लिए सूक्ष्मजीवों का उपयोग करके कुशल जैव-", "Using microorganisms to break down complex processes to create efficient bio-"],
  ["उपाधित बनाना।", "derived products."],
  ["फीडस्टॉक और उत्पाद", "Feedstock & Products"],
  ["लकड़ी के पेलेट्स", "Wood Pellets"],
  ["आकार: लंबाई - 6 मिमी तथा | अधिकतम नमी: 9.9/15% | राख: < 1.5%", "Size: Length - 6mm | Max Moisture: 9.9/15% | Ash: < 1.5%"],
  ["कृषि अवशेष", "Agricultural Residue"],
  ["कृषि पराली एवं अवशेष के लिए डिज़ाइन किया गया बायोमास ब्रिकेट।", "Biomass briquettes designed for agricultural stubble and residue."],
  ["तकनीकी विशिष्टताएं", "{t(\"spec_section_title\" as any)}"],
  ["पैरामीटर", "{t(\"spec_param\" as any)}"],
  ["मानक ग्रेड", "{t(\"spec_standard\" as any)}"],
  ["प्रीमियम ब्लेंड", "{t(\"spec_premium\" as any)}"],
  ["ब्राहकानुसार अनुकूलित", "{t(\"spec_gcv_std\" as any)}"],
  ["लक्ष्य 5,000+ kcal/kg", "{t(\"spec_gcv_prem\" as any)}"],
  ["उपलब्ध आकार", "{t(\"spec_size\" as any)}"],
  ["6 मिमी / 8 मिमी / 10 मिमी", "{t(\"spec_size_val\" as any)}"],
  ["नमी की मात्रा", "{t(\"spec_moisture\" as any)}"],
  ["न्यूनतम और नियंत्रित", "{t(\"spec_moisture_std\" as any)}"],
  ["अत्यधिक नियंत्रित", "{t(\"spec_moisture_prem\" as any)}"],
  ["राख और धूल", "{t(\"spec_ash\" as any)}"],
  ["लैब सत्यापित", "{t(\"spec_ash_std\" as any)}"],
  ["न्यूनतम अवशेष", "{t(\"spec_ash_prem\" as any)}"],
  ["गुणवत्ता सत्यापन", "{t(\"spec_quality\" as any)}"],
  ["इन-हाउस लैब प्रमाणित", "{t(\"spec_quality_std\" as any)}"],
  ["बैच-वार विश्लेषण प्रमाणपत्र (COA)", "{t(\"spec_quality_prem\" as any)}"],
  ["महाऊर्जा अलग क्यों है?", "Why MAHAURJA is Different?"],
  ["गुणवत्ता पर ध्यान", "Focus on Quality"],
  ["हम अपने उत्पाद की गुणवत्ता से समझौता नहीं करते। हर बैच को लैब में परखा जाता है।", "We never compromise on product quality. Every batch is tested in the lab."],
  ["पर्यावरण के प्रति प्रतिबद्धता", "Commitment to the Environment"],
  ["हमारे सभी उत्पाद 100% प्राकृतिक और कार्बन न्यूट्रल हैं, जो एक स्वच्छ भविष्य सुनिश्चित करते हैं।", "All our products are 100% natural and carbon neutral, ensuring a clean future."],
  ["लगातार आपूर्ति", "Consistent Supply"],
  ["हमारी विशाल उत्पादन क्षमता सुनिश्चित करती है कि आपको कभी भी ईंधन की कमी न চরম न हो।", "Our massive production capacity ensures you never run out of fuel."],
  ["ग्राहक सहायता", "Customer Support"],
  ["हमारी विशेषज्ञ टीम 24/7 आपके बॉयलर की दक्षता बढ़ाने और आपकी सहायता के लिए तैयार है।", "Our expert team is ready 24/7 to help increase your boiler's efficiency and assist you."]
];

const files = [
  'src/app/page.tsx',
  'src/app/services/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/about/page.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    for (const [hi, en] of replacements) {
      content = content.replaceAll(hi, en);
    }
    fs.writeFileSync(file, content);
  }
}

console.log("Done");
