# Enhanced Arrivals ✈️

This project dynamically manages and displays flight information in a table. It simulates a real-time flight management system, allowing users to toggle between arrivals and departures views, track flight statuses, and expand rows to view detailed flight information.

## Assignment 📝

> - Start with the ‘Arrivals’ exercise from a previous lesson
> - Add the following features:
>   - When the user clicks a row, it should expand to show more information about the flight
>   - When the user clicks an open row it should close again
>   - If the user clicks a row, any other open rows should close
>   - Add a ‘Departures’ section with departing flights
>   - The user should be able to switch between Arrivals and Departures with a fade-in/fade-out
animation

## Usage 🛠️

To see this script in action, open the current folder's [Index.html](./index.html) file in your browser. Use the "Arrivals" and "Departures" buttons to toggle between views. Click on a flight row to expand it and view detailed flight information.

## Functions 📋

The script defines the following key functions:

- `randomInt(min, max)`: Generates a random integer between `min` and `max` (inclusive).
- `incomingFlightsToRender()`: Moves the first flight from the `flightsDatabase` array to the `flightsToRender` array.
- `updateFlightStatus()`: Updates the status of each flight in `flightsToRender` based on predefined statuses.
- `renderFlights()`: Renders the flights in `flightsToRender` into a table and applies visual distinctions for delayed flights.
- `expandRow(row, flight)`: Expands or collapses a row to show or hide detailed flight information.
- `removeDepartedFlight(flightToRemove)`: Removes a flight from `flightsToRender` once it departs.
- `fadeOutIn(callback)`: Applies a fade-out effect to the table, executes a callback function, and then applies a fade-in effect.

## Variables Table 📊

| Variable Name         | Type               | Description                                                                 |
|-----------------------|--------------------|-----------------------------------------------------------------------------|
| `arrivalFlightsData`  | `string[]`         | Array of column headers for the arrivals flight table.                     |
| `departureFlightsData`| `string[]`         | Array of column headers for the departures flight table.                   |
| `flightsDatabase`     | `Array<Object>`    | Array of incoming flights, each represented as an object with flight details. |
| `flightsToRender`     | `Array<Object>`    | Array of flights currently being rendered in the table.                    |
| `exerciseSection`     | `HTMLElement`      | The section in the main element where the flight table is appended.        |
| `arrivalsBtn`         | `HTMLButtonElement`| The button for switching to the arrivals view.                             |
| `departuresBtn`       | `HTMLButtonElement`| The button for switching to the departures view.                           |
| `table`               | `HTMLTableElement` | The table element dynamically created to display flight information.       |
| `currentView`         | `string`           | The current view of the table ("arrivals" or "departures").                |
| `expandedRow`         | `HTMLTableRowElement` or `null` | The currently expanded row in the table.                                  |
| `expandedFlightNumber`| `string` or `null`    | The flight number of the currently expanded row.                           |

## Example Usage and Output 📤

1. **Arrivals View**:
   - Displays a table of arriving flights with details such as flight number, airline, origin, gate, scheduled arrival, and status.

2. **Departures View**:
   - Displays a table of departing flights with details such as flight number, airline, destination, gate, scheduled departure, and status.

3. **Flight Status Updates**:
   - Flights progress through statuses such as "Landed," "At Gate," "Boarding," and "In Flight."
   - Delayed flights are visually distinguished with a specific CSS class.

4. **Row Expansion**:
   - Clicking on a flight row expands it to show detailed flight information.

5. **Real-Time Updates**:
   - Flights are dynamically moved from the database to the rendered table.
   - The table is updated every second, and flight statuses are updated every 7 seconds.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)