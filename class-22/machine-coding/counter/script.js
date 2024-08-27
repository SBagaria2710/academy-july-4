const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset-button");
const stepper = document.getElementById("changeBy");

incrementBtn.addEventListener("click", function () {
  let newValue = Number(counterValue.textContent) + Number(stepper.value);
  counterValue.textContent = newValue;
});

decrementBtn.addEventListener("click", function () {
  let newValue = Number(counterValue.textContent) - Number(stepper.value);

  if (newValue < 0) {
    counterValue.textContent = 0;
  } else {
    counterValue.textContent = newValue;
  }
});

resetBtn.addEventListener("click", function () {
  counterValue.textContent = 0;
});
