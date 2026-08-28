import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

def remove_duplicate_attrs(match):
    tag = match.group(0)
    
    # Remove duplicate data-v attributes
    data_vs = re.findall(r'(data-v-[a-z0-9]+)', tag)
    seen = set()
    for dv in data_vs:
        if dv in seen:
            # Remove subsequent occurrences of data-v-xxx
            tag = re.sub(r'\s+' + dv + r'\b', '', tag, count=1)
        else:
            seen.add(dv)
            
    # Fix duplicated disabled={true} or disabled disabled={true}
    disabled_count = len(re.findall(r'\bdisabled\b', tag))
    if disabled_count > 1:
        # Just keep one disabled={true}
        tag = re.sub(r'\s+disabled(=\{true\}|="[^"]*")?', '', tag)
        tag = tag.replace('>', ' disabled={true}>', 1) if not tag.endswith('/>') else tag.replace('/>', ' disabled={true}/>', 1)
        
    return tag

# Apply to all HTML tags
fixed_text = re.sub(r'<[a-zA-Z0-9]+[^>]*>', remove_duplicate_attrs, text)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(fixed_text)
