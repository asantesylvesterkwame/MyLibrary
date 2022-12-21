let addBookButton = document.getElementById('AddBookBtn');
let popUpCard = document.getElementById('popup-card');

addBookButton.addEventListener('click', function () {
    popUpCard.style.display = 'block';
});

let popUpCloseBtn = document.getElementById('popUpCloseBtn');
popUpCloseBtn.addEventListener('click', function () {
    popUpCard.style.display = 'none';
});

let bookTitle = document.getElementById('bookTitle').value;
console.log(bookTitle);

