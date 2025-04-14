/**
 * @file main.js
 * @description This script dynamically updates the "About Me" page by modifying the DOM. 
 * It sets text content for specific elements, adds a placeholder image, and dynamically loads a stylesheet.
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks
 * The script demonstrates basic DOM manipulation techniques, including:
 * - Selecting and modifying elements
 * - Adding classes to elements
 * - Dynamically creating and appending elements
 * - Delayed addition of a stylesheet
 * 
 * These techniques showcase how JavaScript can be used to enhance the interactivity 
 * and appearance of a web page by directly manipulating the DOM.
 */


// Assigning the font style directly to the body element for the exercise.
// Note: The better practice would be to assign a class and style it in CSS, 
// but this approach is the required by the exercise text.
/**
 * The body element of the page, used to apply a font style.
 * @type {HTMLBodyElement}
 */
let siteBody = document.body;
siteBody.style.fontFamily = "Arial, sans-serif";

/**
 * The span element for displaying the user's nickname.
 * @type {HTMLSpanElement}
 */
let nicknameSpan = document.getElementById("nickname");
nicknameSpan.textContent = "Luca";

/**
 * The span element for displaying the user's favorite items.
 * @type {HTMLSpanElement}
 */
let favoritesSpan = document.getElementById("favorites");
favoritesSpan.textContent = "Sushi";

/**
 * The span element for displaying the user's hometown.
 * @type {HTMLSpanElement}
 */
let hometownSpan = document.getElementById("hometown");
hometownSpan.textContent = "Turin";

/**
 * A NodeList of all <li> elements inside the section.
 * @type {NodeListOf<HTMLLIElement>}
 */
let siteLiElements = document.querySelectorAll("section li");
Array.from(siteLiElements).forEach((liElement) => {
  liElement.classList.add("list-item");
});

/**
 * The <ul> element in the section where a placeholder image is added.
 * @type {HTMLUListElement}
 */
let siteUlElement = document.querySelector("section ul");

/**
 * The new image element added to the <ul> element.
 * @type {HTMLImageElement}
 */
let newImgElement = document.createElement("img");
newImgElement.src = "https://picsum.photos/200/200";
siteUlElement.append(newImgElement);

/**
 * The <head> element of the document where a new stylesheet is dynamically added.
 * @type {HTMLHeadElement}
 */
let siteHead = document.head;

/**
 * The new stylesheet link element dynamically added to the document head.
 * @type {HTMLLinkElement}
 */
let newStylesheetLink = document.createElement("link");
newStylesheetLink.rel = "stylesheet";
newStylesheetLink.href = "./styles/style.css";
setTimeout(() => {
  siteHead.appendChild(newStylesheetLink);
}, 4000);
