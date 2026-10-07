//? Challenge 24 - Number Guessing

const numberInput = document.getElementById(`guessedNumber`);
const calculateBtn = document.getElementById(`calculateBtn`);
const resultDisplay = document.getElementById(`displayResult`);
const attemptDisplay = document.getElementById(`displayAttempts`);

let userAttempts = 0;

const generateSecretNumber = () => {
	return Math.floor(Math.random() * 100);
};

const secretNumber = generateSecretNumber();
console.log(secretNumber);

const checkValue = (secret, entered) => {
	if (secret === entered) {
		return `Correct!`;
	} else if (secret > entered) {
		return `Too Low!`;
	} else {
		return `Too High!`;
	}
};

//* Note:- I didn't understood this event listener thing properly, somehow after some googling, I just made it work.
calculateBtn.addEventListener(`click`, () => {
	const submittedNumber = Number(numberInput.value);
	userAttempts++;
	numberInput.value = ``;

	const theResult = checkValue(secretNumber, submittedNumber);

	resultDisplay.textContent = `${theResult}`;
	if (theResult === `Correct!`) {
		attemptDisplay.textContent = `You guessed it in ${userAttempts} attempts.`;
	}
});

//* There should be a reload or play again mechanism.
