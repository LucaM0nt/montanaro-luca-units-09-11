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
let arrivalFlightsData = [
  "Flight Number",
  "Airline",
  "From",
  "Gate",
  "Scheduled Arrival",
  "Status",
];

/**
 * Array of column headers for the flight table.
 * @type {string[]}
 */
let departureFlightsData = [
  "Flight Number",
  "Airline",
  "To",
  "Gate",
  "Scheduled Departure",
  "Status",
];

/**
 * Array of incoming flights, each represented as an object with flight details.
 * @type {Array<{flightNumber: string, airline: string, comingFrom: string, goingTo: string, gate: string, scheduledArrival: string, status: string}>}
 */
let flightsDatabase = [
  {
    flightNumber: "BA4567",
    airline: "British Airways",
    comingFrom: "Rome Fiumicino",
    goingTo: "London Gatwick",
    gate: "A08",
    scheduledDeparture: "20:05",
    scheduledArrival: "18:30",
    status: "Arriving",
  },
  {
    flightNumber: "KL6789",
    airline: "KLM",
    comingFrom: "Milan Linate",
    goingTo: "Amsterdam Schiphol",
    gate: "B05",
    scheduledDeparture: "20:50",
    scheduledArrival: "19:00",
    status: "Arriving",
  },
  {
    flightNumber: "AZ1234",
    airline: "Alitalia",
    comingFrom: "Milan Linate",
    goingTo: "London Heathrow",
    gate: "B12",
    scheduledDeparture: "21:15",
    scheduledArrival: "19:45",
    status: "Arriving",
  },
  {
    flightNumber: "VY7890",
    airline: "Vueling",
    comingFrom: "Milan Linate",
    goingTo: "Barcelona El Prat",
    gate: "C03",
    scheduledDeparture: "22:30",
    scheduledArrival: "20:10",
    status: "Arriving",
  },
  {
    flightNumber: "U28231",
    airline: "easyJet",
    comingFrom: "Naples Capodichino",
    goingTo: "London Luton",
    gate: "C10",
    scheduledDeparture: "22:20",
    scheduledArrival: "20:15",
    status: "Arriving",
  },
  {
    flightNumber: "IB3344",
    airline: "Iberia",
    comingFrom: "Madrid Barajas",
    goingTo: "London Gatwick",
    gate: "B18",
    scheduledDeparture: "22:25",
    scheduledArrival: "20:30",
    status: "Arriving",
  },
  {
    flightNumber: "AF1357",
    airline: "Air France",
    comingFrom: "Paris Charles de Gaulle",
    goingTo: "London Heathrow",
    gate: "A12",
    scheduledDeparture: "22:10",
    scheduledArrival: "20:45",
    status: "Arriving",
  },
  {
    flightNumber: "LH2345",
    airline: "Lufthansa",
    comingFrom: "Berlin Brandenburg",
    goingTo: "London Heathrow",
    gate: "D22",
    scheduledDeparture: "22:30",
    scheduledArrival: "21:00",
    status: "Arriving",
  },
  {
    flightNumber: "SK5567",
    airline: "SAS",
    comingFrom: "Copenhagen",
    goingTo: "London Heathrow",
    gate: "D10",
    scheduledDeparture: "22:45",
    scheduledArrival: "21:15",
    status: "Arriving",
  },
];

/**
 * Array of flights currently being rendered in the table.
 * @type {Array<{flightNumber: string, airline: string, comingFrom: string, goingTo: string, gate: string, scheduledDeparture: string, actualDeparture: string, scheduledArrival: string, status: string}>}
 */
