const display = document.getElementById("display");

function showDisplay(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
function clearDisplay() {
  display.value = "";
}

document.addEventListener("keydown", (event) => {
  const allowedKeys = "0123456789+-*/=^.";

  if (allowedKeys.includes(event.key)) {
    showDisplay(event.key === "^" ? "**" : event.key);
  }
  if (event.key === "=" || event.key === "Enter") {
    calculate();
    if (event.key === "Backspace") {
      clearDisplay();
    }
  }
  if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});
