/**
 * @file main.js
 * @description This script dynamically manages and displays flight information in a table.
 * It updates flight statuses, moves flights between arrays, and renders the table in real-time.
 * @author Luca Montanaro
 * @date April, 2025
 *
 *
 * @remarks
 * This script is designed to dynamically manage and display flight information in a table.
 * It simulates a real-time flight management system by handling incoming flights, updating their statuses,
 * and rendering the updated information in a table format.
 * Flights are periodically moved from the array`incomingFlights` to `flightsToRender`
 * to simulate the arrival of new flights.
 * The script uses a function to update the status of each flight in `flightsToRender`.
 * Flights progress through a series of predefined statuses,
 * such as "Landed," "At Gate," "Boarding," "Gate Closed," "Departing," and "In Flight."
 * Flights that reach the "In Flight" status are removed from the table after a specified delay.
 * Flights with a "Delayed" status are visually distinguished by applying a specific CSS class to their rows.
 * Additionally, it dynamically adds a stylesheet to the document head to style the table and its contents.
 */

/**
 * Array of column headers for the flight table.
 * @type {string[]}
 */
let flightsData = [
  "Flight Number",
  "Airline",
  "From",
  "To",
  "Gate",
  "Scheduled Departure",
  "Actual Departure",
  "Scheduled Arrival",
  "Status",
];

/**
 * Array of incoming flights, each represented as an object with flight details.
 * @type {Array<{flightNumber: string, airline: string, comingFrom: string, goingTo: string, gate: string, scheduledDeparture: string, actualDeparture: string, scheduledArrival: string, status: string}>}
 */
let incomingFlights = [
  {
    flightNumber: "BA4567",
    airline: "British Airways",
    comingFrom: "Rome Fiumicino",
    goingTo: "London Gatwick",
    gate: "A08",
    scheduledDeparture: "18:30",
    actualDeparture: "18:32",
    scheduledArrival: "20:05",
    status: "Landed",
  },
  {
    flightNumber: "KL6789",
    airline: "KLM",
    comingFrom: "Milan Linate",
    goingTo: "Amsterdam Schiphol",
    gate: "B05",
    scheduledDeparture: "19:00",
    actualDeparture: "19:40",
    scheduledArrival: "20:50",
    status: "Landed",
  },
  {
    flightNumber: "AZ1234",
    airline: "Alitalia",
    comingFrom: "Milan Linate",
    goingTo: "London Heathrow",
    gate: "B12",
    scheduledDeparture: "19:45",
    actualDeparture: "19:50",
    scheduledArrival: "21:15",
    status: "Landed",
  },
  {
    flightNumber: "VY7890",
    airline: "Vueling",
    comingFrom: "Milan Linate",
    goingTo: "Barcelona El Prat",
    gate: "C03",
    scheduledDeparture: "20:10",
    actualDeparture: "20:55",
    scheduledArrival: "22:30",
    status: "Landed",
  },
  {
    flightNumber: "U28231",
    airline: "easyJet",
    comingFrom: "Naples Capodichino",
    goingTo: "London Luton",
    gate: "C10",
    scheduledDeparture: "20:15",
    actualDeparture: "20:20",
    scheduledArrival: "22:20",
    status: "Landed",
  },
  {
    flightNumber: "IB3344",
    airline: "Iberia",
    comingFrom: "Madrid Barajas",
    goingTo: "London Gatwick",
    gate: "B18",
    scheduledDeparture: "20:30",
    actualDeparture: "20:34",
    scheduledArrival: "22:25",
    status: "Landed",
  },
  {
    flightNumber: "AF1357",
    airline: "Air France",
    comingFrom: "Paris Charles de Gaulle",
    goingTo: "London Heathrow",
    gate: "A12",
    scheduledDeparture: "20:45",
    actualDeparture: "20:47",
    scheduledArrival: "22:10",
    status: "Landed",
  },
  {
    flightNumber: "LH2345",
    airline: "Lufthansa",
    comingFrom: "Berlin Brandenburg",
    goingTo: "London Heathrow",
    gate: "D22",
    scheduledDeparture: "21:00",
    actualDeparture: "21:00",
    scheduledArrival: "22:30",
    status: "Landed",
  },
  {
    flightNumber: "SK5567",
    airline: "SAS",
    comingFrom: "Copenhagen",
    goingTo: "London Heathrow",
    gate: "D10",
    scheduledDeparture: "21:15",
    actualDeparture: "21:17",
    scheduledArrival: "22:45",
    status: "Landed",
  },
];
/**
 * Array of flights currently being rendered in the table.
 * @type {Array<{flightNumber: string, airline: string, comingFrom: string, goingTo: string, gate: string, scheduledDeparture: string, actualDeparture: string, scheduledArrival: string, status: string}>}
 */
