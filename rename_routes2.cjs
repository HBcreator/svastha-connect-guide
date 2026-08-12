const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const targetStr1 = '"/centers"';
const replaceStr1 = '"/Top-Ayurvedic-Centers-in-India"';
const targetStr2 = '"/centers/';
const replaceStr2 = '"/Top-Ayurvedic-Centers-in-India/';
// Also handle backticks like \`/centers\`
const targetStr3 = '`/centers`';
const replaceStr3 = '`/Top-Ayurvedic-Centers-in-India`';
const targetStr4 = '`/centers/';
const replaceStr4 = '`/Top-Ayurvedic-Centers-in-India/';

let modifiedCount = 0;

walkDir('src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        if (newContent.includes('"/centers') || newContent.includes('`/centers')) {
            newContent = newContent.replace(/"\/centers"/g, replaceStr1);
            newContent = newContent.replace(/"\/centers\//g, replaceStr2);
            newContent = newContent.replace(/`\/centers`/g, replaceStr3);
            newContent = newContent.replace(/`\/centers\//g, replaceStr4);
            
            if (newContent !== content) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                modifiedCount++;
                console.log(`Updated: ${filePath}`);
            }
        }
    }
});

console.log(`\nTotal files updated: ${modifiedCount}`);
