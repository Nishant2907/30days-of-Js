//  Day 13

import { add, person, multiple, subtract } from './module.js';
import * as Meow from './module.js';
import divide from './module.js';
import _ from 'lodash'; 
import axios from 'axios'; 
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
console.log("Sum",add(2, 3)); // Output: 5

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
console.log("Person says:",person.greet());

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
console.log("Multiple",multiple(2, 3));
console.log("Subtract",subtract(2, 3));

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
console.log("Divide",divide(6, 2));

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
console.log("Name",Meow.name);
console.log("Age",Meow.age);
console.log(Meow.deets("developer"));

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const arr = [1, 2, 3]; 
console.log(_.reverse(arr));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then(response => console.log("Pokemon is",response.data.forms[0].name));
