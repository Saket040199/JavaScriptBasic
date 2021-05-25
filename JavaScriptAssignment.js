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