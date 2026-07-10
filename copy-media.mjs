import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\Laptop House\\.gemini\\antigravity-ide\\brain\\b69dff13-5f54-482f-8469-4e32037f7142';
const publicDir = 'e:\\crm\\public';

async function copyMedia() {
  const files = fs.readdirSync(brainDir);
  const mediaFiles = files.filter(f => f.startsWith('media__1781356713') && f.endsWith('.png'));
  
  console.log('Found media files:', mediaFiles);
  
  let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Debug Images</title>
      <style>
        body { font-family: sans-serif; background: #f0f0f0; padding: 20px; }
        .img-container { background: white; border: 1px solid #ccc; padding: 10px; margin-bottom: 20px; border-radius: 4px; }
        img { max-width: 100%; height: auto; display: block; margin-top: 10px; }
      </style>
    </head>
    <body>
      <h1>Skylab Brochure Pages</h1>
  `;
  
  mediaFiles.forEach((file, index) => {
    const srcPath = path.join(brainDir, file);
    const destName = `skylab-page-${index + 1}.png`;
    const destPath = path.join(publicDir, destName);
    
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} -> ${destName}`);
    
    htmlContent += `
      <div class="img-container">
        <h2>skylab-page-${index + 1}.png (Original: ${file})</h2>
        <img src="${destName}" />
      </div>
    `;
  });
  
  htmlContent += `
    </body>
    </html>
  `;
  
  fs.writeFileSync(path.join(publicDir, 'debug.html'), htmlContent);
  console.log('Saved debug.html');
}

copyMedia().catch(console.error);
