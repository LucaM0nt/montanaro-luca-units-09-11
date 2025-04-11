function setMyInterval(callback, minDelay, maxDelay, times = Infinity) {
  const interval = { id: null };
  let count = 0;

  function repeat() {
    if (count < times) {
      callback();
      count++;
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      interval.id = setTimeout(repeat, randomDelay);
    } else {
      clearMyInterval(interval);
    }
  }

  const firstDelay = Math.random() * (maxDelay - minDelay) + minDelay;
  interval.id = setTimeout(repeat, firstDelay);
  return interval;
}

function clearMyInterval(interval) {
  clearTimeout(interval.id);
}

const dirtyDishes1stStack = [];
const dirtyDishes2ndStack = [];
const dirtyDishes3rdStack = [];
const cleanDishes = [];

let dishWasherStatus = {
  currently: "Working",
  workLoad: "Washing 2 dishes at a time from a max of 2 stacks",
  washingStacks: [
    "dirtyDishes1stStack",
    "dirtyDishes2ndStack"],
  dirtyDishes1stStack: dirtyDishes1stStack.length,
  dirtyDishes2ndStack: dirtyDishes2ndStack.length,
  dirtyDishes3rdStack: dirtyDishes3rdStack.length,
  cleanDishes: cleanDishes.length,
};

function loadDishes(dirtyDishesStack, stackId) {

  // Load a random number of dirty dishes between 10 and 15
  const dishesNumber = Math.floor(Math.random() * 6) + 10;

  for (let i = 1; i <= dishesNumber; i++) {
    dirtyDishesStack.push(`dish-${stackId}-${i}`);
  }
}

function washDish(dirtyDishesStack, stackName) {
  currentDish = dirtyDishesStack.pop();
  cleanDishes.push(currentDish);
}

function updateWashingStatus() {
    WashingStatusDiv.textContent = ""; // Clear the div before updating
    const h2 = document.createElement("h2");
    h2.textContent = "Dishwasher Status";
    const ul = document.createElement("ul");
    const liStatus = document.createElement("li");
    liStatus.textContent = `Status: ${dishWasherStatus.currently}`;
    const liWorkLoad = document.createElement("li");
    liWorkLoad.textContent = `Work Load: ${dishWasherStatus.workLoad}`;
    const liDirtyDishes1stStack = document.createElement("li");
    dirtyDishes1stStack.length > 0 ? liDirtyDishes1stStack.textContent = `Dirty Dishes 1st Stack: ${dirtyDishes1stStack.length}` : liDirtyDishes1stStack.textContent = `Dirty Dishes 1st Stack: Empty`;
    const liDirtyDishes2ndStack = document.createElement("li");
    dirtyDishes2ndStack.length > 0 ? liDirtyDishes2ndStack.textContent = `Dirty Dishes 2nd Stack: ${dirtyDishes2ndStack.length}` : liDirtyDishes2ndStack.textContent = `Dirty Dishes 2nd Stack: Empty`;
    const liDirtyDishes3rdStack = document.createElement("li");
    dirtyDishes3rdStack.length > 0 ? liDirtyDishes3rdStack.textContent = `Dirty Dishes 3rd Stack: ${dirtyDishes3rdStack.length}` : liDirtyDishes3rdStack.textContent = `Dirty Dishes 3rd Stack: Empty`;
    const liCleanDishes = document.createElement("li");
    cleanDishes.length > 0 ? liCleanDishes.textContent = `Cleaned Dishes: ${cleanDishes.length}` : liCleanDishes.textContent = `Clean Dishes: Empty`;
    ul.appendChild(liStatus);
    ul.appendChild(liWorkLoad);
    ul.appendChild(liDirtyDishes1stStack);
    ul.appendChild(liDirtyDishes2ndStack);
    ul.appendChild(liDirtyDishes3rdStack);
    ul.appendChild(liCleanDishes);
    WashingStatusDiv.appendChild(h2);
    WashingStatusDiv.appendChild(ul);
    exerciseSection.appendChild(WashingStatusDiv);
}

function createDishDiv(stack, stackName) {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const h2 = document.createElement("h2");
  h2.textContent = `${stackName}`;

  stack.forEach((dish) => {
    const li = document.createElement("li");
    li.textContent = dish;
    ul.appendChild(li);
  });

  div.appendChild(h2);
  div.appendChild(ul);
  return div;
}

let WashingStatusDiv = document.createElement("div");

function drawStacks() {

  exerciseSection.textContent = ""; // Clear the section before redrawing
  exerciseSection.appendChild(WashingStatusDiv);
  updateWashingStatus();
  exerciseSection.appendChild(createDishDiv(dirtyDishes1stStack, "1st stack"));
  exerciseSection.appendChild(createDishDiv(dirtyDishes2ndStack, "2nd stack"));
  exerciseSection.appendChild(createDishDiv(dirtyDishes3rdStack, "3rd stack"));
  exerciseSection.appendChild(createDishDiv(cleanDishes, "Cleaned dishes"));
}

function runSimulation() {
  drawStacks();

  const totalDishes =
    dirtyDishes1stStack.length +
    dirtyDishes2ndStack.length +
    dirtyDishes3rdStack.length;

  const intervalId = setMyInterval(
    () => {
      // Wash one dish from the 1st stack if available, otherwise from the 3rd stack
      dirtyDishes1stStack.length > 0
        ? washDish(dirtyDishes1stStack, "dirtyDishes1stStack")
        : dirtyDishes3rdStack.length > 0
        ? washDish(dirtyDishes3rdStack, "dirtyDishes3rdStack")
        : null;

      // Wash one dish from the 2nd stack if available, otherwise from the 3rd stack
      dirtyDishes2ndStack.length > 0
        ? washDish(dirtyDishes2ndStack, "dirtyDishes2ndStack")
        : dirtyDishes3rdStack.length > 0
        ? washDish(dirtyDishes3rdStack, "dirtyDishes3rdStack")
        : null;

      if (
        dirtyDishes1stStack.length === 0 &&
        dirtyDishes2ndStack.length === 0 &&
        dirtyDishes3rdStack.length === 0
      ) {
        dishWasherStatus.currently = "Finished";
        dishWasherStatus.workLoad = "All dishes are cleaned";
        clearMyInterval(intervalId); // Stop the simulation if all dishes are cleaned in case maxIterations is not reached
      }
      drawStacks();
    },
    1000, // Minimum delay
    3000, // Maximum delay
    Math.ceil(totalDishes / 2) // Maxiterations needed (2 dishes per iteration)
  );
}

let siteHead = document.head;
let newStylesheetLink = document.createElement("link");
newStylesheetLink.rel = "stylesheet";
newStylesheetLink.href = "./styles/style.css";
siteHead.appendChild(newStylesheetLink);

let exerciseSection = document.querySelector("main section:nth-of-type(2)");

// Load dirty dishes into the three stacks
loadDishes(dirtyDishes1stStack, "1st-stack");
loadDishes(dirtyDishes2ndStack, "2nd-stack");
loadDishes(dirtyDishes3rdStack, "3rd-stack");

// Start the simulation
runSimulation();
