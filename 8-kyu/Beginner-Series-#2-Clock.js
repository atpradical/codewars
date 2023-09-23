/*
DESCRIPTION:
    Clock shows h hours, m minutes and s seconds after midnight.
    Your task is to write a function which returns the time since midnight in milliseconds.
    Example:
        h = 0
        m = 1
        s = 1
        result = 61000

Input constraints:
    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/

const past = (h, m, s) =>  (s + (m * 60) + (h * 60 * 60)) * 1000

console.log(past(0,1,1))
