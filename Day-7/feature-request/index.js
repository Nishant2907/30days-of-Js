// Day 7

// 1. Book Object Script
// Create a book object
const book = {
    title: "Mickey Mouse",
    author: "Walt Disney",
    year: 1999,
    getInfo: function() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
};

// Log book properties and method result
console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.getInfo());

// 2. Library Object Script
// Create a library object with an array of books
const library = {
    name: "Sarkari Library",
    books: [book],
    address: "Ghaziabad"
};

// Log library details
console.log(library.name);
console.log(library.address);
library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}: ${book.getInfo()}`);
});

// 3. Object Iteration Script
// Iterate over book object properties using for...in loop
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Iterate over book object properties using Object.keys
Object.keys(book).forEach(key => {
    console.log(`${key}: ${book[key]}`);
});

// Iterate over book object values using Object.values
Object.values(book).forEach(value => {
    console.log(value);
});