let flightsToRender = [
  {
    flightNumber: "SK5567",
    airline: "SAS",
    comingFrom: "Copenhagen",
    goingTo: "London Heathrow",
    gate: "D10",
    scheduledDeparture: "17:30",
    actualDeparture: "17:32",
    scheduledArrival: "19:05",
    status: "Landed",
  },
];

/**
 * Generates a random integer between `min` and `max` (inclusive).
 * 
 * @param {number} min - The minimum value for the random integer.
 * @param {number} max - The maximum value for the random integer.
 * @returns {number} A random integer between `min` and `max`.
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Moves the first flight from `incomingFlights` to `flightsToRender`.
 * @returns {void} This function does not return a value.
 */
function incomingFlightsToRender() { //moves incoming flights to rendered table array
  let flightToMove = flightsDatabase.shift();
  if (flightToMove) {
    flightsToRender.push(flightToMove);
  }
}

/**
 * Updates the status of each flight in `flightsToRender`.
 * Flights progress through predefined statuses such as "Landed," "At Gate," "Boarding," etc.
 * If a flight reaches the "In Flight" status, it is removed after a delay.
 * 
 * @returns {void} This function does not return a value.
 */
function updateFlightStatus() {
  // check there are flights to change
  if (flightsToRender.length == 0) {
    return;
  }

  flightsToRender.forEach((flight) => {
    // create a randomizer for delays
    let flightDelayedRandomizer = randomInt(0, 1);
    // switch status to the next and handles delays
    switch (flight.status) {
      case "Landed":
        flight.status = "At Gate";
        break;
      case "At Gate":
        flight.status = "Boarding";
        break;
      case "Boarding":
        flight.status = "Gate Closed";
        break;
      case "Gate Closed":
        flight.status = flightDelayedRandomizer == 0 ? "Departing" : "Delayed";
        break;
      case "Delayed":
        if (flightDelayedRandomizer == 0) {
          flight.status = "Departing";
        }
        break;
      case "Departing":
        flight.status = "In Flight";
        // removes flights after 1min if they left
        setTimeout(removeDepartedFlight, 60000, flight);
        break;
    }
  });
}

/**
 * Renders the flights in `flightsToRender` into a table.
 * Clears the table of all rows except the header before repopulating it with updated flight information.
 * Flights with a "Delayed" status are visually distinguished by applying a specific CSS class to their rows.
 * 
 * @returns {void} This function does not return a value.
 */
function renderFlights() {
  // reset table to redraw
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  // checks there are flights to render
  if (flightsToRender.length == 0) {
    return;
  }

  flightsToRender.forEach((flight) => {
    let tRow = document.createElement("tr");
    // array of current flight infos
    let flightInfos = [
      flight.flightNumber,
      flight.airline,
      flight.comingFrom,
      flight.goingTo,
      flight.gate,
      flight.scheduledDeparture,
      flight.actualDeparture,
      flight.scheduledArrival,
      flight.status,
    ];
    // gives delayed class to row if felayed
    if (flight.status === "Delayed") {
      tRow.className = "delayed";
    }
    // iterates to array flight infos to compile row data
    flightInfos.forEach((text) => {
      let tData = document.createElement("td");
      tData.textContent = text;
      tRow.appendChild(tData);
    });
    table.appendChild(tRow);
  });
}

/**
 * Removes a flight from `flightsToRender` once it departs.
 * 
 * @param {Object} flightToRemove - The flight object to remove from the `flightsToRender` array.
 * @returns {void} This function does not return a value.
 */
function removeDepartedFlight(flightToRemove) {
  // filter iterates an array returning a new one with the values which 
  // return true in the arrow function
  flightsToRender = flightsToRender.filter(
    (flight) => flight !== flightToRemove
  );
}

setInterval(incomingFlightsToRender, 10000);
setInterval(renderFlights, 1000);
setInterval(updateFlightStatus, 7000);

/**
 * The section in the main element where the flight table will be appended.
 * @type {HTMLElement}
 */
let exerciseSection = document.querySelector("main section:nth-of-type(2)");

/**
 * The table element dynamically created to display flight information.
 * @type {HTMLTableElement}
 */
let table = document.createElement("table");


/**
 * Represents a table row element created dynamically.
 * @type {HTMLTableRowElement}
 */
let headerRow = document.createElement("tr");
flightsDatabase.forEach((headerText) => { // Add table headers
  let tHead = document.createElement("th");
  tHead.textContent = headerText;
  headerRowArrival.appendChild(tHead);
});
table.appendChild(headerRowArrival);
exerciseSection.appendChild(table);

/**
 * The <head> element of the document where a new stylesheet is dynamically added.
 * @type {HTMLHeadElement}
 */
let siteHead = document.head;

/**
 * The new stylesheet link element dynamically added to the document head.
 * @type {HTMLLinkElement}
 */
let newStylesheetLink = document.createElement("link");
newStylesheetLink.rel = "stylesheet";
newStylesheetLink.href = "./styles/style.css";
console.log(newStylesheetLink);
siteHead.appendChild(newStylesheetLink);
