// Day 5

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkoddeven(num) {
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
    return num * num;
}

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function max(num1, num2) {
    if (num1 > num2) {
        console.log('Maximumum is', num1);
    } else { 
        console.log('Maximumum is', num2);
    }
    return square;
}

// Task 4: Write a function expression to concatenate two strings and return the result.
function concat(string1, string2) {
    return string1 + string2;
}

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum= (num1, num2) => {
    return num1 + num2;
}

 // Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
 const checkChar = (string, char) => {
      return string.includes(char);
 }

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (num1, num2 = 1) => {
    return num1 * num2;
}

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet = (name, age = 20) => {
    return `Hello ${name}, you are ${age} years old`;
}

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const callFunc = (func, num) => {
    for (let i = 0; i<=num; i++) {
        func();
    }
}

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const hof = (func1, func2, num) =>{
    return func2(func1(num));
}

checkoddeven(3);
console.log(square(4));
max(5, 3);
console.log(concat("Hello", " World"));
console.log(sum(5, 7));
console.log(checkChar("hello", 'e'));
console.log(product(5, 2));
console.log(greet("John"));
callFunc(() => console.log("Hello from callFunc"), 2);
console.log(hof(square, sum, 3));