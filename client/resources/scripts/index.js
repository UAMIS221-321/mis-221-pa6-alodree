function handleOnLoad(){
    populateList();
}

function handleOnChange(){
    const selectedId = document.getElementById("selectListBox").value;
    bookList.forEach((book)=>{
        if(book.id == selectedId){
            myBook = book;
        }
    });

    populateForm();
}

function handleRentClick(){
    myBook.numAvib--;
    document.getElementById("bookAvib").value = myBook.numAvib;
    putBook(myBook.id);
}

function handleReturnClick(){
    myBook.numAvib++;
    document.getElementById("bookAvib").value = myBook.numAvib;
    putBook(myBook.id);
}

function handleDeleteClick(){
    deleteBook();
}

function handleCancelSave(){
    populateForm();
    makeReadOnly();
    showButtons();
}

function handleEditSave(id){
    putBook(id);
    makeReadOnly();
    showButtons();
}

function handleNewSave(){
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
}




function populateForm(){
    document.getElementById("bookTitle").value = myBook.title;
    document.getElementById("bookAuthor").value = myBook.author;
    document.getElementById("bookGenre").value = myBook.genre;
    document.getElementById("bookAvib").value = myBook.numAvib;
    document.getElementById("bookIsbn").value = myBook.isbn;
    document.getElementById("bookLength").value = myBook.length;
    document.getElementById("bookCover").value = myBook.cover;
    var html = "<img class = \"coverArt\" src= \"" + myBook.cover + "\"></img>";
    document.getElementById("picBox").innerHTML = html;
}

function hideButtons(){
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}

function showButtons(){
    document.getElementById("newButton").style.display = "incline-block";
    document.getElementById("editButton").style.display = "incline-block";
    document.getElementById("deleteButton").style.display = "incline-block";
    document.getElementById("rentButton").style.display = "incline-block";
    document.getElementById("returnButton").style.display = "incline-block";
    document.getElementById("saveButton").style.display = "incline-block";
}

function makeEditable(){
    document.getElementById("bookTitle").readOnly=false;
    document.getElementById("bookAuthor").readOnly=false;
    document.getElementById("bookGenre").readOnly=false;
    document.getElementById("bookAvib").readOnly=false;
    document.getElementById("bookIsbn").readOnly=false;
    document.getElementById("bookLength").readOnly=false;
    document.getElementById("bookCover").readOnly=false;
}

function blankFields(){
    document.getElementById("bookTitle").value="";
    document.getElementById("bookAuthor").value="";
    document.getElementById("bookGenre").value="";
    document.getElementById("bookAvib").value="";
    document.getElementById("bookIsbn").value="";
    document.getElementById("bookLength").value="";
    document.getElementById("bookCover").value="";
}

function makeReadOnly(){
    document.getElementById("bookTitle").readOnly=true;
    document.getElementById("bookAuthor").readOnly=true;
    document.getElementById("bookGenre").readOnly=true;
    document.getElementById("bookAvib").readOnly=true;
    document.getElementById("bookIsbn").readOnly=true;
    document.getElementById("bookLength").readOnly=true;
    document.getElementById("bookCover").readOnly=true;
}

    