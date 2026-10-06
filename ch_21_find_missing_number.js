//? Challenge 21 - Find Missing Number

const numbersCh21 = [1, 2, 3, 5, 6];

const findMissingNumber = arr => {
	let missingNumber = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] + 1 === arr[i + 1]) continue;
		missingNumber = arr[i] + 1;
		return missingNumber; //* Here I am using the return to stop the loop too. To use return outside the loop, I guess I need an else block and a break statement.
	}
};

console.log(findMissingNumber(numbersCh21));
console.log(findMissingNumber([4, 5, 6, 7, 9, 10]));
