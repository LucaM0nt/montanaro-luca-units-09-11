# 🕵️‍♀️ Custom DOM Detective 

For this task, I explored the DOM structure of [HDblog.it](https://www.hdblog.it), a technology news website, using browser developer tools and JavaScript in the console. The goal was to find at least 10 different elements or groups of elements using a variety of selectors.

Below are the queries used and the elements they target.

## 🔍 Selected Elements and Code Snippets

### 1. First heading inside an article

```js
document.querySelector("article h2")
```

**Explanation:**  
Finds the first `<h2>` heading inside an `<article>` element.

---

### 2. All links in the footer

```js
document.querySelectorAll("footer a")
```

**Explanation:**  
Selects all anchor (`<a>`) tags found within the `<footer>` section. These typically include contact links, social media, legal disclaimers, etc.

---

### 3. Paragraph directly after an `<h2>` heading

```js
document.querySelector("h2 + p")
```

**Explanation:**  
Selects the first `<p>` paragraph that immediately follows an `<h2>` element.

---

### 4. All phone-related video links

```js
document.getElementsByClassName("video_phone")
```

**Explanation:**  
Fetches all elements with the class `video_phone`, often used for links to phone review videos.

---

### 5. Container for phone videos

```js
document.getElementById("vid_container")
```

**Explanation:**  
Selects the section with the `id="vid_container"` which contains video thumbnails and information.

---

### 6. All images on the page

```js
document.getElementsByTagName("img")
```

**Explanation:**  
Returns all `<img>` tags found on the page.

---

### 7. Specific news article link using complex CSS selector

```js
document.querySelector("#news_page2 > article:nth-child(9) > a")
```

**Explanation:**  
Finds the anchor tag inside the 9th `<article>` under the `#news_page2` container. Useful for identifying a specific article.

---

### 8. Slideshow container inside a simple slider

```js
document.querySelector("#simple_slider > div.slideshow")
```

**Explanation:**  
Grabs the `<div>` with class `slideshow` located within the element with `id="simple_slider"`.

---

### 9. Autocomplete suggestion list

```js
document.querySelector("#autocomplete2 > ul")
```

**Explanation:**  
Selects the `<ul>` element containing search suggestions inside the autocomplete component.

---

### 10. Timestamp for a specific news article

```js
document.querySelector("#news_page2 > article:nth-child(9) > p > em")
```

**Explanation:**  
Selects the `<em>` tag inside the 9th news article’s paragraph, typically showing the publication time.

---

## ⭐ Bonus – Complex Selector

### Image about Don Pettit in the curiosity section

```js
document.querySelector("section > .listagrande  > article:nth-child(6) > div > a[href^='https://www.hdblog.it/curiosita/'] img[alt$='Don Pettit']")
```

**Explanation:**  
Selects an image whose `alt` text ends with "Don Pettit", inside a specific article in the "curiosità" category. This demonstrates the use of attribute selectors and precise child targeting in one line.

---

## ✅ Conclusion

This exercise demonstrated how to use a wide range of DOM access techniques—from simple selectors to complex and specific queries. These methods are key to understanding and interacting with modern web page structures.
