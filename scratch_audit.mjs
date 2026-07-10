import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const files = [];
['app', 'components'].forEach(d => {
  if (fs.existsSync(path.join('e:\\crm', d))) {
    walkDir(path.join('e:\\crm', d), (filepath) => {
      if (filepath.endsWith('.tsx') || filepath.endsWith('.jsx')) {
        files.push(filepath);
      }
    });
  }
});

const srcRegex = /<(?:img|Image)[^>]*?src=["']([^"']+)["'][^>]*?>/g;
const imgTagsRegex = /<(?:img|Image)[^>]*?>/g;

let allSrcs = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = imgTagsRegex.exec(content)) !== null) {
    const tag = match[0];
    const srcMatch = tag.match(/src=["']([^"']+)["']/);
    if (srcMatch) {
      allSrcs.push({ file, src: srcMatch[1], tag });
    }
  }
});

console.log(JSON.stringify(allSrcs, null, 2));
