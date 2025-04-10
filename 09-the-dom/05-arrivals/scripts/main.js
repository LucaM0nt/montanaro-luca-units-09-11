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

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function incomingFlightsToRender() {
  let flightToMove = incomingFlights.shift();
  if (flightToMove) {
    flightsToRender.push(flightToMove);
  }
}

function updateFlightStatus() {
  if (flightsToRender.length == 0) {
    return; // Exit early if there are no flights to update
  }

  flightsToRender.forEach((flight, index) => {
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
        flight.status = "Departing";
        break;
      case "Departing":
        flight.status = "In Flight";
        setTimeout(removeDepartedFlight, 5000, flight);
        break;
    }
  });
}

function renderFlights() {
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  
  if (flightsToRender.length == 0) {
    return;
  }

  flightsToRender.forEach((flight) => {
    let tRow = document.createElement("tr");
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
    flightInfos.forEach((text) => {
      let tData = document.createElement("td");
      tData.textContent = text;
      tRow.appendChild(tData);
    });
    table.appendChild(tRow);
  });
}

function removeDepartedFlight(flightToRemove) {
  flightsToRender = flightsToRender.filter(
    (flight) => flight !== flightToRemove
  );
}

setInterval(incomingFlightsToRender, 10000);

setInterval(renderFlights, 1000);

setInterval(updateFlightStatus, 7000);

let exerciseSection = document.querySelector("main section:nth-of-type(2)");
let table = document.createElement("table");

// Add table headers
let headerRow = document.createElement("tr");

flightsData.forEach((headerText) => {
  let tHead = document.createElement("th");
  tHead.textContent = headerText;
  headerRow.appendChild(tHead);
});
table.appendChild(headerRow);
exerciseSection.appendChild(table);