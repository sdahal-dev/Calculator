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
