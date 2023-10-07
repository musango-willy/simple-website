// boolean
let myTrueBool = true;
let myFalseBool = false;
// if statement
if (condition){
    //Condition was true. Code in this block will run.
}

let isTrue = true;
if (isTrue) {
  // run code if true
}

if (true) {
  // run code if true
}
// logocal operator
let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}

// if -else statement
let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice) {
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
} else{
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}

//  conditions and decisions with logical operators
let isHoliday = true;
let isMember = true;
let hasDiscount = isHoliday || isMember;
// if -else  statement
let currentMoney= 800;
let laptopPrice = 1000;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
// negation operator
if (!condition) {
    // runs if condition is false
  } else {
    // runs if condition is true
  }
  // ternary operator syntax
  let variable = condition ? <return this if true> : <return this if false></return>
   
   let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;

let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}