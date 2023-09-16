/*
DESCRIPTION:
    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.*/


const boolToWord = (bool) => bool ? 'Yes' : 'No'
console.log(boolToWord(false))
console.log(boolToWord(100))
console.log(boolToWord('string'))
console.log(boolToWord(null))
console.log(boolToWord([1, 2, 3, 4, 5]))
console.log(boolToWord(undefined))
console.log(boolToWord(true))
