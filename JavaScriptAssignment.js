//Sequence UC1
// let digit = Math.floor(Math.random()*10)
// console.log(digit);

// UC2
// let dice=Math.floor(Math.random()*10) %6 +1
// console.log(dice);

//UC3
let dice1=Math.floor(Math.random()*10) %6 +1
console.log(dice1)
let dice2=Math.floor(Math.random()*10) %6 +1
console.log(dice2)
console.log(dice1+dice2);

//UC4
let noSize=5;
let sum=0;
for(let no=0;no<5;no++){
sum += Math.floor(Math.random()*100)
} 
let avg=sum/noSize;
console.log("Sum "+sum +"  avg " +avg);

//UC5
//5-1
const CONVERSION_OF_INCH_INTO_FEET = 1 / 12;


let inches = 42
let feet = inches * CONVERSION_OF_INCH_INTO_FEET
console.log(inches + " inche = " + feet + " ft.")

//5-2
const FEET_TO_METERS_CONVERSION = 1 / 3.2808;

let lengthInFeet = 60
let breadthInFeet = 40
let lengthInMeters = lengthInFeet * FEET_TO_METERS_CONVERSION
let breadthInMeters = breadthInFeet * FEET_TO_METERS_CONVERSION
console.log("Plot Dimension in Feet:- " + lengthInFeet
    + " Feet X " + breadthInFeet + " Feet" + " Into Meters: " + "Plot Dimension in Meters:- " + lengthInMeters.toFixed(2)
    + " meters X " + breadthInMeters.toFixed(2) + " meters");

// Calculate area of 25 such plots in acres
const METER_SQUARE_TO_ACRE_CONVERSION = 1 / 4046.86;

let areaInMeterSquare = lengthInMeters * breadthInMeters
let areaInAcres = areaInMeterSquare * METER_SQUARE_TO_ACRE_CONVERSION
console.log("Area of 25 plots in Acres : "
    + (25 * areaInAcres).toFixed(2) + " acres");

    //Selection UC1
    let minimum=0;
    let maximum=0;
    let nosize=5;
    let output;
    for (let no=0;no<noSize;no++){
        output=Math.floor(Math.random()*1000)
        if(100<output<1000){
            if (output >maximum)
             maximum=output;
            else 
            minimum=output;
        }else console.log("No. are not valid")
    }
    console.log(maximum);
    console.log(minimum);

    
    

    