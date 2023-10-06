/*
* You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

e.g. "The score is four nil" should return [4,0]

Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

"new score: two three"

"two two"

"Arsenal just conceded another goal, two nil"
Note:

Please return an array
Please rate and enjoy!
* */

function scoreboard(string) {
    const array = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const stringArray = string.split(' ')
    const result = []

    stringArray.filter((el) => {
        if (array.includes(el)) {
            result.push(array.indexOf(el))
        }

    })
    return result
}
//----------------------------------------------------------------
// function scoreboard(string) {
//     const array = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
//     const stringArray = string.split(' ')
//     const result = []
//     array.filter((el, index) => {
//         if (stringArray.includes(el)) {
//             result.push(index)
//         }
//     })
//     return result
// }

console.log(scoreboard("The score is four nil"))