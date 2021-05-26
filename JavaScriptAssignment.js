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

    //UC4
    let coin=0;
    coin = Math.floor(Math.random()*10)%2;
    if(coin == 1){
        console.log("Head")
    }else
    console.log("Tail")

    //UC3
    function checkLeapYear(year){
     if
         ((year%400==0) || (year %4 ==0 && year % 100!==0))
    console.log(year + " is a leap year");
      else 
    console.log(year + " is not a leap year");
    }
    checkLeapYear(2006);
    checkLeapYear(2024);
    

    //UC2
    function checkdateandmonth(date){
        if((date >= new Date("March 20")) && (date <= new Date("June 20")))
        console.log("true")
        else
        console.log("false")
    }
    checkdateandmonth(new Date("May 26"))
    checkdateandmonth(new Date("January 04"))

    //Seletion UC5
    let number=Math.floor(Math.random()*10)
    if(number == 1)
    console.log("One")
    else if(number == 0)
    console.log("Zero")
    else if(number == 2)
    console.log("Two")
    else if(number == 3)
    console.log("Three")
    else if(number == 4)
    console.log("Four")
    else if(number == 5)
    console.log("Five")
    else if(number == 6)
    console.log("Six")
    else if(number == 7)
    console.log("Seven")
    else if(number == 8)
    console.log("Eight")
    else 
    console.log("Nine")

    //Selection UC6
    function weekDay(day){
        if(day == 1)
        console.log("Monday")
        else if(day == 2)
        console.log("Tuesday")
        else if(day == 3)
        console.log("Wednesday")
        else if(day == 4)
        console.log("Thrusday")
        else if(day == 5)
        console.log("Friday")
        else if(day == 6)
        console.log("Saturday")
        else if(day == 7)
        console.log("Sunday")
        else
        console.log("Not valid")
    }
    weekDay(7);
    weekDay(3);

    //Selection UC7
    function numberUnitCheck(num){
        if (num ==1)
        console.log("One's digit")
        else if (num ==10)
        console.log("Ten's digit")
        else if (num ==100)
        console.log("Hundred's")
        else if (num ==1000)
        console.log("Thousand's")
        else if (num ==10000)
        console.log("Ten Thousand's")
        else if (num ==100000)
        console.log("Lakh's")
        else
        console.log("Not a valid number")
    }
    numberUnitCheck(1)
    numberUnitCheck(5000)