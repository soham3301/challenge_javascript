//! STAGE - 1
//? Challenge 1 - Temperature Analyzer

let temperatureInCelcius = prompt(`What's the temperature today?`);
let temperatureInFahrenheit = (temperatureInCelcius * 9) / 5 + 32;

if (temperatureInCelcius < 0) {
	alert(
		`It's freezing. Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0F`,
	);
} else if (temperatureInCelcius >= 0 && temperatureInCelcius <= 15) {
	alert(`It's cold. Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0F`);
} else if (temperatureInCelcius > 15 && temperatureInCelcius <= 25) {
	alert(
		`Much comfortable. Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0F`,
	);
} else if (temperatureInCelcius > 25 && temperatureInCelcius <= 35) {
	alert(
		`It's kinda warm. Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0F`,
	);
} else {
	alert(`It's Hot! Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0F`);
}

//? Challenge 2 - Odd Even

let enteredNumber = Number(prompt(`Enter any number.`));
let answer = ``;

const checkOddEven = num => {
	if (num % 2 === 0) {
		answer += `even`;
	} else {
		answer += `odd`;
	}
};

const checkPositiveNegative = num => {
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

//? Challenge 3 - Simple Calculator

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

//? Challenge 4 - Username Generator

const firstName = prompt(`Enter your first name`);
const lastName = prompt(`Enter your last name`);
const birthYear = Number(prompt(`Enter your birth year`));

const createUsername = (fName, lName, bYear) => {
	let usernameStarter = `@`;
	let lastTwoDigits = String(bYear).slice(-2);
	return (
		usernameStarter +
		fName.toLowerCase() +
		lName.toLowerCase() +
		lastTwoDigits
	);
};

alert(createUsername(firstName, lastName, birthYear));

//! Note:- two usernames could become same. need to check a database of username before this.

//? Challenge 5 - Grade Calculator

const theMark = Number(prompt(`Enter Your Mark`));

const calculateGrade = mark => {
	if (mark < 0 || mark > 100) {
		alert(`Invalid Input`);
	} else if (mark >= 90 && mark <= 100) {
		alert(`Grade A`);
	} else if (mark >= 80 && mark < 90) {
		alert(`Grade B`);
	} else if (mark >= 70 && mark < 80) {
		alert(`Grade C`);
	} else if (mark >= 60 && mark < 70) {
		alert(`Grade D`);
	} else {
		alert(`Grade F`);
	}
};

calculateGrade(theMark);

//! I checked the input with string, it doesn't throw an error, just runs the else block

//? Challenge 6 - Leap Year

const enteredYear = Number(prompt(`Enter the year`));

if (enteredYear % 400 === 0) {
	alert(`It's a rare type of Leap Year`);
} else if (enteredYear % 4 === 0) {
	if (enteredYear % 100 === 0) {
		alert(`Not a leap year. Century Exception`);
	} else {
		alert(`You got a leap year`);
	}
} else {
	alert(`Not a leap year`);
}

//! STAGE - 2
//? Challenge 7 and 8 combined - Find the largest and the smallest Number.

const numbers = [23, 1, 7, -4, 0, -31, 91, 45, 12, 67, 34];

const findLargeAndSmall = arr => {
	let largestNum = arr[0]; //* Let's say I don't know the array before or the array contains strings, what happens then?
	let smallestNum = arr[0]; //* Okay I can use an if logic like this, if typeof number[i] !== 'number' continue.

	for (let i = 0; i < arr.length; i++) {
		largestNum < arr[i] ? (largestNum = arr[i]) : `ignore`;
		smallestNum > arr[i] ? (smallestNum = arr[i]) : `ignore`;
	}

	return { largestNum, smallestNum };
};

console.log(findLargeAndSmall(numbers));
console.log(findLargeAndSmall([])); //* Empty array returns { largestNum: undefined, smallestNum: undefined }

//? Challenge 9 - Count Positive, Negative and Zero

const numbersForCount = [4, -2, 0, 7, -9, 0, 12, -5, 3];

const countNumberTypes = arr => {
	let positiveNum = 0;
	let negativeNum = 0;
	let zeroNum = 0;

	for (let i = 0; i < arr.length; i++) {
		arr[i] === 0 ? zeroNum++ : arr[i] > 0 ? positiveNum++ : negativeNum++; //* Chaining ternary operator - testing
	}

	return { positiveNum, negativeNum, zeroNum };
};

console.log(countNumberTypes(numbersForCount));

//? Challenge 10 - Array Statistics

const statisticsNumbers = [10, 20, 30, 40, 50];

const analyzeNumbers = arr => {
	let count = arr.length;
	let sum = 0;
	let largest = arr[0];
	let smallest = arr[0];

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (largest < arr[i]) largest = arr[i];
		if (smallest > arr[i]) smallest = arr[i];
	}
	let average = sum / count;

	return { count, sum, average, largest, smallest }; //* NOTE:- I find returning such data via this format is very useful, later i can work with this data easily. It is amezing to see this format autometically becomes object after returning.
};

console.log(analyzeNumbers(statisticsNumbers));

//? Challenge 11 - Reverse Array

const normalArray = [1, 2, 3, 4, 5];

const reverseArray = arr => {
	const flippedArray = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		flippedArray.push(arr[i]);
	}
	return flippedArray;
};

console.log(reverseArray(normalArray));

//? Challenge 12 - Count Occurrences

const numbersWithDuplicates = [2, 5, 2, 8, 2, 9, 5, 1, 5];

const countOccurrences = (numbersArray, targetNumber) => {
	let occurrence = 0;
	for (let i = 0; i < numbersArray.length; i++) {
		numbersArray[i] === targetNumber ? occurrence++ : `ignore`;
	}
	return occurrence;
};

console.log(countOccurrences(numbersWithDuplicates, 7));
