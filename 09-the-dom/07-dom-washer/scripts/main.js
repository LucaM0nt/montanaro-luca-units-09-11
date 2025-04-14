/**
 * @file main.js
 * @description This script simulates a dishwasher system by 
 * managing stacks of dirty and clean dishes, incorporating DOM manipulation for dynamic updates.
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks
 * This exercise is an updated version of an old exercise involving stacks, 
 * now enhanced with DOM manipulation techniques. 
 * 
 * This exercise showcases the combination of the stack exercist with 
 * the DOM manipulation to create a visually updated simulation.
 */

/**
 * Sets a custom interval that executes a callback function at random intervals between `minDelay` and `maxDelay`.
 * The interval stops after executing the callback a specified number of times (`times`).
 *
 * @param {Function} callback - The function to execute at each interval.
 * @param {number} minDelay - The minimum delay (in milliseconds) between executions.
 * @param {number} maxDelay - The maximum delay (in milliseconds) between executions.
 * @param {number} [times=Infinity] - The maximum number of times to execute the callback. Defaults to Infinity.
 * @returns {Object} An interval object containing the `id` of the timeout.
 */
function setMyInterval(callback, minDelay, maxDelay, times = Infinity) {
  const interval = { id: null }; // Object to store the timeout ID
  let count = 0; // Counter to track the number of executions

  function repeat() {
    if (count < times) {
      callback(); // Execute the callback
      count++;
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay; // Calculate a random delay
      interval.id = setTimeout(repeat, randomDelay); // Schedule the next execution
    } else {
      clearMyInterval(interval); // Stop the interval when the count reaches the limit
    }
  }

  const firstDelay = Math.random() * (maxDelay - minDelay) + minDelay; // Initial random delay
  interval.id = setTimeout(repeat, firstDelay); // Start the interval
  return interval;
}

/**
 * Clears a custom interval created by `setMyInterval`.
 *
 * @param {Object} interval - The interval object returned by `setMyInterval`.
 * @returns {void}
 */
function clearMyInterval(interval) {
  clearTimeout(interval.id); // Clear the timeout using its ID
}

/**
 * Array representing the first stack of dirty dishes.
 * @type {string[]}
 */
const dirtyDishes1stStack = [];

/**
 * Array representing the second stack of dirty dishes.
 * @type {string[]}
 */
const dirtyDishes2ndStack = [];

/**
 * Array representing the third stack of dirty dishes.
 * @type {string[]}
 */
const dirtyDishes3rdStack = [];

/**
 * Array representing the stack of clean dishes.
 * @type {string[]}
 */
const cleanDishes = [];

/**
 * Object to track the status of the dishwasher.
 * @type {{
*   currently: string,
*   workLoad: string,
*   washingStacks: string[],
*   dirtyDishes1stStack: number,
*   dirtyDishes2ndStack: number,
*   dirtyDishes3rdStack: number,
*   cleanDishes: number
* }}
*/
let dishWasherStatus = {
  currently: "Working", // Current status of the dishwasher
  workLoad: "Washing 2 dishes at a time from a max of 2 stacks", // Description of the workload
  washingStacks: ["dirtyDishes1stStack", "dirtyDishes2ndStack"], // Stacks being washed
  dirtyDishes1stStack: dirtyDishes1stStack.length, // Number of dishes in the 1st stack
  dirtyDishes2ndStack: dirtyDishes2ndStack.length, // Number of dishes in the 2nd stack
  dirtyDishes3rdStack: dirtyDishes3rdStack.length, // Number of dishes in the 3rd stack
  cleanDishes: cleanDishes.length, // Number of clean dishes
};

/**
 * Loads a random number of dirty dishes (between 10 and 15) into a specified stack.
 *
 * @param {Array} dirtyDishesStack - The stack to load dishes into.
 * @param {string} stackId - The identifier for the stack (used in dish names).
 * @returns {void}
 */
function loadDishes(dirtyDishesStack, stackId) {
  const dishesNumber = Math.floor(Math.random() * 6) + 10; // Random number of dishes between 10 and 15

  for (let i = 1; i <= dishesNumber; i++) {
    dirtyDishesStack.push(`dish-${stackId}-${i}`); // Add a dish to the stack
  }
}

/**
 * Washes a dish from a specified stack and moves it to the clean dishes stack.
 *
 * @param {Array} dirtyDishesStack - The stack to wash a dish from.
 * @param {string} stackName - The name of the stack (for logging or debugging purposes).
 * @returns {void}
 */
function washDish(dirtyDishesStack, stackName) {
  const currentDish = dirtyDishesStack.pop(); // Remove a dish from the stack
  cleanDishes.push(currentDish); // Add the dish to the clean dishes stack
}

/**
 * Updates the status of the dishwasher and displays it in the DOM.
 *
 * @returns {void}
 */
