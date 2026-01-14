/**
 * Contains Duplicate (217): Check if an array has any duplicate elements (uses hashing/sets).
 */

function hasDuplicate(givenArray) {
    console.log('Given array:', givenArray);

    if (givenArray.length === 0) {
        return 'Empty array.'
    }

    const seen = new Set();

    for (const items of givenArray) {
        if (seen.has(items)) {
            return `Duplicate found: ${items}`
        } else {
            seen.add(items);
        }
    }

    return 'No duplicates found.'

}

console.log(hasDuplicate([1, 3, 5, 7]));
console.log(hasDuplicate([100, 3, 55, 100, 1]));
console.log(hasDuplicate([]));
