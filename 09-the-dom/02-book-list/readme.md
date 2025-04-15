# My Book List 📚

This project dynamically generates a "Book List" page by modifying the DOM using JavaScript. It demonstrates how to iterate through an array of books, create HTML elements for each book, and style them dynamically based on their read status. Additionally, it showcases how to load an external CSS file after a delay to further enhance the page's appearance.

## Assignment 📝

> - Create a complete webpage with a title, description and all other HTML tags
> - In the body add an h1 title of "My Book List"
> - In javascript, iterate through the array of books.
>   - For each book, create HTML element with the book title and author and append it to the page
>   - Use a ul and li to display the books
>   - Add a url property to each book object that contains the cover image of the book
>   - Add the image to the HTML using Javascript
>   - Using javascript change the style of the book depending on whether you have read it or not
> - Add an external css file that applies after 5 seconds
>   - Now change the style of the book depending on whether you have read it or not using both
css and javascript (the CSS should use a different color for read books)

## Usage 🛠️

To see this script in action, you can open the current folder [Index.html](./index.html)

## Variables Table 📊

| Variable Name         | Type                     | Description                                                                 |
|-----------------------|--------------------------|-----------------------------------------------------------------------------|
| `books`               | `Array<Object>`         | An array of book objects, each containing a title, author, URL, and read status. |
| `exerciseSection`     | `HTMLElement`           | The section in the main element where the book list is appended.            |
| `newUlElement`        | `HTMLUListElement`      | A new unordered list element created to hold the book list.                 |
| `siteHead`            | `HTMLHeadElement`       | The `<head>` element of the document where a new stylesheet is dynamically added. |
| `newStylesheetLink`   | `HTMLLinkElement`       | The new stylesheet link element dynamically added to the document head.     |

## Example Output 📤

After running the script, the "Book List" page will:
1. Display a list of books with their titles, authors, and cover images.
2. Dynamically style books based on their read status (e.g., different colors for read and unread books).
3. Load an external CSS file after 5 seconds to apply additional styles.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)