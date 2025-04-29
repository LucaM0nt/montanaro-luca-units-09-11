/**
 * @file main.js
 * @description This script animates a cat walking across the screen with adjustable speed. Users can start, stop, speed up, or slow down the cat's movement using buttons.
 * It demonstrates DOM manipulation, event handling, and interval-based animations with dynamic speed adjustments.
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks This script enhances the basic cat walk animation by introducing speed control. Users can interact with buttons to adjust the cat's speed dynamically.
 * The script uses interval-based animations to move the cat image across the screen and updates the DOM to reflect the current state of the animation.
 * It also includes state management to enable or disable buttons based on the current animation state, ensuring a smooth user experience.
 */

/**
 * The interval ID for the cat loop animation.
 * @type {number | null}
 */
let catLoopIntervalId;

/**
 * The current speed of the cat's movement.
 * @type {number}
 */
let catSpeed = 15;

/**
 * The cat image element used for the animation.
 * @type {HTMLImageElement}
 */
let catImg = document.querySelector(
  "img[src='http://www.anniemation.com/clip_art/images/cat-walk.gif']"
);

/**
 * Moves the cat in the specified direction at the specified speed.
 * @param {HTMLImageElement} cat - The cat image element to animate.
 * @param {string} [direction="right"] - The direction of movement ("right" or "left").
 * @param {number} [speed=15] - The speed of the cat's movement.
 * @returns {void}
 */
function catWalk(cat, direction = "right", speed = 15) {
  const dir = direction === "left" ? -1 : 1; // Converts "left" or "right" to a numeric direction
  const currentLeft = parseInt(getComputedStyle(cat).left) || 0; // Gets the current "left" position of the cat
  cat.style.left = currentLeft + speed * dir + "px"; // Updates the "left" position
}

/**
 * Starts the cat loop animation, where the cat reappears on the left after exiting the right side.
 * @param {HTMLImageElement} cat - The cat image element to animate.
 * @param {number} [speed=15] - The speed of the cat's movement.
 * @returns {void}
 */
function catLoop(cat, speed = 15) {
  if (!cat.style.left) cat.style.left = "-270px"; // Initializes the cat's position if not already set

  catLoopIntervalId = setInterval(() => {
    const catLeft = parseInt(cat.style.left);
    const catWidth = cat.offsetWidth; // Gets the width of the cat image
    const windowWidth = window.innerWidth; // Gets the width of the browser window

    if (catLeft > windowWidth) {
      cat.style.left = "-" + catWidth + "px"; // Resets the cat to the left side
    }
    catWalk(cat, "right", speed);
  }, 50);
}

/**
 * The paragraph element used to display information about the cat's current state.
 * @type {HTMLParagraphElement}
 */
let catWalkInfo = document.createElement("p");
catWalkInfo.textContent = "Make the cat come pressing `Start`";

/**
 * The main section where the cat walk information is displayed.
 * @type {HTMLElement}
 */
let mainSection = document.querySelector("main section:nth-of-type(2)");
mainSection.appendChild(catWalkInfo);

// Event listeners for the buttons

/**
 * The button for starting the cat loop animation.
 * @type {HTMLButtonElement}
 */
let startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  catLoop(catImg, catSpeed);
  catWalkInfo.textContent = "Cat is walking at average speed";
  startButton.disabled = true;
  stopButton.disabled = false;
  slowerButton.disabled = false;
  fasterButton.disabled = false;
});

/**
 * The button for stopping the cat loop animation.
 * @type {HTMLButtonElement}
 */
let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
  catSpeed = 15; // Resets the speed to the default value
  clearInterval(catLoopIntervalId); // Stops the animation
  catWalkInfo.textContent = "Cat stopped";
  stopButton.disabled = true;
  startButton.disabled = false;
  slowerButton.disabled = true;
  fasterButton.disabled = true;
});

/**
 * The button for increasing the cat's speed.
 * @type {HTMLButtonElement}
 */
let fasterButton = document.getElementById("faster");
fasterButton.addEventListener("click", () => {
  catSpeed += 5; // Increases the speed
  clearInterval(catLoopIntervalId); // Restarts the animation with the new speed
  catWalkInfo.textContent = `Cat is walking at a speed of ${catSpeed}`;
  catLoop(catImg, catSpeed);
});

/**
 * The button for decreasing the cat's speed.
 * @type {HTMLButtonElement}
 */
let slowerButton = document.getElementById("slower");
slowerButton.addEventListener("click", () => {
  catSpeed -= 5; // Decreases the speed
  if (catSpeed === 0) {
    clearInterval(catLoopIntervalId); // Stops the animation if the speed reaches 0
    catSpeed = 15; // Resets the speed to the default value
    catWalkInfo.textContent = "Cat stopped";
    stopButton.disabled = true;
    startButton.disabled = false;
    slowerButton.disabled = true;
    fasterButton.disabled = true;
    return;
  }
  clearInterval(catLoopIntervalId); // Restarts the animation with the new speed
  catWalkInfo.textContent = `Cat is walking at a speed of ${catSpeed}`;
  catLoop(catImg, catSpeed);
});

// Initial button states
stopButton.disabled = true;
startButton.disabled = false;
slowerButton.disabled = true;
fasterButton.disabled = true;