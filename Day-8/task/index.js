// Day 8

// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Nishant"
let age = 23
console.log(`My name is ${name} and I am ${age} years old.`)
// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`My name is ${name} and I am ${age} years old.
I am a student of B.Tech.
I am a Product developer.`)

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const num = [1, 2, 3, 4, 5];
const [first, second] = num;
console.log(`First element: ${first}, Second element: ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray, 4, 5, 6];
console.log("Copied Array:", copiedArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const numbers = [1, 2, 3];
const sum = (a, b, c) =>{
    return a + b + c
};
console.log("Sum:",sum(...numbers));

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const product = (a, b = 1) =>{
    return a * b
};
console.log("Product:",product(5));
console.log("Product:",product(5,2));

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let person = {
    name: "Nishant",
    age: 23,
    occupation: "Product Developer",
    sayHello: function(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
};
console.log(person.sayHello());

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let key = "occupation";
let person1 = {
    name: "Nishant",
    age: 23,
    [key]: "Product Developer"
};
console.log(person1);