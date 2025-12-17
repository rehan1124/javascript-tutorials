"use strict";

import data from './sample.json' with { type: 'json'};

console.log('--- JSON string ---\n');

const jsonString = JSON.stringify(data);
console.log(jsonString);
console.log(typeof jsonString);

console.log('\n--- JSON string to JS object ---\n');
const parsedJSONString = JSON.parse(jsonString);
console.log(parsedJSONString);
console.log(typeof parsedJSONString);
