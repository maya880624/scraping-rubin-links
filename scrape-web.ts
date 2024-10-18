import fetch from 'node-fetch'; // Assuming Node.js environment where fetch is not global
import fs from 'fs'; // Use fs for async operations
import cheerio from 'cheerio';
import path from 'path';
import TurndownService from 'turndown';
import pdf2md from '@opendocsg/pdf2md';
import { existsSync, mkdirSync } from 'fs';
import { randomBytes } from 'crypto';


// import { promises as fs } from 'fs';
// const fs = require('fs');
// const pdf2md = require('@opendocsg/pdf2md');
// const turndownService = new TurndownService();

// Function to generate a random json name
function generateRandomJsonName() {
  // Generate a random sequence of bytes and convert it to a hexadecimal string
  const randomName = randomBytes(16).toString('hex');
  // conbine to the folder `links-json`
  //  if folder not exist, create it
  const folder = 'links-json';
  if (!existsSync(folder)) {
    mkdirSync(folder);
  }                                 
  // Return the random file name
  return path.join(folder, randomName + '.json');
}

// Function to generate a random file name
function generateRandomFileName() {
  const fileName = `markdown-${Date.now()}-${Math.floor(Math.random() * 1000)}.md`;
  const filePath = path.join('web-markdowns', fileName);
  return filePath;
}

// Function to use HTML as input, read the HTML title, and generate a file name
function generateFileNameFromHTML(html: string): string {
  // Load the HTML content into Cheerio
  const $ = cheerio.load(html);

  // Extract the title text
  const title = $('title').text();

  // if title is empty, generate a random file name
  if (!title) {
    return generateRandomFileName();
  }

  // Sanitize the title to remove or replace invalid file name characters
  const sanitizedTitle = title.replace(/[\/*?%*:|"<>.\s]/g, '_').substring(0, 50); // Limiting to 50 characters

  // // Append a random sequence to ensure uniqueness
  // const randomSequence = randomBytes(4).toString('hex');

  // Generate the file name
  // const fileName = `${sanitizedTitle}_${randomSequence}.md`;
  const fileName = `${sanitizedTitle}.md`;

  // Assuming the 'links-json' folder is the desired location
  const folder = 'web-markdowns';

  // Return the full path
  return path.join(folder, fileName);
}


const removeFooterFromHTML = (html: string): string => {
  // Load the HTML content into Cheerio
  const $ = cheerio.load(html);

  // Remove the <footer> tag and its contents
  $('footer').remove();

  $('style').remove();

  // Remove the 'style' attribute from all elements
  $('[style]').removeAttr('style');

  // Get the modified HTML
  return $.html();
};

async function downloadPdfAndStore(filePath: string, url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    const pdfBuffer = await response.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(pdfBuffer), (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
      } else {
        console.log(`File written successfully: ${filePath}`);
      }
    });
    console.log(`PDF downloaded and saved to ${filePath}`);
  } catch (error) {
    console.error(`Error downloading PDF from ${url}:`, error);
  }
}

// load pdf file from file path,
// convert pdf to markdown
// save markdown to file and delete pdf file
const callbacks = {}
async function convertPdfToMarkdown(pdfPath: string, outputPath: string) {
  try {
    const pdfBuffer = await fs.promises.readFile(pdfPath);
    pdf2md(pdfBuffer, callbacks)
      .then(async (text: string) => {
        let outputFile = path.resolve(outputPath + '.md');
        console.log(`Writing to ${outputFile}...`);
        await fs.promises.writeFile(outputFile, text);
        console.log(`Done writing Markdown. Deleting PDF...`);
        await fs.promises.unlink(pdfPath); // This line deletes the PDF file
        console.log(`PDF deleted.`);
      })
      .catch((err: any) => {
        console.error(err);
      });
  } catch (err) {
    console.error(`Error processing PDF: ${err}`);
  }
}

// Function to convert HTML to Markdown, and write the Markdown to a file 
async function htmlToMarkdown(html: string, filePath: string) {
  const turndownService = new TurndownService();
  const markdown = turndownService.turndown(html);

  // Write markdown to a file
  fs.writeFileSync(filePath, markdown);
  
}

// async function writeMarkdown(markdown: string) {
//   try {
//     // Generate a random file name
//     const fileName = `markdown-${Date.now()}-${Math.floor(Math.random() * 1000)}.md`;
//     const filePath = path.join('web-markdowns', fileName);

//     // Write markdown to the file
//     await fs.writeFile(filePath, markdown, (err) => {
//       if (err) {
//         console.error(`Error writing file: ${err}`);
//       } else {
//         console.log(`File written successfully: ${filePath}`);
//       }
//     });
//     console.log(`File written successfully: ${filePath}`);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// Scrape a web page and convert it to Markdown
// If the URL points to a PDF, download and convert the PDF to Markdown
// Otherwise, scrape the HTML content and convert it to Markdown
// create a folder named `markdown` and save the markdown file in it
// The Markdown content is saved to a file named: `{page-title}.md`
// 

export const scrapeWebToMarkdown = async (url: string) => {
  try {
    if (!existsSync('pdfs')) {
      mkdirSync('pdfs');
    }

    if (!existsSync('web-markdowns')) {
      mkdirSync('web-markdowns');
    }

    const pdfPath = './pdfs'                   
    const mdPath = './web-markdowns';
    // Check if the URL is a PDF
    if (url.endsWith('.pdf')) {
      // Download the PDF file
      // if not exist, create a folder named `pdfs`
      // if not exist, create a folder named `web-markdown
      await downloadPdfAndStore(pdfPath, url);
      // Convert the PDF to Markdown
      await convertPdfToMarkdown(pdfPath, mdPath);
      return;
    }                       

    // Fetch HTML content from the URL
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    const html = await response.text();
    // console.log(`html: ${html}`);

    // Regular expression to match CDATA sections
    const cdataRegex = /<!\[CDATA\[.*?\]\]>/gs;


    const modifiedHTML = removeFooterFromHTML(html)
      .replace(/<img[^>]*>/g, '') // Remove all <img> tags
      .replace(cdataRegex, '') // Remove CDATA sections
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove all <script> tags
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '') // Remove all <style> tags
      .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '') // Remove all <footer> tags
      .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '') // Remove all <nav> tags
      .replace(/<aside\b[^<]*(?:(?!<\/aside>)<[^<]*)*<\/aside>/gi, '') // Remove all <aside> tags
      .replace(/\/\*\*\/\/\*\*/g, '');                              // remove "/\*\*//\*\*/" and "/\*\*!sc\*/" from the html
       // Remove all "/**//**/" from the html

    //   .split('\n') // Split into lines
    //   .filter(line => !line.includes('*!sc*/')) // Remove lines containing "*!sc*/"
    //   .join('\n'); // Join back into a single string
    // // remove the line if it includes "*!sc*/"

    // remove images from the html
    // const modifiedHTML = html.replace(/<img[^>]*>/g, '');
    // console.log(`modifiedHTML: ${modifiedHTML}`);
    // Initialize Cheerio
    const $ = cheerio.load(modifiedHTML);

    // Extract and output links
    const links: string[] = [];
    $('a').each((index, element) => {
      let link = $(element).attr('href');
      if (link && !link.includes('community'))  {
        // If the link includes 'index.html', slice the end of the string
        if (link.includes('index.html')) {
          const endIndex = link.indexOf('index.html') + 'index.html'.length;
          link = link.slice(0, endIndex);
        }
        // Resolve relative URLs against the base URL
        const fullLink = new URL(link, url).href;
        if (!links.includes(fullLink)) {
          links.push(fullLink);                 
        }
      }
    });
    // console.log('Links:', links);

    // output the links to json file
    const jsonLinks = JSON.stringify(links);
    // generate a random file name
    const jsonLinksName = generateRandomJsonName();
    await fs.writeFile(jsonLinksName, jsonLinks, (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
      } else {
        console.log(`File written successfully: ${jsonLinksName}`);
      }
    });                                     

    // call the function to convert html to markdown
    const markdownFileName = generateFileNameFromHTML(modifiedHTML);

    // if the markdown file already exists, return
    if (existsSync(markdownFileName)) {
      console.log(`Markdown file already exists: ${markdownFileName}`);
      
    } else {
      // Convert HTML to Markdown
      await htmlToMarkdown(modifiedHTML, markdownFileName);
      // Write markdown to a file (randomly generate a name) in the `web-markdowns` folder
      // await writeMarkdown(markdown);
      console.log(`Markdown file written successfully: ${markdownFileName}`);
    }

  } catch (error) { 
    console.error('Error:', error);
  }

};

