/**
 * Valid Anagram (242): Determine if two strings are anagrams (uses frequency mapping/sorting).
 */

"use strict";

function isAnagram(str1, str2) {
    console.log(`Received strings: ${str1} and ${str2}`);

    if (str1.length !== str2.length) return false

    const str1Formatted = str1.toLowerCase().split('').sort().join('');
    const str2Formatted = str2.toLowerCase().split('').sort().join('');

    return str1Formatted === str2Formatted;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Hello", "Olelh"));
console.log(isAnagram("test", "taste"));
