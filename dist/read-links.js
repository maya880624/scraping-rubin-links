import fetch from 'node-fetch';
import { promises as fs } from 'fs';
const readAllLinksFromFile = async (filePath) => {
    try {
        // Read the file
        const fileContent = await fs.readFile(filePath, 'utf-8');
        // Parse the JSON content
        const documents = JSON.parse(fileContent);
        // Extract all links into a single array
        const allLinks = documents.flat().flatMap((doc) => doc.links);
        return allLinks;
    }
    catch (error) {
        console.error('Error reading links:', error);
        // Add a return statement here
        return [];
    }
};
const fetchContentFromLinks = async (links) => {
    for (const link of links) {
        try {
            const response = await fetch(link);
            if (!response.ok) {
                console.error(`Failed to fetch ${link}: ${response.statusText}`);
                continue;
            }
            const content = await response.text();
            console.log(`Content from ${link}:`, content);
            // Here you can decide to do something with the content, like saving it to a file
        }
        catch (error) {
            console.error(`Error fetching ${link}:`, error);
        }
    }
};
const readRubinDocument = async () => {
    const filePath = '/home/david/Desktop/scraping-rubin-links/dist/all-links/allLinks.json';
    try {
        const allLinks = await readAllLinksFromFile(filePath);
        console.log('All links:', allLinks);
        await fetchContentFromLinks(allLinks);
    }
    catch (error) {
        console.error('Error:', error);
    }
};
readRubinDocument();
export default readRubinDocument;
//# sourceMappingURL=read-links.js.map