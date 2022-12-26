let addBookButton = document.getElementById('AddBookBtn');
let popUpCard = document.getElementById('popup-card');
let bookPagesValue = document.getElementById('bookPages').value;
let checkBox = document.getElementById('checkbox');
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


// function displayBookInfo(e) {
//     e.preventDefault();
//     // cardBody.style.cssText = 'display: block;';
//     // popUpCard.style.cssText = 'display: none;';
//     let cardBodyMain = document.getElementById('card-body')
//     let bookCardInfoDiv = document.createElement('div');
//     bookCardInfoDiv.setAttribute('class', 'card text-center');
//     bookCardInfoDiv.setAttribute('style','display: none;');
//     cardBodyMain.appendChild(bookCardInfoDiv);
    
    
//     let bookTitleValue = document.getElementById('bookTitle').value;
//     cardInfoTitle.innerHTML = bookTitleValue;
    
//     let bookAuthorValue = document.getElementById('bookAuthor').value;
//     cardInfoAuthor.innerHTML = bookAuthorValue; 
    
//     let bookPagesValue = document.getElementById('bookPages').value;
//     cardInfoPages.innerHTML = bookPagesValue;
    
//     let checkBoxValue = document.getElementById('checkbox').value;

//     function deleteBook() {
//         cardBody.style.cssText = 'display: none;';
//     }
//     removeBookBtn.addEventListener('click', deleteBook);

//     let unreadBtn = document.getElementById('unreadBtn');
// checkBox.addEventListener('change', function (e) {
//     if (checkBox.checked) {
//         unreadBtn.style.cssText = 'background-color: green;'
//         unreadBtn.innerHTML = 'Read'
//     }else{
//         unreadBtn.style.cssText = 'background-color: rgb(184, 163, 48);'
//         unreadBtn.innerHTML = 'Unread'

//     }

// }, false)
// }



// submitBtn.addEventListener('click', displayBookInfo);
 });

function addBookInfo(e) {
    e.preventDefault();
    let cardBodyMain = document.getElementById('card-body');
    

    let bookCardInfoDiv = document.createElement('div');
    bookCardInfoDiv.setAttribute('class', 'card text-center');
    bookCardInfoDiv.style.cssText = 'display: block;'    
    cardBodyMain.appendChild(bookCardInfoDiv);

    let cardIcon = document.createElement('img');
    cardIcon.setAttribute('src', 'book.png');
    cardIcon.setAttribute('alt', 'Book card Icon');
    cardIcon.style.cssText = 'width: 25%; height: auto;';
    bookCardInfoDiv.appendChild(cardIcon);

    let bookInfoTextDiv = document.createElement('div');
    bookInfoTextDiv.setAttribute('class', 'card-body cardInfoBody');
    bookInfoTextDiv.style.display = 'block';
    bookCardInfoDiv.appendChild(bookInfoTextDiv);

    let bookInfoHeader = document.createElement('h4');
    bookInfoTextDiv.appendChild(bookInfoHeader);
    bookInfoHeader.setAttribute('class', 'card-title');
    let bookTitleValue = document.getElementById('bookTitle').value;
    bookInfoHeader.innerHTML = bookTitleValue;

    let bookInfoAuthor = document.createElement('p');
    bookInfoTextDiv.appendChild(bookInfoAuthor);
    bookInfoAuthor.setAttribute('class', 'card-text');
    let bookAuthorValue = document.getElementById('bookAuthor').value;
    bookInfoAuthor.innerHTML = bookAuthorValue; 

    let bookInfoPages = document.createElement('p');
    bookInfoTextDiv.appendChild(bookInfoPages);
    bookInfoPages.setAttribute('class', 'card-text');
    let bookPagesValue = document.getElementById('bookPages').value;
    bookInfoPages.innerHTML = bookPagesValue;

    let unreadBtn = document.createElement('button');
    bookInfoTextDiv.appendChild(unreadBtn);
    unreadBtn.setAttribute('class', 'btn btn-primary unread');
    unreadBtn.setAttribute('type', 'button');
    unreadBtn.innerHTML = 'Unread';

    let removeBookBtn = document.createElement('button');
    bookInfoTextDiv.appendChild(removeBookBtn);
    removeBookBtn.setAttribute('type', 'button');
    removeBookBtn.setAttribute('class', 'btn btn-primary submit removeBook');
    removeBookBtn.setAttribute('id', 'removeBook');
    removeBookBtn.innerHTML = 'Remove Book';

    




    

    
    


}



submitBtn.addEventListener('click', addBookInfo);
submitBtn.addEventListener('click', function (e) {
    popUpCard.style.display = 'none'
})

