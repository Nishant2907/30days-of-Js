//  Day 11

// Tasks/Activities:
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseOne = new Promise((resolve, reject) => {
    setTimeout (function(){
        resolve("Promise resolved")
    }, 2000)
})
// • Task 2d: Create a promise that rejects with an error message after a 2-second timeout and handle the error using •catch().
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout (function(){
        reject("Promise rejected")
    }, 2000)
})

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
};

fetchData()
    .then((message) => {
        console.log(message);
        return fetchData();
    })
    .then((message) => {
        console.log(message);
        return fetchData();
    })
    .then((message) => {
        console.log(message);
    });

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const promiseFour = new Promise((resolve, reject) => {
    setTimeout (function(){
        resolve("Promise resolved")
    }, 2000)
})
async function promiseFourFunction(){
    const result = await promiseFour
    console.log(result)
}

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function promiseFiveFunction(){
    try{
        const result = await promiseFour
        console.log(result)
    } catch(error){
        console.log(error)
    }
}

// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const result = fetch("https://pokeapi.co/api/v2/pokemon/ditto")

const data = result.then(response => response)
console.log(data)


// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchAPI = fetch("https://pokeapi.co/api/v2/pokemon/ditto")

async function fetchData(){
    const data = fetchAPI.then(response => response)
    console.log(data)
}

// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 1000));
const promise4 = new Promise((resolve) => setTimeout(() => resolve("Promise 4 resolved"), 2000));

Promise.all([promise3, promise4])
    .then((values) => {
        console.log(values);
    });

// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise5 = new Promise((resolve) => setTimeout(() => resolve("Promise 5 resolved first"), 500));
const promise6 = new Promise((resolve) => setTimeout(() => resolve("Promise 6 resolved first"), 100));

Promise.race([promise5, promise6])
    .then((value) => {
        console.log(value);
    });