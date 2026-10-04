let enteredNumber = Number(prompt(`Enter any number.`));

let answer = ``;

const checkOddEven = (num) => {
  if (num % 2 === 0) {
    answer += `even`;
  } else {
    answer += `odd`;
  }
};

const checkPositiveNegative = (num) => {
  if (num > 0) {
    answer += `positive `;
  } else {
    answer += `negative `;
  }
};

if (enteredNumber === 0) {
  alert(`It's Zero`);
} else {
  checkPositiveNegative(enteredNumber);
  checkOddEven(enteredNumber);
  alert(`It's ${answer}`);
}
