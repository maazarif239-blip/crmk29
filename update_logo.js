const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('e:/crm/app', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the logo pattern
    // The previous regex might have had issues with whitespace
    // Let's use a simpler one
    
    const oldStrStart = '<svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#EB5324]" xmlns="http://www.w3.org/2000/svg">';
    const oldStrEnd = 'HB Furniture</span>';
    
    if (content.includes(oldStrStart) && content.includes(oldStrEnd)) {
      console.log(`Updating ${filePath}`);
      
      const newLogo = `<Link href="/" className="flex items-center">
            <Image
              src="/hb-logo.png"
              alt="HB Furniture Logo"
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>`;
          
      // Find the wrapping div className="flex items-center gap-2" and replace it
      const regex = /<div className="flex items-center gap-2">[\s\S]*?HB Furniture<\/span>\s*<\/div>/g;
      
      content = content.replace(regex, newLogo);
      
      // Also ensure next/image is imported
      if (!content.includes('import Image from')) {
        content = `import Image from 'next/image';\n` + content;
      }
      
      // Ensure Link is imported if not already
      if (!content.includes('import Link from')) {
        content = `import Link from 'next/link';\n` + content;
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
