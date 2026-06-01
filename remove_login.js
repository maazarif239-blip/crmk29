const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    const pattern = /<Link\s+href="\/sign-in"[^>]*>[\s\S]*?Login\s*<\/Link>/g;
    const newContent = content.replace(pattern, '');
    
    if (content !== newContent) {
        fs.writeFileSync(filepath, newContent, 'utf-8');
        console.log(`Updated ${filepath}`);
    }
}

function walkSync(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkSync(filepath);
        } else if (filepath.endsWith('.tsx')) {
            processFile(filepath);
        }
    }
}

walkSync('app');
