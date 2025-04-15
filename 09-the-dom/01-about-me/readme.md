# About me 🗣️

This project dynamically updates the "About Me" page by modifying the DOM using JavaScript. It demonstrates basic DOM manipulation techniques to enhance the interactivity and appearance of a web page.

## Assignment 📝

> - Add an external javascript file called main.js
> - In JavaScript:
>   - Change the body style so it has a font-family of "Arial, sans-serif"
>   - Replace each of the spans (nickname, favorites, hometown) with your own information
>   - Iterate through each li and change the class to "list-item"
>   - Create a new img element and set its src attribute to a picture of you
>   - Append that element to the page
> - Add an external css file using Javascript
>   - The external css file should make items with the .list-item class white, bold and with an
orange background
>   - The external css file should be applied after 4 seconds

## Usage 🛠️

To use this script, include it in an HTML file with the appropriate structure. The script will:
- Update the font style of the page.
- Populate specific `<span>` elements with user information (nickname, favorites, and hometown).
- Add a placeholder image to the page.
- Dynamically load a stylesheet after a delay.

## Variables Table 📊

| Variable Name         | Type                     | Description                                                                 |
|-----------------------|--------------------------|-----------------------------------------------------------------------------|
| `siteBody`            | `HTMLBodyElement`       | The body element of the page, used to apply a font style.                   |
| `nicknameSpan`        | `HTMLSpanElement`       | The span element for displaying the user's nickname.                        |
| `favoritesSpan`       | `HTMLSpanElement`       | The span element for displaying the user's favorite items.                  |
| `hometownSpan`        | `HTMLSpanElement`       | The span element for displaying the user's hometown.                        |
| `siteLiElements`      | `NodeListOf<HTMLLIElement>` | A NodeList of all `<li>` elements inside the section.                       |
| `siteUlElement`       | `HTMLUListElement`      | The `<ul>` element in the section where a placeholder image is added.       |
| `newImgElement`       | `HTMLImageElement`      | The new image element added to the `<ul>` element.                          |
| `siteHead`            | `HTMLHeadElement`       | The `<head>` element of the document where a new stylesheet is dynamically added. |
| `newStylesheetLink`   | `HTMLLinkElement`       | The new stylesheet link element dynamically added to the document head.     |

## Example Output 📤

After running the script, the "About Me" page will:
1. Display the user's nickname, favorite items, and hometown in the appropriate `<span>` elements.
2. Add a placeholder image to the page.
3. Dynamically load a stylesheet after a 4-second delay.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)