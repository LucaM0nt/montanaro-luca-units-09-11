let catWalkIntervalId
let catLoopIntervalId;
let catBackForthIntervalId;
let catPauseIntervalId;

let catImg = document.querySelector(
  "img[src='http://www.anniemation.com/clip_art/images/cat-walk.gif']"
);

function catWalk(cat, direction = "right") {
  step = 10;
  const dir = direction === "left" ? -1 : 1; // converts "R" and "L" to a numeric direction
  const currentLeft = parseInt(getComputedStyle(cat).left) || 0; // get the current value for the property left: getComputedStyle gets an object with all the css properties, .left gets that specific value and parseInt makes it a number
  cat.style.left = currentLeft + step * dir + "px";
}

function defaultCatWalk(cat) {
    cat.style.left = "-270px";
    catWalkIntervalId = setInterval(catWalk, 50, cat);
}

function catTurnsAroundCheck(cat, direction) {
  const catLeft = parseInt(cat.style.left);
  const catWidth = cat.offsetWidth;
  const windowWidth = window.innerWidth;

  if (catLeft + catWidth >= windowWidth) {
    cat.style.transform = "scaleX(-1)"; // gira il gatto a sinistra
    return "left";
  } else if (catLeft <= 0) {
    cat.style.transform = "scaleX(1)"; // gira il gatto a destra
    return "right";
  }
  return direction;
}

function catLoop(cat) {
  cat.style.left = "-270px";

  catLoopIntervalId = setInterval(() => {
    const catLeft = parseInt(cat.style.left);
    const catWidth = cat.offsetWidth; //layout width of the element passed
    const windowWidth = window.innerWidth;

    if (catLeft > windowWidth) {
      cat.style.left = "-" + catWidth + "px"; // ricomincia da sinistra fuori schermo
    }
    catWalk(cat, "right");
  }, 50);
}

function catBackForth(cat) {
  cat.style.left = "-270px";
  let direction = "right";

  catBackForthIntervalId = setInterval(() => {
    direction = catTurnsAroundCheck(cat, direction);
    catWalk(cat, direction);
  }, 50);
}

function catPause(cat) {
  cat.style.left = "-270px";
  let paused = false;
  let direction = "right";

  catPauseIntervalId = setInterval(() => {
    if (paused) return;

    const catLeft = parseInt(cat.style.left);
    const catWidth = cat.offsetWidth;
    const windowWidth = window.innerWidth;

    const center = windowWidth / 2 - catWidth / 2;

    if (Math.abs(catLeft - center) < 5) {
      paused = true;
      catImg.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Rtd3F2dzFtZHN0dzE4enRhaDRsNHcxOXlhZTB1NDhwaTJrMHljaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mlvseq9yvZhba/giphy.gif"
      setTimeout(() => {
        paused = false;
        catImg.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
      }, 10000); // pausa di 10 secondi
    }
    direction = catTurnsAroundCheck(cat, direction);
    catWalk(cat, direction);
  }, 50);
}

function clearAllIntervals() {
  clearInterval(catWalkIntervalId);
  clearInterval(catLoopIntervalId);
  clearInterval(catBackForthIntervalId);
  clearInterval(catPauseIntervalId);
}

// Funzione per gestire l'abilitazione/disabilitazione dei bottoni
function updateButtonStates(activeButtonId) {
  const buttons = ["default", "catLoop", "catBackForth", "catStop"];
  buttons.forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    button.disabled = buttonId === activeButtonId; // disabled disabilita se true, la condizione è true solo se l'id è quello del tasto selezionato
  });
}

// Event listeners per i bottoni
let defaultButton = document.getElementById("default");
defaultButton.addEventListener("click", () => {
  clearAllIntervals();
  defaultCatWalk(catImg);
  updateButtonStates("default"); // Aggiorna lo stato dei bottoni
});

let variant1Button = document.getElementById("catLoop");
variant1Button.addEventListener("click", () => {
  clearAllIntervals();
  catLoop(catImg);
  updateButtonStates("catLoop"); // Aggiorna lo stato dei bottoni
});

let variant2Button = document.getElementById("catBackForth");
variant2Button.addEventListener("click", () => {
  clearAllIntervals();
  catBackForth(catImg);
  updateButtonStates("catBackForth"); // Aggiorna lo stato dei bottoni
});

let variant3Button = document.getElementById("catStop");
variant3Button.addEventListener("click", () => {
  clearAllIntervals();
  catPause(catImg);
  updateButtonStates("catStop"); // Aggiorna lo stato dei bottoni
});

defaultCatWalk(catImg)