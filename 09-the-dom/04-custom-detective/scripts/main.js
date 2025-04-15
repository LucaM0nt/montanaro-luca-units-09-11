/**
 * @file main.js
 * @description This script inspects the DOM of the HDblog.it website and retrieves specific elements using various DOM querying methods.
 * It demonstrates how to use JavaScript to explore and interact with the structure of a webpage.
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks
 * This exercise involves using browser developer tools to inspect the DOM of HDblog.it and running JavaScript in the console to identify specific elements on the page. 
 * The goal was to locate at least 10 different elements or groups of elements using a variety of DOM querying methods. 
 * The script demonstrates the use of techniques such as `querySelector`, `querySelectorAll`, `getElementsByClassName`, `getElementById`, 
 * and `getElementsByTagName` to retrieve elements like headings, links, images, and containers. Additionally, it includes the use of complex CSS selectors 
 * to target elements with precision, such as selecting images with specific attributes or links within specific articles. 
 * This exercise highlights how JavaScript can be used to explore and manipulate the DOM, providing a deeper understanding of web page structure and programmatic interaction.
 */

document.querySelector("article h2")
// <h2>​…​</h2>​

document.querySelectorAll("footer a")
// NodeList(17) [a#logo, a.newsletter_icon, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a]

document.querySelector("h2 + p")
// <p style=​"padding:​0 28px">​…​</p>​

document.getElementsByClassName("video_phone")
// HTMLCollection(8) [a.video_phone, a.video_phone, a.video_phone, a.video_phone, a.video_phone, a.video_phone, a.video_phone, a.video_phone]

document.getElementById("vid_container")
// <section id=​"vid_container" class=​"videos_phones_container clearfix" style=​"padding:​ 14px 18px;​">​…​</section>​

document.getElementsByTagName("img")
// HTMLCollection(67) [img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img]

document.querySelector("#news_page2 > article:nth-child(9) > a")
// <a class=​"thumb_new_image" href=​"https:​/​/​www.hdblog.it/​green/​articoli/​n614934/​inquinamento-citta-europei-a-rischio/​">​…​</a>​

document.querySelector("#simple_slider > div.slideshow")
// <div class=​"slideshow" style=​"position:​ relative;​ overflow:​ hidden;​">​…​</div>​

document.querySelector("#autocomplete2 > ul")
// <ul>​</ul>​

document.querySelector("#news_page2 > article:nth-child(9) > p > em")
// <em>​8 ore fa​</em>​


document.querySelector("section > .listagrande  > article:nth-child(6) > div > a[href^='https://www.hdblog.it/curiosita/'] img[alt$='Don Pettit']")
// <img src=​"https:​/​/​css.hd-cdn.it/​new_files/​img/​shim.gif" data-src=​"https:​/​/​hd2.tudocdn.net/​1249911?w=115&h=95&v=1" alt=​"L'aurora australe vista dallo spazio incanta l'astronauta Don Pettit" width=​"115" height=​"95">​