// array syntax

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan"];

// access array item
array[<number>]

// example
iceCreamFlavors[3] // Pistachio

// to change a value
iceCreamFlavors[4] = "Butter Pecan"; //Changes "Neapolitan" to "Butter Pecan"

//add more value
iceCreamFlavors.push("Mint Chip");
 // to count array items
 iceCreamFlavors.length // 6 flavors, because you recently added "Mint Chip"
 // to remove or delete an itemslet iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
delete iceCreamFlavors[iceCreamFlavors.length-1];
console.log(iceCreamFlavors[length-1]) // undefined
// iterate items on arrays

//for loops
let i = 0;
//condition
i < 10;
// increment expressions
i++;
i +=2; // this would work too and increases by 2
// condition
for (let i = 0; i < 10; i++ ) {
  console.log(i);
}

//while loops
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
//add or remove itemsletlet iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} // Ends when all flavors are printed
// for each() loops

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number)); // 1 2 3 4 5
//loop construct
let numbers = [1, 2, -1, 4, 5];
for(let i = 0; i< numbers.length; i++>) {
  if (numbers[i] < 0) {
    break;
  }
  console.log(numbers[i]);
}
// find an item using()
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
iceCreamFlavors.find(flavor => flavor === "Chocolate") // "Chocolate"

let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
// functio that returns an items
iceCreamFlavors.filter(flavor => flavor.type === "Chocolate") // [{ name: "Chocolate", type: "Chocolate" }, { name: "Neapolitan", type: "Chocolate"}, { name: "Mint Chip", type: "Chocolate"}]
//check condition using some

iceCreamFlavors.some(flavor => flavor.type === "Nuts") // true

iceCreamFlavors.filter(flavor => flavor.type !== "Nuts") // returns everything except for Pistachio.
// projection mapping eg adding price property
let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
iceCreamFlavors.map(flavor => {
  flavor.price = 1;
  return flavor;
}) // every item now has a new property price: 1

//aggregations
let sales = [{
 date : '2021-05-01',
 amount: 2
},
{
 date : '2021-05-01',
 amount: 1
}
// and so on...
]

// for loop to sum them together
let sum = 0;
for( let i =0; i< sales.length; i++) {
  sum += sales[i].amount; 
}
// reduce () method
sales.reduce((acc, curr) => acc + curr.amount, 0);
