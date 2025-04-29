/**
 * @file main.js
 * @description This script generates a story dynamically based on user input and displays it on the page.
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks
 * This script generates a story dynamically based on user input and displays it on the page.
 * It demonstrates basic DOM manipulation techniques, such as selecting elements, retrieving user input, 
 * and updating the DOM with dynamically generated content.
 */

/**
 * Generates a story based on user input and displays it in the #story div.
 * The story is created using the values entered in the #noun, #adjective, and #person input fields.
 * 
 * @function makeStory
 * @returns {void} This function does not return a value. It updates the DOM directly.
 * 
 * * @example
 * // HTML structure:
 * // <input id="noun" value="dog">
 * // <input id="adjective" value="fluffy">
 * // <input id="person" value="Alice">
 * // <div id="story"></div>
 * // <button id="gen-button">Generate Story</button>
 * 
 * // JavaScript:
 * makeStory();
 * // Result:
 * // The #story div will display: "Alice really likes fluffy dog"
 */
function makeStory() {
  // Retrieve the value of the noun, adjective and person input fields
  let noun = document.querySelector("#noun").value;
  let adjective = document.querySelector("#adjective").value;
  let person = document.querySelector("#person").value;

  // Create the story using a template literal
  let story = `${person} really likes ${adjective} ${noun}`;

  // Find the #story div and set its text content to the generated story
  let storyDiv = document.querySelector("#story");
  storyDiv.textContent = story;
}

/**
 * Adds an event listener to the #gen-button element.
 * When the button is clicked, the makeStory function is executed.
 * 
 * @type {HTMLButtonElement}
 */
let genButton = document.getElementById("gen-button");
genButton.addEventListener("click", makeStory);