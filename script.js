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
let bookCount;
let bookList = document.querySelector('.booklist')
let bookRead = document.createElement('div');
bookRead.value = false


let bookTitle = document.createElement('input')
bookTitle.classList.add('input')
bookTitle.setAttribute('type', 'text')

let bookAuthor = document.createElement('input')
bookAuthor.classList.add('input')
bookAuthor.setAttribute('type', 'text')

let bookPages = document.createElement('input')
bookPages.classList.add('input')
bookPages.setAttribute('type', 'number')
bookPages.setAttribute('min', '1')

let createBookBtn = document.createElement('button')
bookTitle.classList.add('button')
createBookBtn.textContent = 'Add Book'

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
    myLibrary.push(this)
    this.toString = function() {
        return this.title
    }

    this.bookRemove = function () {
    aBook.textContent = ''
    aBook.classList.remove('book')
    bookWrapper.classList.remove('bookwrapper')
    }

    this.readOrUnread = function() {
        if (readUnread.textContent === 'Not Read') {
            readUnread.textContent = 'Read'
            readUnread.style.backgroundColor = 'green'
        } else {
            readUnread.textContent = 'Not Read'
            readUnread.style.backgroundColor = 'darkred'
        }
    }
}

createBookBtn.addEventListener('click', function() {
    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value)
    let bookWrap = document.createElement('div')
    bookWrap.classList.add('bookwrapper')
    myBooks.appendChild(bookWrap)
    let bookBody = document.createElement('div')
    let bookInfoTitle = document.createElement('h2')
    let bookInfoAuthor = document.createElement('h3')
    let bookInfoPages = document.createElement('h3')
    bookInfoTitle.textContent = `${book.title}`
    bookInfoAuthor.textContent = `${book.author}`
    bookInfoPages.textContent = `${book.pages} Pages`
    let removeThisBook = document.createElement('button')
    let readUnread = document.createElement('button')
    removeThisBook.textContent = 'Remove'

    if (bookRead.value === false) {
        readUnread.textContent = 'Not Read'
        readUnread.style.backgroundColor = 'darkred'
    } else if (bookRead.value === true) {
        readUnread.textContent = 'Read'
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

    removeThisBook.addEventListener('click', function() {
    bookBody.textContent = ''
    bookBody.classList.remove('book')
    bookWrap.classList.remove('bookwrapper')
    let index = myLibrary.indexOf(this)

    if (index !== -1) {
        myLibrary.splice(index, 1)
    }
    })

    bookList.textContent = myLibrary
    bookBody.appendChild(readUnread)
    bookBody.appendChild(removeThisBook)
    bookBody.appendChild(bookInfoTitle)
    bookBody.appendChild(bookInfoAuthor)
    bookBody.appendChild(bookInfoPages)
    bookWrap.appendChild(bookBody)
    bookBody.classList.add('book')

})

formBodyCreated = false;

addBook.addEventListener('click', function(){
    if (formBodyCreated === false) {
    let formBody = document.createElement('div')
    formBody.classList.add('formbody')
    myBooks.appendChild(formBody)
    formBodyCreated = true;

    let closeButton = document.createElement('button')
    closeButton.textContent = '❌'
    closeButton.classList.add('closebutton')
    formBody.appendChild(closeButton)

    let readUnreadCheckbox = document.createElement('input')
    readUnreadCheckbox.setAttribute('type', 'checkbox')
    let checkboxLabel = document.createElement('p')
    checkboxLabel.textContent  = 'I have read this book'

    readUnreadCheckbox.addEventListener('input', function(){
        if (bookRead.value === false) {
            bookRead.value = true
        } else if (bookRead.value === true) {
            bookRead.value = false
        }
    })

    if (formBodyCreated === true) {
    closeButton.addEventListener('click', function(){
        myBooks.removeChild(formBody)
        formBodyCreated = false 
    })
}
    formBody.appendChild(bookTitle)
    formBody.appendChild(bookAuthor)
    formBody.appendChild(bookPages)
    formBody.appendChild(createBookBtn)
    formBody.appendChild(checkboxLabel)
    formBody.appendChild(readUnreadCheckbox)
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