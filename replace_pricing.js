const fs = require('fs');
const path = require('path');
function processFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    const pattern = /<span([^>]*)>\s*(Contact for [Pp]ricing)\s*<\/span>/g;
    const newContent = content.replace(pattern, '<Link href="/contact"$1>$2</Link>');
    if (content !== newContent) {
        fs.writeFileSync(filepath, newContent, 'utf-8');
        console.log('Updated ' + filepath);
    }
}
function walkSync(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walkSync(filepath);
        } else if (filepath.endsWith('.tsx')) {
            processFile(filepath);
        }
    }
}
walkSync('app');