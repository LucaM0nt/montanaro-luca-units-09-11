let catWalkIntervalId;
let catLoopIntervalId;
let catSpeed = 15;

let catImg = document.querySelector(
  "img[src='http://www.anniemation.com/clip_art/images/cat-walk.gif']"
);

function catWalk(cat, direction = "right", speed = 15) {
  const dir = direction === "left" ? -1 : 1; // converts "R" and "L" to a numeric direction
  const currentLeft = parseInt(getComputedStyle(cat).left) || 0; // get the current value for the property left: getComputedStyle gets an object with all the css properties, .left gets that specific value and parseInt makes it a number
  cat.style.left = currentLeft + speed * dir + "px";
}

function defaultCatWalk(cat) {
  cat.style.left = "-270px";
  catWalkIntervalId = setInterval(catWalk, 50, cat);
}

function catLoop(cat, speed) {
  if (!cat.style.left) cat.style.left = "-270px";

  catLoopIntervalId = setInterval(() => {
    const catLeft = parseInt(cat.style.left);
    const catWidth = cat.offsetWidth; //layout width of the element passed
    const windowWidth = window.innerWidth;

    if (catLeft > windowWidth) {
      cat.style.left = "-" + catWidth + "px"; // ricomincia da sinistra fuori schermo
    }
    catWalk(cat, "right", speed);
  }, 50);
}

// Event listeners per i bottoni
let startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  catLoop(catImg);
  catWalkInfo.textContent = "Cat is walking at avarage speed";
  startButton.disabled = true;
  stopButton.disabled = false;
  slowerButton.disabled = false;
  fasterButton.disabled = false;
});

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
  catSpeed = 15;
  clearInterval(catLoopIntervalId);
  catWalkInfo.textContent = "Cat stopped"
  stopButton.disabled = true;
  startButton.disabled = false;
  slowerButton.disabled = true;
  fasterButton.disabled = true;
});

let fasterButton = document.getElementById("faster");
fasterButton.addEventListener("click", () => {
  catSpeed += 5;
  clearInterval(catLoopIntervalId);
  catWalkInfo.textContent = `Cat is walking at a speed of ${catSpeed}`
  catLoop(catImg, catSpeed);
});

let slowerButton = document.getElementById("slower");
slowerButton.addEventListener("click", () => {
  catSpeed -= 5;
  if (catSpeed === 0) {
    clearInterval(catLoopIntervalId);
    catSpeed = 15;
    catWalkInfo.textContent = "Cat stopped"
    stopButton.disabled = true;
    startButton.disabled = false;
    slowerButton.disabled = true;
    fasterButton.disabled = true;
    return
  }
  clearInterval(catLoopIntervalId);
  catWalkInfo.textContent = `Cat is walking at a speed of ${catSpeed}`
  catLoop(catImg, catSpeed);
});

stopButton.disabled = true;
startButton.disabled = false;
slowerButton.disabled = true;
fasterButton.disabled = true;

let catWalkInfo = document.createElement("p");
catWalkInfo.textContent = "Make the cat come pressing `Start`";
let mainSection = document.querySelector("main section:nth-of-type(2)");
mainSection.appendChild(catWalkInfo);
