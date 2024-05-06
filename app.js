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
  libraryContainer.innerHTML = "";

  for(let i = 0; i < library.length; i++) {
    const bookElement = document.createElement("div");
    bookElement.innerText = library[i].title;
    libraryContainer.append(bookElement);
  }
}

function getNewBookForm(event) {
  console.log(event);
  const newBookSection = document.getElementById("new-book-section");
  newBookSection.innerHTML = `
    <form id="new-book-form">
      <label for="new-book-title">Book Title</label>
      <input type="text" id="new-book-title" name="new-book-title">
      
      <label for="new-book-author">Book Author</label>
      <input type="text", id="new-book-author" name="new-book-author">

      <label for="new-book-pages">Number of pages</label>
      <input type="number" id="new-book-pages" name="new-book-pages">

      <label for="new-book-read">Has this book been read fully read yet?</label>
      <select name="new-book-read" id="new-book-read">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <input type="submit">
    </form>
  `;

  const newBookForm = document.getElementById("new-book-form");
  newBookForm.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault();
    console.log(convertFormToBook(newBookForm));
  });
}

function convertFormToBook(form) {
  const title = document.getElementById("new-book-title").value;
  const author = document.getElementById("new-book-author").value;
  const pages = document.getElementById("new-book-pages").value;
  const read = document.getElementById("new-book-read").value;

  let valid = true;
  // validations
  if(title.length <= 0 || title.length > 80) {
    console.log(title);
    valid = false;
  } else if(author.length <= 0 || author.length > 80) {
    console.log(author);
    valid = false;
  } else if(pages <= 0 || pages > 5000) {
    console.log(pages);
    valid = false;
  } else if(read !== "yes" && read !== "no") {
    console.log(read);
    valid = false;
  }

  if(valid === true) {
    newBook = new Book(title, author, pages, read === "yes");
    addBookToLibrary(newBook, myLibrary);
    displayLibrary(myLibrary);
  }

  const newBookSection = document.getElementById("new-book-section");
  const newBookButton = document.createElement("button");
  newBookButton.id = "new-book-button";
  newBookButton.innerText = "New Book";
  newBookSection.innerHTML = "";
  newBookSection.append(newBookButton);

  console.log(newBookButton);
  newBookButton.addEventListener("click", getNewBookForm);
}

const firstBookButton = document.getElementById("new-book-button");
console.log(firstBookButton);
firstBookButton.addEventListener("click", getNewBookForm);

console.log(myLibrary);
addBookToLibrary(new Book("Maze Runner", "David", 300, true), myLibrary);
addBookToLibrary(new Book("Harry Potter", "J.K Rowlings", 250, false), myLibrary);
addBookToLibrary(new Book("1984", "George Orwell", "473", true), myLibrary);
console.log(myLibrary);

displayLibrary(myLibrary);
