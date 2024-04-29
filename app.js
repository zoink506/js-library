const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book, library) {
  library.push(book);
}

console.log(myLibrary);
newBook = new Book("Maze Runner", "David", 300, true);
addBookToLibrary(newBook, myLibrary);
console.log(myLibrary);
