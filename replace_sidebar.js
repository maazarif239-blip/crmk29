const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf-8');
    
    // Find the active category href. It should match the filename basically.
    const folderName = path.basename(path.dirname(filepath));
    const activeCategory = '/' + folderName;
    
    // Replace <aside>...</aside>
    const asideRegex = /<aside[\s\S]*?<\/aside>/g;
    
    if (asideRegex.test(content)) {
        content = content.replace(asideRegex, `<ProductSidebar activeCategory="${activeCategory}" />`);
        
        // Add import ProductSidebar
        if (!content.includes('ProductSidebar')) {
            content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport ProductSidebar from '@/components/ProductSidebar';");
        }
        
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
            // Check if it has <aside
            const content = fs.readFileSync(filepath, 'utf-8');
            if (content.includes('<aside')) {
                processFile(filepath);
            }
        }
    }
}

walkSync('app');