let flightsToRender = [
  {
    flightNumber: "SK5765",
    airline: "SAS",
    comingFrom: "Copenhagen",
    goingTo: "London Heathrow",
    gate: "D10",
    scheduledDeparture: "20:00",
    scheduledArrival: "18:15",
    status: "Arriving",
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
function incomingFlightsToRender() {
  //moves incoming flights to rendered table array
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
      case "Arriving":
        flight.status = flightDelayedRandomizer == 0 ? "Landed" : "Delayed";
        break;
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
        break;
      case "Delayed":
        if (flightDelayedRandomizer == 0) {
          flight.status = "Landed";
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

// Dichiarazione globale della variabile expandedRow
let expandedRow = null; // Mantenere lo stato della riga espansa
let expandedFlightNumber = null; // Mantenere lo stato della riga espansa

function renderFlights() {
  // Reset della tabella prima di renderizzare
  while (table.firstChild) table.removeChild(table.firstChild);

  // Verifica che ci siano voli da renderizzare
  if (flightsToRender.length == 0) {
    return;
  }

  let headerRowArrival = document.createElement("tr");
  let flightData = currentView === "arrivals" ? arrivalFlightsData : departureFlightsData;
  flightData.forEach((headerText) => {
    let tHead = document.createElement("th");
    tHead.textContent = headerText;
    headerRowArrival.appendChild(tHead);
  });
  table.appendChild(headerRowArrival);
  exerciseSection.appendChild(table);

  flightsToRender.forEach((flight) => {
    let tRow = document.createElement("tr");

    // Array con le informazioni del volo
    const flightInfos =
      currentView === "arrivals"
        ? [flight.flightNumber, flight.airline, flight.comingFrom, flight.gate, flight.scheduledArrival, flight.status,]
        : [flight.flightNumber, flight.airline, flight.goingTo, flight.gate, flight.scheduledDeparture, flight.status,];

    // Assegna la classe "delayed" alla riga se il volo è in ritardo
    if (flight.status === "Delayed") {
      tRow.className = "delayed";
    }

    // Itera attraverso le informazioni del volo per aggiungere le celle alla riga
    flightInfos.forEach((text) => {
      let tData = document.createElement("td");
      tData.textContent = text;
      tRow.appendChild(tData);
    });

    // Aggiungi l'evento di clic per espandere/collassare l'accordion
    tRow.addEventListener("click", (event) => {
      const clickedRow = event.currentTarget;
      expandRow(clickedRow, flight);
    });

    table.appendChild(tRow);

    // Controlla se il volo corrente è quello espanso
    if (flight.flightNumber === expandedFlightNumber) {
      expandRow(tRow, flight); // Espandi la riga corrispondente
    }
  })

}

function expandRow(row, flight) {
  // Se c'è una riga espansa e non è quella appena cliccata, chiudi l'accordion
  if (expandedRow && expandedRow !== row) {
    if (expandedRow.nextSibling && expandedRow.nextSibling.classList.contains("details-row")) {
      expandedRow.nextSibling.remove(); // Rimuove la riga dei dettagli
    }
    expandedRow.classList.remove("expanded");
  }

  // Se clicchi la stessa riga, la chiudi
  if (row.classList.contains("expanded")) {
    if (row.nextSibling && row.nextSibling.classList.contains("details-row")) {
      row.nextSibling.remove();
    }
    row.classList.remove("expanded");
    expandedRow = null; // Resetta la riga espansa
    expandedFlightNumber = null; // Resetta il numero del volo espanso
  } else {
    // Altrimenti, espandi la riga
    const detailsRow = document.createElement("tr");
    detailsRow.classList.add("details-row");
    const detailsCell = document.createElement("td");
    detailsCell.colSpan = 6; // Cambia il colSpan in base al numero di colonne
    detailsCell.textContent = `Details flight number: ${flight.flightNumber} of the ${flight.airline} company, 
      Gate: ${flight.gate}, 
      State: ${flight.status}`;
    detailsRow.appendChild(detailsCell);
    row.after(detailsRow); // Aggiungi la riga dei dettagli dopo la riga cliccata
    row.classList.add("expanded");
    expandedRow = row; // Aggiorna expandedRow per mantenere la riga espansa
    expandedFlightNumber = flight.flightNumber; // Salva il numero del volo espanso
  }
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

const arrivalsBtn = document.createElement("button");
arrivalsBtn.textContent = "Arrivals";
const departuresBtn = document.createElement("button");
departuresBtn.textContent = "Departures";
exerciseSection.append(arrivalsBtn, departuresBtn);

arrivalsBtn.addEventListener("click", () => {
  if (currentView !== "arrivals") {
    fadeOutIn(() => {
      currentView = "arrivals";
      renderFlights();
      arrivalsBtn.disabled = true;
      departuresBtn.disabled = false;
    });
  }
});

departuresBtn.addEventListener("click", () => {
  if (currentView !== "departures") {
    fadeOutIn(() => {
      currentView = "departures";
      renderFlights();
      departuresBtn.disabled = true;
      arrivalsBtn.disabled = false;
    });
  }
});

/**
 * The table element dynamically created to display flight information.
 * @type {HTMLTableElement}
 */
let table = document.createElement("table");

let currentView = "arrivals";
arrivalsBtn.disabled = true;

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
siteHead.appendChild(newStylesheetLink);

function fadeOutIn(callback) {
  table.classList.add("fade-out");
  setTimeout(() => {
    callback();
    table.classList.remove("fade-out");
    table.classList.add("fade-in");
    setTimeout(() => {
      table.classList.remove("fade-in");
    }, 500);
  }, 300);
}
