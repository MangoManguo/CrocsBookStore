// Global variables + object array

let display = document.getElementById("displayTable");
let input = document.getElementById("searchInput");
let titleInput = document.getElementById("titleInput");
let authorInput = document.getElementById("authorInput");
let genreInput = document.getElementById("genreInput");
let quantityInput = document.getElementById("quantityInput");

let bookInfo = [];

for (let i = 0; i < 100; i++) {
  bookInfo = bookTitles.map((titles, i) => ({
    title: titles,
    author: bookAuthors[i],
    genre: bookGenres[i],
    quantity: bookQuantity[i],
  }));
}

// sort and load display
sortBooks();
displayAll();

// event listeners
document.getElementById("displaybtn").addEventListener("click", displayAll);
document.getElementById("addbtn").addEventListener("click", () => addBook());
document.getElementById("fantasybtn").addEventListener("click", filterFantasy);
document.getElementById("mysterybtn").addEventListener("click", filterMystery);
document.getElementById("scifibtn").addEventListener("click", filterSciFi);
document.getElementById("romancebtn").addEventListener("click", filterRomance);
document
  .getElementById("thrillerbtn")
  .addEventListener("click", filterThriller);
input.addEventListener("input", () => searchBooks(input.value));

// functions
function addBook() {
  // adds a new book to the catalogue based on user input, then updates the display and totals
  bookInfo.push({
    title: titleInput.value,
    author: authorInput.value,
    genre: genreInput.value,
    quantity: quantityInput.valueAsNumber,
  });
  bookTitles.push(titleInput.value);
  bookAuthors.push(authorInput.value);
  bookGenres.push(genreInput.value);
  bookQuantity.push(quantityInput.valueAsNumber);
  sortBooks();
  displayAll();
  alert(
    `A new book has been added to your catologue:\nTitle: ${titleInput.value}\nAuthor: ${authorInput.value}\nGenre: ${genreInput.value}\nQuantity: ${quantityInput.valueAsNumber}`,
  );
}

function displayAll() {
  //displays all books and upadtes totals
  display.innerHTML = "";
  totals();
  for (let i = 0; i < bookTitles.length; i++) {
    display.innerHTML += `<tr> <td>${bookInfo[i].title}</td> <td>${bookInfo[i].author}</td> <td class="tableGenre">${bookInfo[i].genre}</td> <td id="tableQuantity${i}">${bookInfo[i].quantity}</td> </td> </tr>`;
    lowStock(i);
  }
}

function sortBooks() {
  // sorts bookInfo and bookTitles alphabetically by title
  bookTitles.sort();
  bookInfo.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
}

function lowStock(booknumber) {
  // highlights books with low stock in light red
  if (bookInfo[booknumber].quantity <= 3) {
    document.getElementById(
      `tableQuantity${booknumber}`,
    ).style.backgroundColor = "#ffa182";
  }
}

function totals() {
  // updates the total books and titles display
  let total = 0;
  for (let i = 0; i < bookInfo.length; i++) {
    total += bookInfo[i].quantity;
  }
  document.getElementById("totalBooks").innerHTML = total;
  document.getElementById("totalTitles").innerHTML = bookInfo.length;
}

function searchBooks(input) {
  // search book by title based on user input
  display.innerHTML = "";

  for (let i = 0; i < bookTitles.length; i++) {
    if (
      bookTitles[i].toLowerCase().slice(0, input.length) == input.toLowerCase()
    ) {
      display.innerHTML += `<tr> <td>${bookInfo[i].title}</td> <td>${bookInfo[i].author}</td> <td class="tableGenre">${bookInfo[i].genre} <td id="tableQuantity${i}">${bookInfo[i].quantity}</td> </td> </tr>`;
      lowStock(i);
    }
  }
}

// book filters by genres
function filterFantasy() {
  display.innerHTML = "";
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookInfo[i].genre.toLowerCase() == "fantasy") {
      display.innerHTML += `<tr> <td>${bookInfo[i].title}</td> <td>${bookInfo[i].author}</td> <td class="tableGenre">${bookInfo[i].genre} <td id="tableQuantity${i}">${bookInfo[i].quantity}</td> </td> </tr>`;
      if (bookInfo[i].quantity <= 3) {
        document.getElementById(`tableQuantity${i}`).style.backgroundColor =
          "#ffa182";
      }
    }
  }
}

function filterMystery() {
  display.innerHTML = "";
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookInfo[i].genre.toLowerCase() == "mystery") {
      display.innerHTML += `<tr> <td>${bookInfo[i].title}</td> <td>${bookInfo[i].author}</td> <td class="tableGenre">${bookInfo[i].genre} <td id="tableQuantity${i}">${bookInfo[i].quantity}</td> </td> </tr>`;
      lowStock(i);
    }
  }
}

function filterSciFi() {
  display.innerHTML = "";
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookInfo[i].genre.toLowerCase() == "sci-fi") {
      display.innerHTML += `<tr> <td>${bookInfo[i].title}</td> <td>${bookInfo[i].author}</td> <td class="tableGenre">${bookInfo[i].genre} <td id="tableQuantity${i}">${bookInfo[i].quantity}</td> </td> </tr>`;
      lowStock(i);
    }
  }
}

function filterRomance() {
  display.innerHTML = "";
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookInfo[i].genre.toLowerCase() == "romance") {
      display.innerHTML += `<tr> <td>${bookInfo[i].title}</td> <td>${bookInfo[i].author}</td> <td class="tableGenre">${bookInfo[i].genre} <td id="tableQuantity${i}">${bookInfo[i].quantity}</td> </td> </tr>`;
      lowStock(i);
    }
  }
}

function filterThriller() {
  display.innerHTML = "";
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookInfo[i].genre.toLowerCase() == "thriller") {
      display.innerHTML += `<tr> <td>${bookInfo[i].title}</td> <td>${bookInfo[i].author}</td> <td class="tableGenre">${bookInfo[i].genre} <td id="tableQuantity${i}">${bookInfo[i].quantity}</td> </td> </tr>`;
      lowStock(i);
    }
  }
}
