// import fs from 'fs/promises';
// import pdfParse from 'pdf-parse';
// import path from 'path';
// const fs = require('fs/promises');
// const pdfParse = require('pdf-parse');
// const path = require('path');
async function convertPdfToMarkdown(pdfFilePath, outputMarkdownPath) {
    try {
        // Use `fs` to read the PDF file
        const dataBuffer = await fs.readFile(pdfFilePath);
        // Use `pdf-parse` to parse the PDF data
        const parsedData = await pdfParse(dataBuffer);
        // Process the `parsedData` to generate Markdown content
        const textContent = parsedData.text;
        // const markdownContent = textContent
        //   .split('\n')
        //   .map((line: string) => line.trim())
        //   .filter((line: string) => line.length > 0)
        //   .join('\n\n')
        //   .replace(/{/g, '```')
        //   .replace(/}/g, '```')
        //   .replace(/import java\.io\.\*;/g,
        // '```java\nimport java.io.*;\n```');
        // Write the Markdown content to a new file
        await fs.writeFile(outputMarkdownPath, textContent, 'utf-8');
        console.log(`Markdown file created at: ${outputMarkdownPath}`);
    }
    catch (error) {
        console.error(`Error converting PDF to Markdown: ${error}`);
    }
}
// Example usage
(async () => {
    // const pdfFilePath = path.join(__dirname, 'pdfs/sebesta.pdf');
    // const outputMarkdownPath = path.join(__dirname, 'pdfs/sebesta.md');
    const pdfFilePath = "/home/david/Desktop/scraping-rubin-links/pdfs/sebesta.pdf";
    const outputMarkdownPath = "/home/david/Desktop/scraping-rubin-links/pdfs/sebesta.md";
    await convertPdfToMarkdown(pdfFilePath, outputMarkdownPath);
})();
//# sourceMappingURL=pdf-markdown.js.map