// let addBookButton = document.getElementById('AddBookBtn');
// let popUpCard = document.getElementById('popup-card');
// // let bookPagesValue = document.getElementById('bookPages').value;
// // let checkBox = document.getElementById('checkbox');
// let body = document.body
// let popUpCloseBtn = document.getElementById('popUpCloseBtn');
// let submitBtnValue = document.getElementById('submit');
// let submitBtn = document.getElementById('submit');
// let cardBody = document.getElementById('cardBody');
// // let mainLogo = document.getElementById('mainLogo');
// // let cardInfoTitle = document.getElementById('cardInfoTitle');
// // let cardInfoAuthor = document.getElementById('cardInfoAuthor');
// // let cardInfoPages = document.getElementById('cardInfoPages');
// // let removeBookBtn = document.getElementById('removeBook');
// const formElements = document.createElement('form');
// let unreadButton = document.createElement('input');
// let removeBookBtn = document.createElement('button');
// const bookAddPopUp = document.createElement('div');
// const bookTitleInput = document.createElement('input');
// const bookAuthorInput = document.createElement('input');
// const bookPagesInput = document.createElement('input');
// let titleInputDiv = document.getElementById('titleInputDiv');

// addBookButton.addEventListener('click', function () {
//     popUpCard.style.display = 'block';
//     const videoOverlay = document.createElement('div')
//     body.append(videoOverlay);
//     videoOverlay.style.cssText = 'width: 100vw; height: 100vh; background: black; opacity: 50%;'



//     // bookAddPopUp.setAttribute('id','popup-card-div');
//     // bookAddPopUp.setAttribute('class', 'card-body');
//     // popUpCard.appendChild(bookAddPopUp);

//     // const closeButtonDiv = document.createElement('div');
//     // closeButtonDiv.setAttribute('class', 'closeButtonDiv');
//     // bookAddPopUp.appendChild(closeButtonDiv)

//     // const popUpCloseBtn = document.createElement('button');
//     // popUpCloseBtn.setAttribute('type', 'reset');
//     // popUpCloseBtn.setAttribute('id', 'popUpCloseBtn');
//     // popUpCloseBtn.innerHTML = 'X';
//     // closeButtonDiv.appendChild(popUpCloseBtn);

//     // const popUpTitleDiv = document.createElement('div');
//     // popUpCard.appendChild(popUpTitleDiv);
//     // const popUpTitle = document.createElement('h1');
//     // popUpTitleDiv.appendChild(popUpTitle);
//     // popUpTitle.innerText = 'Add New Book';

//     // const lineBreak = document.createElement('br');
//     // popUpCard.appendChild(lineBreak);

//     // const formDiv = document.createElement('div');
//     // popUpCard.appendChild(formDiv);

//     // formDiv.appendChild(formElements);
//     // formDiv.setAttribute('id', 'form-id');
//     // formDiv.setAttribute('class', 'form');
//     // popUpCard.style.cssText = 'padding: 1%;'
//     // const formCard = document.createElement('div');
//     // formCard.setAttribute('class', 'mb-3');
//     // formElements.appendChild(formCard);

//     // bookTitleInput.setAttribute('type', 'text');
//     // bookTitleInput.setAttribute('class','form-control');
//     // bookTitleInput.setAttribute('placeholder', 'Title');
//     // bookTitleInput.setAttribute('id', 'bookTitle');
//     // bookTitleInput.setAttribute('required','required');
//     // titleInputDiv.appendChild(bookTitleInput);
    
//     // const lineBreak1 = document.createElement('br');
//     // formCard.appendChild(lineBreak1);

//     // bookAuthorInput.setAttribute('type', 'text');
//     // bookAuthorInput.setAttribute('class','form-control');
//     // bookAuthorInput.setAttribute('placeholder', 'Author');
//     // bookAuthorInput.setAttribute('id', 'bookAuthor');
//     // bookAuthorInput.setAttribute('required','required');
//     // titleInputDiv.appendChild(bookAuthorInput);

//     // const lineBreak2 = document.createElement('br');
//     // formCard.appendChild(lineBreak2);

//     // bookPagesInput.setAttribute('type', 'number');
//     // bookPagesInput.setAttribute('class','form-control');
//     // bookPagesInput.setAttribute('placeholder', 'Number Of Pages');
//     // bookPagesInput.setAttribute('id', 'bookPages');
//     // bookPagesInput.setAttribute('required','required');
//     // titleInputDiv.appendChild(bookPagesInput);

//     // const lineBreak3 = document.createElement('br');
//     // formCard.appendChild(lineBreak3);

//     // const readStatusHeading = document.createElement('h3');
//     // formCard.appendChild(readStatusHeading);
//     // readStatusHeading.innerText = 'Have you read it?';

//     // const bookReadStatus = document.createElement('input');
//     // bookReadStatus.setAttribute('type', 'checkbox');
//     // bookReadStatus.setAttribute('class','form-check-input');
//     // bookReadStatus.setAttribute('id', 'checkbox');
//     // titleInputDiv.appendChild(bookReadStatus);

//     // const submitButtonDiv = document.createElement('div');
//     // formCard.appendChild(submitButtonDiv);

//     // const popUpSubmitBtn = document.createElement('input');
//     // submitButtonDiv.appendChild(popUpSubmitBtn);
//     // popUpSubmitBtn.setAttribute('type', 'submit');
//     // popUpSubmitBtn.setAttribute('class','btn btn-primary');
//     // popUpSubmitBtn.setAttribute('id', 'submit');

