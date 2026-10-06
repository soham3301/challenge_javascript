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
