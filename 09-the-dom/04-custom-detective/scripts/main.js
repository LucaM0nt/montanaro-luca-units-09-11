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