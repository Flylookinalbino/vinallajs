// Book Class: Represents a Book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
    }
    
    static addBookToList(book){
        const list = document.getElementById('main');

        const row = document.createElement('section');

        row.className = "grid grid-cols-12 mt-1";

        row.innerHTML = `
        <h1 class="col-start-4 col-span-2 bg-gray-200 p-1">${book.title}</h1>
        <h1 class="col-start-6 col-span-2 bg-gray-200 p-1">${book.author}</h1>
        <h1 class="col-start-8 col-span-2 bg-gray-200 p-1">${book.isbn}</h1>
        <button class="btn col-span-1 bg-red-600 hover:bg-red-500 text-white p-1">X</button>
        `;

        list.appendChild(row);
    }

    static deleteBook(eSection){
        if(eSection.classList.contains('btn')){
            // Delete from Store
            Store.removeBook(eSection.previousElementSibling.textContent);

            // Delete From UI
            eSection.parentElement.remove();

            

            // Show success message
            UI.showAlert('Book Deleted', 'bg-blue-500');

            // console.log(eSection.parentElement);
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        const error = document.querySelector('#error');
        div.className = `container m-auto alert`;
        div.innerHTML= `
            <section class=" grid grid-cols-12 gap-1">
                <span class="col-start-4 col-span-7 text-xl text-center text-white ${className}">${message}</span>
            </section>
        `;
        error.appendChild(div);

        // Vanish in 3 seconds
        setTimeout(()=> document.querySelector('.alert').remove(), 3000);
    }

    static clearFields(input){
        for(var i = 0; i < input.length-1; i++){
            input[i].value = '';
        }
    }
}

// Store Class: Handles Storage
class Store{
    static getBooks(){
       let books;
       if(localStorage.getItem('books') === null){
           books = [];
       }else{
           books = JSON.parse(localStorage.getItem('books')); 
           console.log(books);
       } 
       return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    
    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book,index) => {
            if(book.isbn == isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get Form Value
    const input = document.querySelectorAll('input');
    
    // Validate
    if(input[0].value === '' || input[1].value === '' || input[2].value === ''){
        UI.showAlert('All Fields Should Filled', 'bg-red-600')
    }else{
        // Instatiate book
        const book = new Book(input[0].value, input[1].value, input[2].value);
        
        // Add BOOK to UI
        UI.addBookToList(book);

        // Add book to store
        Store.addBook(book);

        // Show success message
        UI.showAlert('Book Added', 'bg-green-600');

        // Clear fields
        UI.clearFields(input);
        // console.log(book);
    }
});

// Event: Remove a Book
document.getElementById('main').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);
});