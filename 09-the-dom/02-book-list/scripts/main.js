let books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    url: "https://m.media-amazon.com/images/I/619ncDeLijL._AC_UF1000,1000_QL80_.jpg",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    url: "https://m.media-amazon.com/images/I/61r+XBTSLKL.jpg",
    alreadyRead: true,
  },
];

// let hobbiesListElement = document.getElementById('hobby-list');
// let firstHobby = document.querySelector('ul li.hobby');
// let hobbies = document.getElementsByTagName('li');
// let alsoHobbies = document.getElementsByClassName('hobby');
// let allItems = document.querySelectorAll('ul li.hobby');

// let newImgElement = document.createElement("img");
// newImgElement.src = "https://picsum.photos/200/200";
// siteUlElement.append(newImgElement);

let exerciseSection = document.querySelector("main section:nth-of-type(2)");
let newUlElement = document.createElement("ul");
exerciseSection.appendChild(newUlElement);

books.forEach((book) => {
  let currentBook = document.createElement("li");
  currentBook.className = book.alreadyRead ? "alreadyRead" : "notRead"
  currentBook.textContent = `${book.title} written by ${book.author}`;
  newUlElement.appendChild(currentBook);

  let elementImg = document.createElement("img");
  elementImg.src = book.url;
  elementImg.width = "100";
  newUlElement.appendChild(elementImg);
});

let siteHead = document.head;
let newStylesheetLink = document.createElement("link");
newStylesheetLink.rel = "stylesheet";
newStylesheetLink.href = "./styles/style.css";
console.log(newStylesheetLink);
setTimeout(() => {
  siteHead.appendChild(newStylesheetLink);
}, 5000);