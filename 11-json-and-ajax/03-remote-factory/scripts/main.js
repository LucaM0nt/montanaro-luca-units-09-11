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
  let msgBox = document.querySelector(".message-box");

  if (!msgBox) {
    msgBox = document.createElement("div");
    msgBox.className = "message-box";
    document.body.appendChild(msgBox);
  }

  msgBox.textContent = message;
  msgBox.classList.remove("success", "error", "visible");
  msgBox.classList.add(isError ? "error" : "success", "visible");
  msgBox.style.opacity = "1";
  msgBox.style.pointerEvents = "auto";

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
  if (!data || !Array.isArray(data.cars) || !Array.isArray(data.factories)) {
    showMessage("Invalid data structure received from server.", true);
    return;
  }

  const cars = data.cars;
  const factories = data.factories;
  const contentSection = document.querySelector(".content section:nth-of-type(2)");
  clearElement(contentSection);

  const heading = document.createElement("h3");
  heading.textContent = "Factories";
  contentSection.appendChild(heading);

  const factoriesList = document.createElement("ul");

  factories.forEach((factory) => {
    const factoryItem = document.createElement("li");
    factoryItem.textContent = `${factory.name} ${factory.location} (${factory.established})`;

    const carsList = document.createElement("ul");

    const assignedCars = cars.filter((car) => factory.carIds.includes(car.id));

    assignedCars.forEach((car) => {
      const carItem = document.createElement("li");
      carItem.textContent = `${car.make} ${car.model} (${car.year})`;
      carItem.classList.add("car-item");

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

      const labels = [
        ["Make: ", makeInput],
        ["Model: ", modelInput],
        ["Year: ", yearInput],
        ["Electric: ", electricInput],
      ];

      labels.forEach(([text, input]) => {
        const label = document.createElement("label");
        label.textContent = text;
        label.appendChild(input);
        panel.appendChild(label);
        panel.appendChild(document.createElement("br"));
      });

      // Save button with PUT request logic
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      panel.appendChild(saveBtn);

      // Toggle panel visibility
      carItem.addEventListener("click", () => {
        panel.style.display = panel.style.display === "none" ? "block" : "none";
      });

      // Save updated car info to server
      saveBtn.addEventListener("click", () => {
        car.make = makeInput.value;
        car.model = modelInput.value;
        car.year = parseInt(yearInput.value);
        car.isElectric = electricInput.checked;

        fetch(jsonBlobUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (!res.ok) throw new Error("Server responded with error");
            return res.json(); // Optional, for confirmation
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

      carsList.appendChild(carItem);
      carsList.appendChild(panel);
    });

    factoriesList.appendChild(factoryItem);
    factoriesList.appendChild(carsList);
  });

  contentSection.appendChild(factoriesList);
}

// === Initial Data Load with Error Handling ===

/**
 * Fetches the JSON blob from the server and renders the data.
 * Handles network or data structure errors gracefully with user feedback.
 * 
 * @returns {void}
 */
fetch(jsonBlobUrl)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return res.json();
  })
  .then(renderData)
  .catch((err) => {
    console.error(err);
    showMessage("Unable to load car data from server.", true);
  });
