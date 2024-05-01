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

function displayLibrary(library) {
  const libraryContainer = document.getElementById("library");

  for(let i = 0; i < library.length; i++) {
    const bookElement = document.createElement("div");
    bookElement.innerText = library[i].title;
    libraryContainer.append(bookElement);
  }
}

console.log(myLibrary);
newBook = new Book("Maze Runner", "David", 300, true);
addBookToLibrary(newBook, myLibrary);
addBookToLibrary(new Book("Harry Potter", "J.K Rowlings", 250, false), myLibrary);
addBookToLibrary(new Book("1984", "George Orwell", "473", true), myLibrary);
console.log(myLibrary);

displayLibrary(myLibrary);
