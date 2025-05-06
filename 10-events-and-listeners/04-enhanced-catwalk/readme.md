# Enhanced Catwalk 🐾

This project animates a cat walking across the screen with adjustable speed. Users can start, stop, speed up, or slow down the cat's movement using buttons. It demonstrates DOM manipulation, event handling, and interval-based animations with dynamic speed adjustments.

## Assignment 📝

> - Start with the code from the previous ‘Catwalk’ exercise
> - Add 4 buttons at the top of the page: ‘start’, ‘faster’, ‘slower’ and ‘stop’
> - Add an area to display info
> - When the start button is clicked the cat should start moving across the
screen
> - The cat should stop moving when the stop button is clicked
> - The cat moves faster when the faster button is clicked and slower when the
slower button is clicked
> - Show the current speed on screen in the info area
> - Disable the start/stop/faster/slower buttons at the appropriate times
>   - e.g. the user shouldn't be able to click "stop" if the cat isn't currently moving


## Usage 🛠️

To see this script in action, open the current folder's [Index.html](./index.html) file in your browser. Use the buttons to control the cat's animation and adjust its speed.

## Functions 📋

The script defines the following key functions (inherited from the previous exercise):

- `catWalk(cat, direction, speed)`: Moves the cat in the specified direction at the specified speed.
- `catLoop(cat, speed)`: Starts the loop animation where the cat reappears on the left after exiting the right side.

## Variables Table 📊

| Variable Name         | Type               | Description                                                                 |
|-----------------------|--------------------|-----------------------------------------------------------------------------|
| `catLoopIntervalId`   | `number` or `null`    | The interval ID for the cat loop animation.                                |
| `catSpeed`            | `number`           | The current speed of the cat's movement.                                   |
| `catImg`              | `HTMLImageElement` | The cat image element used for the animation.                              |
| `catWalkInfo`         | `HTMLParagraphElement` | The paragraph element used to display the cat's current state.            |
| `mainSection`         | `HTMLElement`      | The main section where the cat walk information is displayed.              |
| `startButton`         | `HTMLButtonElement`| The button for starting the cat loop animation.                            |
| `stopButton`          | `HTMLButtonElement`| The button for stopping the cat loop animation.                            |
| `fasterButton`        | `HTMLButtonElement`| The button for increasing the cat's speed.                                 |
| `slowerButton`        | `HTMLButtonElement`| The button for decreasing the cat's speed.                                 |

## Example Usage and Output 📤

1. **Start Animation**:
   - The cat starts walking from the left side of the screen at the default speed.

2. **Stop Animation**:
   - The cat stops walking, and the animation is paused.

3. **Speed Up**:
   - The cat's speed increases, and it moves faster across the screen.

4. **Slow Down**:
   - The cat's speed decreases. If the speed reaches 0, the animation stops.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)