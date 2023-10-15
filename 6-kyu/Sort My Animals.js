/*Consider the following class:

var Animal = {
    name: "Cat",
    numberOfLegs: 4
}
Write a method that accepts a list of objects of type Animal, and returns a new list.
The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.
*/

const animals = [
    {name: "Cat", numberOfLegs: 4},
    {name: "Snake", numberOfLegs: 0},
    {name: "Dog", numberOfLegs: 4},
    {name: "Pig", numberOfLegs: 4},
    {name: "Human", numberOfLegs: 2},
    {name: "Bird", numberOfLegs: 2}
]

function sortAnimal(animals) {
    if (animals.length === 0) return []

    let result = animals.map(el=>el)

    return result.sort((a, b) => {
        if (a.numberOfLegs !== b.numberOfLegs) {
            return a.numberOfLegs - b.numberOfLegs;
        }
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
}

console.log(sortAnimal(animals))