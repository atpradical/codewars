/*
* Write a function that takes a string of parentheses,
* and determines if the order of the parentheses is valid.
* The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*
* Constraints
    0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

Protip:
* If you are trying to figure out why a string of parentheses is invalid,
* paste the parentheses into the code editor, and let the code highlighting show you!
* */


function validParentheses(parenStr) {
    let stack = [];
    for (let char of parenStr) {
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(validParentheses("((()))"))
console.log(validParentheses(")("))
//
// // Define a function that takes a string of parentheses as a parameter
// function isValidParentheses(str) {
//     // Create an empty stack
//     let stack = [];
//     // Loop through each character in the string
//     for (let char of str) {
//         // If the character is an opening parenthesis, push it to the stack
//         if (char === "(") {
//             stack.push(char);
//         }
//         // If the character is a closing parenthesis, pop the last element from the stack
//         else if (char === ")") {
//             // If the stack is empty, it means there is no matching opening parenthesis, so the string is invalid
//             if (stack.length === 0) {
//                 return false;
//             }
//             // Otherwise, pop the last element from the stack
//             else {
//                 stack.pop();
//             }
//         }
//     }
//     // If the stack is empty at the end of the string, it means that the parentheses are balanced and the string is valid
//     if (stack.length === 0) {
//         return true;
//     }
//     // Otherwise, the string is invalid
//     else {
//         return false;
//     }
// }
//
// // Test the function with some examples
// console.log(isValidParentheses("()")); // true
// console.log(isValidParentheses("(())")); // true
// console.log(isValidParentheses("(()))")); // false
// console.log(isValidParentheses(")(")); // false
