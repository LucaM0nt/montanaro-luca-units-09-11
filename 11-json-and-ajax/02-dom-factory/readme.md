# DOM Factory 🛠️

This project demonstrates how to parse and display static JSON data representing a car factory and its cars directly in the DOM using JavaScript. The data is hard-coded as JSON strings within the script and rendered as HTML elements.

## Assignment 📝

> - Write your cars and factory objects as JSON strings in a variable
> - Parse them with JSON.parse();
> - Write each of them to the DOM in a list
>   - You should use a styled CSS <ul><li> list with no bullets
>   - Don’t use <table>

## Usage 🛠️

Open the [index.html](./index.html) file in your browser.  
The script will automatically display the factory and its cars in the designated section of the page.

## Data Structure 📦

### Cars

Each car object contains:
- `id`: Unique identifier
- `make`: Manufacturer
- `model`: Model name
- `year`: Year of production
- `isElectric`: Boolean indicating if the car is electric
- `features`: Array of feature strings
- `registration`: Object with plate, state, and expiry
- `previousOwner`: Object with name and transfer date, or `null`

### Factory

The factory object contains:
- `id`: Unique identifier
- `name`: Factory name
- `location`: City and state
- `established`: Year of establishment
- `isOperational`: Boolean
- `manager`: Object with name and years of experience
- `lastInspection`: Date or `null`
- `carIds`: Array of car IDs produced by the factory

## Example Output 📤

- **Cars List:**  
  All cars are displayed as a simple list with their make, model, and year.

- **Factory Info:**  
  The factory is shown with its name, location, and year of establishment.

## Main Variables Table 📊

| Variable Name   | Type             | Description                                      |
|-----------------|------------------|--------------------------------------------------|
| `carsJSON`      | `string`         | JSON string containing the array of cars         |
| `factoryJSON`   | `string`         | JSON string containing the factory object        |
| `cars`          | `Object[]`       | Parsed array of car objects                      |
| `factory`       | `Object`         | Parsed factory object                            |
| `contentSection`| `HTMLElement`    | The DOM section where content is rendered        |
| `carsList`      | `HTMLUListElement` | Unordered list element for cars                |
| `factoriesList` | `HTMLUListElement` | Unordered list element for factories           |

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)