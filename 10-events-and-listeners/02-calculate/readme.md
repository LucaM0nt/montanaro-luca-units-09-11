# Calculate 🧮

This project provides a simple calculator that performs various mathematical operations (square, half, percentage, and circle area). It dynamically updates the DOM to display the results based on user input.

## Assignment 📝

> - Add inputs for half number, percentage and circle area
> - Use the functions from the previous calculator exercises
> - For each operation, create an event listener for the button, and when it's
clicked, find the value of the appropriate input and show the result of the
calculation in the solution div
> - Afterwards, change the code so that you respond to key presses so that the
user doesn't have to click the button


## Usage 🛠️

To see this script in action, open the current folder's [Index.html](./index.html) file in your browser.

## Functions 📋

The script defines the following key functions:

- `squareNumber(num)`: Calculates the square of a number.
- `halfNumber(num)`: Calculates half of a number.
- `percentOf(num1, num2)`: Calculates the percentage of one number relative to another.
- `areaOfCircle(radius)`: Calculates the area of a circle based on the provided radius.
- `squareEvent()`: Handles the square button click event.
- `halfEvent()`: Handles the half button click event.
- `percentageEvent()`: Handles the percentage button click event.
- `circleAreaEvent()`: Handles the circle area button click event.

## Variables Table 📊

| Variable Name         | Type               | Description                                                                 |
|-----------------------|--------------------|-----------------------------------------------------------------------------|
| `squareButton`        | `HTMLButtonElement`| The button element for calculating the square of a number.                  |
| `halfButton`          | `HTMLButtonElement`| The button element for calculating half of a number.                        |
| `percentageButton`    | `HTMLButtonElement`| The button element for calculating the percentage of one number to another. |
| `circleAreaButton`    | `HTMLButtonElement`| The button element for calculating the area of a circle.                    |
| `solutionDiv`         | `HTMLDivElement`   | The div element where the results are displayed.                            |

## Example Usage and Output:

After running the script, the calculator page will:
1. Allow users to input values for the desired operation.
2. Perform the calculation based on the selected operation.
3. Display the result dynamically in the designated area on the page.

1. **Square Calculation**:
   - Input: `4`
   - Output: `"4 squared is 16"`

2. **Half Calculation**:
   - Input: `10`
   - Output: `"10 halved is 5"`

3. **Percentage Calculation**:
   - Input: `2` and `4`
   - Output: `"2 is 50.00% of 4"`

4. **Circle Area Calculation**:
   - Input: `5`
   - Output: `"The area of a circle with radius 5 is 78.54"`

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)