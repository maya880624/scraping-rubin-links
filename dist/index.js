const puppeteer = require('puppeteer');
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { existsSync } from 'fs';
// Create a directory to store the rubin notebook files
function createNotebooksDirectory(dataDir) {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
}
// Function to convert a notebook to markdown, and save it to a file
async function convertNotebookToMarkdown(notebookPath) {
    try {
        // if the markdown file already exists, skip conversion
        // await exec(`jupyter nbconvert --to markdown "${notebookPath}"`);
        await execSync(`jupyter nbconvert --to markdown "${notebookPath}"`);
        // console.log(`Converted ${notebookPath} to markdown.`);
    }
    catch (error) {
        console.error(`Failed to convert ${notebookPath} to markdown. Error: ${error}`);
        // Optionally, handle specific actions for failures here
    }
}
// Read the markdown file and return the links in the file - href values
function extractLinksFromMarkdown(markdownPath) {
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    const linkRegex = /(?<=\[[^\]]*\]\()[^\)]+(?=\))/g;
    return markdownContent.match(linkRegex) || [];
}
const rubinUrl = 'https://github.com/rubin-dp0/tutorial-notebooks';
const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(rubinUrl);
    // Wait for the page to load (you might need to adjust this)
    await page.waitForSelector('a'); // Example: waits for <a> tags to be loaded
    // Extract links that end with .ipynb
    const ipynbLinks = await page.$$eval('a', (anchors) => [...new Set(anchors
            .map(anchor => anchor.href)
            .filter(href => href.endsWith('.ipynb') && !href.includes('_ES')))]);
    console.log(ipynbLinks);
    const notebooksPath = path.join(__dirname, 'notebooks');
    const markdownsPath = path.join(__dirname, 'markdowns');
    createNotebooksDirectory(notebooksPath);
    createNotebooksDirectory(markdownsPath);
    // Set the download behavior
    // Before your loop to download notebooks
    // await page['client']().send('Page.setDownloadBehavior', {
    //     behavior: 'allow',
    //     downloadPath: notebooksPath, // Specify your download directory here
    // });
    const client = await page.target().createCDPSession();
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: notebooksPath, // Specify your download directory here
    });
    for (const ipynbLink of ipynbLinks) {
        const notebookName = ipynbLink.split('/').pop(); // Extract the notebook name from the link
        if (!notebookName) {
            continue;
        }
        await page.goto(ipynbLink, { waitUntil: 'networkidle2' });
        // If the page contains a download button, click it
        const downloadButtonExists = await page.$('[data-testid="download-raw-button"]');
        if (downloadButtonExists) {
            await downloadButtonExists.click();
            // Wait for the download to complete. Adjust the timing as necessary.
            // Replace `await page.waitForTimeout(5000);` with:
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
        // Otherwise, the navigation to the link itself should trigger the download
    }
    const notebookFiles = fs.readdirSync(notebooksPath);
    for (const notebookFile of notebookFiles) {
        console.log(`Processing ${notebookFile}`);
        const notebookPath = path.join(notebooksPath, notebookFile);
        //check if the file exists
        // Assuming convertNotebookToMarkdown is an async function
        convertNotebookToMarkdown(notebookPath).then(() => {
            const markdownFile = notebookFile.replace('.ipynb', '.md');
            const markdownFilePath = path.join(notebooksPath, markdownFile); // Adjusted to check in notebooksPath
            console.log(`Checking for ${markdownFilePath}`);
            console.log(`Exists: ${existsSync(markdownFilePath)}`);
            if (existsSync(markdownFilePath)) {
                const markdownPath = path.join(markdownsPath, markdownFile);
                fs.renameSync(markdownFilePath, markdownPath);
                console.log(`Moved ${markdownFile} to the markdowns directory.`);
            }
        }).catch(error => {
            console.error(`Failed to convert and move ${notebookFile}: ${error}`);
        });
    }
    // Extract links from the markdown files
    await browser.close();
};
main();
//# sourceMappingURL=index.js.map