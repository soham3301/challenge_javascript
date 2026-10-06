//? Challenge 23 - Most Frequent Number

const numbersCh23 = [
	3, 3, 1, 4, 1, 1, 1, 1, 8, 4, 6, 5, 9, 0, 6, 5, 4, 5, 3, 1, 2, 4, 8, 8, 8,
	8, 8,
];

const mostFrequent = arr => {
	const numberFrequency = {};

	for (let i = 0; i < arr.length; i++) {
		arr[i] in numberFrequency
			? numberFrequency[arr[i]]++
			: (numberFrequency[arr[i]] = 1);
	}

	let highestFrequency = numberFrequency["0"];
	let highestFrequencyNumberList = []; //* By using an array, I am eleminating any tie here. If a tie happensa, both numbers will be added here.

	for (let [key, value] of Object.entries(numberFrequency)) {
		if (highestFrequency <= value) {
			highestFrequency = value;
			highestFrequencyNumberList.push(key);
		}
	}

	//* NOTE:- This is like a failsafe logic, you will understand.
	if (highestFrequency !== numberFrequency["0"])
		highestFrequencyNumberList.shift();

	return highestFrequencyNumberList;
};

console.log(mostFrequent(numbersCh23));

//* However, I guess there will be more easy algorithm to do this thing. I just could not come up with more elegent design.
