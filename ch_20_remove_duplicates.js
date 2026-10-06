//? Challenge 20 - Remove Duplicates

const numbersCh20 = [1, 2, 3, 2, 4, 1, 5, 3, 6];

const removeDuplicates = arr => {
	const withoutDuplicates = [];

	for (let i = 0; i < arr.length; i++) {
		arr[i] in withoutDuplicates ? `ignore` : withoutDuplicates.push(arr[i]);
		//* NOTE:- A proper if statement might be useful here, if I want to use those duplicates somehow.
	}

	return withoutDuplicates;
};

console.log(removeDuplicates(numbersCh20));
