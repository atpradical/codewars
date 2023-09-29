/*
DESCRIPTION:
    Write function bmi that calculates body mass index (bmi = weight / height2).
    if bmi <= 18.5 return "Underweight"
    if bmi <= 25.0 return "Normal"
    if bmi <= 30.0 return "Overweight"
    if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    const value = weight / height / height
    return value <= 18.5 ? 'Underweight' : value <= 25 ? 'Normal' : value <= 30 ? 'Overweight' : value > 30 ? 'Obese' : 'wtf?'
}

console.log(bmi(80, 1.80))