//? Challenge 17 - Salary Analyzer

const employees = [
	{ name: `Soham`, department: `Treasury`, salary: 12900 },
	{ name: `Kallol`, department: `Administration`, salary: 12600 },
	{ name: `Subhas`, department: `Accounts`, salary: 9940 },
	{ name: `Rajesh`, department: `Counter`, salary: 14300 },
	{ name: `Nikhil`, department: `Despatch`, salary: 11575 },
	{ name: `Amitabh`, department: `Counter`, salary: 14200 },
	{ name: `Akash`, department: `Counter`, salary: 13900 },
	{ name: `Subhadeep`, department: `Accounts`, salary: 11700 },
	{ name: `Souvik`, department: `Counter`, salary: 15100 },
	{ name: `Sanjeev`, department: `Administration`, salary: 11575 },
];

const salaryAnalyzer = arr => {
	let highestPaidEmployee = arr[0]["name"];
	let highestSalary = arr[0]["salary"];
	let lowestPaidEmployee = arr[0]["name"];
	let lowestSalary = arr[0]["salary"];
	let totalSalary = 0;
	const departments = {};

	for (let i = 0; i < arr.length; i++) {
		totalSalary += arr[i]["salary"];
		if (highestSalary < arr[i]["salary"]) {
			highestSalary = arr[i]["salary"];
			highestPaidEmployee = arr[i]["name"];
		}
		if (lowestSalary > arr[i]["salary"]) {
			lowestSalary = arr[i]["salary"];
			lowestPaidEmployee = arr[i]["name"];
		}
		if (arr[i]["department"] in departments) {
			departments[arr[i]["department"]]++;
		} else {
			departments[arr[i]["department"]] = 1;
		}
	}
	let averageSalary = totalSalary / arr.length;

	return `
1. Highest paid employee: ${highestPaidEmployee},
2. Lowest paid employee: ${lowestPaidEmployee},
3. Average salary: ${averageSalary} INR
4. Total salary expense: ${totalSalary}
5. Number of employees in each department:
${JSON.stringify(departments)}
    `;

	//* NOTE:- Returning the values in objct format or template literal, whichever is needed according to requirements.
	// return {
	// 	highestPaidEmployee,
	// 	lowestPaidEmployee,
	// 	averageSalary,
	// 	totalSalary,
	// 	departments,
	// };
};

console.log(salaryAnalyzer(employees));
