import fs from 'fs';
import path from 'path';
// Directory where the .md files are located
const directoryPath = '/home/david/Desktop/scraping-rubin-links/web-markdowns';
// New directory for the .mdx files
const newDirectoryPath = '/home/david/Desktop/scraping-rubin-links/web-mdx';
// Ensure the new directory exists
if (!fs.existsSync(newDirectoryPath)) {
    fs.mkdirSync(newDirectoryPath, { recursive: true });
}
// Function to rename .md files to .mdx, move them to a new folder, and remove the first line
function renameMdToMdxAndMove(directory, newDirectory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Could not list the directory.', err);
            process.exit(1);
        }
        files.forEach((file) => {
            if (path.extname(file) === '.md') {
                const originalFilePath = path.join(directory, file);
                const newFileName = file.replace('.md', '.mdx');
                const newFilePath = path.join(newDirectory, newFileName);
                fs.readFile(originalFilePath, 'utf8', (readErr, content) => {
                    if (readErr) {
                        console.error(`Failed to read file: ${originalFilePath}`, readErr);
                        return;
                    }
                    // Remove the first line from the content
                    const contentLines = content.split('\n');
                    // Remove lines that include "<img"
                    const filteredContentLines = contentLines.filter(line => !line.includes('<img'));
                    const modifiedContent = filteredContentLines.join('\n');
                    // const cleanedContent = modifiedContent.replace(/!(?![\[{])/g, '')
                    const cleanedContent = modifiedContent
                        .replace(/(<!---?|---?>)|!(?![\[{])/g, '')
                        .replace(/<br>|<b>|<\/b>/g, '');
                    fs.writeFile(newFilePath, cleanedContent, (writeErr) => {
                        if (writeErr) {
                            console.error(`Failed to write file: ${newFilePath}`, writeErr);
                        }
                        else {
                            console.log(`File was copied, modified, and renamed to: ${newFilePath}`);
                        }
                    });
                });
            }
        });
    });
}
renameMdToMdxAndMove(directoryPath, newDirectoryPath);
// import fs from 'fs';
// import path from 'path';
// // Directory where the .md files are located
// const directoryPath = '/home/david/Desktop/scraping-rubin-links/markdowns';
// // New directory for the .mdx files
// const newDirectoryPath = '/home/david/Desktop/scraping-rubin-links/mdx';
// // Ensure the new directory exists
// if (!fs.existsSync(newDirectoryPath)) {
//     fs.mkdirSync(newDirectoryPath, { recursive: true });
// }
// // Function to rename .md files to .mdx and move them to a new folder
// function renameMdToMdxAndMove(directory: string, newDirectory: string) {
//     fs.readdir(directory, (err, files) => {
//         if (err) {
//             console.error('Could not list the directory.', err);
//             process.exit(1);
//         }
//         files.forEach((file) => {
//             if (path.extname(file) === '.md') {
//                 const oldPath = path.join(directory, file);
//                 // Modify newPath to point to the new directory
//                 const newPath = path.join(newDirectory, file.replace('.md', '.mdx'));
//                 fs.rename(oldPath, newPath, (err) => {
//                     if (err) {
//                         console.error('Error renaming and moving file:', err);
//                     } else {
//                         console.log(`${file} was renamed to ${path.basename(newPath)} and moved to ${newDirectory}`);
//                     }
//                 });
//             }
//         });
//     });
// }
// // Call the function with the directory paths
// renameMdToMdxAndMove(directoryPath, newDirectoryPath);
//# sourceMappingURL=rename-markdown.js.map