/*Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
And because the local council has lost most of our tax money to an elaborate
email scam there are no funds to fix the clock properly.
Instead, they are asking for volunteer programmers to write some code that tell
the time by only looking at the remaining hour-hand!
What a bunch of cheapskates!
Can you do it?

Kata
Given the angle (in degrees) of the hour-hand,
return the time in 12 hour HH:MM format.
Round down to the nearest minute.

Examples:
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees

Notes
0 <= angle <= 360
Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.
3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07
*/

// var whatTimeIsIt = function (angle) {
//     // Your code here
//     let hour;
//     let min;
//     if (angle === 0) {
//         return '12:00'
//     } else if (angle % 30 === 0) {
//         hour = angle / 30
//         hour < 10 ? hour = `0${hour}` : hour = hour
//         return `${hour}:00`
//     } else {
//         hour = Math.floor(angle / 30)
//         min = Math.floor((angle - hour * 30) / 0.5)
//         min < 10 ? min = `0${min}` : min = min
//         if (hour == 0) {
//             hour = 12
//         } else if (hour > 0 && hour < 10) {
//               hour = `0${hour}`
//         } else {
//             hour = hour
//         }
//         return `${hour}:${min}`
//     }
// }


//optimized solution:
var whatTimeIsIt = function (angle) {
    let hour = Math.floor(angle / 30)
    let minutes = Math.floor((angle % 30) * 2);

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (hour <= 0) {
        hour = 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return hour + ":" + minutes;
}

console.log(whatTimeIsIt(93))