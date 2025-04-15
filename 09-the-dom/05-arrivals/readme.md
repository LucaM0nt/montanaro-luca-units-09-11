# Arrivals ✈️

This project dynamically manages and displays flight information in a table by modifying the DOM using JavaScript. It simulates a real-time flight management system by handling incoming flights, updating their statuses, and rendering the updated information in a table format.

## Assignment 📝

> - Implement the arrivals page of an airport such as this one
>   - Create a complete proper webpage with a title, description and all other HTML tags
>   - Add Javascript and CSS files
>   - Include as much detail as you can to each flight row
>   - Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc
> - Simulate a real arrivals list
>   - The list should start empty and update every 10 seconds
>   - Flights that have arrived should be removed after 60 seconds
>   - Flights should change status in time. E.g. departing>on_time>delayed>arrived
>   - Flights that are delayed should be displayed in red
>   - New flights should be added to the bottom of the list
>   - The list should be sorted by date and hour


## Usage 🛠️

To see this script in action, you can open the current folder [Index.html](./index.html)

## Functions 📋

The script defines the following key functions:
- `randomInt(min, max)`: Generates a random integer between `min` and `max`.
- `incomingFlightsToRender()`: Moves flights from the `incomingFlights` array to the `flightsToRender` array.
- `updateFlightStatus()`: Updates the status of each flight in the `flightsToRender` array.
- `renderFlights()`: Renders the flights in the `flightsToRender` array into a table.
- `removeDepartedFlight(flightToRemove)`: Removes a flight from the `flightsToRender` array after it departs.

## Variables Table 📊

| Variable Name         | Type                     | Description                                                                 |
|-----------------------|--------------------------|-----------------------------------------------------------------------------|
| `flightsData`         | `string[]`              | Array of column headers for the flight table.                              |
| `incomingFlights`     | `Array<Object>`         | Array of incoming flights with details such as flight number and status.   |
| `flightsToRender`     | `Array<Object>`         | Array of flights currently being rendered in the table.                    |
| `exerciseSection`     | `HTMLElement`           | The section in the main element where the flight table is appended.         |
| `table`               | `HTMLTableElement`      | The table element dynamically created to display flight information.        |
| `headerRow`           | `HTMLTableRowElement`   | The header row of the flight table.                                         |
| `siteHead`            | `HTMLHeadElement`       | The `<head>` element of the document where a new stylesheet is dynamically added. |
| `newStylesheetLink`   | `HTMLLinkElement`       | The new stylesheet link element dynamically added to the document head.     |

## Example Output 📤

After running the script, the "Flight Arrivals Tracker" page will:
1. Display a table of flights with details such as flight number, airline, and status.
2. Periodically update the table to simulate new arrivals and status changes.
3. Highlight delayed flights with a specific style.
4. Dynamically load a stylesheet to enhance the table's appearance.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)