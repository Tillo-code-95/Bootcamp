// Book constructor

class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;

    }
};


// Data initialization

let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),


];

let displayedBooks = Array.from(books);

// Selectors

const booksTbody = document.getElementById("books-body");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

const tfoot = document.querySelector("tfoot");


//Actualizar tabla

function updateTable() {
    // Vaciamos el tbody por completo
    booksTbody.innerHTML = "";

    // Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
                <button class = "btn btn-danger" id ="${book.id}">Remove</button>
            </td>
        </tr>`;

        
        
    });

    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum = priceSum + book.price, 0);
    tfoot.textContent = `Precio total ${totalPrice}`;
}

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        
        updateTable();

    }
// cuando utilizamos " != " obviamos el tipo para que al comparar book.id con e.target.id
// no nos de error 
    
};
// Se llama a la funcion para que aparezca la tabla en pantalla
updateTable();


//Process form and add a new book.

addBookButton.addEventListener("click", e => {
    e.preventDefault();
    // quiero evitar que se comporte por defecto por eso esta esa funcion
    // evito que recargue la pagina y se comporte como form.
    
    const newID = books[books.length-1].id + 1;


    books.push(new Book(
        newID, 
        titleInput.value, 
        authorInput.value, 
        salesInput.value, 
        Number(priceInput.value))
    );
    
    displayedBooks.push(new Book(
        newID, 
        titleInput.value, 
        authorInput.value, 
        salesInput.value, 
        Number(priceInput.value))
    );
    
    updateTable();

    // titleInput.value = "";
    // authorInput.value = "";
    // salesInput.value = "";
    // priceInput.value = "";

    //titleInput.value, authorInput.value, salesInput.value, priceInput.value

    addBookButton.parentNode.reset();

});

// Ejercicio 5

displayedBooks = books;
const filterInput = document.querySelector("#filterInput");
const priceHeader =  document.querySelector("#priceHeader");

let ascendingOrder = true;

filterInput.addEventListener("input",  e => {
    // version 1 teniendo en cuenta las mayusculas;
    // displayedBooks = books.filter(book => book.title.includes(e.target.value));

    // version 2 - Sin tener en cuenta mayusculas.

    displayedBooks = books.filter(book => {
        const upperTitle = book.title.toUpperCase();
        const upperInputValue = e.target.value.toUpperCase();

        return upperTitle.includes(upperInputValue);
    });




    updateTable();



});

// Apartado 2
priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;

    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;"

    displayedBooks.sort((book1, book2)=> {
         return ascendingOrder ? book1.price - book2.price
                               : book2.price - book1.price;
        
        // if (ascendingOrder) {
        //     return book1.price - book2.price;
        
        // } else {
        //     return book2.price - book1.price
        // }
    
    });



    updateTable();
});