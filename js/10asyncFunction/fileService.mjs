const fs = require('fs').promises;

async function readFile(filePath) {
    try {
        let data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
