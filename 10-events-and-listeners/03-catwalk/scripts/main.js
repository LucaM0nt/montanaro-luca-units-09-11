/**
 * @file main.js
 * @description This script animates a cat walking across the screen in various modes (default walk, loop, back-and-forth, and pause).
 * It demonstrates DOM manipulation, event handling, and interval-based animations.
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks This script provides an interactive demonstration of JavaScript's ability to manipulate the DOM and create animations.
 * It uses interval-based animations to move a cat image across the screen in different modes, such as continuous walking, looping,
 * reversing direction at screen edges, and pausing in the center. The script also showcases event handling by allowing users to
 * switch between animation modes using buttons, with proper state management to disable the active button. This example highlights
 * the importance of managing intervals and dynamically updating styles to create web applications.
 */

/**
 * The interval ID for the default cat walk animation.
 * @type {number | null}
 */
let catWalkIntervalId;

/**
 * The interval ID for the cat loop animation.
 * @type {number | null}
 */
let catLoopIntervalId;

/**
 * The interval ID for the back-and-forth animation.
 * @type {number | null}
 */
let catBackForthIntervalId;

/**
 * The interval ID for the pause animation.
 * @type {number | null}
 */
let catPauseIntervalId;

/**
 * The cat image element used for the animation.
 * @type {HTMLImageElement}
 */
let catImg = document.querySelector(
  "img[src='http://www.anniemation.com/clip_art/images/cat-walk.gif']"
);

/**
 * Helper function to move the cat in the specified direction.
 * @param {HTMLImageElement} cat - The cat image element to animate.
 * @param {string} [direction="right"] - The direction of movement ("right" or "left").
 * @returns {void}
 */
function catWalk(cat, direction = "right") {
  const step = 10;
  const dir = direction === "left" ? -1 : 1; // Converts "left" or "right" to a numeric direction
  const currentLeft = parseInt(getComputedStyle(cat).left) || 0; // Gets the current "left" position of the cat
  cat.style.left = currentLeft + step * dir + "px"; // Updates the "left" position
}

/**
 * Starts the default cat walk animation from the left side of the screen.
 * @param {HTMLImageElement} cat - The cat image element to animate.
 * @returns {void}
 */
function defaultCatWalk(cat) {
  cat.style.left = "-270px"; // Starts the cat off-screen
  catWalkIntervalId = setInterval(catWalk, 50, cat); // Moves the cat every 50ms
}

/**
 * Checks if the cat needs to turn around when reaching the screen edges.
 * @param {HTMLImageElement} cat - The cat image element.
 * @param {string} direction - The current direction of the cat ("right" or "left").
 * @returns {string} - The updated direction ("right" or "left").
 */
function catTurnsAroundCheck(cat, direction) {
  const catLeft = parseInt(cat.style.left); // gets the current position of the cat (using left property since the cat has absolute position) in number
  const catWidth = cat.offsetWidth; // gets the cat img width
  const windowWidth = window.innerWidth;

  if (catLeft + catWidth >= windowWidth) {
    cat.style.transform = "scaleX(-1)"; // Flips the cat to face left
    return "left";
  } else if (catLeft <= 0) {
    cat.style.transform = "scaleX(1)"; // Flips the cat to face right
    return "right";
  }
  return direction;
}

/**
 * Starts the cat loop animation, where the cat reappears on the left after exiting the right side.
 * @param {HTMLImageElement} cat - The cat image element to animate.
 * @returns {void}
 */
function catLoop(cat) {
  cat.style.left = "-270px"; // Starts the cat off-screen
  catLoopIntervalId = setInterval(() => {
    const catLeft = parseInt(cat.style.left);
    const catWidth = cat.offsetWidth;
    const windowWidth = window.innerWidth;

    if (catLeft > windowWidth) {
      cat.style.left = "-" + catWidth + "px"; // Resets the cat to the left side
    }
    catWalk(cat, "right");
  }, 50);
}

