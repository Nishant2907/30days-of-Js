// Day 6

// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "Harry Potter", 
    author:"J.K. Rowling",
    year: 1997
}
console.log(book);
// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book = {
    title: "Harry Potter", 
    author:"J.K. Rowling",
    year: 1997,
    bookInfo: function(){
    return `${this.title} by ${this.author}`;
}
}
console.log(book.bookInfo());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.year = 2000;
console.log(book);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "Central Library",
    books: [book]
}
console.log("library: ",library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("library name: ",library.name);
console.log("library books: ",library.books);

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book = {
    title: "Harry Potter", 
    author:"J.K. Rowling",
    year: 1997,
    bookInfo: function(){
    return `${this.title} by ${this.author}`;
}
}
console.log(book.bookInfo());

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let val in book) {
    if (book.hasOwnProperty(val)) {
        console.log(`${val}: ${book[val]}`);
    }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

