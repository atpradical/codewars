/*
Create a function strCount (takes an object as argument) that will count all string values inside an object.
For example:
    strCount({
        first: "1",
        second: "2",
        third: false,
        fourth: ["anytime",2,3,4],
        fifth:  null
    })
//returns 3
*/
let object = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {
        first: "1",
        second: "2",
    }
}

function strCount(object) {
// Your code here
    let counter = 0;
    for (let element in object) {
        if (typeof object[element] == 'string') counter++;
        if (typeof object[element] == 'object') counter += strCount(object[element]);
    }
    return counter;
}

console.log(strCount(object));
