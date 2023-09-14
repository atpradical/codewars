/*
DESCRIPTION:
The rgb function is incomplete.
Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255       --> "FFFFFF"
255, 255, 300       --> "FFFFFF"
0, 0, 0             --> "000000"
148, 0, 211         --> "9400D3"
*/

function rgb(r, g, b){
    // complete this function
    return `${componentToHex(r).toUpperCase()}${componentToHex(g).toUpperCase()}${componentToHex(b).toUpperCase()}`;
}

function componentToHex(value) {
    if (value < 0) value = 0
    if (value > 255) value = 255
    let hex = value.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

console.log(rgb(300,255,255))