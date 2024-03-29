document.addEventListener('DOMContentLoaded', function () {

let myBooks = document.querySelector('.books')
let readUnread = document.querySelector('.read')
let removeBook = document.querySelector('.remove')
let aBook = document.querySelector('.book')
let bookWrapper = document.querySelector('.bookwrapper')
let myLibrary = []
let addBook = document.querySelector('.addbook')
let addBookForm = document.querySelector('.addbookform')
let formBodyCreated;

formBodyCreated = false;

function Book() {
    this.title = title,
    this.author = author,
    this.pages = pages   
}

addBook.addEventListener('click', function(){
    if (formBodyCreated === false) {
    let formBody = document.createElement('div')
    formBody.classList.add('formbody')
    addBookForm.appendChild(formBody)
    formBodyCreated = true;
    } 

    
})

removeBook.addEventListener('click', function() {
    aBook.textContent = ''
    aBook.classList.remove('book')
    bookWrapper.classList.remove('bookwrapper')
})

if (readUnread.textContent === 'Not Read') {
    readUnread.style.backgroundColor = 'darkred'
} else {
    readUnread.style.backgroundColor = 'green'
}

readUnread.addEventListener('click', function() {
    if (readUnread.textContent === 'Not Read') {
        readUnread.textContent = 'Read'
        readUnread.style.backgroundColor = 'green'
    } else {
        readUnread.textContent = 'Not Read'
        readUnread.style.backgroundColor = 'darkred'
    }
})









































})