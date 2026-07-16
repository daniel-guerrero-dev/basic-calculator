import "./style.css";

const buttons = document.querySelector('[data-input="buttons"]');
const display = document.querySelector('[data-display="display"]');

let memory = [];
let result = "";
display.textContent = 0;

buttons.onclick = function (event) {
  let button = event.target.textContent;
  if (display.textContent === "0") {
    display.textContent = "";
  }

  if (!isNaN(button) && button != "") {
    display.textContent += button;
  }

  switch (button) {
    case "CE":
      memory.splice(0, memory.length);
      display.textContent = 0;
      break;
    case "+":
      memory.push(display.textContent);
      memory.push("+");
      display.textContent = 0;
      break;
    case "-":
      memory.push(display.textContent);
      memory.push("-");
      display.textContent = 0;
      break;
    case "*":
      memory.push(display.textContent);
      memory.push("*");
      display.textContent = 0;
      break;
    case "/":
      memory.push(display.textContent);
      memory.push("/");
      display.textContent = 0;
      break;
    case "=":
      memory.push(display.textContent);
      for (let i = 0; i < memory.length; i++) {
        result += memory[i];
      }
      let numberDisplay = eval(result);

      display.textContent = numberDisplay;
      numberDisplay = "";
      memory.splice(0, memory.length);
      result = "";
  }
};
