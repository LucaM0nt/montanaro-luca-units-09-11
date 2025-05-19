/**
 * @file renderStaticData.js
 * @description Parses and displays a static JSON dataset of cars and a factory.
 * The data is hard-coded as strings and rendered directly into the HTML DOM.
 * 
 * @author Luca Montanaro
 * @date May, 2025
 * 
 * @remarks This is a simple script intended for rendering hard-coded test data.
 * It does not include interattività o aggiornamenti dinamici.
 */

/**
 * A JSON string containing an array of car objects.
 * Each car includes general information and a registration object.
 * Some may include a `previousOwner` record.
 * @type {string}
 */
const carsJSON = `[
    {
      "id": "car001",
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "isElectric": false,
      "features": ["Bluetooth", "Air Conditioning", "Backup Camera"],
      "registration": {
        "plate": "ABC-1234",
        "state": "California",
        "expires": "2026-05-10"
      },
      "previousOwner": null
    },
    {
      "id": "car002",
      "make": "Honda",
      "model": "Civic",
      "year": 2018,
      "isElectric": false,
      "features": ["Heated Seats", "Sunroof", "Cruise Control"],
      "registration": {
        "plate": "ZXC-9981",
        "state": "Texas",
        "expires": "2025-11-30"
      },
      "previousOwner": null
    },
    {
      "id": "car003",
      "make": "Tesla",
      "model": "Model 3",
      "year": 2023,
      "isElectric": true,
      "features": ["Autopilot", "Wireless Charging", "Over-the-Air Updates"],
      "registration": {
        "plate": "EV-2023X",
        "state": "Nevada",
        "expires": "2026-04-22"
      },
      "previousOwner": null
    },
    {
      "id": "car004",
      "make": "Ford",
      "model": "Mustang",
      "year": 2015,
      "isElectric": false,
      "features": ["Leather Seats", "V8 Engine Sound", "Sport Mode"],
      "registration": {
        "plate": "MUS-15GT",
        "state": "Florida",
        "expires": "2024-12-15"
      },
      "previousOwner": {
        "name": "Emily Carter",
        "transferredOn": "2023-06-01"
      }
    },
    {
      "id": "car005",
      "make": "Subaru",
      "model": "Outback",
      "year": 2021,
      "isElectric": false,
      "features": ["All-Wheel Drive", "Navigation System", "Roof Rails"],
      "registration": {
        "plate": "SB-OW21",
        "state": "Colorado",
        "expires": "2025-08-20"
      },
      "previousOwner": null
    }
  ]`;

/**
 * A JSON string containing a single factory object.
 * The factory includes metadata and a list of car IDs associated with it.
 * @type {string}
 */
const factoryJSON = `{
  "id": "factory001",
  "name": "Global Auto Factory",
  "location": "Detroit, MI",
  "established": 1985,
  "isOperational": true,
  "manager": {
    "name": "Sarah Thompson",
    "yearsOfExperience": 15
  },
  "lastInspection": null,
  "carIds": ["car001", "car002", "car003", "car004", "car005"]
}`;

/**
 * Parsed list of cars from `carsJSON`.
 * @type {Object[]}
 */
const cars = JSON.parse(carsJSON);

/**
 * Parsed factory object from `factoryJSON`.
 * @type {Object}
 */
const factory = JSON.parse(factoryJSON);

/**
 * The HTML container section where content will be inserted.
 * Targets the second `<section>` inside a `.content` element.
 * @type {HTMLElement}
 */
const contentSection = document.querySelector(".content section:nth-of-type(2)");

/**
 * An unordered list element to hold car information.
 * @type {HTMLUListElement}
 */
const carsList = document.createElement("ul");

/**
 * An unordered list element to hold factory information.
 * @type {HTMLUListElement}
 */
const factoriesList = document.createElement("ul");

// === Render Cars ===
cars.forEach((car) => {
  const li = document.createElement("li");
  li.textContent = `${car.make} ${car.model} (${car.year})`;
  carsList.appendChild(li);
});

// === Render Factory ===
const li = document.createElement("li");
li.textContent = `${factory.name} ${factory.location} (${factory.established})`;
factoriesList.appendChild(li);

// === Append Elements to DOM ===

/**
 * Heading for the cars list.
 * @type {HTMLHeadingElement}
 */
const carsHeading = document.createElement("h3");
carsHeading.textContent = "Cars";
contentSection.appendChild(carsHeading);
contentSection.appendChild(carsList);

/**
 * Heading for the factory list.
 * @type {HTMLHeadingElement}
 */
const factoriesHeading = document.createElement("h3");
factoriesHeading.textContent = "Factories";
contentSection.appendChild(factoriesHeading);
contentSection.appendChild(factoriesList);
