const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace :root
const rootRegex = /:root\s*\{[^}]+\}/;
const newRoot = `:root {
  --accent:       #2563EB;
  --accent-dark:  #081126; /* Primary text and elements color used for strong contrast */
  --accent-mid:   #2563EB;
  --accent-light: #eff6ff;
  --accent-pale:  #f8fafc;
  --accent-border:#bfdbfe;
  
  --mint:         #8fd1bd;
  --pale-yellow:  #f6eecf;
  
  --amber:        #d97706;
  --amber-light:  #fef3c7;
  
  --success:      #16a34a;
  --danger:       #dc2626;
  
  --white:        #ffffff;
  --bg-main:      #F5F2EA;
  --bg-card:      #F9F6EF;
  
  --gray-50:      #F9F6EF;
  --gray-100:     #f6eecf;
  --gray-200:     #e5e7eb;
  --gray-300:     #d1d5db;
  --gray-400:     #9ca3af;
  --gray-500:     #6b7280;
  --gray-600:     #4b5563;
  --gray-700:     #374151;
  --gray-800:     #0A2540;
  --gray-900:     #081126;
  --ink:          #081126;
  
  --radius-sm:    16px;
  --radius:       24px;
  --radius-lg:    32px;
  
  --shadow-sm:    0 1px 3px rgba(8, 17, 38, 0.08), 0 1px 2px rgba(8, 17, 38, 0.05);
  --shadow:       0 4px 16px rgba(8, 17, 38, 0.08);
  --shadow-lg:    0 8px 32px rgba(8, 17, 38, 0.10);
}`;
css = css.replace(rootRegex, newRoot);

// Replace --green with --accent
css = css.replace(/--green/g, '--accent');

// Specific style changes for backgrounds
css = css.replace(/body \{\n  font-family: 'DM Sans', sans-serif;\n  color: var\(--gray-900\);\n  background: var\(--white\);/g, 
  "body {\n  font-family: 'DM Sans', sans-serif;\n  color: var(--gray-900);\n  background: var(--bg-main);");
css = css.replace(/\.hero \{\n  background: var\(--white\);/g, ".hero {\n  background: var(--bg-main);");
css = css.replace(/\.features \{ background: white; \}/g, ".features { background: var(--bg-main); }");
css = css.replace(/\.how \{ background: white; \}/g, ".how { background: var(--bg-main); }");
css = css.replace(/\.pricing \{ background: white; \}/g, ".pricing { background: var(--bg-main); }");

// Update white cards to --bg-card
css = css.replace(/background: white; border: 1px solid var\(--gray-200\);/g, "background: var(--bg-card); border: 1px solid var(--gray-200);");
css = css.replace(/background: white; border: 1px solid var\(--gray-100\);/g, "background: var(--bg-card); border: 1px solid var(--gray-100);");
css = css.replace(/background: white; border-top: 1px solid/g, "background: var(--bg-card); border-top: 1px solid");
css = css.replace(/\.ph-bell \{\n  width: 34px; height: 34px; background: white;/g, ".ph-bell {\n  width: 34px; height: 34px; background: var(--bg-card);");

css = css.replace(/\.btn-outline \{\n  display: inline-flex; align-items: center; gap: 8px;\n  background: white;/g, ".btn-outline {\n  display: inline-flex; align-items: center; gap: 8px;\n  background: var(--bg-card);");

// Fix ph-net-card
css = css.replace(/\.ph-net-card \{\n  background: var\(--accent\); border-radius: 20px;\n  padding: 16px 16px 14px; color: white;\n\}/, 
`.ph-net-card {
  background: var(--accent); border-radius: 12px 32px 12px 32px;
  padding: 16px 16px 14px; color: white;
}`);

// Also fix the cta button outline in Pricing
css = css.replace(/\.btn-plan-outline \{\n  background: white; color: var\(--gray-700\); border: 1.5px solid var\(--gray-200\);\n\}/, 
`.btn-plan-outline {
  background: var(--bg-card); color: var(--gray-700); border: 1.5px solid var(--gray-200);
}`);

// Change mint green for subscriptions/expanded
// faq-item.open is an expanded state, we can make the background mint green! Or the icon bg mint green.
css = css.replace(/\.faq-item\.open \.faq-icon \{ background: var\(--accent-light\); \}/, ".faq-item.open .faq-icon { background: var(--mint); }");

fs.writeFileSync(cssPath, css);

// Now update JSX files replacing "green" with "accent"
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // replace "green" with "accent" (only full words to be safe)
  content = content.replace(/\bgreen\b/g, 'accent');
  // specific replacements if needed
  fs.writeFileSync(filePath, content);
}
console.log('Theme updated successfully.');
