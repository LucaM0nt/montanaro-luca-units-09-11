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