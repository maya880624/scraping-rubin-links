// Extract links from the markdown files
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
            const fileLinks = [];
            // console.log(linkRegex.exec(content));
            while ((match = linkRegex.exec(content)) !== null) {
                fileLinks.push(match[1]); // match[2] contains the URL
            }
            console.log(fileLinks);
            if (fileLinks.length > 0) {
                allLinks.push(fileLinks);
            }
        }
    });
    return allLinks;
};
// Example usage
const links = extractLinks('./markdowns');
// console.log(links);
export default extractLinks;
//# sourceMappingURL=extract-links.js.map