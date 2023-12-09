/*
* Write a function:
* insert_dash(num) /
* insertDash(num)  /
* InsertDash(int num)
*
* that will insert dashes ('-') between each two odd digits in num.
*
* For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).
*
* */

function insertDash(num) {
    const result = []
    const array = num.toString().split('')

    for (let i = 0; i < array.length; i++) {
        if (array[i - 1]) {
            if (array[i - 1] % 2 !== 0) {
                if (array[i] % 2 !== 0) {
                    result.push('-')
                }
            }
        }
        result.push(array[i])
    }
    return result.join('')
}


console.log(insertDash(454793))
console.log(insertDash(123456))