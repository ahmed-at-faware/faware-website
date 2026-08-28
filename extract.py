import os
import re

html_path = "/Users/muhammadahmed/.gemini/antigravity-ide/brain/d047440a-1ef2-4cb4-b39c-413141b5fe4b/scratch/trypost.html"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

def camel_case(s):
    parts = s.split('-')
    return parts[0] + ''.join(x.title() for x in parts[1:])

def html_to_jsx(html_str):
    # Very basic html to jsx conversion
    html_str = html_str.replace('class=', 'className=')
    html_str = html_str.replace('for=', 'htmlFor=')
    html_str = html_str.replace('crossorigin', 'crossOrigin="anonymous"')
    html_str = html_str.replace('stroke-width=', 'strokeWidth=')
    html_str = html_str.replace('stroke-linecap=', 'strokeLinecap=')
    html_str = html_str.replace('stroke-linejoin=', 'strokeLinejoin=')
    html_str = html_str.replace('stroke-dasharray=', 'strokeDasharray=')
    html_str = html_str.replace('stroke-dashoffset=', 'strokeDashoffset=')
    html_str = html_str.replace('clip-rule=', 'clipRule=')
    html_str = html_str.replace('fill-rule=', 'fillRule=')
    html_str = html_str.replace('tabindex=', 'tabIndex=')
    html_str = html_str.replace('srcset=', 'srcSet=')
    
    # Self-closing tags (very fragile but works for basic cases)
    html_str = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html_str)
    html_str = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html_str)
    html_str = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html_str)
    html_str = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html_str)
    
    # HTML attributes without values e.g. <button disabled> to <button disabled={true}>
    # I'll just leave it since React handles boolean attributes decently well for standard HTML tags, but might warn.
    html_str = re.sub(r'\bdisabled\b(?!=)', 'disabled={true}', html_str)
    html_str = re.sub(r'\bchecked\b(?!=)', 'checked={true}', html_str)
    
    # Inline styles
    def style_repl(match):
        style_str = match.group(1)
        if not style_str.strip():
            return 'style={{}}'
        
        # Convert "position:relative; z-index:10" to { position: 'relative', zIndex: 10 }
        rules = [r.strip() for r in style_str.split(';') if r.strip()]
        react_style = []
        for r in rules:
            if ':' in r:
                k, v = r.split(':', 1)
                k = camel_case(k.strip())
                v = v.strip().replace('"', "'")
                react_style.append(f'{k}: "{v}"')
        
        return 'style={{' + ', '.join(react_style) + '}}'
        
    html_str = re.sub(r'style="([^"]*)"', style_repl, html_str)
    html_str = re.sub(r"style='([^']*)'", style_repl, html_str)
    
    # Remove HTML comments
    html_str = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html_str, flags=re.DOTALL)
    
    return html_str

# Extract header
header_match = re.search(r'<header.*?</header>', content, re.DOTALL)
if header_match:
    with open('src/components/Navbar.jsx', 'w', encoding='utf-8') as f:
        f.write("export default function Navbar() {\n  return (\n" + html_to_jsx(header_match.group(0)) + "\n  );\n}")

# Extract sections
sections = re.findall(r'<section.*?</section>', content, re.DOTALL)
names = ['Hero', 'TrustBar', 'Features', 'Preview', 'HowItWorks', 'Testimonials', 'Pricing', 'FAQ', 'CTASection']

for i, section in enumerate(sections):
    if i < len(names):
        with open(f'src/components/{names[i]}.jsx', 'w', encoding='utf-8') as f:
            f.write(f"export default function {names[i]}() {{\n  return (\n" + html_to_jsx(section) + "\n  );\n}")

# Extract footer
footer_match = re.search(r'<footer.*?</footer>', content, re.DOTALL)
if footer_match:
    with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
        f.write("export default function Footer() {\n  return (\n" + html_to_jsx(footer_match.group(0)) + "\n  );\n}")

# Extract styles
styles = re.findall(r'<style.*?>(.*?)</style>', content, re.DOTALL)
with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write('@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n')
    f.write('''
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --radius: 0.5rem;
  }
}
''')
    for style in styles:
        f.write(style + '\n')
