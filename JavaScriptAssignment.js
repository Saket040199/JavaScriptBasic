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

    //Selection UC8
    let a=3;
    let b =15;
    let c =6;
    let value1 = a+b*c;
    let value2 = a%b+c;
    let value3 = c+a/b;
    let value4 = a*b+c;
    
    if(value1 > value2 && value1 > value3 && value1 > value4){
        console.log("Max: "+"a+b*c = "+value1);
    }else if(value2> value1 && value2 > value3 && value2 > value4){
        console.log("Max: "+"a%b+c = "+value2);
    }else if(value3 > value1 && value3 > value2 && value3 > value4){
        console.log("Max: "+"c+a/b= "+value3);
    }else {
        console.log("Max: "+"a*b+c= "+value4);
    }

    if(value1 < value2 && value1 < value3 && value1 < value4){
        console.log("Min: "+"a+b*c= "+value1);
    }else if(value2 < value1 && value2 < value3 && value2 < value4){
        console.log("Min: "+"a%b+c= "+value2);
    }else if(value3 < value1 && value3 < value2 && value3 < value4){
        console.log("Min: "+"c+a/b= "+value3);
    }else {
        console.log("Min: "+"a*b+c= "+value4);
    }

    //Selection Switch UC1
    function numCheck(num){
        switch(num){
            case 1: console.log("ONE");
             break;
            case 2: console.log("TWO");
             break;
            case 3: console.log("THREE");
             break;
            case 4: console.log("FOUR");
             break;
            case 5: console.log("FIVE");
             break;
            case 6: console.log("SIX");
             break;
            case 7: console.log("SEVEN");
             break;
            case 8: console.log("EIGHT");
             break;
            case 9: console.log("NINE"); 
            break;
            default: console.log("Invalid Number");
        }
    }
    numCheck(7);
    numCheck(2);
    numCheck(420);

    //Switch UC2
    function weekCheck(day){
        switch(day){
            case 7: console.log("Sunday"); break;
            case 1: console.log("Monday"); break;
            case 2: console.log("Tuesday"); break;
            case 3: console.log("Wednesday"); break;
            case 4: console.log("Thursday"); break;
            case 5: console.log("Friday"); break;
            case 6: console.log("Saturday"); break;
            default: console.log("No Such Day");
        }
    }
    weekCheck(7);
    weekCheck(2);
    weekCheck(24);

    //Switch UC3
    function unitCheck(num){
        switch(num){
            case 1: console.log("One"); break;
            case 10: console.log("Ten"); break;
            case 100: console.log("Hundred"); break;
            case 1000: console.log("Thousand"); break;
            case 10000: console.log("Ten Thousand"); break;
            default: console.log("Invalid Number");
        }
    }
    unitCheck(1);
    unitCheck(365);
    unitCheck(10000);
    
    //Switch UC4
    function unitConversion(input,value){
        switch(input){
            case 1: console.log("Feet To Inch: "+value+" ft = "+(value*12)+" in"); break;
            case 2: console.log("Feet To Metre: "+value+" ft = "+(value*0.3048)+" m"); break;
            case 3: console.log("Inch To Feet: "+value+" in = "+(value/12)+" ft"); break;
            case 4: console.log("Metre To Feet: "+value+" m = "+(value*3.28084)+" ft"); break;
            default: console.log("Invalid Number");
        }
    }
    unitConversion(1,24);
    unitConversion(2,24);
    unitConversion(3,24);
    unitConversion(4,24);

    //ForLoop UC1
    function givenExponential(n){
        let value=2;
        for (let i = 1; i <= n; i++) {
            console.log("2^" + i + " = " + value);
            value *= 2;
        }    
    }
    givenExponential(3);
    givenExponential(8);
    givenExponential(6);

    //ForLoop UC2
    function getHarmonicSum(n){
        let sum=0;
        for (var i = 1; i <= n; i++) {
            sum += (1/i);
        }
        console.log(n+"th Harmonic sum =" + sum);
    }
    getHarmonicSum(4);
    getHarmonicSum(8);
    getHarmonicSum(12);
    
    //ForLoop UC3
    function checkPrime(num){
        let primeFlag=true;
        for (let i = 2; i < num/2; i++) {
            if (num % i == 0) {
                console.log(num+" is NOT a Prime Number");
                primeFlag=false;
                break;
            }
        }
        if (num>1 && primeFlag){
            console.log(num+" is a Prime Number");
        }
    }
    checkPrime(9);
    checkPrime(11);
    checkPrime(57);

    //ForLoop UC4
    function getPrime(num){
        for (let i = 3; i < num; i++) {
            let primeFlag=true;
            for (var j = 2; j < i; j++){
                if (i % j == 0) {
                    primeFlag=false;
                    break;
                }
            }
            if(primeFlag) console.log(i+" is a Prime Number");
        }
    }
    getPrime(9);
    getPrime(18);
    getPrime(21);

    //ForLoop UC5
    function getFactorial(num){
        let product=1;
        for (let i = 1; i <= num; i++) {
            product=product*i;
        }
        console.log(num+"! = "+product);
    }
    getFactorial(5);
    getFactorial(9);
    
    //ForLoop UC6
    function getPrimeFactors(num) {
        for (let i = 2; i <= num; i++) {
            while (num % i == 0) {
                console.log(i+" is a Prime Factor");
                num = num / i;
            }
        }
    }
    getPrimeFactors(5);
    getPrimeFactors(9);
    getPrimeFactors(14);

    //While UC1
    function getPowerSeries(n){
        let prod = 1;
        let count=0;
        while (prod <= 256 && count<=n) {
            console.log("2^"+count+"="+prod);
            prod =prod*2;
            count++;
        }
    }
    getPowerSeries(4);
    getPowerSeries(7);
    getPowerSeries(14);

    //While UC2
    let max=100;
    let min=1;
    let num=Math.floor(Math.random()*100)+1;
    console.log("Generated number: "+num);
    let mid
    do{
       mid=Math.floor(((min+max)/2));
       if(num<mid){
           max=mid;
           console.log(num+" is less than "+mid);
       }else if(num>mid){
          min=mid;
          console.log(num+" is more than "+mid);
       }
    }while(num!=mid);
    console.log("Found "+mid);

    //While UC3
    let headCount=0;
    let tailCount=0;
    do{
       let coin=Math.floor(Math.random()*10) % 2;
       if(coin==0) headCount++;
       else tailCount++;
    }while(headCount<11 && tailCount<11);
    console.log(headCount>tailCount?"Heads Win":"Tails Win");
    console.log("No of heads= "+headCount);
    console.log("No of tails= "+tailCount);

    //While UC4
    let money=100;
    let betsPlaced=0;
    let winCount=0;
    do{
       betsPlaced++;
       let bet=Math.floor(Math.random()*10) % 2;
       if (bet==1){
           money++; winCount++;
       }else{
           money--;
       }
    }while(money>0 && money<200);
    console.log("You have Rs "+money+" in the end");
    console.log("You won "+winCount+" out of "+betsPlaced+" bets");

    //Function UC1
    function getTemp(input,temp){
        let convertedTemp=0;
        switch(input){
            case "degreeC":{
                console.log("Converting to Fahrenheit");
                convertedTemp=(temp*(9/5)) +32;
                console.log(temp+" deg C = "+convertedTemp+" degF");
                break;
            }
            case "degreeF":{
                console.log("Converting to Celcius");
                convertedTemp=((temp-32)*(5/9));
                console.log(temp+" deg F = "+convertedTemp+" degC");
                break;
            }
        }
    }
    getTemp("degreeC",Math.floor(Math.random()*100));
    getTemp("degreeF",Math.floor((Math.random()*181)+32));

    //Function UC2
    function checkPalindrome(num1,num2){
        let revDigits=0;
        let num=num1;
        while(num>0){
            let digit = num%10;
            revDigits = revDigits*10 +digit;
             num=Math.floor(num/10);
        }
        if(revDigits == num2) 
            console.log(num1+" and "+num2+" are Palindromes");
        else
            console.log(num1+" and "+num2+" are NOT Palindromes");
    }
    checkPalindrome(256,652);
    checkPalindrome(141,414);
    checkPalindrome(404,404);

    //Function UC3
    function checkPrime(num){
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log(num+" is NOT a Prime Number");
                return false;
            }
        }
        if (num>1){
            console.log(num+" is a Prime Number");
            return true;
        }
    }
    
    function getPalindrome(num){
        let revDigits=0;
        let number=num;
        while(num>0){
            let digit = num%10;
            revDigits = revDigits*10 +digit;
            num=Math.floor(num/10);
        }
        console.log("The palindrome of "+number+" is "+revDigits);
        return revDigits;
    }
    
    function main(num){
        let PrimeFlag=checkPrime(num);
        if(PrimeFlag){
            let palindrome=getPalindrome(num);
            checkPrime(palindrome);
        }
    }
    main(17);
    main(22);
    main(23);

 //Array In JavaScript 

