function checkOS(personName, os) {
    // --- Check if parameters are passed ---
    if (!personName || !os) {
        throw new Error('One or more values are missing');
    }

    // --- Check datatype for parameters ---
    if (typeof personName !== 'string' || typeof os !== 'string') {
        throw new Error(`Only string values are accepted, but` +
            ` received values are ${typeof personName} and ${typeof os}`);
    }

    // --- Check for OS when passed value is Apple, apple, <space> Apple ---
    switch (os.toLowerCase().trim()) {
        case 'apple':
            return `${personName} is using macOS...`;
        case 'windows':
            return `${personName} is using Windows...`;
        case 'macos':
            return `Hello ${personName}, you have provided ${os} as your operating system...`;
        default:
            return `${personName} is using other OS...`
    }
    // if (os.toLowerCase().trim() === 'apple') {
    //     return `${personName} is using macOS...`;
    // }

    // // --- Check for OS when passed value is <space>Windows, Windows, windows<space> ---
    // if (os.toLowerCase().trim() === 'windows') {
    //     return `${personName} is using Windows...`;
    // }


}

// try {
//     console.log('Valid values:', checkOS('John', 'MacOS'));
//     console.log('Apple, apple, <space> Apple:', checkOS('John', 'Apple'));
//     console.log('Apple, apple, <space> Apple:', checkOS('John', ' Apple'));
//     console.log('Apple, apple, <space> Apple:', checkOS('John', ' apple'));
//     console.log('<space>Windows, Windows, windows<space>:', checkOS('John', ' Windows'));
//     console.log('<space>Windows, Windows, windows<space>:', checkOS('John', 'Windows'));
//     console.log('<space>Windows, Windows, windows<space>:', checkOS('John', 'Windows '));
//     console.log('Different OS:', checkOS('John', 'Linux'));
//     // console.log('Missing values:', checkOS('John'));
//     // console.log('Incorrect data types:', checkOS(true, 123));
// } catch (error) {
//     console.error(error.message);
// }

try {
    // console.log('Rob:', checkOS('Rob'));
    // console.log('"Rob", 123:', checkOS('Rob', 123));
    console.log('"Rob", "Apple":', checkOS('Rob', 'Apple'));
    console.log('"Bob", " Windows":', checkOS('Bob', 'Windows'));
    console.log('"John" "Linux":', checkOS('John', 'Linux'));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
