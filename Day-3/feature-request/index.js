// Day 3

// Feature Request 1: Number Check Script
let num = 25
if (num > 0) {
    console.log("Positive")
} else if (num < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

// Feature Request 2: Voting Eligibility Script
let age = 16
if (age >= 18) {
    console.log("Eligible for voting")
} else {
    console.log("Not eligible for voting")
}

// Feature Request 3: Day of the Week Script
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

// Feature Request 4: Grade Assignment Script
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

// Feature Request 5: Leap Year Check Script
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