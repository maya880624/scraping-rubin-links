// code : transfer markdown to pdf from a folder 

import fs from 'fs/promises';
import path from 'path';
import pdf from 'pdf-parse';

async function convertMarkdownToPdf(markdownPath: string, outputDir: string) {
  try {
    // Read the markdown file
    const markdownContent = await fs.readFile
    (markdownPath, 'utf-8');

    // Create a PDF file
    const pdfPath = path.join(outputDir, `${path.basename(markdownPath, '.md')}.pdf`);

    // Write the PDF file

    await fs.writeFile(pdfPath, markdownContent, 'utf-8');
    console.log(`Successfully converted ${markdownPath} to ${pdfPath}`);

  }
  catch (error) {
    console.error(`Error converting ${markdownPath} to PDF:`, error);
  }
}

// Usage example
async function main() {
  const markdownDirectory = '/home/david/Desktop/scraping-rubin-links/markdowns';
  const outputDirectory = '/home/david/Desktop/scraping-rubin-links/pdfs';

  try {
    const files = await fs.readdir(markdownDirectory);
    for (const file of files) {
      console.log(`Processing ${file}...`);
      if (path.extname(file).toLowerCase() === '.md') {
        const markdownPath = path.join(markdownDirectory, file);
        await convertMarkdownToPdf(markdownPath, outputDirectory);
      }
    }
  } catch (error) {
    console.error('Error processing Markdown files:', error);
  }
}

main();

// Run the script using `ts-node`
// $ ts-node mdToPdf.ts
// Compare this snippet from read-links.ts:
