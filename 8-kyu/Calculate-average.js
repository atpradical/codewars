/*
DESCRIPTION:
    Write a function which calculates the average of the numbers in a given list.
    Note: Empty arrays should return 0.
*/
const findAverage = (array) => array.length === 0 ? 0 : array.reduce((el, prev) => el + prev, 0) / array.length
console.log(findAverage([1, 2, 3, 4, 5]))