const fs = require('fs/promises');
const pdf= require('pdf-parse');
const path = require('path');


async function convertPdfToMdx(pdfPath: string, outputDir: string) {
  try {
    // Read PDF file
    const dataBuffer = await fs.readFile(pdfPath);
    
    // Extract text from PDF
    const data = await pdf(dataBuffer);
    
    // Clean and format text
    let mdxContent = data.text;
      // .replace(/\f/g, '\n\n') // Replace form feeds with double newlines
      // .replace(/\r\n/g, '\n') // Normalize line endings
      // .replace(/\n{3,}/g, '\n\n') // Remove excessive newlines
      // .trim();
    
    // Add MDX frontmatter
    const fileName = path.basename(pdfPath, '.pdf');
    mdxContent = `---
title: ${fileName}
---

${mdxContent}`;
    
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });
    
    // Save as MDX file
    const mdxPath = path.join(outputDir, `${fileName}.md`);
    await fs.writeFile(mdxPath, mdxContent);
    
    console.log(`Successfully converted ${pdfPath} to ${mdxPath}`);
  } catch (error) {
    console.error(`Error converting ${pdfPath} to MDX:`, error);
  }
}

// Usage example
async function main() {
  // const pdfDirectory = '/home/david/Desktop/scraping-rubin-links/pdfs';
  // const outputDirectory = '/home/david/Desktop/scraping-rubin-links/pdfs';
  // const pdfDirectory = "/home/david/Curtin/cira/referenceBooks/DataMining";
  // const outputDirectory = "/home/david/Curtin/cira/referenceBooks/DataMining";

  // const pdfDirectory = "/home/david/Curtin/cira/referenceBooks/ProLang";
  // const outputDirectory = "/home/david/Curtin/cira/referenceBooks/ProLang";

  const pdfDirectory = "/home/david/Desktop/scraping-rubin-links/pdfs";
  const outputDirectory = "/home/david/Desktop/scraping-rubin-links/pdfs";   
  
  try {
    const files = await fs.readdir(pdfDirectory);
    for (const file of files) {
      console.log(`Processing ${file}...`);
      if (path.extname(file).toLowerCase() === '.pdf') {
        const pdfPath = path.join(pdfDirectory, file);
        await convertPdfToMdx(pdfPath, outputDirectory);
      }
    }
  } catch (error) {
    console.error('Error processing PDF files:', error);
  }
}

main();