export default scrapeWebToMarkdown;


const url = 'https://www.lsst.io/'; // Replace with the actual URL
// const url = 'https://www.lsst.io/roundtable-guides/'
// const url = 'https://ltd-keeper.lsst.io/'

scrapeWebToMarkdown(url);


// import fetch from 'node-fetch';
// import cheerio from 'cheerio';
// import TurndownService from 'turndown';
// import fs from 'fs';

// // URL to fetch HTML from
// const url = 'https://dp0-2.lsst.io/';

// // Fetch HTML content
// fetch(url)
//   .then(response => response.text())
//   .then(html => {
//     console.log(`html: ${html}`);

//     // Initialize Cheerio
//     const $ = cheerio.load(html);

//     // Extract and output links
//     const links: string[] = [];
//     $('a').each((index, element) => {
//       const link = $(element).attr('href');
//       if (link) {
//         // Resolve relative URLs against the base URL
//         const fullLink = new URL(link, url).href;
//         links.push(fullLink);
//       }
//     });
//     console.log('Links:', links);

//     // Initialize Turndown service
//     const turndownService = new TurndownService();
//     const markdown = turndownService.turndown(html);
//     console.log(`markdown: ${markdown}`);

//     // Write the content to a file
//     fs.writeFileSync('output.md', markdown);
//   })
//   .catch(error => {
//     console.error('Error fetching HTML:', error);
//   });