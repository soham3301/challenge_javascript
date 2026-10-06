//? Challenge 22 - Frequency Analyzer

const numbersCh22 = [4, 2, 4, 7, 2, 4, 9, 7, 2, 2];

const freqAnalyzer = arr => {
	const resultData = {};

	for (let i = 0; i < arr.length; i++) {
		arr[i] in resultData ? resultData[arr[i]]++ : (resultData[arr[i]] = 1);
	}

	return resultData;
};

console.log(freqAnalyzer(numbersCh22)); //* NOTE:- The object keys became string (guessing by looking at their color in the terminal)
