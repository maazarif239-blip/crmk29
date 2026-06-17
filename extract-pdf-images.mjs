import { pdf } from 'pdf-to-img';
import fs from 'fs';
import path from 'path';

async function extractPages() {
  const pdfPath = path.resolve('public/210.pdf');
  console.log('Converting PDF pages to PNG from:', pdfPath);
  
  let pageNum = 1;
  const document = await pdf(pdfPath, { scale: 2 });
  
  for await (const image of document) {
    const outputPath = path.resolve(`public/lotus30-page${pageNum}.png`);
    fs.writeFileSync(outputPath, image);
    console.log(`Saved page ${pageNum}: ${outputPath}`);
    pageNum++;
  }
  
  console.log(`Done! Extracted ${pageNum - 1} pages.`);
}

extractPages().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
