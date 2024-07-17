// Day 5

// 1. Even or Odd Function Script
function isEvenOrOdd(number) {
    const result = number % 2 === 0 ? 'Even' : 'Odd';
    console.log(`${number} is ${result}`);
}

// 2. Square Calculation Function Script
function square(number) {
    return number * number;
}

// 3. Concatenation Function Script
const concatenate = function(string1, string2) {
    return string1 + string2;
};

// 4. Sum Calculation Arrow Function Script
const sum = (num1, num2) => num1 + num2;

// 5. Higher-Order Function Script
function applyFunctionMultipleTimes(func, num, value) {
    let result = value;
    for (let i = 0; i < num; i++) {
        result = func(result);
    }
    return result;
}

// Example usage
console.log('Square of 4:', square(4)); // Logs: Square of 4: 16
console.log('Concatenation of "Hello" and "World":', concatenate("Hello", " ")); // Logs: Concatenation of "Hello" and "World": Hello World
console.log('Sum of 5 and 3:', sum(5, 3)); // Logs: Sum of 5 and 3: 8
console.log('Apply square twice on 2:', applyFunctionMultipleTimes(square, 2, 2)); // Logs: Apply square twice on 2: 16
isEvenOrOdd(3); // Logs: 3 is Odd