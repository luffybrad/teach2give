// 📝 Practical Questions
// 1. Declaring Variables
// 1. Declare a variable age using let and assign it the value 25.
let age = 25;

// 2. Declare a variable schoolName using const and assign it "Greenwood High".
const schoolName = "Greenwood High";

// 3. Declare an empty array called studentsList.
let studentsList = [];

// 4. What is the difference between let, const, and var when declaring variables?
let answ = [
  { const: "Accessible only to the block in which they're declared" },
  { let: "Accessible only within their defining block" },
  { var: "Accessible throughtout the function in which it's declared" },
];

// 2. Naming Conventions
// Which of the following variable names is invalid?
// let $price = 100;
// let 1stPlace = "John";
// let _score = 89;
let userName = "Alice";

// 5.
// Why is the following variable name incorrect?
// const #taxRate = 0.16;
answ = "The constant name is starting with a symbol";

// 6.
// Rewrite this variable name to follow best practices:
// let MyvariableNAME = "JavaScript";
let myVariableName = "JavaScript";

// 3. Identifying Data Types
// What will be the output of the following?
// console.log(typeof "Hello");
answ = "string";

// console.log(typeof 99);
answ = "number";

// console.log(typeof true);
answ = "boolean";

// console.log(typeof undefined);
answ = "undefined";

// 8.
// Identify the data types in this array:
// let data = ["Kenya", 34, false, { country: "USA" }, null];
answ = ["string", "number", "boolean", "object", "null"];

// 9. How do you define a BigInt in JavaScript? Provide an example.
let bigInt = BigInt(0);

// 4. Objects & Arrays
// 11. Create an object person with properties name, age, and city.
let person = {
  name: "",
  city: "",
  age: 0,
};

// 12. Add a new property email to the person object.
Object.defineProperty(person, "email", { value: "" });

// 13. Declare an array fruits with three fruit names.
let fruits = ["apple", "banana", "lemon"];

// 14. Access the second item in the fruits array.
answ = fruits[1];

// 5. Type Coercion
// 15. What will be the output of the following?
// console.log("5" + 2);
answ = "52";

// console.log("5" - 2);
answ = 3;

// 16. Convert the string "100" into a number.
answ = Number("100");

// 17. Convert the number 50 into a string.
answ = (50).toString();

// 18. What will be the result of this operation?
// console.log(5 + true);
answ = 50;
