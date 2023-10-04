/*
DESCRIPTION:
    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (const el of vowels) {
        count += str.match(new RegExp(el, "g"))?.length || 0;
    }
    return count;
}

console.log(getCount("abracadabra"))
console.log(getCount("o a kak ushakov lil vo kashu kakao"))