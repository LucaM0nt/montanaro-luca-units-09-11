# Remote Factory 🛠️

This project demonstrates how to load, display, and edit car and factory data from a remote JSON endpoint using JavaScript. The data is fetched from an online JSON blob, rendered in the DOM, and can be updated interactively with changes saved back to the server.
**In this exercise, the data structure consists of a single JSON blob containing both factories and cars.**

## Assignment 📝

> - Use jsonblob to store JSON data about cars and a car factory
> - You can use as many blobs as you need. Decide the structure in a way to
reduce the amount of data you modify with HTTP requests
> - Write an application that displays a factory with a list of cars
> - Clicking on each car should display a collapsible panel with more
information about the car
> - It should be possible to edit the car details
> - Save the modified data to jsonblob with an HTTP request
> - Whenever data is modified you should reload the new data from jsonblob
once the writing has finished
> - You should handle all error cases in your application. If an HTTP request
fails, you should display a message to the user
> - Your project should include a folder called ‘json’ with all the initial json files
that you upload to jsonblob (the initial state of your DB)
> - Your readme (markdown) should include links to all the jsonblobs that you
are using as well as a list of their IDs

## Usage 🚀

Open the [index.html](./index.html) file in your browser.  
The script will automatically fetch the data, display the factories and cars, and allow editing of car details.

## Data Structure 📦

### Cars

Each car object contains:
- `id`: Unique identifier
- `make`: Manufacturer
- `model`: Model name
- `year`: Year of production
- `isElectric`: Boolean indicating if the car is electric

### Factory

Each factory object contains:
- `id`: Unique identifier
- `name`: Factory name
- `location`: City and state
- `established`: Year of establishment
- `carIds`: Array of car IDs produced by the factory

## Main Variables Table 📊

| Variable Name    | Type               | Description                                      |
|------------------|--------------------|--------------------------------------------------|
| `jsonBlobUrl`    | `string`           | URL of the remote JSON blob                      |
| `data`           | `Object`           | Parsed data containing factories and cars        |
| `cars`           | `Object[]`         | Array of car objects                             |
| `factories`      | `Object[]`         | Array of factory objects                         |
| `contentSection` | `HTMLElement`      | The DOM section where content is rendered        |
| `factoriesList`  | `HTMLUListElement` | Unordered list element for factories             |
| `carsList`       | `HTMLUListElement` | Unordered list element for cars                  |

## Main Functions 🧩

- **clearElement(el):**  
  Removes all child nodes from the given DOM element.

- **showMessage(message, isError):**  
  Displays a temporary message box to the user, styled for success or error.

- **renderData(data):**  
  Renders the factories and their associated cars in the DOM. Allows editing of car details and saving changes back to the server.

## JSONBlob Infos 🔗

- **Factory & cars:**  
  [https://jsonblob.com/api/jsonBlob/1373750914791432192](https://jsonblob.com/api/jsonBlob/1373750914791432192)
- `id`: 1373750914791432192
## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)