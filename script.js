let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.value);
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(event.target.value);
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  console.log(currentNumber);
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result =
        (parseFloat(prevNumber) * 10 + parseFloat(currentNumber * 10)) / 10;
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  console.log("AC pressed");
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  console.log(event.target.value);
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", (event) => {
  inputPercentage();
  console.log(currentNumber);
  updateScreen(currentNumber);
});

const inputPercentage = () => {
  currentNumber /= 100;
};
