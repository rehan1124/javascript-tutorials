function validEmail(email) {
    console.log('Email to check:', email);
    const regExp = /([a-zA-Z._0-9]+@[a-z]+.[a-z])/gi;
    return regExp.test(email);
}

console.log(validEmail('john.doe@gmail.com'));
console.log(validEmail('john.doe'));
console.log(validEmail('@gmail.com'));
console.log(validEmail('!@#$%@gmail.com'));
console.log(validEmail('12345@gmail.com'));
console.log(validEmail('12345@gmailcom'));
console.log(validEmail('Abc12345@gmailcom'));
console.log(validEmail('Abc12345@gmail.com'));
console.log(validEmail('Abc12345@sub.gmail.com'));
