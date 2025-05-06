# Enhanced Word Guesser 🎮

This project implements the Enhanced Word Guesser game. Players guess letters to reveal a hidden word, with a limited number of incorrect guesses allowed. The game includes a dynamic UI with buttons for each letter, a reset button, and real-time feedback on the player's progress.

## Assignment 📝

> - Begin with the 'Word Guesser' exercise from a previous lesson
> - Incorporate the following enhancements
>   - Implement an interface to allow users to input letters via an HTML `<input>` element
>       - Integrate additional necessary HTML elements
>       - Validate user input to ensure it consists of a single character and is of the correct type
>   - Enhance the visual presentation of game results directly on the page
>       - This can include the utilization of images or other graphics to enrich the experience
>       - Display previous guesses, the remaining number of guesses, and other pertinent
information to the user
>   - Add additional features that would augment the game's appeal and interactivity


## Usage 🛠️

To see this script in action, open the current folder's [Index.html](./index.html) file in your browser. Use the on-screen keyboard to guess letters and try to reveal the hidden word. Click the "Reset Game" button to start a new game.

## Functions 📋

The script defines the following key functions:

- `getRandomInt(min, max)`: Generates a random integer between `min` and `max` (inclusive).
- `guessLetter(letter)`: Handles the logic for guessing a letter, updating the game state and UI.
- `gameInitializer()`: Resets the game state and initializes a new game.
- `gameOver()`: Ends the game by disabling all input buttons.
- `createInput(letter)`: Creates an input button for a specific letter.
- `createRow(letters)`: Creates a row of input buttons for a given array of letters.

## Variables Table 📊

| Variable Name         | Type               | Description                                                                 |
|-----------------------|--------------------|-----------------------------------------------------------------------------|
| `possibleWords`       | `string[]`         | List of possible words for the game.                                       |
| `maxGuessNumber`      | `number`           | Maximum number of incorrect guesses allowed.                               |
| `hangmanImg`          | `string[]`         | Array of hangman "images" representing the stages of the game.             |
| `wordToGuess`         | `string[]`         | The word to guess, split into an array of letters.                         |
| `guessedLetters`      | `string[]`         | Array of guessed letters, initialized with underscores.                    |
| `guessesLeft`         | `number`           | Number of guesses remaining.                                               |
| `isGameRunning`       | `boolean`          | Boolean to track if the game is still running.                             |
| `usedLetters`         | `string[]`         | Array of letters that have already been guessed.                           |
| `totalPoints`         | `number`           | Total points scored by the player.                                         |
| `mainSection`         | `HTMLElement`      | The main section where the game elements are appended.                     |
| `chosenLetter`        | `HTMLParagraphElement` | The paragraph element displaying the chosen letter.                        |
| `currentStatus`       | `HTMLPreElement`   | The preformatted text element displaying the current game status.          |
| `inputArea`           | `HTMLDivElement`   | The div element containing the keyboard for letter input.                  |
| `resetButton`         | `HTMLButtonElement`| The button for resetting the game.                                         |

## Example Usage and Output 📤

1. **Start Game**:
   - The game initializes with a random word to guess.
   - The player sees underscores representing the hidden word.

2. **Guess a Letter**:
   - Correct Guess: The letter is revealed in the word, and points are added.
   - Incorrect Guess: The hangman progresses to the next stage, and points are subtracted.

3. **Win the Game**:
   - The player guesses all the letters correctly and wins the game.

4. **Lose the Game**:
   - The player runs out of guesses, and the game ends with a "Game Over" message.

5. **Reset Game**:
   - The player clicks the "Reset Game" button to start a new game.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)