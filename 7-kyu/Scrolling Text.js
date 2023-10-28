/*Let's create some scrolling text!

Your task is to complete the function which takes a string,
and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

Good luck!
*/

function scrollingText(text) {

    const textUp = text.toUpperCase()
    const result = []
    const array = textUp.split('')

    result.push(textUp)

    for (let i = 1; i < array.length; i++) {
        let letter = array.shift()
        array.push(letter)
        result.push(array.join(''))
    }

    return result
}

console.log(scrollingText("abc"))