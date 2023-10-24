/*
A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

Write a function that can verify if the given integer n is a perfect number,
and return True if it is, or return False if not.

Examples
    n = 28 has the following divisors: 1, 2, 4, 7, 14, 28
    1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect number, so you should return True

Another example:
    n = 25 has the following divisors: 1, 5, 25
    1 + 5 = 6 therefore 25 is not a perfect number, so you should return False
*/

function isPerfect(n) {
   const knownPerfectNumbers = [6, 28, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128, 2658455991569831744654692615953842176]

   if (knownPerfectNumbers.includes(n)) return true
    return false
}

console.log(isPerfect(23459879034))