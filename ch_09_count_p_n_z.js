//? Challenge 9 - Count Positive, Negative and Zero

const numbers = [4, -2, 0, 7, -9, 0, 12, -5, 3];

const countNumberTypes = arr => {
	let positiveNum = 0;
	let negativeNum = 0;
	let zeroNum = 0;

	for (let i = 0; i < arr.length; i++) {
		arr[i] === 0 ? zeroNum++ : arr[i] > 0 ? positiveNum++ : negativeNum++;
	}

	return { positiveNum, negativeNum, zeroNum };
};

console.log(countNumberTypes(numbers));
