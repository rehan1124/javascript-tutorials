function charOccurance(givenStr) {
    console.log('Input string:', givenStr);

    const occurance = {};

    for (let chars of givenStr) {
        if (chars !== ' ') occurance[chars] = (occurance[chars] || 0) + 1;
    }
    return occurance
}

console.log(charOccurance('John Doe'));
console.log(charOccurance('Tom, Dick and Harry'));
console.log(charOccurance('M'));
