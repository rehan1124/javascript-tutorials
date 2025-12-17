function removeSpecialChars(sampleString) {
    console.log('Input string:', sampleString);

    return sampleString.replace(/[^a-zA-Z ]/g, '');
}

console.log(removeSpecialChars('Hello World'));
console.log(removeSpecialChars('H~e@l#l$o% World !!!'));
console.log(removeSpecialChars('~!@#$%^&*()_+'));
