let myLibrary = [];

function Book(title, author, numberOfPages, readStatus) {
  this.title = title
  this.author = author
  this.numberOfPages = numberOfPages
  this.readStatus = readStatus
}


console.log(myLibrary);




let addBookBtn = document.getElementById('AddBookBtn');

let popUpCard = document.getElementById('popup-card')
addBookBtn.addEventListener('click', function () {
    popUpCard.style.display = 'block';
    
    
});

let submitButton = document.getElementById('submit');

let readStatusCheckBox = document.getElementById('checkbox');

submitButton.addEventListener('click', SubmitBtnFunction)
function SubmitBtnFunction (e) {
    e.preventDefault()
    let bookTitleValue = document.getElementById('bookTitle').value;
    let bookAuthorValue = document.getElementById('bookAuthor').value;
    let bookPages = document.getElementById('bookPages').value;
     

    popUpCard.style.display = 'none'
    let enable = () => {
        if (readStatusCheckBox.checked) {
            return 'Read';
        } else {
            return 'Unread';
        }
    }
    enable();
    let myBookInfo = new Book(bookTitleValue, bookAuthorValue, bookPages,readStatusCheckBox);

    myLibrary.push(myBookInfo);
    console.log(myLibrary);

    
    let bookCardDiv = document.getElementById('card-body');
   

    let bookCardBody = document.createElement('div');
    bookCardBody.style.cssText = 'background-color: silver;';
    bookCardBody.setAttribute('id', 'cardBody');
    bookCardDiv.append(bookCardBody);

    let bookInfoIcon = document.createElement('img');
    bookInfoIcon.setAttribute('class', 'card-img-top');
    bookInfoIcon.setAttribute('src', 'book.png');
    bookInfoIcon.setAttribute('alt', 'Logo');
    bookInfoIcon.style.cssText = 'width: 25%; height: auto;';
    bookCardBody.appendChild(bookInfoIcon);

    let cardInfoBody = document.createElement('div');
    cardInfoBody.setAttribute('class', 'card-body cardInfoBody')
    bookCardBody.appendChild(cardInfoBody);

    let cardInfoTitle = document.createElement('h4');
    cardInfoTitle.setAttribute('class', 'card-title');
    cardInfoTitle.setAttribute('id', 'cardInfoTitle');
    cardInfoBody.appendChild(cardInfoTitle);

    let cardInfoAuthor = document.createElement('p');
    cardInfoAuthor.setAttribute('class', 'card-text');
    cardInfoAuthor.setAttribute('id', 'cardInfoAuthor');
    cardInfoBody.appendChild(cardInfoAuthor);

    let cardInfoPages = document.createElement('p');
    cardInfoPages.setAttribute('class', 'card-text');
    cardInfoPages.setAttribute('id', 'cardInfoPages');
    cardInfoBody.appendChild(cardInfoPages);

    let unreadButton = document.createElement('input');
    unreadButton.setAttribute('class', 'btn btn-primary unread');
    unreadButton.setAttribute('id', 'unreadButton');
    unreadButton.setAttribute('type', 'button');
    cardInfoBody.appendChild(unreadButton);

    let removeBook = document.createElement('input');
    removeBook.setAttribute('class', 'btn btn-primary submit removeBook');
    removeBook.setAttribute('id', 'unreadButton');
    removeBook.setAttribute('type', 'button');
    cardInfoBody.appendChild(removeBook);

    function addBookToLibrary() {
    for (const i of myLibrary) {
        cardInfoTitle.innerHTML = bookTitleValue;
        cardInfoAuthor.innerHTML = bookAuthorValue;
        cardInfoPages.innerHTML = bookPages;
        unreadButton.value = enable();
        removeBook.value = 'Remove Book'
    }
}
addBookToLibrary();

}