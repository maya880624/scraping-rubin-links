// read the `links.json` file, parse it and output the links
// call the function: scrapeWebToMarkdown(url) for each link
// 

import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import fs from 'fs';                                                      
import { readdirSync, readFileSync } from 'fs';
import { scrapeWebToMarkdown } from './scrape-web.js'; // Note the .js extension
// Example usage
// const url = 'https://www.lsst.io/'; // Replace with the actual URL

// scrapeWebToMarkdown(url);

// Function to read all JSON files from 'links-json' folder, parse them, and output the links
function readAndOutputAllLinks() {
  try {
      // Path to the 'links-json' folder  
      const folderPath = 'links-json';
      // Read the directory contents
      const files = readdirSync(folderPath);
      // Filter for JSON files
      const jsonFiles = files.filter(file => file.endsWith('.json'));

      // // add links.json to jsonFiles
      // jsonFiles.push('links.json');

      let links: string[] = [];

      // // Read links.json file and parse it to links if it exists
      // if (existsSync('links.json')) {
      //     const fileContent = readFileSync('links.json', 'utf8');
      //     links = JSON.parse(fileContent);
      // }

      // Iterate over each JSON file
      jsonFiles.forEach(file => {
          // Construct the file path
          const filePath = join(folderPath, file);
          // Read file content
          const fileContent = readFileSync(filePath, 'utf8');
          // Parse the JSON content
          links = JSON.parse(fileContent);
          fs.unlinkSync(filePath);
          // Output the links
          // console.log(`Links from ${file}:`, links);
          
      });

      // // delete the files
      // jsonFiles.forEach(file => {
      //     const filePath = join(folderPath, file);
      //     fs.unlinkSync(filePath);
      // });   
      return links;
  } catch (error) {
    console.error('Error reading or parsing files:', error);
  }
}

// Function to add a list of links to the existing 'links.json' file if they're not already present
function addLinksToFile(inputLinks: string[]) {
  const filePath = 'links.json';
  let links: string[] = [];
  let outputLinks: string[] = [];

  // Read the existing links if the file exists
  if (existsSync(filePath)) {
    const fileContent = readFileSync(filePath, 'utf8');
    links = JSON.parse(fileContent);
  }

  // Track the number of links added
  let linksAdded = 0;

  inputLinks.forEach(link => {
    // Check if it exists in the array
    if (!links.includes(link)) {
      // If the link does not exist, add it to the array
      links.push(link);
      outputLinks.push(link);
      linksAdded++;
    }
  });

  // Write the updated links array back to the file only if new links were added
  if (linksAdded > 0) {
    writeFileSync(filePath, JSON.stringify(links, null, 2));
    // console.log(`Added ${linksAdded} new link(s).`);
  } else {
    console.log('No new links were added.');
  }

  return outputLinks;
}

// // use the for loop to iterate over the links and call the scrapeWebToMarkdown function
// for (let i = 0; i < 500; i++) {
//   const links = readAndOutputAllLinks();          
//   // console.log('Links:', links);

//   // Add the links to the 'links.json' file
//   const outputLinks = addLinksToFile(links);
//   console.log(`outputLinks: ${outputLinks} at iteration ${i}`);

//   // Call the function: scrapeWebToMarkdown(url) for each link
//   if (outputLinks.length > 0) {    
//       outputLinks.forEach(link => {        
//           scrapeWebToMarkdown(link);       
//       });
//   } else {
//       console.log('No new links to scrape.');
//       break;
//   }
// }

let check = true;

while (check) {
  let i = 0;
  // Run the loop indefinitely
  const links = readAndOutputAllLinks();          
  // console.log('Links:', links);

  // Add the links to the 'links.json' file
  const outputLinks = addLinksToFile(links);
  console.log(`outputLinks: ${outputLinks} at iteration ${i}`);

  // Call the function: scrapeWebToMarkdown(url) for each link
  if (outputLinks.length > 0) {    
    i++;
    outputLinks.forEach(link => {        
        scrapeWebToMarkdown(link);       
    });
  } else {
      console.log('No new links to scrape.');
      check = false;
  }
}





// import fetch from 'node-fetch';