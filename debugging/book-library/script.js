let myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    titleInput.value.trim() === "" ||
    authorInput.value.trim() === "" ||
    pagesInput.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return;
  } else {
    let book = new Book(
      titleInput.value,
      authorInput.value,
      Number(pagesInput.value),
      readCheckbox.checked
    );
    myLibrary.push(book);
    render();
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readCheckbox.checked = false;
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let toggleButton = document.createElement("button");
    toggleButton.className = "btn btn-success";
    wasReadCell.appendChild(toggleButton);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    toggleButton.innerText = readStatus;

    toggleButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteButton = document.createElement("button");
    deleteCell.appendChild(deleteButton);
    deleteButton.className = "btn btn-warning";
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
