/*
DESCRIPTION:
Write a function that merges two sorted arrays into a single one.
The arrays only contain integers.
Also, the final outcome must be sorted and not have any duplicate.
*/

/*function mergeArrays(a, b) {
    let result = []
    let аrray = [...a, ...b].sort((x, y) => x - y)
    аrray.forEach((element) => {
        if (!result.includes(element)) {
            result.push(element)
        }
    })
    return result
}*/

const mergeArrays = (a, b) => Array.from(new Set([...a, ...b])).sort((a,b) => a-b);

console.log(mergeArrays([-100, -99, -98, -97, -96, -95, -94, -92, -86, -84, -83, -82, -80, -79, -77, -75, -74, -72, -71, -70, -69, -68, -67, -66, -65, -64, -63, -62, -59, -58, -57, -55, -53, -51, -50, -49, -48, -47, -46, -43, -42, -41, -40, -39, -38, -37, -36, -35, -33, -32, -30, -29, -28, -26, -25, -24, -23, -22, -19, -18, -17, -16, -15, -14, -13, -11, -10, -9, -7, -6, -5, -4, -2, -1,], [0, 3, 4, 5, 7, 8, 12, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 38, 41, 42, 43, 45, 47, 49, 50, 51, 52, 53, 56, 58, 60, 62, 65, 72, 74, 75, 80, 81, 83, 85, 86, 87, 90, 92, 95, 96, 97, 98, 99, 100]))

