# Catwalk 🐾

This project animates a cat walking across the screen in various modes (default walk, loop, back-and-forth, and pause). It demonstrates DOM manipulation, event handling, and interval-based animations in javascript.

## Assignment 📝

> - The cat should start from the left side of the screen
> - Write a function ‘catWalk()’ that moves the cat 10 pixels to the right
> - Make the cat move across the screen by calling that function every 50ms
> - Write different versions of the function to handle the following variants:
>   - Variant 1: When the cat reaches the right side of the screen it should restart from the left
>   - Variant 2: When the cat reaches the right side of the screen, it should move backwards.
When it reaches the left it should move forwards
>   - Variant 3: When the cat reaches the middle of the screen, replace the img with a different
cat image. Keep it in the middle for 10 seconds, and then replace the img with the original
image and have it continue the walk as in variant 2


## Usage 🛠️

To see this script in action, open the current folder's [Index.html](./index.html) file in your browser. Use the buttons to control the cat's animation and switch between different variants.

## Functions 📋

The script defines the following key functions:

- `catWalk(cat, direction)`: Moves the cat in the specified direction.
- `defaultCatWalk(cat)`: Starts the default cat walk animation.
- `catTurnsAroundCheck(cat, direction)`: Checks if the cat needs to turn around at the screen edges.
- `catLoop(cat)`: Starts the loop animation where the cat reappears on the left after exiting the right side.
- `catBackForth(cat)`: Starts the back-and-forth animation where the cat turns around at the screen edges.
- `catPause(cat)`: Starts the pause animation where the cat pauses in the center of the screen for 10 seconds.
- `clearAllIntervals()`: Clears all active intervals to stop any ongoing animations.
- `updateButtonStates(activeButtonId)`: Updates the state of the buttons, disabling the active button.

## Variables Table 📊

| Variable Name         | Type               | Description                                                                 |
|-----------------------|--------------------|-----------------------------------------------------------------------------|
| `catWalkIntervalId`   | `number` or `null`    | The interval ID for the default cat walk animation.                        |
| `catLoopIntervalId`   | `number` or `null`    | The interval ID for the cat loop animation.                                |
| `catBackForthIntervalId` | `number` or `null` | The interval ID for the back-and-forth animation.                          |
| `catPauseIntervalId`  | `number` or `null`    | The interval ID for the pause animation.                                   |
| `catImg`              | `HTMLImageElement` | The cat image element used for the animation.                              |
| `defaultButton`       | `HTMLButtonElement`| The button for starting the default cat walk animation.                    |
| `variant1Button`      | `HTMLButtonElement`| The button for starting the cat loop animation.                            |
| `variant2Button`      | `HTMLButtonElement`| The button for starting the back-and-forth animation.                      |
| `variant3Button`      | `HTMLButtonElement`| The button for starting the pause animation.                               |

## Example Usage and Output 📤

1. **Default Walk**:
   - The cat starts from the left side of the screen and walks continuously to the right.

2. **Loop Animation [variant 1]**:
   - The cat reappears on the left side of the screen after exiting the right side.

3. **Back-and-Forth Animation [variant 2]**:
   - The cat walks to the edges of the screen and turns around to walk in the opposite direction.

4. **Pause Animation [variant 3]**:
   - The cat pauses in the center of the screen for 10 seconds before resuming its walk, then enters the Back-and-Forth state (until it reaches the half of the screen again).

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)