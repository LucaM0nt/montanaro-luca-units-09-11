/**
 * @file editableCars.js
 * @description Loads data from a JSON endpoint containing both car and factory information.
 * Renders a list of factories with associated cars. 
 * @author Luca Montanaro
 * @date May, 2025
 * 
 * @remarks This script demonstrates editable UI rendering, structured DOM creation,
 * and bidirectional data binding with the backend.
 * Each car entry is expandable and editable. Updates are saved back to the server 
 * via PUT request. Includes robust error handling and user feedback.
 */

/**
 * Endpoint containing car and factory data in a single JSON blob.
 * @type {string}
 */
const jsonBlobUrl = "https://jsonblob.com/api/jsonBlob/1373750914791432192";

/**
 * Clears all child elements from a given DOM node.
 * 
 * @param {HTMLElement} el - The element to be cleared.
 * @returns {void}
 */
function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

/**
 * Displays a temporary message to the user in a styled message box.
 * 
 * @param {string} message - The message text.
 * @param {boolean} [isError=false] - Whether the message is an error (true) or success (false).
 * @returns {void}
 */
function showMessage(message, isError = false) {
  // if exist i get the .message-box div
  let msgBox = document.querySelector(".message-box");

  // if msgBox falsy (it doesn't exist, is empty...), then create it
  if (!msgBox) {
    msgBox = document.createElement("div");
    msgBox.className = "message-box";
    document.body.appendChild(msgBox);
  }
  
  // set text content based on parameters
  msgBox.textContent = message;
  msgBox.classList.remove("success", "error", "visible");
  msgBox.classList.add(isError ? "error" : "success", "visible");
  msgBox.style.opacity = "1";
  msgBox.style.pointerEvents = "auto";

  // message appears for just 3s
  setTimeout(() => {
    msgBox.classList.remove("visible");
    msgBox.style.opacity = "0";
    msgBox.style.pointerEvents = "none";
  }, 3000);
}

/**
 * Renders factories and associated cars in the DOM.
 * Allows user to expand each car item to reveal editable fields.
 * Saves updated values to the server and re-renders the data on success.
 * 
 * @param {Object} data - The full dataset containing both `cars` and `factories`.
 * @param {Object[]} data.cars - Array of car objects.
 * @param {Object[]} data.factories - Array of factory objects.
 * @returns {void}
 */
function renderData(data) {
  // check if the passed data doesn't exist or is not an array
  if (!data || !Array.isArray(data.cars) || !Array.isArray(data.factories)) {
    showMessage("Invalid data structure received from server.", true);
    return;
  }

  // assaign data to variables and prepare the section to be updated
  const cars = data.cars;
  const factories = data.factories;
  const contentSection = document.querySelector(".content section:nth-of-type(2)");
  clearElement(contentSection);
  
  // set heading
  const heading = document.createElement("h3");
  heading.textContent = "Factories";
  contentSection.appendChild(heading);

  const factoriesList = document.createElement("ul");

  factories.forEach((factory) => {
    const factoryItem = document.createElement("li");
    factoryItem.textContent = `${factory.name} ${factory.location} (${factory.established})`;

    const carsList = document.createElement("ul");
    
    // create an assigned cars array filtering for which car includes the current factory id
    const assignedCars = cars.filter((car) => factory.carIds.includes(car.id));
    
    // for each assigned car a create the respective element
    assignedCars.forEach((car) => {
      const carItem = document.createElement("li");
      carItem.textContent = `${car.make} ${car.model} (${car.year})`;
      carItem.classList.add("car-item");

      // creating the collapseable panel default display is none
      const panel = document.createElement("div");
      panel.classList.add("car-panel");
      panel.style.display = "none";

      // Editable input fields
      const makeInput = document.createElement("input");
      makeInput.type = "text";
      makeInput.value = car.make;

      const modelInput = document.createElement("input");
      modelInput.type = "text";
      modelInput.value = car.model;

      const yearInput = document.createElement("input");
      yearInput.type = "number";
      yearInput.value = car.year;

      const electricInput = document.createElement("input");
      electricInput.type = "checkbox";
      electricInput.checked = car.isElectric;

      // Create the lables associated with the respective input field
      const labels = [
        ["Make: ", makeInput],
        ["Model: ", modelInput],
        ["Year: ", yearInput],
        ["Electric: ", electricInput],
      ];
      
      // foreach lable i create the input element in the dom
      labels.forEach(([text, input]) => {
        const label = document.createElement("label");
        label.textContent = text;
        label.appendChild(input);
        panel.appendChild(label);
        panel.appendChild(document.createElement("br"));
      });

      // Save button that will have PUT request logic
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      panel.appendChild(saveBtn);

      // Toggle panel visibility
      carItem.addEventListener("click", () => {
        panel.style.display = panel.style.display === "none" ? "block" : "none";
      });

      // Save updated car info to server through PUT request logic
      saveBtn.addEventListener("click", () => {
        //catching the input fields values
        car.make = makeInput.value;
        car.model = modelInput.value;
        car.year = parseInt(yearInput.value);
        car.isElectric = electricInput.checked;

        // fetch server put request
        fetch(jsonBlobUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          // error in case of response not ok
          .then((res) => {
            if (!res.ok) throw new Error("Server responded with error");
          })
          .then(() => {
            showMessage("Car info saved!");
            renderData(data); // Re-render after saving
          })
          .catch((err) => {
            console.error(err);
            showMessage("Failed to save changes.", true);
          });
      });
      
      // add each car item and its panel in the car list div in the dom
      carsList.appendChild(carItem);
      carsList.appendChild(panel);
    });

    // add each factory to the dom with its car list
    factoriesList.appendChild(factoryItem);
    factoriesList.appendChild(carsList);
  });

  // add the whole section to the dom
  contentSection.appendChild(factoriesList);
}

// === Initial Data Load ===

/**
 * Fetches the JSON blob from the server and renders the data.
 * Handles network or data structure errors gracefully with user feedback.
 * 
 * @returns {void}
 */
fetch(jsonBlobUrl)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return res.json(); // data
  })
  .then((data) => renderData(data))
  .catch((err) => {
    console.error(err);
    showMessage("Unable to load car data from server.", true);
  });
