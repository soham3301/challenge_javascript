//? Challenge 13 - Student Analyzer

const studentsForAnalyze = [
	{ name: "Alice", age: 21, score: 87 },
	{ name: "Bob", age: 19, score: 55 },
	{ name: "Soham", age: 20, score: 77 },
	{ name: "Amitabh", age: 22, score: 39 },
	{ name: "Akash", age: 18, score: 62 },
];

const PASSING_SCORE = 60;

const studentAnalyzer = (arr, p_score) => {
	let h_score = arr[0]["score"];
	let l_score = arr[0]["score"];
	let highestScorer = arr[0]["name"];
	let lowestScorer = arr[0]["name"];
	let totalScore = 0;
	let studentsPassed = 0;
	let studentsFailed = 0;

	for (let i = 0; i < arr.length; i++) {
		if (h_score < arr[i]["score"]) {
			h_score = arr[i]["score"];
			highestScorer = arr[i]["name"];
		}
		if (l_score > arr[i]["score"]) {
			l_score = arr[i]["score"];
			lowestScorer = arr[i]["name"];
		}

		p_score <= arr[i]["score"] ? studentsPassed++ : studentsFailed++;
		totalScore += arr[i]["score"];
	}

	let averageScore = totalScore / arr.length;

	return {
		highestScorer,
		lowestScorer,
		averageScore,
		studentsPassed,
		studentsFailed,
	};
};

console.log(studentAnalyzer(studentsForAnalyze, PASSING_SCORE));