//UC1
let numArray=new Array();
for (var i=1;i<=10;i++){
    let random=(Math.floor(Math.random() * 900)+100);
    numArray.push(random);
}
console.log("Selected Array= ");
console.log(numArray);
let firstLargest=numArray[0];
let secondLargest=numArray[0];
let firstSmallest=numArray[0];
let secondSmallest=numArray[0];
for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = numArray[i];
    }else if (numArray[i] > firstLargest && numArray[i] != firstLargest) {
        secondLargest = numArray[i];
    }
    if (numArray[i] < firstSmallest) {
        secondSmallest = firstSmallest;
        firstSmallest = numArray[i];
    } else if (numArray[i] < secondSmallest && numArray[i] != firstSmallest) {
        secondSmallest = numArray[i];
    }
}
console.log("Second Largest Element: "+secondLargest);
console.log("Second Smallest Element: "+secondSmallest);

//Array UC2
function getPrimeFactors(num) {
    let number=num;
    let factors=new Array();
    for (var i = 2; i <= num; i++) {
        while (num % i == 0) {
            factors.push(i);
            num = num / i;
        }
    }
    console.log("The Prime Factors of "+number+" are:");
    console.log(factors);
}
getPrimeFactors(5);
getPrimeFactors(10);
getPrimeFactors(14);

