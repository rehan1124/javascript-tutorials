function nonRepeatChar(sampleStr) {
    console.log('Input string:', sampleStr);

    for (const items of sampleStr) {
        if (sampleStr.indexOf(items) === sampleStr.lastIndexOf(items)) return items
    }
    return null;

}

console.log(nonRepeatChar('character'));
console.log(nonRepeatChar('LuluMall'));
console.log(nonRepeatChar('MAFian'));
