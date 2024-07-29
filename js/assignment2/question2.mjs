const fs = require('fs').promises;

// Function to read a file asynchronously
const readFileAsync = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
};

// Example
readFileAsync('example.txt');
