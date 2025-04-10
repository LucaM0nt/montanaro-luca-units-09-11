// assegno lo stile in questo modo per via dell'esercizio ma so che il modo più corretto sarebbe quello di assegnare una classe
let siteBody = document.body;
siteBody.style.fontFamily = "Arial, sans-serif";

let nicknameSpan = document.getElementById("nickname");
nicknameSpan.textContent = "Luca";
let favoritesSpan = document.getElementById("favorites");
favoritesSpan.textContent = "Sushi";
let hometownSpan = document.getElementById("hometown");
hometownSpan.textContent = "Turin";

let siteLiElements = document.querySelectorAll("section li");
Array.from(siteLiElements).forEach((liElement) => {
  liElement.classList.add("list-item");
});

//l'esercizio chiederebbe per una mia foto
let siteUlElement = document.querySelector("section ul");
let newImgElement = document.createElement("img");
newImgElement.src = "https://picsum.photos/200/200";
siteUlElement.append(newImgElement);

let siteHead = document.head;
let newStylesheetLink = document.createElement("link");
newStylesheetLink.rel = "stylesheet";
newStylesheetLink.href = "./styles/style.css";
setTimeout(() => {
  siteHead.appendChild(newStylesheetLink);
}, 4000);
