// Day 4

// Number Printing Script
// Using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using while loop
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// Multiplication Table Script
for (let k = 1; k <= 10; k++) {
    console.log(5 * k);
}

// Pattern Printing Script
for (let row = 1; row <= 5; row++) {
    let pattern = '';
    for (let col = 1; col <= row; col++) {
        pattern += '* ';
    }
    console.log(pattern);
}

// Sum Calculation Script
let sum = 0;
let num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log(sum);

// Factorial Calculation Script
let fact = 1;
let numFact = 5;
do {
    fact *= numFact;
    numFact--;
} while (numFact > 0);
console.log(fact);