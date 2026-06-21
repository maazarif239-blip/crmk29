import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const publicDir = 'e:\\crm\\public';
const publicFiles = [];
walkDir(publicDir, (filepath) => {
  publicFiles.push(filepath);
});

const renameMap = {};
publicFiles.forEach(file => {
  const filename = path.basename(file);
  if (filename.match(/[^a-zA-Z0-9.\-_]/)) {
    const ext = path.extname(filename);
    const name = path.basename(filename, ext);
    const newName = name.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase() + ext.toLowerCase();
    renameMap[filename] = newName;
    fs.renameSync(file, path.join(path.dirname(file), newName));
    console.log(`Renamed: ${filename} -> ${newName}`);
  } else if (filename !== filename.toLowerCase() && !filename.includes('Screenshot')) {
    const ext = path.extname(filename);
    const name = path.basename(filename, ext);
    const newName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + ext.toLowerCase();
    if (newName !== filename) {
        renameMap[filename] = newName;
        fs.renameSync(file, path.join(path.dirname(file), newName));
        console.log(`Renamed: ${filename} -> ${newName}`);
    }
  }
});

// Scan all TSX/JSX
const srcFiles = [];
['app', 'components'].forEach(d => {
  walkDir(path.join('e:\\crm', d), (filepath) => {
    if (filepath.endsWith('.tsx') || filepath.endsWith('.jsx')) {
      srcFiles.push(filepath);
    }
  });
});

const imgTagsRegex = /<(img|Image)([^>]*?)>/g;
const srcRegex = /src=(["'])(.*?)\1/;
const widthRegex = /width=/;
const heightRegex = /height=/;
const fillRegex = /fill/;

let fileModifications = {};

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  let newContent = content;
  let hasChanges = false;
  
  const tags = [...content.matchAll(imgTagsRegex)];
  
  for (let i = tags.length - 1; i >= 0; i--) {
    const tagMatch = tags[i];
    const fullTag = tagMatch[0];
    const tagName = tagMatch[1];
    
    const srcM = fullTag.match(srcRegex);
    if (!srcM) continue;
    
    const quote = srcM[1];
    let originalSrc = srcM[2];
    
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      continue;
    }

    let newSrc = originalSrc;

    if (newSrc.match(/^[a-zA-Z]:\\/)) {
      newSrc = '/' + path.basename(newSrc.replace(/\\/g, '/'));
    }

    if (newSrc.startsWith('/public/')) {
      newSrc = newSrc.replace('/public/', '/');
    } else if (newSrc.startsWith('public/')) {
      newSrc = newSrc.replace('public/', '/');
    }

    if (!newSrc.startsWith('/')) {
      newSrc = '/' + newSrc;
    }

    const filename = decodeURIComponent(newSrc.split('/').pop());
    if (renameMap[filename]) {
      newSrc = newSrc.replace(filename, renameMap[filename]);
    }

    let tagReplacement = fullTag.replace(`src=${quote}${originalSrc}${quote}`, `src="${newSrc}"`);

    if (tagName === 'Image') {
      if (!fillRegex.test(tagReplacement) && (!widthRegex.test(tagReplacement) || !heightRegex.test(tagReplacement))) {
        tagReplacement = tagReplacement.replace('<Image', '<Image fill');
      }
    }

    if (tagReplacement !== fullTag) {
      hasChanges = true;
      newContent = newContent.substring(0, tagMatch.index) + tagReplacement + newContent.substring(tagMatch.index + fullTag.length);
    }
  }
  
  if (hasChanges) {
    fs.writeFileSync(file, newContent, 'utf-8');
    console.log(`Updated file: ${file}`);
  }
});
console.log('Execution completed successfully.');