function updateWashingStatus() {
  WashingStatusDiv.textContent = ""; // Clear the status div before updating
  const h2 = document.createElement("h2");
  h2.textContent = "Dishwasher Status";
  const ul = document.createElement("ul");

  // Create list items for each status property
  const liStatus = document.createElement("li");
  liStatus.textContent = `Status: ${dishWasherStatus.currently}`;
  const liWorkLoad = document.createElement("li");
  liWorkLoad.textContent = `Work Load: ${dishWasherStatus.workLoad}`;
  const liDirtyDishes1stStack = document.createElement("li");
  liDirtyDishes1stStack.textContent =
    dirtyDishes1stStack.length > 0
      ? `Dirty Dishes 1st Stack: ${dirtyDishes1stStack.length}`
      : `Dirty Dishes 1st Stack: Empty`;
  const liDirtyDishes2ndStack = document.createElement("li");
  liDirtyDishes2ndStack.textContent =
    dirtyDishes2ndStack.length > 0
      ? `Dirty Dishes 2nd Stack: ${dirtyDishes2ndStack.length}`
      : `Dirty Dishes 2nd Stack: Empty`;
  const liDirtyDishes3rdStack = document.createElement("li");
  liDirtyDishes3rdStack.textContent =
    dirtyDishes3rdStack.length > 0
      ? `Dirty Dishes 3rd Stack: ${dirtyDishes3rdStack.length}`
      : `Dirty Dishes 3rd Stack: Empty`;
  const liCleanDishes = document.createElement("li");
  liCleanDishes.textContent =
    cleanDishes.length > 0
      ? `Cleaned Dishes: ${cleanDishes.length}`
      : `Clean Dishes: Empty`;

  // Append list items to the unordered list
  ul.appendChild(liStatus);
  ul.appendChild(liWorkLoad);
  ul.appendChild(liDirtyDishes1stStack);
  ul.appendChild(liDirtyDishes2ndStack);
  ul.appendChild(liDirtyDishes3rdStack);
  ul.appendChild(liCleanDishes);

  // Append the heading and list to the status div
  WashingStatusDiv.appendChild(h2);
  WashingStatusDiv.appendChild(ul);
  exerciseSection.appendChild(WashingStatusDiv);
}

/**
 * Creates a div element representing a stack of dishes.
 *
 * @param {Array} stack - The stack of dishes to display.
 * @param {string} stackName - The name of the stack (used as a heading).
 * @returns {HTMLDivElement} The div element containing the stack.
 */
function createDishDiv(stack, stackName) {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const h2 = document.createElement("h2");
  h2.textContent = `${stackName}`;

  // Create list items for each dish in the stack
  stack.forEach((dish) => {
    const li = document.createElement("li");
    li.textContent = dish;
    ul.appendChild(li);
  });

  div.appendChild(h2);
  div.appendChild(ul);
  return div;
}

/**
 * A div element used to display the dishwasher's status.
 * @type {HTMLDivElement}
 */
let WashingStatusDiv = document.createElement("div");

/**
 * Draws the current state of all stacks and the dishwasher status in the DOM.
 *
 * @returns {void}
 */
function drawStacks() {

  exerciseSection.textContent = ""; // Clear the section before redrawing
  exerciseSection.appendChild(WashingStatusDiv);
  updateWashingStatus();
  exerciseSection.appendChild(createDishDiv(dirtyDishes1stStack, "1st stack"));
  exerciseSection.appendChild(createDishDiv(dirtyDishes2ndStack, "2nd stack"));
  exerciseSection.appendChild(createDishDiv(dirtyDishes3rdStack, "3rd stack"));
  exerciseSection.appendChild(createDishDiv(cleanDishes, "Cleaned dishes"));
}

/**
 * Runs the dishwasher simulation, washing dishes from the stacks at random intervals.
 *
 * @returns {void}
 */
function runSimulation() {
  drawStacks();

  const totalDishes =
    dirtyDishes1stStack.length +
    dirtyDishes2ndStack.length +
    dirtyDishes3rdStack.length;

  const intervalId = setMyInterval(
    () => {
      // Wash one dish from the 1st stack if available, otherwise from the 3rd stack
      dirtyDishes1stStack.length > 0
        ? washDish(dirtyDishes1stStack, "dirtyDishes1stStack")
        : dirtyDishes3rdStack.length > 0
        ? washDish(dirtyDishes3rdStack, "dirtyDishes3rdStack")
        : null;

      // Wash one dish from the 2nd stack if available, otherwise from the 3rd stack
      dirtyDishes2ndStack.length > 0
        ? washDish(dirtyDishes2ndStack, "dirtyDishes2ndStack")
        : dirtyDishes3rdStack.length > 0
        ? washDish(dirtyDishes3rdStack, "dirtyDishes3rdStack")
        : null;

      if (
        dirtyDishes1stStack.length === 0 &&
        dirtyDishes2ndStack.length === 0 &&
        dirtyDishes3rdStack.length === 0
      ) {
        dishWasherStatus.currently = "Finished";
        dishWasherStatus.workLoad = "All dishes are cleaned";
        clearMyInterval(intervalId); // Stop the simulation if all dishes are cleaned
      }
      drawStacks();
    },
    1000, // Minimum delay
    3000, // Maximum delay
    Math.ceil(totalDishes / 2) // Max iterations needed (2 dishes per iteration)
  );
}

/**
 * The <head> element of the document where a new stylesheet is dynamically added.
 * @type {HTMLHeadElement}
 */
let siteHead = document.head;

/**
 * The new stylesheet link element dynamically added to the document head.
 * @type {HTMLLinkElement}
 */
let newStylesheetLink = document.createElement("link");
newStylesheetLink.rel = "stylesheet";
newStylesheetLink.href = "./styles/style.css";
siteHead.appendChild(newStylesheetLink);

/**
 * The section in the main element where the dishwasher simulation will be displayed.
 * @type {HTMLElement}
 */
let exerciseSection = document.querySelector("main section:nth-of-type(2)");

// Load dirty dishes into the three stacks
loadDishes(dirtyDishes1stStack, "1st-stack");
loadDishes(dirtyDishes2ndStack, "2nd-stack");
loadDishes(dirtyDishes3rdStack, "3rd-stack");

// Start the simulation
runSimulation();