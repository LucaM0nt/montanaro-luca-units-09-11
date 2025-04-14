/**
 * @file main.js
 * @description This script dynamically generates a book list on the "Book List" page by modifying the DOM.
 * It creates a list of books with their details, adds an image for each book, and dynamically loads a stylesheet.
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks
 * This script demonstrates several fundamental DOM manipulation techniques in JavaScript:
 *  Selecting and modifying elements**: Elements are selected using `querySelector` and dynamically updated.
 *  Creating and appending elements**: New elements, such as `<li>` and `<img>`, 
 *  are created and appended to the DOM.
 *  Conditional styling**: CSS classes are applied based on the book's read status.
 *  Dynamic stylesheet loading**: A new stylesheet is added to the document `<head>` after a delay.
 * 
 * These techniques showcase how JavaScript can be used to dynamically update and enhance 
 * the content of a web page.
 * 
 */

/**
 * Array of book objects, each containing details about a book (title, author, image URL, and read status).
 * @type {Array<{title: string, author: string, url: string, alreadyRead: boolean}>}
 */
let books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    url: "https://m.media-amazon.com/images/I/619ncDeLijL._AC_UF1000,1000_QL80_.jpg",
    alreadyRead: false, // Indicates whether the book has already been read
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    url: "https://m.media-amazon.com/images/I/61r+XBTSLKL.jpg",
    alreadyRead: true, // Indicates whether the book has already been read
  },
];

/**
 * The second section in the main element where the book list will be appended.
 * @type {HTMLElement}
 */
let exerciseSection = document.querySelector("main section:nth-of-type(2)");

/**
 * A new unordered list (<ul>) element created to hold the book list.
 * @type {HTMLUListElement}
 */
let newUlElement = document.createElement("ul");
exerciseSection.appendChild(newUlElement);

/**
 * Iterates over the books array and creates list items (<li>) for each book.
 * Each list item includes the book's title, author, and an image of the book cover.
 */
books.forEach((book) => {
  let currentBook = document.createElement("li");
  currentBook.className = book.alreadyRead ? "alreadyRead" : "notRead"; // Apply class based on read status
  currentBook.textContent = `${book.title} written by ${book.author}`;
  newUlElement.appendChild(currentBook);

  let elementImg = document.createElement("img");
  elementImg.src = book.url;
  elementImg.width = "100";
  newUlElement.appendChild(elementImg);
});

/**
 * The <head> element of the document where a new stylesheet is dynamically added.
 * @type {HTMLHeadElement}
 */
let siteHead = document.head;

/**
 * The new stylesheet link element dynamically added to the document head.
 * @type {HTMLLinkElement}
 */
newStylesheetLink.rel = "stylesheet";
newStylesheetLink.href = "./styles/style.css";

setTimeout(() => {
  siteHead.appendChild(newStylesheetLink);
}, 5000);