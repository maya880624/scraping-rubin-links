// Extract links from the markdown files
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
const extractLinks = (folderPath) => {
    const allLinks = [];
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
        console.log("file: ", file);
        if (path.extname(file) === '.md') {
            const filePath = path.join(folderPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            // const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
            const linkRegex = /<a href="(https?:\/\/[^\s"]+)">([^<]+)<\/a>/g;
            let match;
            // output filename with links
            const fileLinks = [];
            // console.log(linkRegex.exec(content));
            while ((match = linkRegex.exec(content)) !== null) {
                // Check if the link includes 'community', if not, add it to fileLinks
                if (!match[1].includes('community')) {
                    fileLinks.push({ filename: file, links: [match[1]] }); // match[1] contains the URL
                }
            }
            console.log(fileLinks);
            if (fileLinks.length > 0) {
                allLinks.push(fileLinks);
            }
        }
    });
    return allLinks;
};
// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Example usage
const links = extractLinks('./markdowns');
// console.log(links);
const allLinksJson = JSON.stringify(links, null, 2);
// Specify the path where the JSON file will be saved
const jsonFilePath = path.join(__dirname, 'all-links');
const outputFilePath = path.join(jsonFilePath, 'allLinks.json');
// Check if the directory exists, if not, create it
if (!fs.existsSync(jsonFilePath)) {
    fs.mkdirSync(jsonFilePath);
}
// Write the JSON file
fs.writeFileSync(outputFilePath, allLinksJson, 'utf-8');
console.log('Links extracted and saved to: ', outputFilePath);
export default extractLinks;
//# sourceMappingURL=extract-links.js.map