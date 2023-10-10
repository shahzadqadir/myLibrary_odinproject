let bookNumber = 0;

function Book(author, title, pages, readStatus){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

let myBooks = [];

function addBooksToList (author, title, pages, readStatus){
    const newBook = new Book(author, title, pages, readStatus);
    myBooks.push(newBook);
}

addBooksToList("James Clear", "Atomic Habbits", 251, true);
addBooksToList("Jeff Doyle", "Routing TCP/IP", 1051, true);
addBooksToList("Noah Herari", "Sapiens", 300, false);

function createTableRow(tableId, bookObj){
    const bookTable = document.getElementById(tableId);
    const row = document.createElement("tr");
    row.setAttribute("data-book-number", bookNumber);
    // create a td for each book property
    const author = document.createElement("td");
    author.innerText = bookObj.author;
    row.appendChild(author);
    const title = document.createElement("td");
    title.innerText = bookObj.title;
    row.appendChild(title);
    const pages = document.createElement("td");
    pages.innerText = bookObj.pages;
    row.appendChild(pages);
    const readStatus = document.createElement("td");
    const updateCheckbox = document.createElement("input");
    updateCheckbox.type = "checkbox";
    updateCheckbox.checked = bookObj.readStatus;
    readStatus.appendChild(updateCheckbox);
    readStatus.onclick = () => {
        if (bookObj.readStatus == true){
            bookObj.readStatus = false;
            updateCheckbox.checked = bookObj.readStatus;            
        } else {
            bookObj.readStatus = true;
            updateCheckbox.checked = bookObj.readStatus;
        }
    }
    row.appendChild(readStatus);
    const deleteButton = document.createElement("td");
    createDeleteButton(deleteButton, bookNumber, "delete");
    row.appendChild(deleteButton);
    bookTable.appendChild(row);
    bookNumber++;
}

function createDeleteButton(td, bookNumber, type){
    const btnUpdateDelete = document.createElement("button");
    if (type == "delete"){
        btnUpdateDelete.innerText = "Delete";
        btnUpdateDelete.className = "btn btn-danger";
        btnUpdateDelete.onclick = () => {
            const bookRow = document.querySelector(`[data-book-number="${bookNumber}"]`);
            bookRow.remove();
        }
    }
    else if (type == "update"){
        btnUpdateDelete.innerText = "Update"
    }
    btnUpdateDelete.setAttribute("data-book-number", bookNumber);
    td.appendChild(btnUpdateDelete);
}

for (let i = 0; i < myBooks.length; i++){
    createTableRow("books-table", myBooks[i]);
}

const addNewBook = document.getElementById("btnAddBook");
addNewBook.onclick = () => {
    
    const bookAuthor = document.getElementById("addBookAuthor").value;
    const bookTitle = document.getElementById("addBookTitle").value;
    const bookPages = document.getElementById("addBookPages").value;
    const bookReadStatus = document.getElementById("addReadStatus").value;

    if (bookAuthor === "" || bookTitle === "" || bookPages === "" || bookReadStatus === ""){
        document.getElementById("error-message").innerText = "No field must be left empty."
    } else {
        document.getElementById("error-message").innerText = "";

        addBooksToList(bookAuthor, bookTitle, bookPages, bookReadStatus);
        bookNumber++;  
        console.log(myBooks[myBooks.length-1]);
        createTableRow("books-table", myBooks[myBooks.length-1]);
    } 
    clearForm();
}

function clearForm() {
    document.getElementById("addBookAuthor").value = "";
    document.getElementById("addBookTitle").value = "";
    document.getElementById("addBookPages").value = "";
    document.getElementById("addReadStatus").value = "";
}

document.getElementById("red-rect").addEventListener("click", ()=>{
    document.body.style.background="red";
    document.body.style.color="white";
})

document.getElementById("yellow-rect").addEventListener("click", () => {
    document.body.style.background="yellow";
    document.body.style.color="black";
})