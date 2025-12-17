function reverseWords(sentence) {
    const splittedSenteance = sentence.split(' ');

    const reversedSentence = splittedSenteance.map((words) => words.split('').reverse().join(''));

    return reversedSentence.join(' ');
}

console.log(reverseWords("Hello, My name is John"));
