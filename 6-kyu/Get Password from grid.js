/*
* DESCRIPTION:
In this kata you are expected to recover a scattered password in a (m x n) grid
* (you'll be given directions of all password pieces in the array)

The array will contain pieces of the password to be recovered,
* you'll get directions on how to get all the the pieces,
* your initial position in the array will be the character "x".

Heres what the array looks like

[
  ["p", "x", "m"],
  ["a", "$", "$"],
  ["k", "i", "t"]
]

The given directions would consist of [left, right, up, down] and [leftT, rightT, upT, downT],
the former would be used to move around the grid while the latter would be used
when you have a password to that direction of you.
( E.g if you are in a position and the move to make is leftT it means theres a password to the left of you,
 so take the value and move there)

So in the 2d array example above, you will be given the directions ["lefT", "downT", "rightT", "rightT"],
making for the word "pa$$".

Remember you initial position is the character "x".
So you write the function getPassword(grid, directions) that uses the directions to get a password in the grid.

Another example.

grid = [
  ["a", "x", "c"],
  ["g", "l", "t"],
  ["o", "v", "e"]
];

directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]

getPassword(grid, directions) // => "lovet"
Once again, Your initial position is the character "x",
* so from the position of "x" you follow the directions given and get all pieces in the grid.

* */


// Test.assertSimilar(getPassword(t1, t1d), "lock", "Wrong!");

// Функция, которая принимает сетку и направления, и возвращает пароль
// function getPassword(grid, directions) {
//     // Инициализируем переменные для хранения текущей позиции, пароля и длины сетки
//     let row = 0;
//     let col = 0;
//     let password = "";
//     let m = grid.length;
//     let n = grid[0].length;
//
//     // Находим начальную позицию, где находится символ "x"
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j] === "x") {
//                 row = i;
//                 col = j;
//                 break;
//             }
//         }
//     }
//
//     // Проходим по массиву направлений и выполняем соответствующие действия
//     for (let direction of directions) {
//         // Если направление заканчивается на T, то добавляем символ в пароль и перемещаемся в этом направлении
//         if (direction.endsWith("T")) {
//             password += grid[row][col];
//             direction = direction.slice(0, -1);
//         }
//
//         // Перемещаемся в соответствии с направлением, проверяя границы сетки
//         switch (direction) {
//             case "left":
//                 col = Math.max(0, col - 1);
//                 break;
//             case "right":
//                 col = Math.min(n - 1, col + 1);
//                 break;
//             case "up":
//                 row = Math.max(0, row - 1);
//                 break;
//             case "down":
//                 row = Math.min(m - 1, row + 1);
//                 break;
//         }
//     }
//
//     // Возвращаем полученный пароль
//     return password;
// }

let grid = [
    ["x", "l", "m"],
    ["o", "f", "c"],
    ["k", "i", "t"]
]

const directions = ["rightT", "down", "leftT", "right", "rightT", "down", "left", "leftT"];

function getPassword(grid, directions) {

    let row = 0;
    let col = 0;
    let password = "";

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "x") {
                row = i;
                col = j;
                break;
            }
        }
    }

    directions.forEach( el => {
        switch (el) {
            case "up":
            case "upT":
                row -= 1;
                break
            case "right":
            case "rightT":
                col += 1;
                break
            case "down":
            case "downT":
                row += 1;
                break
            case "left":
            case "leftT":
                col -= 1;
                break
        }

        if(el.endsWith('T')) {
            password += grid[row][col];
        }
    })
    return password;
}


console.log(getPassword(grid, directions))