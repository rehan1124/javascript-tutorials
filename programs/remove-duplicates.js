/**
 * Remove Duplicates from Sorted Array (26): Remove duplicates in-place (two pointers).
 * 
 * Adopted different approach
 */

function removeDuplicates(sampleArr) {

    const uniqueElements = new Set(sampleArr);

    const uniqueElementsArray = Array.from(uniqueElements)

    const lengthDiff = sampleArr.length - uniqueElementsArray.length;

    for (let i = 0; i < lengthDiff; i++) {
        uniqueElementsArray.push('_');
    }

    return uniqueElementsArray;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));