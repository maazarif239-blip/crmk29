const fs = require('fs');
const path = require('path');
function processFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    const pattern = /\{\/\*\s*Header\s*\*\/\}\s*<header[\s\S]*?<\/header>/g;
    const newContent = content.replace(pattern, '');
    if (content !== newContent) {
        fs.writeFileSync(filepath, newContent, 'utf-8');
        console.log('Removed header from ' + filepath);
    } else {
        // Try another pattern if the first one didn't match
        const pattern2 = /<header[\s\S]*?<\/header>/g;
        const newContent2 = content.replace(pattern2, '');
        if (content !== newContent2) {
            fs.writeFileSync(filepath, newContent2, 'utf-8');
            console.log('Removed header from ' + filepath + ' (fallback pattern)');
        }
    }
}
function walkSync(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walkSync(filepath);
        } else if (filepath.endsWith('.tsx') && !filepath.includes('layout.tsx')) {
            processFile(filepath);
        }
    }
}
walkSync('app');