/**
 * Starts the back-and-forth animation, where the cat turns around at the screen edges.
 * @param {HTMLImageElement} cat - The cat image element to animate.
 * @returns {void}
 */
function catBackForth(cat) {
  cat.style.left = "-270px"; // Starts the cat off-screen
  let direction = "right";

  catBackForthIntervalId = setInterval(() => {
    direction = catTurnsAroundCheck(cat, direction); // Updates the direction if needed
    catWalk(cat, direction);
  }, 50);
}

/**
 * Starts the pause animation, where the cat pauses in the center of the screen for 10 seconds.
 * @param {HTMLImageElement} cat - The cat image element to animate.
 * @returns {void}
 */
function catPause(cat) {
  cat.style.left = "-270px"; // Starts the cat off-screen
  let paused = false;
  let direction = "right";

  catPauseIntervalId = setInterval(() => {
    if (paused) return; // if the cat is already paused, don't execute this function (so the cat doesn't walk)

    const catLeft = parseInt(cat.style.left);
    const catWidth = cat.offsetWidth;
    const windowWidth = window.innerWidth;
    const center = windowWidth / 2 - catWidth / 2; // center of the screen minus half cat width to align with center img

    if (Math.abs(catLeft - center) < 5) { //using a range of 10 since the default cat step is 10 to make sure the cat doesn't skip the center and doesn't stop
      paused = true; //sets paused to true, so that the walking code is skipped
      catImg.src =
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Rtd3F2dzFtZHN0dzE4enRhaDRsNHcxOXlhZTB1NDhwaTJrMHljaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mlvseq9yvZhba/giphy.gif"; // changes the img
      setTimeout(() => {
        paused = false;
        catImg.src =
          "http://www.anniemation.com/clip_art/images/cat-walk.gif";
      }, 10000); // remove the pause after 10s
    }
    direction = catTurnsAroundCheck(cat, direction);
    catWalk(cat, direction);
  }, 50);
}

/**
 * Clears all active intervals to stop any ongoing animations.
 * @returns {void}
 */
function clearAllIntervals() {
  clearInterval(catWalkIntervalId);
  clearInterval(catLoopIntervalId);
  clearInterval(catBackForthIntervalId);
  clearInterval(catPauseIntervalId);
}

/**
 * Updates the state of the buttons, disabling the active button.
 * @param {string} activeButtonId - The ID of the active button.
 * @returns {void}
 */
function updateButtonStates(activeButtonId) {
  const buttons = ["default", "catLoop", "catBackForth", "catStop"];
  buttons.forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    button.disabled = buttonId === activeButtonId; // Disables the active button
  });
}

// Event listeners for the buttons

/**
 * The button for starting the default cat walk animation.
 * @type {HTMLButtonElement}
 */
let defaultButton = document.getElementById("default");
defaultButton.addEventListener("click", () => {
  clearAllIntervals();
  defaultCatWalk(catImg);
  updateButtonStates("default");
});

/**
 * The button for starting the cat loop animation.
 * @type {HTMLButtonElement}
 */
let variant1Button = document.getElementById("catLoop");
variant1Button.addEventListener("click", () => {
  clearAllIntervals();
  catLoop(catImg);
  updateButtonStates("catLoop");
});

/**
 * The button for starting the back-and-forth animation.
 * @type {HTMLButtonElement}
 */
let variant2Button = document.getElementById("catBackForth");
variant2Button.addEventListener("click", () => {
  clearAllIntervals();
  catBackForth(catImg);
  updateButtonStates("catBackForth");
});

/**
 * The button for starting the pause animation.
 * @type {HTMLButtonElement}
 */
let variant3Button = document.getElementById("catStop");
variant3Button.addEventListener("click", () => {
  clearAllIntervals();
  catPause(catImg);
  updateButtonStates("catStop");
});

// Start the default cat walk animation on page load
defaultCatWalk(catImg);