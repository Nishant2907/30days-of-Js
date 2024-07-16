// Day 4

// Activity 1: For Loop
// Task 1: print 1 to 10
let i = 1
for (i=1;i<=10;i++){
    console.log(i);
}
// Task 2: multiplication table of 5
let j = 1
for (j=1;j<=10;j++){
    console.log(5*j);
}

// Activity 2: While Loop
// Task 3: sum of numbers from 1 to 10 using a while loop.
let k = 1
let sum = 0
while(k<=10){
    sum += k
    k++
}
console.log(sum);

// Task 4: print numbers from 10 to 1 using a while loop.
let l = 1
while(l<=10){
    console.log(l);
    l++;
}

// Activity 3: Do…While Loop
// Task 5: print 1 to 5 using a do...while loop.
let m = 1
do {
    console.log(m);
    m++
} while (m<=5)

// Task 6: calculate factorial of a number using a do...while loop.
let fact = 1
do {
    fact *=m
    m++;
} while (m<=5);
console.log(fact);



// Activity 4: Nested Loops
// Task 7: print a pattern using nested for Loop
for (let n = 1; n <= 5; n++) {
    let pattern = ''
    for (let o = 1; o <= n; o++) {
        pattern += '*'
    }
    console.log(pattern);
}


// Activity 5: Loop Control Statements
// Task 8: print number 1 to 10, skip 5 using continue
let p
for(p=1;p<=10;p++){
    if (p == 5){
        continue
    }
    console.log(p);
}

// Task 9: print number 1 to 10, stop loop at 7 using break
for(let i=1;i<=10;i++){
    if (i == 7){
        break
    }
    console.log(i);
}