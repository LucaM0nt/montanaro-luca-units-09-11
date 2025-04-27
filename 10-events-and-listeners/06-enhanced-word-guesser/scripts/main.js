/**
 * @file script.js
 * @description This file contains the JavaScript code for the Word Guesser game.
 * @date March 2025
 * @author Luca Montanaro
 *
 * @remarks
 * This exercise demonstrates the use of arrays and random number generation in JavaScript.
 * The game selects a random word from a list and the console logs try to randomly guess the letters.
 */

/**
 * List of possible words for the game.
 * @type {string[]}
 */
const possibleWords = [
  "DOG",
  "CAT",
  "HORSE",
  "RABBIT",
  "BIRD",
  "FISH",
  "TURTLE",
  "SNAKE",
  "LIZARD",
  "FROG",
];

/**
 * Maximum number of incorrect guesses allowed.
 * @type {number}
 */
const maxGuessNumber = 6;

/**
 * Array of hangman "images" made of strings representing the stages of the game.
 * @type {string[]}
 */
const hangmanImg = [
  `+---+
|    
|    
|    
===`,
  `+---+
|   O
|    
|    
===`,
  `+---+
|   O
|   |
|    
===`,
  `+---+
|   O
|  /|
|    
===`,
  `+---+
|   O
|  /|\\
|    
===`,
  `+---+
|   O
|  /|\\
|  /  
===`,
  `+---+
|   O
|  /|\\
|  / \\
===`,
];

/**
 * Randomly select a word from the list and split it into an array of letters.
 * @type {string[]}
 */
let wordToGuess =
  possibleWords[getRandomInt(0, possibleWords.length - 1)].split("");

/**
 * Initialize the guessed letters array with underscores for each letter in the word that has not been guessed.
 * @type {string[]}
 */
let guessedLetters = "_".repeat(wordToGuess.length).split("");

/**
 * Initialize the number of guesses left.
 * @type {number}
 */
let guessesLeft = maxGuessNumber;

/**
 * Boolean to track if the game is still running.
 * @type {boolean}
 */
let isGameRunning = true;

/**
 * Array to store letters that have already been guessed.
 * @type {string[]}
 */
let usedLetters = [];

/**
 * Variable to track the player's total points.
 * @type {number}
 */
let totalPoints = 0;

/**
 * Function to get a random integer between min and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer between min and max.
 * @example
 * console.log(getRandomInt(1, 10)); // 7
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Function to handle guessing a letter.
 * @param {string} letter - The letter to guess.
 * @returns {void}
 * @example
 * guessLetter("A");
 */
function guessLetter(letter) {
  chosenLetter.textContent = `You have chosen the letter ${letter}`;
  console.log(`You have chosen the letter ${letter}`);

  // Check if the guessed letter is in the word
  if (wordToGuess.includes(letter)) {
    // Update the guessed letters array with the correct letter
    guessedLetters = guessedLetters.map((guessedLetter, letterIndex) => {
      return wordToGuess.at(letterIndex) === letter ? letter : guessedLetter;
    });

    // Add random points for a correct guess
    totalPoints = totalPoints + getRandomInt(1, 10);

    // Check if the player has guessed the entire word
    if (!guessedLetters.includes("_")) {
      currentStatus.textContent = `Congratulations! You found a letter!
${hangmanImg.at(maxGuessNumber - guessesLeft)}
You have ${totalPoints} points.
Your current situation is: ${guessedLetters.join(" ")}
Congratulations! You found the word!`;
      gameOver(); // End the game
      return;
    }

    // Display the current game state after a correct guess
    currentStatus.textContent = `Congratulations! You found a letter!
${hangmanImg.at(maxGuessNumber - guessesLeft)}
You have ${totalPoints} points.
Your current situation is: ${guessedLetters.join(" ")}
You have ${guessesLeft} guesses left.`;
  } else {
    // Decrease the number of guesses left for an incorrect guess
    guessesLeft -= 1;

    // Subtract random points for an incorrect guess
    totalPoints = totalPoints - getRandomInt(1, 10);

    // Display the current game state after an incorrect guess
    currentStatus.textContent = `Sorry, you didn't find a letter!
${hangmanImg.at(maxGuessNumber - guessesLeft)}
You have ${totalPoints} points.
Your current situation is: ${guessedLetters.join(" ")}
You have ${guessesLeft} guesses left.`;
  }

  // Check if the player has run out of guesses
  if (guessesLeft === 0) {
    currentStatus.textContent = `Sorry, you didn't find a letter!
${hangmanImg.at(maxGuessNumber - guessesLeft)}
You have ${totalPoints} points.
Your current situation is: ${guessedLetters.join(" ")}
GAME OVER! The word was ${wordToGuess.join("")}.`;
    // End the game
    gameOver();
  }
}

const mainSection = document.querySelector("main section:nth-of-type(2)");

const chosenLetter = document.createElement("p");
const currentStatus = document.createElement("pre");
chosenLetter.textContent = `Game Started, select a letter`;
currentStatus.textContent = `${hangmanImg[0]}`;

// Function to create an input button with a specific letter
function createInput(letter) {
  const input = document.createElement("input");
  input.type = "button";
  input.id = letter;
  input.value = letter;
  input.classList = "letter-button";
  input.addEventListener("click", () => {
    input.disabled = true;
    isGameRunning ? guessLetter(letter.toUpperCase()) : null;
  });
  return input;
}
// Function to create a row of input buttons
function createRow(letters) {
  const row = document.createElement("div");
  letters.forEach((letter) => {
    row.appendChild(createInput(letter));
  });
  return row;
}
// Alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";
// Create 3 rows with letters
const inputArea = document.createElement("div");
const rows = [
  alphabet.slice(0, 9), // A-I
  alphabet.slice(9, 18), // J-R
  alphabet.slice(18, 26), // S-Z
];
rows.forEach((row) => {
  inputArea.appendChild(createRow(row.split("")));
});

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
resetButton.addEventListener("click", () => {
  gameInitializer();
});

mainSection.appendChild(chosenLetter);
mainSection.appendChild(currentStatus);
mainSection.appendChild(inputArea);
mainSection.appendChild(resetButton);

function gameOver() {
  isGameRunning = false;
  inputArea
    .querySelectorAll("input")
    .forEach((input) => (input.disabled = true));
}

function gameInitializer() {
  wordToGuess =
    possibleWords[getRandomInt(0, possibleWords.length - 1)].split("");
  guessedLetters = "_".repeat(wordToGuess.length).split("");
  guessesLeft = maxGuessNumber;
  isGameRunning = true;
  usedLetters = [];
  totalPoints = 0;
  inputArea
    .querySelectorAll("input")
    .forEach((input) => (input.disabled = false));
  chosenLetter.textContent = `Game Started, select a letter`;
  currentStatus.textContent = `${hangmanImg[0]}`;
}
