/**
 * Valid Parentheses (20): Check if a string of brackets is valid (uses stack). 
 */

function isValidParanthesis(paranthesis) {
    console.log('Given paranthesis:', paranthesis);

    const closeToOpen = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    const stack = [];

    for (const char of paranthesis) {
        console.log('Read char:', char);

        console.log('Checking if is it present in map:', closeToOpen[char]);

        if (closeToOpen[char]) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;

}

console.log(isValidParanthesis('()'));
console.log(isValidParanthesis('()[]{}'));
console.log(isValidParanthesis('(]'));
console.log(isValidParanthesis('([)]'));
