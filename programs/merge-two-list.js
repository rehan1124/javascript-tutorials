/**
 * Merge Two Sorted Lists (21): Merge two sorted linked lists (uses pointer comparison).
 * 
 * Here wrote program for merging to Arrays/Lists using spread operator
 */

function mergeList(l1, l2) {
    return [...l1, ...l2].sort((a, b) => a - b);
}

console.log(mergeList([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
console.log(mergeList([], [2, 4, 6, 8, 10]));
