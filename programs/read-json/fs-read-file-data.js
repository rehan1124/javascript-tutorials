import fs from 'fs';

const dataBinary = fs.readFileSync('./sample.json');
console.log('File data binary:', dataBinary);

const dataUtf8 = fs.readFileSync('./sample.json', { encoding: 'utf-8' });
console.log('Readable data:', dataUtf8);
console.log('Readable data format:', typeof dataUtf8);
console.log('JS object data:', JSON.parse(dataUtf8));
console.log('JS object data format:', typeof JSON.parse(dataUtf8));
