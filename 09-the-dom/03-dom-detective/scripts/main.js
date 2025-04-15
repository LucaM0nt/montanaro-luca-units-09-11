/**
 * @file main.js
 * @description This script inspects the DOM of the GOG.com website and retrieves specific elements using various DOM querying methods.
 * It demonstrates how to use JavaScript to explore and interact with the structure of a webpage.
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks
 * This exercise involves using browser developer tools to inspect the DOM of [GOG.com](https://www.gog.com) 
 * and run JavaScript in the console to identify specific elements on the page.
 * The script demonstrates the use of different DOM querying methods, including:
 * - `querySelectorAll` to retrieve all `<img>` elements and custom `<news-tile>` elements.
 * - `querySelector` to select the main `<nav>` element representing the site's menu.
 * - `getElementsByTagName` to retrieve the `<footer>` element.
 * - `getElementsByClassName` to select all social media links in the footer.
 * 
 * This exercise highlights how to use JavaScript to explore and manipulate the DOM, providing 
 * a foundation for understanding how web pages are structured and how to interact with them programmatically.
 */

let allImgs = document.querySelectorAll("img");
console.log(allImgs);
// NodeList(239) [img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, …]

let menu = document.querySelector("nav")
console.log(menu)
// <nav gog-menu class=" menu menu-prices-in-eur menu--windows menu-curr-symbol-before menu-language-en-us ">…</nav>

let newsBoxes = document.querySelectorAll("news-tile")
console.log(newsBoxes)
// NodeList(11) [news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted]

let footer = document.getElementsByTagName("footer")
console.log(footer)
// HTMLCollection [footer.footer-microservice.main-footer]

let socialLinks = document.getElementsByClassName("footer-microservice-socials__item")
console.log(socialLinks)
// HTMLCollection(6) [a.footer-microservice-socials__item, a.footer-microservice-socials__item, a.footer-microservice-socials__item, a.footer-microservice-socials__item, a.footer-microservice-socials__item, a.footer-microservice-socials__item]