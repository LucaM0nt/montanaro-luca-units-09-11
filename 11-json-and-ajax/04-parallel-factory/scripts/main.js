/**
 * @file main.js
 * @description Loads data from multiple car JSON endpoints and a factory JSON endpoint using XMLHttpRequest.
 * Displays the factory information along with a list of associated cars.
 * @author Luca Montanaro
 * @date May, 2025
 * 
 * @remarks This script ensures all car data is loaded in parallel and, once all requests are successful,
 * loads the factory data. It filters and displays only the cars associated with the given factory.
 * If any request fails, the user is notified, and no further actions are taken.
 * The script shows a loading message while data is fetched.
 * Handles all errors and informs the user via a styled message box.
 * Demonstrates DOM manipulation, error handling, and data rendering based on relationships between datasets.
 */

/**
 * Array of URLs for car data (JSON).
 * @type {string[]}
 */
const carUrls = [
  "https://jsonblob.com/api/jsonBlob/1373767838824849408",
  "https://jsonblob.com/api/jsonBlob/1373768046015078400",
  "https://jsonblob.com/api/jsonBlob/1373768103447683072",
  "https://jsonblob.com/api/jsonBlob/1373768148356096000",
  "https://jsonblob.com/api/jsonBlob/1373768194728321024",
];

/**
 * URL for the factory data (JSON).
 * @type {string}
 */
const factoryUrl = "https://jsonblob.com/api/jsonBlob/1373768259115081728";

/**
 * Fetches JSON data from a given URL using XMLHttpRequest (no try-catch version).
 * 
 * @param {string} url - The URL to fetch JSON data from.
 * @param {(err: Error|null, data?: any) => void} callback - Callback with error or parsed JSON.
 * @returns {void}
 */
function fetchJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const responseText = xhr.responseText;

        // Basic check of if it might look like a JSON object or array
        if (
          (responseText.startsWith("{") && responseText.endsWith("}")) ||
          (responseText.startsWith("[") && responseText.endsWith("]"))
        ) {
          const data = JSON.parse(responseText); 
          callback(null, data);
        } else {
          callback(new Error("Response is not valid JSON from " + url));
        }
      } else {
        callback(new Error("Failed to load " + url));
      }
    }
  };

  xhr.send();
}

/**
 * Removes all children from a given DOM element.
 * 
 * @param {HTMLElement} el - The element whose children should be removed.
 * @returns {void}
 */
function clearElement(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

/**
 * Displays a temporary message in a styled message box.
 * 
 * @param {string} message - The message text to display.
 * @param {boolean} isError - Whether the message represents an error.
 * @returns {void}
 */
function showMessage(message, isError) {
  let msgBox = document.querySelector(".message-box");

  if (!msgBox) {
    msgBox = document.createElement("div");
    msgBox.className = "message-box";
    document.body.appendChild(msgBox);
  }

  msgBox.textContent = message;
  msgBox.className = `message-box ${isError ? "error" : "success"} visible`;

  setTimeout(() => msgBox.classList.remove("visible"), 3000);
}

/**
 * Displays a "Loading data..." message in the content section.
 * 
 * @returns {void}
 */
function showLoading() {
  const contentSection = document.querySelector(".content section:nth-of-type(2)");
  clearElement(contentSection);

  const loading = document.createElement("p");
  loading.className = "loading";
  loading.textContent = "Loading data...";
  contentSection.appendChild(loading);
}

/**
 * Renders the factory information and associated cars in the DOM.
 * 
 * @param {Object} factory - The factory object containing name, location, established year, and carIds.
 * @param {Object[]} cars - The array of all car objects.
 * @returns {void}
 */
function renderData(factory, cars) {
  const contentSection = document.querySelector(".content section:nth-of-type(2)");
  clearElement(contentSection);

  const factoryInfo = document.createElement("p");
  factoryInfo.textContent = `${factory.name} – ${factory.location} (Established: ${factory.established})`;
  contentSection.appendChild(factoryInfo);

  const carList = document.createElement("ul");

  const assignedCars = cars.filter((car) => factory.carIds.includes(car.id));

  assignedCars.forEach((car) => {
    const carItem = document.createElement("li");
    carItem.textContent = `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Electric: ${car.isElectric ? "Yes" : "No"}`;
    carList.appendChild(carItem);
  });

  contentSection.appendChild(carList);
}

// === Main loading logic executed on page load ===
/**
 * Initiates loading of car and factory data on window load.
 * Displays a loading message and fetches all cars in parallel, followed by the factory.
 * Handles and displays errors as needed.
 * 
 * @returns {void}
 */
window.onload = function () {
  // Show the loading message while data is being fetched
  showLoading();

  const loadedCars = [];     // Array to store the loaded car data
  let carsLoaded = 0;        // Counter to track how many cars have been loaded
  let errorOccurred = false; // Flag to prevent further processing on error

  // Iterate over each car URL and load its data
  carUrls.forEach((url, index) => {
    fetchJson(url, function (err, carData) {
      // If an error has already occurred, stop processing
      if (errorOccurred) return;

      if (err) {
        // If an error occurs during fetch, show message and set error flag
        errorOccurred = true;
        showMessage("Error loading car data: " + err.message, true);
        console.error(err);
        return;
      }

      // Store the car data at the correct index
      loadedCars[index] = carData;
      carsLoaded++;

      // Once all car data has been loaded, fetch the factory data
      if (carsLoaded === carUrls.length) {
        fetchJson(factoryUrl, function (err, factoryData) {
          if (err) {
            // If factory fetch fails, show error message
            showMessage("Error loading factory data: " + err.message, true);
            console.error(err);
            return;
          }

          // Render the factory information along with its associated cars
          renderData(factoryData, loadedCars);
        });
      }
    });
  });
};
