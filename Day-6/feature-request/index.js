// Day 6 

// 1. Array Manipulation Script
let arr = [];
arr.push(1);
arr.push(2);
arr.unshift(0);
console.log(arr);
arr.pop();
console.log(arr)
arr.shift();
console.log(arr);

// 2. Array Transformation Script
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2); 
console.log(doubled); 
let evens = numbers.filter(num => num % 2 === 0); 
console.log(evens); 
let sum = numbers.reduce((acc, num) => acc + num, 0); 
console.log(sum);

// 3. Array Iteration Script
let fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}
fruits.forEach(fruit => console.log(fruit)); 

// 4. Two-dimensional Array Script
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]);
matrix[1][1] = 10; 
console.log(matrix); 