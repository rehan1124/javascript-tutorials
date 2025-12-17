function findDuplicates(str) {

    const duplicateItemsArr = new Set();

    for (let items of str) {
        if (str.indexOf(items) !== str.lastIndexOf(items)) duplicateItemsArr.add(items);
    }

    return duplicateItemsArr;
}

console.log(findDuplicates('abc'));
console.log(findDuplicates('abca'));
console.log(findDuplicates('abcdac'));
