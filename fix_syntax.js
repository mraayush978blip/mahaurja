const fs = require('fs');
const files = ['src/app/page.tsx', 'src/app/services/page.tsx', 'src/app/contact/page.tsx'];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix 1: Object properties or variables where we have "{t(\"key\" as any)}"
    // e.g. feature: "{t("spec_gcv" as any)}" -> feature: t("spec_gcv" as any)
    content = content.replace(/"\{t\(\\"(.*?)\\" as any\)\}"/g, 't("$1" as any)');
    
    // Sometimes they are without escaped quotes because we might have used backticks or something else,
    // let's just do a blanket fix for any string that literally says "{t("something" as any)}" with outer quotes
    content = content.replace(/"\{t\("(.*?)" as any\)\}"/g, 't("$1" as any)');
    
    fs.writeFileSync(file, content);
  }
}
console.log("Done");
