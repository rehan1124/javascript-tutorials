"use strict";

import fs from 'fs';
import process from 'process';

console.log('Does folder exists?', fs.existsSync(process.cwd() + '/dummy-folder'));

const tempDir = process.cwd() + '/tmp/junky';

console.log('Create temp directory if it does not exist');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

console.log('Remove temp dir');

setTimeout(() => {
    fs.rmSync(tempDir.split('/junky')[0], { recursive: true, force: true });
    console.log('Does temp folder exists?', fs.existsSync(tempDir));
}, 5000);
