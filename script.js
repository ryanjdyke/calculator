let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let displayValue = null;


const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");
const topAnswerDisplay = document.querySelector("#topAnswerDisplay")
const bottomAnswerDisplay = document.querySelector("#bottomAnswerDisplay")

equalsButton.addEventListener("click", () => evaluate());

numberButtons.forEach((button) => 
  button.addEventListener("click", () => addToDisplay(button.textContent))
)

operatorButtons.forEach((button) => 
  button.addEventListener("click", () => setOperation(button.textContent))
)

function addToDisplay(number) {
  bottomAnswerDisplay.textContent += number;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = bottomAnswerDisplay.textContent;
  currentOperation = operator;
  topAnswerDisplay.textContent = `${firstOperand} ${currentOperation}`;
  clearBottomAnswerDisplay();
}

function clearBottomAnswerDisplay() {
  bottomAnswerDisplay.textContent = "";
}

function evaluate() {
  if (currentOperation === null) return;
  secondOperand = bottomAnswerDisplay.textContent;
  topAnswerDisplay.textContent += secondOperand;
  bottomAnswerDisplay.textContent = operate(currentOperation, firstOperand, secondOperand);

}

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
    return a / b;
}

function power(a, b) {
	return a ** b;
};

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch(operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "**":
      return power(num1, num2);
    default:
      return console.log("Operation Error");
  }
}