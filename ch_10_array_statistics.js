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
