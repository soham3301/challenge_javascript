//? Challenge 27 - Student Management System

// import data from "./ch_27_data.json" with { type: "json" };
// console.log(data);

const addStudentData = document.getElementById(`addStudent`);
const addedDisplay = document.getElementById(`studentAdded`);
const viewAllBtn = document.getElementById(`viewAll`);
const findById = document.getElementById(`findID`);
const findHighestBtn = document.getElementById(`highestScore`);
const averageBtn = document.getElementById(`averageMarks`);
const removeByID = document.getElementById(`enterID`);

class Student {
	constructor(id, name, age, marks) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.marks = marks;
	}
}

const studentsData = [
	{ id: "sd001", name: "Soham Datta", age: 19, marks: 77 },
	{ id: "ad002", name: "Amitabh Deb", age: 20, marks: 91 },
	{ id: "kb003", name: "Kallol Biswas", age: 18, marks: 82 },
	{ id: "sb004", name: "Srijit Biswas", age: 22, marks: 71 },
	{ id: "sg005", name: "Souvik Gope", age: 19, marks: 80 },
	{ id: "as006", name: "Akash Saha", age: 20, marks: 69 },
	{ id: "ud007", name: "Utpal Das", age: 18, marks: 73 },
	{ id: "sb008", name: "Subhadeep Bhattacharjee", age: 19, marks: 81 },
	{ id: "dd009", name: "Debasish Das", age: 21, marks: 79 },
	{ id: "sm010", name: "Subhasish Majumder", age: 20, marks: 86 },
];

const students = [];

for (let i = 0; i < studentsData.length; i++) {
	let s_id = ``;
	let s_name = ``;
	let s_age = 0;
	let s_marks = 0;
	for (const [key, value] of Object.entries(studentsData[i])) {
		key === `id` ? (s_id = value) : `ignore`;
		key === `name` ? (s_name = value) : `ignore`;
		key === `age` ? (s_age = value) : `ignore`;
		key === `marks` ? (s_marks = value) : `ignore`;
	}
	students.push(new Student(s_id, s_name, s_age, s_marks));
}

//! NOTE:- I tried JSON for data persistence. But in browser it is not recommended to save data locally. Hence avoiding data persistence for now.

//* -> Helper Functions
const addStudent = (st_id, st_name, st_age, st_marks) => {
	//! MAJOR BUG:- Not checking whether the ID exists or not
	students.push(new Student(st_id, st_name, st_age, st_marks));
	return true;
};

const findStudent = (value, keyward, arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (value === arr[i][keyward]) {
			return arr[i];
		}
	}
	return {};
};

const findStudentByID = (id, array) => {
	const studentObject = findStudent(id, `id`, array);
	if ("name" in studentObject) {
		return `Name: ${studentObject["name"]} || Age: ${studentObject["age"]} || Marks: ${studentObject["marks"]}`;
	} else {
		return `Student Not FOUND`;
	}
};

const findHighestScorer = arr => {
	let h_score = arr[0]["marks"];
	let h_scorer = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (h_score < arr[i]["marks"]) {
			h_score = arr[i]["marks"];
			h_scorer = arr[i];
		}
	}

	return h_scorer;
};

const findAverageMark = arr => {
	let totalMarks = 0;

	for (let i = 0; i < arr.length; i++) {
		totalMarks += arr[i]["marks"];
	}

	return totalMarks / arr.length;
};

const removeStudentByID = (id, arr) => {
	const studentIndex = arr.findIndex(obj => obj.id === id);
	if (studentIndex !== -1) {
		arr.splice(studentIndex, 1);
	}
	return `Student Removed`;
};

//* -> Add New Student
addStudentData.addEventListener(`submit`, event => {
	event.preventDefault();

	const s_id = document.getElementById(`id`).value;
	const s_name = document.getElementById(`name`).value;
	const s_age = Number(document.getElementById(`age`).value);
	const s_marks = Number(document.getElementById(`marks`).value);

	addStudent(s_id, s_name, s_age, s_marks)
		? (addedDisplay.textContent = `${s_name} Added.`)
		: (addedDisplay.textContent = `Student Addition Failed`);
});

//* -> View All Student
//! Well it's kinda ugly but it works.
viewAllBtn.addEventListener(`click`, event => {
	//! I don't think this event is working.
	event.preventDefault();
	const displayStdList = document.getElementById(`studentList`);

	for (let i = 0; i < students.length; i++) {
		const listItem = document.createElement(`li`);
		listItem.textContent = `ID: ${students[i]["id"]} || Name: ${students[i]["name"]} || Age: ${students[i]["age"]} || Marks: ${students[i]["marks"]}`;
		displayStdList.appendChild(listItem);
	}
	//* BUG -> Clicking twice displaying two lists.
});

//* -> Find Student by ID
findById.addEventListener(`submit`, ev => {
	ev.preventDefault();
	//! I don't know whether grabbing elements by using get element by ID inside event listeners is good or bad.
	const enteredIDelement = document.getElementById(`stdID`);
	const enteredID = enteredIDelement.value;
	const result = findStudentByID(enteredID, students);
	const displayStudentByID = document.getElementById(`studentByID`);
	displayStudentByID.textContent = result;
	enteredIDelement.value = ``;
});

//* -> Find Highest Scoring Student
findHighestBtn.addEventListener(`click`, ev => {
	ev.preventDefault();

	const highestScoringStudent = findHighestScorer(students);
	const displayHighestScorer = document.getElementById(`highestScorer`);

	displayHighestScorer.textContent = `Name: ${highestScoringStudent["name"]} || Age: ${highestScoringStudent["age"]} || Marks: ${highestScoringStudent["marks"]}`;
});

//! I am not understanding the click or the submit thing inside add event listener. Also sometimes a button has id, sometime it has type. Confusing.

//* -> Calculate Average Marks
averageBtn.addEventListener(`click`, ev => {
	ev.preventDefault();

	const averageMark = findAverageMark(students);
	const displayAverageMarks = document.getElementById(`displayAverage`);

	displayAverageMarks.textContent = `Average Marks: ${averageMark}`;
});

//* -> Remove Student
removeByID.addEventListener(`submit`, ev => {
	ev.preventDefault();
	//! Okay in case of form submit, addeventlistner gets 'submit' but in case of individual button it is 'click'. I think.
	const enteredIDElement = document.getElementById(`remID`);
	const enteredID = enteredIDElement.value;
	result = removeStudentByID(enteredID, students);
	const displayRemovedResult = document.getElementById(`removed`);
	displayRemovedResult.textContent = result;
	enteredIDElement.value = ``;
});
