/*
Scenario
    Several people are standing in a row divided into two teams.
    The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
    Given an array of positive integers (the weights of the people),
    return a new array/tuple of two integers, where the first one is the total weight of team 1,
     and the second one is the total weight of team 2.

Notes
    Array size is at least 1.
    All numbers will be positive.

Input >> Output Examples
    rowWeights([13, 27, 49])  ==>  return (62, 27)

Explanation:
    The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

Explanation:
    The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)

Explanation:
    The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

function rowWeights(array) {

    if (!array) return null

    switch (array.length) {
        case 0:
            return [0, 0]
        case 1:
            return [...array, 0]
        case 2:
            return array
        default:
            const team1 = array
                .filter((el, index) => index === 0 || index % 2 === 0)
                .reduce((prev, curr) => prev + curr, 0)

            const team2 = array
                .filter((el, index) => index % 2 !== 0)
                .reduce((prev, curr) => prev + curr, 0)

            return [team1, team2]
    }
}

console.log(rowWeights())
console.log(rowWeights([]))
console.log(rowWeights([80]))
console.log(rowWeights([13, 27, 49]))
console.log(rowWeights([50, 60, 70, 80]))