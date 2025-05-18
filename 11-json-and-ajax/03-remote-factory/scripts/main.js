const jsonBlobUrl = "https://jsonblob.com/api/jsonBlob/1373750914791432192";

// Utility to clear an element
function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

// Notification message
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

function renderData(data) {
  if (!data || !Array.isArray(data.cars) || !Array.isArray(data.factories)) {
    showMessage("Invalid data structure received from server.", true);
    return;
  }

  const cars = data.cars;
  const factories = data.factories;
  const contentSection = document.querySelector(
    ".content section:nth-of-type(2)"
  );
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

      // Fields
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

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      panel.appendChild(saveBtn);

      carItem.addEventListener("click", () => {
        panel.style.display = panel.style.display === "none" ? "block" : "none";
      });

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
            return res.json(); // in case you want confirmation
          })
          .then(() => {
            showMessage("Car info saved!");
            renderData(data); // Re-render
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

// Initial load with robust error handling
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
