const fs = require('fs');

const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove the overflow container and add hide-on-mobile to header
content = content.replace(
  /<div style=\{\{ overflowX: "auto" \}\}>\n\s*<div style=\{\{ display: "flex", minWidth: "700px", background: "#0c5836", color: "#fff", fontWeight: 700, fontSize: "1\.1rem" \}\}>/,
  '<div className="hide-on-mobile" style={{ display: "flex", background: "#0c5836", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>'
);

// 2. Remove minWidth from the body wrapper
content = content.replace(
  /<div style=\{\{ minWidth: "700px" \}\}>\n\s*\{\[\n\s*\{\n\s*icon: <Flame /,
  '{[\n                {\n                  icon: <Flame '
);

// 3. Make the row flex responsive
content = content.replace(
  /style=\{\{ display: "flex", borderBottom: idx !== 4 \? "1px solid #eaeaea" : "none", color: "#333" \}\}/g,
  'className="responsive-flex" style={{ display: "flex", borderBottom: idx !== 4 ? "1px solid #eaeaea" : "none", color: "#333" }}'
);

// 4. Update Standard column to have responsive-child and mobile label
content = content.replace(
  /<div style=\{\{ flex: "1", padding: "1\.5rem", borderLeft: "1px solid #eaeaea", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#666", fontWeight: 500 \}\}>/g,
  '<div className="responsive-child" style={{ flex: "1", padding: "1.5rem", borderLeft: "1px solid #eaeaea", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#666", fontWeight: 500 }}>\n                  <div className="show-on-mobile" style={{ fontSize: "0.8rem", color: "#aaa", textTransform: "uppercase", marginBottom: "4px" }}>{t("spec_standard" as any)}</div>'
);

// 5. Update Premium column to have responsive-child
content = content.replace(
  /<div style=\{\{ flex: "1\.2", padding: "1\.5rem", background: "#f0fdf4", borderLeft: "1px solid #dcfce7", display: "flex", alignItems: "center", gap: "16px" \}\}>/g,
  '<div className="responsive-child" style={{ flex: "1.2", padding: "1.5rem", background: "#f0fdf4", borderLeft: "1px solid #dcfce7", display: "flex", alignItems: "center", gap: "16px" }}>'
);

// 6. Add mobile label to Premium column text area
content = content.replace(
  /<div>\n\s*<div style=\{\{ fontWeight: 800, color: "#115e3b", fontSize: "1\.1rem" \}\}>\{row\.premiumTitle\}<\/div>/g,
  '<div>\n                    <div className="show-on-mobile" style={{ fontSize: "0.8rem", color: "#16a34a", textTransform: "uppercase", marginBottom: "4px" }}>{t("spec_premium" as any)}</div>\n                    <div style={{ fontWeight: 800, color: "#115e3b", fontSize: "1.1rem" }}>{row.premiumTitle}</div>'
);

// 7. Remove the closing </div> of the minWidth container
content = content.replace(
  /            \)\)}\n              <\/div>\n              <\/div>/,
  '            ))}\n          </motion.div>'
);

fs.writeFileSync(file, content);
console.log("Table fixed!");
