const fs = require('fs');

function fixAbout() {
  const file = 'src/app/about/page.tsx';
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Hero H1
  content = content.replace(
    /style=\{\{ fontSize: "3\.5rem"/g,
    'className="responsive-hero-h1" style={{ '
  );
  // Paddings
  content = content.replace(
    /padding: "6rem 0"/g,
    'padding: ""'
  );
  content = content.replace(
    /<section style=\{\{ padding: "" \}\}>/g,
    '<section className="responsive-padding">'
  );

  // Flex containers to wrap
  content = content.replace(
    /style=\{\{ display: "flex", gap: "3rem", alignItems: "center" \}\}/g,
    'className="responsive-flex" style={{ gap: "3rem", alignItems: "center" }}'
  );
  
  // Child elements
  content = content.replace(
    /style=\{\{ flex: "1 1 50%"/g,
    'className="responsive-child" style={{ '
  );

  fs.writeFileSync(file, content);
}

function fixServices() {
  const file = 'src/app/services/page.tsx';
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(
    /padding: "8rem 2rem 0 2rem"/g,
    'padding: ""'
  );
  content = content.replace(
    /<div className="container" style=\{\{ position: "relative", zIndex: 1, padding: "" \}\}>/g,
    '<div className="container responsive-hero-container-padding" style={{ position: "relative", zIndex: 1 }}>'
  );
  
  content = content.replace(
    /style=\{\{ fontSize: "3\.5rem"/g,
    'className="responsive-hero-h1" style={{ '
  );

  content = content.replace(
    /flex: "1 1 60%"/g,
    'flex: "1 1 100%"'
  );
  content = content.replace(
    /flex: "1 1 40%"/g,
    'flex: "1 1 100%"'
  );
  
  content = content.replace(
    /style=\{\{ flex: "1 1 400px"/g,
    'className="responsive-child" style={{ flex: "1 1 400px"'
  );
  
  content = content.replace(
    /style=\{\{ flex: "1 1 300px"/g,
    'className="responsive-child" style={{ flex: "1 1 300px"'
  );

  // Our mission container stacking
  content = content.replace(
    /style=\{\{\n\s*background: "white",\n\s*borderRadius: "20px",\n\s*boxShadow: "0 20px 40px rgba\(0,0,0,0.08\)",\n\s*display: "flex",/g,
    'className="responsive-flex"\n            style={{\n              background: "white",\n              borderRadius: "20px",\n              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",\n              display: "flex",'
  );

  fs.writeFileSync(file, content);
}

function fixContact() {
  const file = 'src/app/contact/page.tsx';
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(
    /display: "flex", \n\s*flexWrap: "wrap",/g,
    'display: "flex", flexWrap: "wrap",'
  );

  content = content.replace(
    /className="container"/g,
    'className="container responsive-container-padding"'
  );

  content = content.replace(
    /style=\{\{ \n\s*background: "#ffffff", \n\s*borderRadius: "24px", \n\s*boxShadow: "0 20px 40px rgba\(0, 0, 0, 0.08\)", \n\s*overflow: "hidden", \n\s*display: "flex", \n\s*flexWrap: "wrap",/g,
    'className="contact-stack"\n            style={{ \n              background: "#ffffff", \n              borderRadius: "24px", \n              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)", \n              overflow: "hidden", \n              display: "flex", \n              flexWrap: "wrap",'
  );
  
  content = content.replace(
    /style=\{\{ \n\s*flex: "1 1 400px", /g,
    'className="responsive-child"\n              style={{ \n                flex: "1 1 400px", '
  );
  
  content = content.replace(
    /style=\{\{ flex: "1 1 600px",/g,
    'className="responsive-child"\n              style={{ flex: "1 1 600px",'
  );

  fs.writeFileSync(file, content);
}

fixAbout();
fixServices();
fixContact();
