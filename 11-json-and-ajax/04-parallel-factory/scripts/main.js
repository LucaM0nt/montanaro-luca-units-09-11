const carUrls = [
  "https://jsonblob.com/api/jsonBlob/1373767838824849408",
  "https://jsonblob.com/api/jsonBlob/1373768046015078400",
  "https://jsonblob.com/api/jsonBlob/1373768103447683072",
  "https://jsonblob.com/api/jsonBlob/1373768148356096000",
  "https://jsonblob.com/api/jsonBlob/1373768194728321024",
];

const factoryUrl = "https://jsonblob.com/api/jsonBlob/1373768259115081728";

function fetchJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          callback(null, JSON.parse(xhr.responseText));
        } catch (e) {
          callback(new Error("Invalid JSON from " + url));
        }
      } else {
        callback(new Error("Failed to load " + url));
      }
    }
  };
  xhr.send();
}

function clearElement(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

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

function showLoading() {
  const contentSection = document.querySelector(
    ".content section:nth-of-type(2)"
  );
  clearElement(contentSection);
  const loading = document.createElement("p");
  loading.className = "loading";
  loading.textContent = "Loading data...";
  contentSection.appendChild(loading);
}

function renderData(factory, cars) {
  const contentSection = document.querySelector(
    ".content section:nth-of-type(2)"
  );
  clearElement(contentSection);

  const factoryInfo = document.createElement("p");
  factoryInfo.textContent = `${factory.name} – ${factory.location} (Established: ${factory.established})`;
  contentSection.appendChild(factoryInfo);

  const carList = document.createElement("ul");
  const assignedCars = cars.filter((car) => factory.carIds.includes(car.id));

  assignedCars.forEach((car) => {
    const carItem = document.createElement("li");
    carItem.textContent = `Make: ${car.make}, Model: ${car.model}, Year: ${
      car.year
    }, Electric: ${car.isElectric ? "Yes" : "No"}`;
    carList.appendChild(carItem);
  });

  contentSection.appendChild(carList);
}

// === Main loading logic ===
window.onload = function () {
  showLoading();

  const loadedCars = [];
  let carsLoaded = 0;
  let errorOccurred = false;

  for (var i = 0; i < carUrls.length; i++) {
    (function (index) {
      fetchJson(carUrls[index], function (err, carData) {
        if (errorOccurred) return;

        if (err) {
          errorOccurred = true;
          showMessage("Error loading car data: " + err.message, true);
          console.error(err);
          return;
        }

        loadedCars[index] = carData;
        carsLoaded++;

        if (carsLoaded === carUrls.length) {
          // All cars loaded, now fetch factory
          fetchJson(factoryUrl, function (err, factoryData) {
            if (err) {
              showMessage("Error loading factory data: " + err.message, true);
              console.error(err);
              return;
            }
            renderData(factoryData, loadedCars);
          });
        }
      });
    })(i);
  }
};
