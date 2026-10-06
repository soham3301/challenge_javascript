//? Challenge 15 - Find Person

const peopleArray = [
	{ name: `Soham`, age: 35, city: `Agartala` },
	{ name: `Amitabh`, age: 32, city: `Khowai` },
	{ name: `Rohan`, age: 27, city: `Udaipur` },
	{ name: `Akash`, age: 30, city: `Dharmanagar` },
	{ name: `Souvik`, age: 25, city: `Belonia` },
];

const findPerson = (arr, personName) => {
	for (let i = 0; i < arr.length; i++) {
		if (personName.toLowerCase() === arr[i][`name`].toLowerCase()) {
			return arr[i];
		}
	}
	return `${personName} not found.`;
};

console.log(findPerson(peopleArray, `rohan`));
