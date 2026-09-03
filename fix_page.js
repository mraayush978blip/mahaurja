const fs = require('fs');

const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Hero section font size
content = content.replace(
  /<h1 style=\{\{ fontSize: "5rem"/g,
  '<h1 className="responsive-hero-h1" style={{ '
);
content = content.replace(
  /<p style=\{\{ fontSize: "1\.3rem"/g,
  '<p className="responsive-hero-p" style={{ '
);

// Feedstock flex containers
content = content.replace(
  /<div style=\{\{ display: "flex", flexWrap: "wrap", gap: "2rem"/g,
  '<div className="responsive-flex-wrap" style={{ display: "flex", gap: "2rem"'
);

// Specifically the feedstock items
content = content.replace(
  /flex: "1 1 400px"/g,
  'flex: "1 1 400px"'
);

// To make them wrap correctly on mobile we can add className="responsive-child"
content = content.replace(
  /style=\{\{ flex: "1 1 400px"/g,
  'className="responsive-child" style={{ flex: "1 1 400px"'
);

content = content.replace(
  /style=\{\{ flex: "1 1 300px"/g,
  'className="responsive-child" style={{ flex: "1 1 300px"'
);

// Update table to allow scroll
content = content.replace(
  /<div style=\{\{ background: "#0c5836", color: "#fff", fontWeight: 700, fontSize: "1\.1rem" \}\}>/g,
  '<div style={{ overflowX: "auto" }}>\n              <div style={{ display: "flex", minWidth: "700px", background: "#0c5836", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>'
);
content = content.replace(
  /              \{\[\n                \{\n                  icon: <Flame /g,
  '            <div style={{ minWidth: "700px" }}>\n              {[\n                {\n                  icon: <Flame '
);

fs.writeFileSync(file, content);
console.log("Done");
