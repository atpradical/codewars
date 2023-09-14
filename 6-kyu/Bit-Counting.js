/*
DESCRIPTION:
    Write a function that takes an integer as input, and returns the number of bits
    that are equal to one in the binary representation of that number.
    You can guarantee that input is non-negative.
    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
var countBits = function(n) {
    // Program Me
    let count = 0
    for (let i = 0; i < n.toString(2).length; i++) {
        if (n.toString(2)[i] == 1) {
            count++;
        }
    }
    return console.log(count)
};
countBits(1234)