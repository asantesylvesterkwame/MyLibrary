let myLibrary = [];

function Book(title, author, numberOfPages, readStatus) {
  this.title = title
  this.author = author
  this.numberOfPages = numberOfPages
  this.readStatus = readStatus
}

const bookObject = new Book(prompt('enter the book Title'), prompt('Enter The Book Author'), prompt('Enter The Number of Pages'), prompt('State whether you read it or not'))
myLibrary.push(bookObject);

console.log(myLibrary);

let bookDisplay = document.getElementById('bookDisplay')
let bookAuthor = document.getElementById('bookAuthor')


function addBookToLibrary() {
    for (const i of myLibrary) {
        // bookDisplay.innerHTML = i.title
        // bookAuthor.innerHTML = i.author
        // bookDisplay.innerHTML = i.numberOfPages
        // bookDisplay.innerHTML = i.readStatus
    }
}
addBookToLibrary();

let addBookBtn = document.getElementById('AddBookBtn');

let popUpCard = document.getElementById('popup-card')
addBookBtn.addEventListener('click', function () {
    popUpCard.style.display = 'block';

});