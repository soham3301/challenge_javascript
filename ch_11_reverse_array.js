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
