//? Challenge 19 - Second Largest Number

const numbersCh19 = [10, 45, 32, 67, 89, 12, 89, 54];

const findSecondHighest = numArr => {
	let highest = numArr[0];
	let secondHighest = numArr[0];

	for (let i = 0; i < numArr.length; i++) {
		highest < numArr[i] ? (highest = numArr[i]) : `ignore`;
	}

	//* The question is, is there any better way to do this?
	for (let j = 0; j < numArr.length; j++) {
		secondHighest < numArr[j] && numArr[j] !== highest
			? (secondHighest = numArr[j])
			: `ignore`;
	}

	return secondHighest;
};

console.log(findSecondHighest(numbersCh19));
