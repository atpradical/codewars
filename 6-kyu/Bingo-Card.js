/*Bingo Card
After yet another dispute on their game the Bingo Association decides to change course and automate the game.
Can you help the association by writing a method to create a random Bingo card?

Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:
5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75

Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:
[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.
*/

function getCard() {
    // Start your coding here...
    let result = [];
    for (let i = 0; i < 5; i++) {
        switch (i) {
            case 0:
                repeat('B', result, 5, () => randomInt(1, 15));
                continue
            case 1:
                repeat('I', result, 5, () => randomInt(16, 30));
                continue
            case 2:
                repeat('N', result, 4, () => randomInt(31, 45));
                continue
            case 3:
                repeat('G', result, 5, () => randomInt(46, 60));
                continue
            case 4:
                repeat('O', result, 5, () => randomInt(61, 75));
                continue
            default:
                break
        }

        function randomInt(min, max) {
            // случайное число от min до (max+1)
            return Math.floor(min + Math.random() * (max + 1 - min));
        }

        function repeat(string, result, amount, func) {
            for (let i = 0; i < amount; i++) {
                let value = string + func();
                if (!result.includes(value)) {
                    result.push(value);
                } else {
                    --i;
                }
            }
            return result;
        }
    }
    return result;
}
console.log(getCard())