# 🕵️‍♂️ DOM Detective 

This exercise involved using browser developer tools to inspect the DOM of [GOG.com](https://www.gog.com) and run JavaScript in the console to identify specific elements on the page.

Below are the DOM queries used, along with explanations of what they select.

## 📸 1. Every image on the page

```js
let allImgs = document.querySelectorAll("img");
console.log(allImgs);
```

**Explanation:**  
This line selects all `<img>` elements on the page using `querySelectorAll`. The result is a `NodeList` of all image tags currently rendered.

## 📋 2. The main menu at the top of the page

```js
let menu = document.querySelector("nav");
console.log(menu);
```

**Explanation:**  
Selects the main `<nav>` element, which contains the primary navigation menu at the top of the site. `querySelector` returns the first matching element.

## 📰 3. All the news items under "News"

```js
let newsBoxes = document.querySelectorAll("news-tile");
console.log(newsBoxes);
```

**Explanation:**  
Targets all `<news-tile>` custom elements that represent individual news items under the News section. The result is a `NodeList` of each news tile.

## 🦶 4. The footer

```js
let footer = document.getElementsByTagName("footer");
console.log(footer);
```

**Explanation:**  
Retrieves all `<footer>` elements on the page using `getElementsByTagName`. It returns an `HTMLCollection`, typically containing just one main footer element.

## 🔗 5. All the social media links at the bottom of the page

```js
let socialLinks = document.getElementsByClassName("footer-microservice-socials__item");
console.log(socialLinks);
```

**Explanation:**  
This selects all elements with the class `footer-microservice-socials__item`, which correspond to the social media icons/links in the site's footer. The result is an `HTMLCollection` of anchor tags.

## ✅ Conclusion

Using basic DOM access methods like `querySelector`, `querySelectorAll`, `getElementsByTagName`, and `getElementsByClassName`, you can easily locate and inspect elements on any modern webpage.
