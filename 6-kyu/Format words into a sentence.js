/* *
Complete the method so that it formats the words into a single comma separated value.
The last word should be separated by the word 'and' instead of a comma.
The method takes in an array of strings and returns a single formatted string.

Note:
    Empty string values should be ignored.
    Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.

Example: (Input --> output)
    ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
    ['ninja', '', 'ronin'] --> "ninja and ronin"
    [] -->""
* */

function formatWords(words) {
    if (!words) {
        return ''
    }

    if (words.length === 0 || !words) {
        return ''
    }

    if (words.length === 1 && !words[0]) {
        return ''
    } else if (words.length === 1) {
        return words[0]
    }
    const array = []
    const filteredWords = words.filter(el => Boolean(el) !== false)

    switch (filteredWords.length) {
        case 0:
            return ''
        case 1:
            return filteredWords[0]
        case 2:
            return filteredWords.join(' and ')
        default :

            let length = filteredWords.length
            for (let i = 0; i < length; i++) {

                if (filteredWords.length - i  > 2) {
                    array.push(filteredWords[i] + ',')
                }

                if (filteredWords.length - i  === 2) {
                    array.push(filteredWords[i])
                }

                if (filteredWords.length - i === 1) {
                    array.push('and')
                    array.push(filteredWords[i])
                }
            }
            let result = array.join(' ')
            return result
    }
}




console.log(formatWords(['one', 'two', 'three', 'four']))
console.log(formatWords(['one', '', 'three']))
console.log(formatWords(['one', 'two', '']))
console.log(formatWords(['', '', 'three']))
console.log((formatWords(['one'])))
console.log((formatWords([''])))
console.log((formatWords([null])))
console.log((formatWords(null)))
console.log((formatWords([])))