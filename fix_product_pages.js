const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf-8');
    let changed = false;
    
    if (!content.includes("import ProductSidebar from '@/components/ProductSidebar';")) {
        content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport ProductSidebar from '@/components/ProductSidebar';");
        changed = true;
    }
    
    // Check layout class
    const sectionPattern = /<section className="max-w-\[1200px\] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">/;
    // Make sure it's using flex-col md:flex-row (which handles mobile stacking correctly)
    
    if (changed) {
        fs.writeFileSync(filepath, content, 'utf-8');
        console.log('Updated ' + filepath);
    }
}

function walkSync(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walkSync(filepath);
        } else if (filepath.endsWith('page.tsx')) {
            const content = fs.readFileSync(filepath, 'utf-8');
            if (content.includes('<ProductSidebar')) {
                processFile(filepath);
            }
        }
    }
}

walkSync('app');