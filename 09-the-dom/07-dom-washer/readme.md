# DOM washer 🧼

This project simulates a dishwasher system by dynamically managing stacks of dirty and clean dishes. It incorporates DOM manipulation to visually update the state of the dishwasher and its stacks in real-time. The simulation demonstrates how JavaScript can be used to solve algorithmic problems while integrating modern web development techniques.

## Assignment 📝

The goal of this exercise is to simulate a dishwasher system using JavaScript and DOM manipulation. The script performs the following tasks:
- Dynamically loads stacks of dirty dishes into three separate arrays.
- Simulates the washing process by moving dishes from dirty stacks to a clean stack at random intervals.
- Updates the dishwasher's status and displays it in the DOM.
- Dynamically creates and updates HTML elements to represent the current state of the stacks.
- Loads an external CSS file to style the dishwasher simulation.

## Usage 🛠️

To see this script in action, you can open the current folder [Index.html](./index.html)

## Functions 📋

The script defines the following key functions:
- `setMyInterval(callback, minDelay, maxDelay, times)`: Executes a callback function at random intervals between `minDelay` and `maxDelay` for a specified number of times.
- `clearMyInterval(interval)`: Clears a custom interval created by `setMyInterval`.
- `loadDishes(dirtyDishesStack, stackId)`: Loads a random number of dirty dishes into a specified stack.
- `washDish(dirtyDishesStack, stackName)`: Washes a dish from a specified stack and moves it to the clean stack.
- `updateWashingStatus()`: Updates the dishwasher's status and displays it in the DOM.
- `createDishDiv(stack, stackName)`: Creates a div element representing a stack of dishes.
- `drawStacks()`: Draws the current state of all stacks and the dishwasher status in the DOM.
- `runSimulation()`: Runs the dishwasher simulation, washing dishes from the stacks at random intervals.

## Variables Table 📊

| Variable Name         | Type                     | Description                                                                 |
|-----------------------|--------------------------|-----------------------------------------------------------------------------|
| `dirtyDishes1stStack` | `string[]`              | Array representing the first stack of dirty dishes.                        |
| `dirtyDishes2ndStack` | `string[]`              | Array representing the second stack of dirty dishes.                       |
| `dirtyDishes3rdStack` | `string[]`              | Array representing the third stack of dirty dishes.                        |
| `cleanDishes`         | `string[]`              | Array representing the stack of clean dishes.                              |
| `dishWasherStatus`    | `Object`                | Object tracking the status of the dishwasher and its stacks.               |
| `WashingStatusDiv`    | `HTMLDivElement`        | Div element used to display the dishwasher's status.                       |
| `exerciseSection`     | `HTMLElement`           | Section in the main element where the dishwasher simulation is displayed.   |
| `siteHead`            | `HTMLHeadElement`       | The `<head>` element of the document where a new stylesheet is dynamically added. |
| `newStylesheetLink`   | `HTMLLinkElement`       | The new stylesheet link element dynamically added to the document head.     |

## Example Output 📤

After running the script, the dishwasher simulation will:
1. Display the current state of the dishwasher, including the number of dishes in each stack.
2. Simulate the washing process by moving dishes from dirty stacks to the clean stack.
3. Dynamically update the DOM to reflect the current state of the dishwasher.
4. Load an external CSS file to style the simulation.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)
