/*
* Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
* */

function deleteDigit(n) {
    const array = n.toString().split('')
    const resultArray = []

    for (let i = 0; i < array.length; i++) {
        resultArray.push(+array.filter((el, index) => index !== i).join(''))

    }
    return Math.max(...resultArray)
}

console.log(deleteDigit(152))