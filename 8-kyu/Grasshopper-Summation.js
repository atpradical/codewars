/*
DESCRIPTION:
    Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

const summation = (num) => {

    //  Derivation of Sum of Arithmetic Series Formula Sn = n/2(a1 + an)
    return num * (num + 1) / 2


/* OR via loop:

    let result = 0
    for (let i = 1; i <= num; i++) {
        result += i
    }
    return result */
}

console.log(summation(8))