const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const targetStr1 = '"/Top-Ayurvedic-Centers-in-India"';
const replaceStr1 = '"/top-ayurvedic-centers-in-india"';
const targetStr2 = '"/Top-Ayurvedic-Centers-in-India/';
const replaceStr2 = '"/top-ayurvedic-centers-in-india/';

const targetStr3 = '`/Top-Ayurvedic-Centers-in-India`';
const replaceStr3 = '`/top-ayurvedic-centers-in-india`';
const targetStr4 = '`/Top-Ayurvedic-Centers-in-India/';
const replaceStr4 = '`/top-ayurvedic-centers-in-india/';

let modifiedCount = 0;

walkDir('src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        if (newContent.includes('Top-Ayurvedic-Centers-in-India')) {
            newContent = newContent.replace(/"\/Top-Ayurvedic-Centers-in-India"/g, replaceStr1);
            newContent = newContent.replace(/"\/Top-Ayurvedic-Centers-in-India\//g, replaceStr2);
            newContent = newContent.replace(/`\/Top-Ayurvedic-Centers-in-India`/g, replaceStr3);
            newContent = newContent.replace(/`\/Top-Ayurvedic-Centers-in-India\//g, replaceStr4);
            
            if (newContent !== content) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                modifiedCount++;
                console.log(`Updated: ${filePath}`);
            }
        }
    }
});

console.log(`\nTotal files updated to lowercase: ${modifiedCount}`);
