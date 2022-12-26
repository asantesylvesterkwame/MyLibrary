let addBookButton = document.getElementById('AddBookBtn');
let popUpCard = document.getElementById('popup-card');
let bookPagesValue = document.getElementById('bookPages').value;
let checkBox = document.getElementById('checkbox').value;
let body = document.body
let popUpCloseBtn = document.getElementById('popUpCloseBtn');
let submitBtnValue = document.getElementById('submit').value;
let submitBtn = document.getElementById('submit');
let cardBody = document.getElementById('cardBody');
let mainLogo = document.getElementById('mainLogo');
let cardInfoTitle = document.getElementById('cardInfoTitle');
let cardInfoAuthor = document.getElementById('cardInfoAuthor');
let cardInfoPages = document.getElementById('cardInfoPages');
let removeBookBtn = document.getElementById('removeBook');


addBookButton.addEventListener('click', function () {
    popUpCard.style.display = 'block';
   
popUpCloseBtn.addEventListener('click', function () {
    popUpCard.style.display = 'none';
    
});


function displayBookInfo(e) {
    e.preventDefault();
    cardBody.style.cssText = 'display: block;';
    popUpCard.style.cssText = 'display: none;';
    let bookTitleValue = document.getElementById('bookTitle').value;
    cardInfoTitle.innerHTML = bookTitleValue;
    
    let bookAuthorValue = document.getElementById('bookAuthor').value;
    cardInfoAuthor.innerHTML = bookAuthorValue; 
    
    let bookPagesValue = document.getElementById('bookPages').value;
    cardInfoPages.innerHTML = bookPagesValue;
    
    let checkBoxValue = document.getElementById('checkbox').value;

    function deleteBook() {
        cardBody.style.cssText = 'display: none;';
    }
    removeBookBtn.addEventListener('click', deleteBook);
}

submitBtn.addEventListener('click', displayBookInfo);
});




