// make story function
function makeStory() {
  let noun = document.querySelector("#noun").value;
  let adjective = document.querySelector("#adjective").value;
  let person = document.querySelector("#person").value;
  let story = `${person} really likes ${adjective} ${noun}`;
  let storyDiv = document.querySelector("#story");
  storyDiv.textContent = story
}

// add event listener su  #gen-button per click che esegua makeStory
let genButton = document.getElementById("gen-button");
genButton.addEventListener("click", makeStory);
