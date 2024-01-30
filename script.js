//get elements from the dom, assign as variables and set counter starting position to 0
let counterValue = document.getElementById("counter-No");
let entries = document.getElementById("entries");
const resetBtn = document.getElementById("reset-Btn");
const decreaseBtn = document.getElementById("decrease-Btn");
const increaseBtn = document.getElementById("increase-Btn");
const saveBtn = document.getElementById("save-Btn");

//add event listener & increase by 1 functions to increment buttons
function increment() {
  count = counterValue.textContent++;
}

increaseBtn.addEventListener("click", increment);
//the increment function don't need to be called inside the event listener, why?

//add event listener & decrease by 1 functions to decrement buttons
function decrement() {
  count = counterValue.textContent--;
}

decreaseBtn.addEventListener("click", decrement);

//add event listener & reset to 0 function to reset buttons
function reset() {
  count = counterValue.textContent = 0;
}

resetBtn.addEventListener("click", reset);

// add event listener and save function to save button

saveBtn.addEventListener("click", save);

function save() {
  entries.textContent += counterValue.textContent + ", ";
}
