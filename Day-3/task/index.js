// Day 3

// Task 1: Check if number is positive, negative, or zero
let num = 25
if (num > 0) {
    console.log("Positive")
} else if (num < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

// Task 2: Check if person is eligible to vote 
let age = 16
if (age >= 18) {
    console.log("Eligible for voting")
} else {
    console.log("Not eligible for voting")
}

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10
let num2 = 20
let num3 = 30

if (num1 > num2) {
    if (num1 > num3) {
        console.log("Num1 is largest")
    }
} else if (num2 > num1) {
    if (num2 > num3) {
        console.log("Num2 is largest")
    }
} else {
    console.log("Num3 is largest")
}

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 3
switch (day) {
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    case 7:
        console.log('Today is Sunday')
        break
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let grade = 'C'

switch (grade) {
    case 'A':
        console.log('Grade is A')
        break
    case 'B':
        console.log('Grade is B')
        break
    case 'C':
        console.log('Grade is C')
        break
    case 'D':
        console.log('Grade is D')
        break
    case 'F':
        console.log('Grade is F')
        break
}

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let nums = 15
let result = nums % 2 === 0 ? "Even" : "Odd"
console.log(result)

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2001
if (year % 4 == 0) {
    if (year % 400 == 0 || year % 100 != 0) {
        console.log("Leap Year")
    } else {
        console.log("Not a Leap Year")
    }
} else {
    console.log("Not a Leap Year")
}

