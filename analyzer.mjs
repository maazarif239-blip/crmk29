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
    // Has spaces or special chars
    const ext = path.extname(filename);
    const name = path.basename(filename, ext);
    const newName = name.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase() + ext.toLowerCase();
    renameMap[filename] = newName;
  } else if (filename !== filename.toLowerCase() && !filename.includes('Screenshot')) {
    // For safety, let's kebab case everything that is mixed case unless it's perfectly fine
    const ext = path.extname(filename);
    const name = path.basename(filename, ext);
    const newName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + ext.toLowerCase();
    if (newName !== filename) {
        renameMap[filename] = newName;
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

let issues = [];
let fileModifications = {};

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  let newContent = content;
  let match;
  let hasChanges = false;
  
  const tags = [...content.matchAll(imgTagsRegex)];
  
  // iterate backwards to safely replace
  for (let i = tags.length - 1; i >= 0; i--) {
    const tagMatch = tags[i];
    const fullTag = tagMatch[0];
    const tagName = tagMatch[1];
    const attributes = tagMatch[2];
    
    const srcM = fullTag.match(srcRegex);
    if (!srcM) continue;
    
    const quote = srcM[1];
    let originalSrc = srcM[2];
    
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      continue;
    }

    let newSrc = originalSrc;
    let issueNotes = [];

    // 8. Remove Windows absolute paths
    if (newSrc.match(/^[a-zA-Z]:\\/)) {
      newSrc = '/' + path.basename(newSrc.replace(/\\/g, '/'));
      issueNotes.push('Removed Windows absolute path');
    }

    // 3. Ensure images inside public folder are referenced correctly
    if (newSrc.startsWith('/public/')) {
      newSrc = newSrc.replace('/public/', '/');
      issueNotes.push('Removed /public/ prefix');
    } else if (newSrc.startsWith('public/')) {
      newSrc = newSrc.replace('public/', '/');
      issueNotes.push('Removed public/ prefix');
    }

    if (!newSrc.startsWith('/')) {
      newSrc = '/' + newSrc;
      issueNotes.push('Added missing leading slash');
    }

    // 4 & 5. Check filename case and spaces
    const filename = decodeURIComponent(newSrc.split('/').pop());
    if (renameMap[filename]) {
      newSrc = newSrc.replace(filename, renameMap[filename]);
      issueNotes.push(`Renamed to kebab-case: ${renameMap[filename]}`);
    }

    let tagReplacement = fullTag.replace(`src=${quote}${originalSrc}${quote}`, `src="${newSrc}"`);

    // 9. If Next.js Image, check width and height or fill
    if (tagName === 'Image') {
      if (!fillRegex.test(tagReplacement) && (!widthRegex.test(tagReplacement) || !heightRegex.test(tagReplacement))) {
        // Just add layout="fill" or fill attribute if missing
        tagReplacement = tagReplacement.replace('<Image', '<Image fill');
        issueNotes.push('Added fill attribute to <Image> missing width/height');
      }
    }

    if (tagReplacement !== fullTag) {
      hasChanges = true;
      newContent = newContent.substring(0, tagMatch.index) + tagReplacement + newContent.substring(tagMatch.index + fullTag.length);
      issues.push({
        file: file.replace('e:\\crm\\', ''),
        original: fullTag,
        updated: tagReplacement,
        notes: issueNotes.join(', ')
      });
    }
  }
  
  if (hasChanges) {
    fileModifications[file.replace('e:\\crm\\', '')] = newContent;
  }
});

let report = `# Image Path Audit and Fix Plan

## Goal Description
Perform a complete production image-path audit across the project. This will resolve broken images on Netlify by fixing paths, correctly formatting filenames, ensuring case-sensitivity, removing absolute local paths, and enforcing proper Next.js \`<Image>\` attributes.

## Proposed Changes

### 1. File Renames in \`public/\`
The following files contain spaces or special characters and will be renamed to strictly lower kebab-case:
`;

for (const [oldName, newName] of Object.entries(renameMap)) {
  report += `- \`${oldName}\` -> \`${newName}\`\n`;
}

report += `\n### 2. Code Updates
The following files will be updated to point to the correct, newly formatted image paths, removing any \`/public/\` or absolute path prefixes, and adding \`fill\` to \`<Image>\` tags missing dimensions:

`;

for (const file of Object.keys(fileModifications)) {
  report += `#### [MODIFY] [${file}](file:///e:/crm/${file.replace(/\\/g, '/')})\n`;
  const fileIssues = issues.filter(i => i.file === file);
  fileIssues.forEach(i => {
    report += `- Fixed src: \`${i.notes}\`\n`;
  });
  report += `\n`;
}

report += `## Verification Plan
1. Ensure all modified files compile successfully (\`npm run build\`).
2. Verify all image references exactly match the filenames in the \`public\` folder.
3. Test locally by running \`npm run dev\` and visually checking pages.
`;

fs.writeFileSync('e:\\crm\\plan.md', report);
console.log('plan.md generated');
