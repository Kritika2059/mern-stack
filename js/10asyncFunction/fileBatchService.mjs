async function readFiles(filePaths) {
    let promises = filePaths.map(filePath => fs.readFile(filePath, 'utf8'));
    let results = await Promise.all(promises);
    return results;
}
