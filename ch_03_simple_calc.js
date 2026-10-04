const firstNumber = Number(prompt(`Enter the first number`));
const secondNumber = Number(prompt(`Enter the second number`));
const enteredOperation = prompt(`Enter +, -, * or / to proceed`);

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
  if (num2 === 0) {
    return `Can not divide by 0`;
  } else {
    return num1 / num2;
  }
};

switch (enteredOperation) {
  case `+`:
    alert(`The result is: ${add(firstNumber, secondNumber)}`);
    break;
  case `-`:
    alert(`The result is: ${substract(firstNumber, secondNumber)}`);
    break;
  case `*`:
    alert(`The result is: ${multiply(firstNumber, secondNumber)}`);
    break;
  case `/`:
    alert(`The result is: ${divide(firstNumber, secondNumber)}`);
    break;
  default:
    alert(`Invalid Input`);
}
