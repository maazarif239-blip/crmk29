import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match the Link for sign-in
    pattern = r'<Link\s+href="/sign-in"[^>]*>[\s\S]*?Login\s*</Link>'
    
    new_content = re.sub(pattern, '', content)

    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))
