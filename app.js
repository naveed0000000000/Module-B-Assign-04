// qns no 1
// Q1: Convert all elements to their string representation using the map method.

// const arrays = [
//   42,
//   true,
//   "hello,World",
//   { name: "john", age: 25, isStudent: false },
//   false,
//   3.14,
//   "Javascript is fun",
// ];

// let stringArray = arrays.map((element) => String(element));
// console.log(stringArray);

// qns n0 2
// Q2: Filter only number elements using the filter method.
// const arrays = [
//   42,
//   true,
//   "hello,World",
//   { name: "john", age: 25, isStudent: false },
//   false,
//   3.14,
//   "Javascript is fun",
// ];

// let numbersArray = arrays.filter((element) => Number(element));
// console.log(numbersArray);

// qns  no 3
// Q3: Log each element's type to the console (does not return anything) using the forEach method.
// const arrays = [
//   42,
//   true,
//   "hello,World",
//   { name: "john", age: 25, isStudent: false },
//   false,
//   3.14,
//   "Javascript is fun",
// ];

// arrays.forEach((element) => console.log(typeof element));

//qns no 4
//Q4: Sum up only the numbers in the array using the reduce method.
const arrays1 = [
  42,
  true,
  "hello,World",
  { name: "john", age: 25, isStudent: false },
  false,
  3.14,
  "Javascript is fun",
];
// let sum = arrays1.filter((element) => {
//   element === Number;
// });

let sum = arrays1.reduce((total, element) => {
  let elemType = typeof element;

  if (elemType == "number") total += element;

  if (elemType == "object")
    Object.values(element).forEach((v) => {
      if (typeof v == "number") total += v;
    });

  return total;
}, 0);

console.log(sum);

//qns no 5
// Q5: Find the first boolean value in an array using the find method.
// const arrays = [
//   42,
//   true,
//   "hello,World",
//   { name: "john", age: 25, isStudent: false },
//   false,
//   3.14,
//   "Javascript is fun",
// ];
// let firstBoolean = arrays.find((element) => typeof element === "boolean");
// console.log(firstBoolean);

//qns no 6
// Q6: Find the index of the first object in an array using the findIndex method.
// const arrays = [
//   42,
//   true,
//   "hello,World",
//   { name: "john", age: 25, isStudent: false },
//   false,
//   3.14,
//   "Javascript is fun",
// ];
// let firstObjectIndex = arrays.findIndex(
//   (element) => typeof element === "object" && !Array.isArray(element)
// );
// console.log(firstObjectIndex);

//qns no 7
// Q7: Check if the array contains any numbers using the some method.
// const arrays = [
//   42,
//   true,
//   "hello,World",
//   { name: "john", age: 25, isStudent: false },
//   false,
//   3.14,
//   "Javascript is fun",
// ];
// let Numbers = arrays.some((element) => typeof element === "number");
// console.log(Numbers);

//qns no 8
// Q8: Check if all elements are of type string in an array using the every method.
const arrays = [
  42,
  true,
  "hello,World",
  { name: "john", age: 25, isStudent: false },
  false,
  3.14,
  "Javascript is fun",
];

let resultString = arrays.every((element) => typeof element === "string");
console.log(resultString);
