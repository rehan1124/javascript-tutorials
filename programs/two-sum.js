/**
 * Two Sum (1): Find two numbers in an array that add up to a target sum (uses hashing).
 */

function twoSum(givenArray, targetSum) {
    const pairs = {};

    for (let i = 0; i < givenArray.length; i++) {
        const currentNum = givenArray[i];
        const complement = targetSum - currentNum;

        if (complement in pairs) {
            return `Indexes are: [${pairs[complement]}, ${i}]`;
        } else {
            pairs[currentNum] = i;
        }
    }

    return 'Pair not found.'
}

console.log(twoSum([1, 100, 3, 99], 199));
console.log(twoSum([1, 2, 3, 4], 9));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