//     submitBtn.addEventListener('click', addBookInfo);

//     bookReadStatus.addEventListener('change', function (e) {
//         if (bookReadStatus.checked) {
//             console.log(unreadButton);
//             unreadButton.style.cssText = 'background-color: green;'
//             unreadButton.value = 'Read'
//         }else{
            
//             unreadButton.style.cssText = 'background-color: rgb(184, 163, 48);'
    
//         }
        
//     }, )
//     unreadButton.value = 'Unread'



    
// popUpCloseBtn.addEventListener('click', function () {
//     // popUpCard.style.display = 'none';
    
// });


// function displayBookInfo(e) {
//     e.preventDefault();
//     // cardBody.style.cssText = 'display: block;';
//     // popUpCard.style.cssText = 'display: none;';
//     let cardBodyMain = document.getElementById('card-body')
//     let bookCardInfoDiv = document.createElement('div');
//     bookCardInfoDiv.setAttribute('class', 'card text-center');
//     bookCardInfoDiv.setAttribute('style','display: none;');
//     cardBodyMain.appendChild(bookCardInfoDiv);
    
    
//     // let bookTitleValue = document.getElementById('bookTitle').value;
//     // cardInfoTitle.innerHTML = bookTitleValue;
    
//     // let bookAuthorValue = document.getElementById('bookAuthor').value;
//     // cardInfoAuthor.innerHTML = bookAuthorValue; 
    
//     // let bookPagesValue = document.getElementById('bookPages').value;
//     // cardInfoPages.innerHTML = bookPagesValue;
    
//     // let checkBoxValue = document.getElementById('checkbox').value;

//     function deleteBook() {
//         cardBody.style.cssText = 'display: none;';
//     }
//     removeBookBtn.addEventListener('click', deleteBook);

    
// }



// submitBtn.addEventListener('click', displayBookInfo);
//  });

// function addBookInfo(e) {
//     e.preventDefault();
    
//     let isFormValid = formElements.checkValidity();
//     if(!isFormValid) {
//         formElements.reportValidity();
//     } else {
//         e.preventDefault();
//         let cardBodyMain = document.getElementById('card-body');
        
//         popUpCard.style.display = 'none'
//     let bookCardInfoDiv = document.createElement('div');
//     bookCardInfoDiv.setAttribute('class', 'card text-center');
//     bookCardInfoDiv.style.cssText = 'background: silver; display: block;'    
//     cardBodyMain.appendChild(bookCardInfoDiv);

//     let cardIcon = document.createElement('img');
//     cardIcon.setAttribute('src', 'book.png');
//     cardIcon.setAttribute('alt', 'Book card Icon');
//     cardIcon.style.cssText = ' width: 25%; height: auto;';
//     bookCardInfoDiv.appendChild(cardIcon);

//     let bookInfoTextDiv = document.createElement('div');
//     bookInfoTextDiv.setAttribute('class', 'card-body cardInfoBody');
//     bookInfoTextDiv.style.display = 'block';
//     bookCardInfoDiv.appendChild(bookInfoTextDiv);

//     let bookInfoHeader = document.createElement('h4');
//     bookInfoTextDiv.appendChild(bookInfoHeader);
//     bookInfoHeader.setAttribute('class', 'card-title');
//     let bookTitleValue = document.getElementById('bookTitle').value;
//     bookInfoHeader.innerHTML = bookTitleValue;

//     let bookInfoAuthor = document.createElement('p');
//     bookInfoTextDiv.appendChild(bookInfoAuthor);
//     bookInfoAuthor.setAttribute('class', 'card-text');
//     let bookAuthorValue = document.getElementById('bookAuthor').value;
//     bookInfoAuthor.innerHTML = bookAuthorValue; 

//     let bookInfoPages = document.createElement('p');
//     bookInfoTextDiv.appendChild(bookInfoPages);
//     bookInfoPages.setAttribute('class', 'card-text');
//     let bookPagesValue = document.getElementById('bookPages').value;
//     bookInfoPages.innerHTML = bookPagesValue;

//     bookInfoTextDiv.appendChild(unreadButton);
//     unreadButton.setAttribute('class', 'btn btn-primary unread');
//     unreadButton.setAttribute('type', 'button');
//     unreadButton.addEventListener('click', function () {
//         console.log('hello');
//         unreadButton.addEventListener('click', function () {
//             console.log('hii');
//         })
//     })


//     bookInfoTextDiv.appendChild(removeBookBtn);
//     removeBookBtn.setAttribute('type', 'button');
//     removeBookBtn.setAttribute('class', 'btn btn-primary submit removeBook');
//     removeBookBtn.setAttribute('id', 'removeBook');
//     removeBookBtn.innerHTML = 'Remove Book';
//     }
    
//     let bookInfoObject = {
//         title: bookTitleInput.value,
//         author: bookAuthorInput.value,
//         noOfPages: bookPagesInput,
//         readStatus: unreadButton,   
//     }
//     alert(bookInfoObject.title);
// }



// // submitBtn.addEventListener('click', function () {
// //     popUpCard.style.display = 'none'
// // })
// // function bookRemoveFunctionality(params) {
    
// // }
// // removeBookBtn.addEventListener('click', )


let addBookBtn = document.getElementById('AddBookBtn');

let popUpCard = document.getElementById('popup-card')
 function ShowFormInputPopUp() {
    popUpCard.style.display = 'block';
    
 }

 addBookBtn.addEventListener('click', ShowFormInputPopUp);

