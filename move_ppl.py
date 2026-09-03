import re

# Read the file
with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and extract PPL Mandiri entry (from its start to before Projek Kepemimpinan)
ppl_mandiri_pattern = r'(\{\s*namaMataKuliah: "Praktik Pengalaman Lapangan \(PPL\) Mandiri".*?)\s*\},\s*\{\s*namaMataKuliah: "Projek Kepemimpinan"'

match = re.search(ppl_mandiri_pattern, content, re.DOTALL)
if match:
    ppl_mandiri_entry = match.group(1) + '\n            }'
    
    # Remove PPL Mandiri from current position  
    content_without_ppl = re.sub(ppl_mandiri_pattern, '},\n            {\n                namaMataKuliah: "Projek Kepemimpinan"', content, flags=re.DOTALL)
    
    # Find end of semester2 array (before closing bracket)
    # Add PPL Mandiri at the end
    content_final = re.sub(
        r'(namaMataKuliah: "Seminar Pendidikan Profesi Guru".*?perubahanYangDilakukan:.*?"\s*\})\s*\]',
        r'\1\n            },\n            ' + ppl_mandiri_entry + '\n        ]',
        content_without_ppl,
        flags=re.DOTALL
    )
    
    # Write back
    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(content_final)
    
    print('PPL Mandiri successfully moved to end of semester2')
else:
    print('PPL Mandiri pattern not found')
