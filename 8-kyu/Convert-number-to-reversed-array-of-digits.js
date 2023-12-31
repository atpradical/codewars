/*
DESCRIPTION:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

const digitize = (n) => n.toString().split('').reverse().map(i => Number(i))
console.log(typeof digitize(35231))