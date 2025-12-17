import fs from 'fs';

function readFileData(filename) {
    try {
        const data = fs.readFileSync(filename, { encoding: 'utf-8' });
        return data;
    } catch (error) {
        throw new Error(`Unable to read file ${filename}: ${error.message}`);
    }
}

try {
    const hasData = readFileData('sample.json');
    console.log('Has data:', hasData);

    const noData = readFileData('sample.txt');
    console.log('Should throw error:', noData);
} catch (error) {
    console.error(error.message);
}