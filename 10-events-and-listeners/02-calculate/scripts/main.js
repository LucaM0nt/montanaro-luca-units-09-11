/**
 * @file main.js
 * @description This script provides various mathematical operations (square, half, percentage, and circle area)
 * and dynamically updates the DOM to display the results based on user input. 
 * @author Luca Montanaro
 * @date April, 2025
 * 
 * @remarks
 * This script demonstrates event handling, DOM manipulation, and basic mathematical calculations.
 * It uses function from a previous exercise and enhance it adding to them the DOM manipulation aspects.
 */

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
 * This function calculates the square of a number based on the provided value.
 * @param {number} num - The number to be squared.
 * @returns {number} - Returns the square of the number.
 * @example
 * squareNumber(4); // Logs "The result of squaring the number 4 is 16" and returns 16
 */
function squareNumber(num) {
    let squaredNumber = num * num;
    console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
    return squaredNumber;
  }
  
/**
 * This function calculates half of a number based on the provided value.
 * @param {number} num - The number to be halved.
 * @returns {number} - Returns half of the number.
 * @example
 * halfNumber(10); // Logs "Half of 10 is 5" and returns 5
 */
function halfNumber(num) {
let halvedNumber = num / 2;
console.log(`Half of ${num} is ${halvedNumber}`);
return halvedNumber;
}

/**
 * This function calculates the percentage of one number relative to another based on the provided values.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - Returns the percentage of the first number relative to the second number.
 * @example
 * percentOf(2, 4); // Logs "2 is 50.00% of 4" and returns 50.00
 */
function percentOf(num1, num2) {
let percentage = (num1 / num2 * 100).toFixed(2);
console.log(`${num1} is ${percentage}% of ${num2}`);
return parseFloat(percentage);
}

/**
 * This function calculates the area of a circle based on the provided radius.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - Returns the area of the circle.
 * @example
 * areaOfCircle(5); // Logs "The area for a circle with radius 5 is 78.54" and returns 78.54
 */
function areaOfCircle(radius) {
let area = (Math.PI * radius * radius).toFixed(2);
console.log(`The area for a circle with radius ${radius} is ${area}`);
return area;
}

/**
 * Handles the square button click event.
 * Retrieves the input value, calculates the square, and updates the DOM with the result.
 * @returns {void}
 */
function squareEvent() {
    let number = document.querySelector("#square-input").value;
    let solution = squareNumber(number)
    let solutionDiv = document.querySelector("#solution");
    solutionDiv.textContent = `${number} squared is ${solution}`
  }

/**
 * Handles the half button click event.
 * Retrieves the input value, calculates half, and updates the DOM with the result.
 * @returns {void}
 */
function halfEvent() {
    let number = document.querySelector("#half-input").value;
    let solution = halfNumber(number)
    let solutionDiv = document.querySelector("#solution");
    solutionDiv.textContent = `${number} halved is ${solution}`
  }

/**
 * Handles the percentage button click event.
 * Retrieves the input values, calculates the percentage, and updates the DOM with the result.
 * @returns {void}
 */
function percentageEvent() {
    let percentageRate = document.querySelector("#percentage-input-rate").value;
    let percentageBase = document.querySelector("#percentage-input-base").value;
    let solution = percentOf(percentageRate, percentageBase)
    let solutionDiv = document.querySelector("#solution");
    solutionDiv.textContent = `${percentageRate} is ${solution}% of ${percentageBase}`
  }

/**
 * Handles the circle area button click event.
 * Retrieves the input value, calculates the area of the circle, and updates the DOM with the result.
 * @returns {void}
 */
function circleAreaEvent() {
    let number = document.querySelector("#circle-area-input").value;
    let solution = areaOfCircle(number)
    let solutionDiv = document.querySelector("#solution");
    solutionDiv.textContent = `The area of circle with radius ${number} is ${solution}`
  }
  
// Add event listeners for the buttons

/**
 * The button element for calculating the square of a number.
 * @type {HTMLButtonElement}
 */
let squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", squareEvent);

/**
 * The button element for calculating half of a number.
 * @type {HTMLButtonElement}
 */
let halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", halfEvent);

/**
 * The button element for calculating the percentage of one number relative to another.
 * @type {HTMLButtonElement}
 */
let percentageButton = document.getElementById("percentage-button");
percentageButton.addEventListener("click", percentageEvent);

/**
 * The button element for calculating the area of a circle.
 * @type {HTMLButtonElement}
 */
let circleAreaButton = document.getElementById("circle-area-button");
circleAreaButton.addEventListener("click", circleAreaEvent);

  