//Array UC3
let intArray=[1,2,-5,4,3,-3];
let triplet=new Array();
let output1=new Array();
for(var x=0;x<intArray.length;x++){
    for(var y=x;y<intArray.length;y++){
        for(var z=y;z<intArray.length;z++){
            if(intArray[x]+intArray[y]+intArray[z]==0){
                triplet.push(intArray[x],intArray[y],intArray[z]);
                output1.push(triplet);
                triplet = [];
            }
        }
    }
}
console.log("The triplets are: ");
console.log(output1);

//Array UC4
function checkPalindrome(num){
    let revDigits=0;
    let number=num;
    while(num>0){
        let digit = num%10;
        revDigits = revDigits*10 +digit;
        num=Math.floor(num/10);
    }
    if(revDigits == number) return true;
    else return false;
}

let newArray=new Array();
for(var i = 10; i <= 100; i++){
    if(checkPalindrome(i)) newArray.push(i);
}
console.log("The Repeated digits between 0-100 are: ");
console.log(newArray);

//Map In JavaScript

//UC1
function checkBreakCond(diceMap){
    let rollCount=0;
    let flag=false;
    for (var i=1;i<=6;i++){
        rollCount=diceMap.get(i);
        if(rollCount==10){
            flag = true;
            break;
        }
        flag = false;
    }
    return flag;
}

let getMaxFlag=false;
let diceMap=new Map();
for (var i=1;i<=6;i++){
    diceMap.set(i,0);
}
console.log("Generating Starter Map: ");
console.log(diceMap);
let roll=0;
do{
    roll = Math.floor((Math.random()*6)+1);
    let rollCount=diceMap.get(roll);
    diceMap.set(roll,rollCount+1);
    getMaxFlag=checkBreakCond(diceMap);
}while(!getMaxFlag);
console.log("Map at end Condition:");
console.log(diceMap);
console.log("Got max value:10, for number "+roll);

let minCount=10;
let min1=10;
for (var i=1;i<=6;i++){
    let rollCount=diceMap.get(i);
    if (rollCount<minCount){
        minCount=rollCount;
        min1=i;
    }
}
console.log("Got min value:"+minCount+", for number "+min1);