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
