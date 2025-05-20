# Parallel Factory 🛠️

This project demonstrates how to load and display car and factory data from multiple remote JSON endpoints in parallel using JavaScript. Each car is stored in a separate JSON blob, and the factory is stored in its own blob. All car blobs are requested at the same time (in parallel), and the page displays a loading message until all data has been fetched. The list of cars is shown with detailed information for each car, directly visible (no collapsible panels). All errors are handled and reported to the user.

## Assignment 📝

> - Create another version of the factory that uses the same jsonblobs that you
created for the previous exercise
> - Make sure that each car information is stored in a different jsonblob
> - The page should display the list of cars with detailed information about
each car directly visible without a collapsible panel
> - Make sure that you request all jsonblobs in parallel (at the same time) not in
sequence (one after another)
> - Show a loader or a loading message while loading and show the list only
when data has returned from all jsonblobs and all requests finished
> - Make sure that your code handles all errors

## Usage 🚀

Open the [index.html](./index.html) file in your browser.  
The script will automatically fetch all car blobs and the factory blob in parallel, display a loading message, and then render the factory and its cars when all data is loaded.

## Data Structure 📦

### Cars

Each car object (in its own blob) contains:
- `id`: Unique identifier
- `make`: Manufacturer
- `model`: Model name
- `year`: Year of production
- `isElectric`: Boolean indicating if the car is electric

### Factory

The factory object (in its own blob) contains:
- `id`: Unique identifier
- `name`: Factory name
- `location`: City and state
- `established`: Year of establishment
- `carIds`: Array of car IDs produced by the factory

## Main Variables Table 📊

| Variable Name    | Type               | Description                                      |
|------------------|--------------------|--------------------------------------------------|
| `carUrls`        | `string[]`         | Array of URLs for each car JSON blob             |
| `factoryUrl`     | `string`           | URL of the factory JSON blob                     |
| `loadedCars`     | `Object[]`         | Array of loaded car objects                      |
| `contentSection` | `HTMLElement`      | The DOM section where content is rendered        |

## Main Functions 🧩

- **fetchJson(url, callback):**  
  Loads JSON data from a given URL using XMLHttpRequest and calls the callback with the result or error.

- **clearElement(el):**  
  Removes all child nodes from the given DOM element.

- **showMessage(message, isError):**  
  Displays a temporary message box to the user, styled for success or error.

- **showLoading():**  
  Shows a loading message in the content section while data is being fetched.

- **renderData(factory, cars):**  
  Renders the factory information and the list of associated cars in the DOM, with all car details visible.

## JSONBlob Links 🔗

- **Factory:**  
  [https://jsonblob.com/api/jsonBlob/1373768259115081728](https://jsonblob.com/api/jsonBlob/1373768259115081728)
- **Cars:**  
  [https://jsonblob.com/api/jsonBlob/1373767838824849408](https://jsonblob.com/api/jsonBlob/1373767838824849408)  
  [https://jsonblob.com/api/jsonBlob/1373768046015078400](https://jsonblob.com/api/jsonBlob/1373768046015078400)  
  [https://jsonblob.com/api/jsonBlob/1373768103447683072](https://jsonblob.com/api/jsonBlob/1373768103447683072)  
  [https://jsonblob.com/api/jsonBlob/1373768148356096000](https://jsonblob.com/api/jsonBlob/1373768148356096000)  
  [https://jsonblob.com/api/jsonBlob/1373768194728321024](https://jsonblob.com/api/jsonBlob/1373768194728321024)  

**IDs:**  
- Factory: `1373768259115081728`
- Cars: `1373767838824849408`, `1373768046015078400`, `1373768103447683072`, `1373768148356096000`, `1373768194728321024`

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)