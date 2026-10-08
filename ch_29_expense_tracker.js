//? Challennge 29 - Expense Tracker

const addExpense = document.getElementById(`addExpense`);
const viewExpenseBtn = document.getElementById(`view-expense`);
const calculateExpenseBtn = document.getElementById(`calculate-expense`);
const calculateByCategory = document.getElementById(`calculateByCategory`);
const largestExpenseBtn = document.getElementById(`largest-expense`);
const smallestExpenseBtn = document.getElementById(`smallest-expense`);
const removeExpense = document.getElementById(`removeExpense`);

const liveResultDisplay = document.getElementById(`output`);
const listDisplay = document.getElementById(`myList`);

const clearDisplay = ``;
const invalidInput = `Invalid Input`;

const expenseData = [
	{ description: "Lunch", category: "Food", amount: 250 },
	{ description: "Breakfast", category: "Food", amount: 120 },
	{ description: "Dinner", category: "Food", amount: 300 },
	{ description: "Petrol", category: "Travel", amount: 500 },
	{ description: "Hotel", category: "Travel", amount: 1250 },
	{ description: "Recharge", category: "Subscription", amount: 299 },
	{ description: "Netflix", category: "Subscription", amount: 450 },
	{ description: "Book", category: "Gift", amount: 350 },
];

const expense = {};

class Expense {
	constructor(description, category, amount) {
		this.id;
		this.description = description;
		this.category = category;
		this.amount = amount;
	}
	generateID(obj) {
		let id = Object.keys(obj).length + 1;
		while (Object.hasOwn(obj, id)) {
			id++;
		}
		this.id = id;
	}
}

const loadExpense = freshExpense => {
	//! It took me some time and trial and error to come up with an idea like this.
	if (freshExpense["category"] in expense) {
		freshExpense.generateID(expense[freshExpense["category"]]);
		expense[freshExpense["category"]][freshExpense["id"]] = freshExpense;
	} else {
		expense[freshExpense["category"]] = {};
		freshExpense.generateID(expense[freshExpense["category"]]);
		expense[freshExpense["category"]][freshExpense["id"]] = freshExpense;
	}
	//! Here, generateID is directly accesing expense object. This makes this function a little dependent.
};

for (let i = 0; i < expenseData.length; i++) {
	const generatedExpense = new Expense(
		expenseData[i]["description"],
		expenseData[i]["category"],
		expenseData[i]["amount"],
	);
	loadExpense(generatedExpense);
}

//todo
console.log(expense);
//todo

//* ----------------- Generic Functions -----------------

const isTextValid = data => (data !== `` ? true : false);
const isNumberPositive = num => (num > 0 ? true : false);
const dataDoesnotExist = (key, data) => `This ${key} ${data} does not exist.`;
const displayContent = content => (liveResultDisplay.textContent = content);
const makeTotal = obj => {
	let total = 0;
	for (const [key, value] of Object.entries(obj)) {
		total += value["amount"];
	}
	return total;
};

//* ----------------- Event Listener Functions -----------------

const addExpenseFunction = (e_name, e_cat, e_amt) => {
	if (isTextValid(e_name) && isTextValid(e_cat) && isNumberPositive(e_amt)) {
		const userGeneratedExpense = new Expense(e_name, e_cat, e_amt);
		loadExpense(userGeneratedExpense);
		const displayInfo = `Expense of ${e_amt} INR has been added to Tracker as ${e_cat} category expense.`;
		displayContent(displayInfo);
		//! Here, loadExpense is not returning anything, so the result is not based on success or failure. As long as the input data is valid, this program will add the data as expense.
	} else {
		displayContent(invalidInput);
	}
};

const viewExpenseFunction = () => {
	for (const [key1, value1] of Object.entries(expense)) {
		for (const [key2, value2] of Object.entries(expense[key1])) {
			const listItem = document.createElement(`li`);
			listItem.className = `dynamic-item`;
			listItem.textContent = `${value2["description"]} -> ${value2["amount"]}`;
			listDisplay.appendChild(listItem);
		}
	}
	//! Here directly displaying the content as it is a for loop.
};

const calculateExpenseFunction = () => {
	let totalExpenseAmount = 0;
	for (const [key, value] of Object.entries(expense)) {
		totalExpenseAmount += makeTotal(expense[key]);
	}
	const displayInfo = `Your Total Expense till now is: ${totalExpenseAmount} INR`;
	displayContent(displayInfo);
};

//! Can I make one generic for loop for every type of look up?

const calcByCategoryFunction = cat_name => {
	let catExpense = 0;
	if (isTextValid(cat_name)) {
		if (Object.hasOwn(expense, cat_name)) {
			catExpense += makeTotal(expense[cat_name]);
			const displayInfo1 = `Your total ${cat_name} expense is ${catExpense} INR`;
			displayContent(displayInfo1);
		} else {
			const displayInfo2 = dataDoesnotExist(`category`, cat_name);
			displayContent(displayInfo2);
		}
	} else {
		displayContent(invalidInput);
	}
	//! Here in every function, I am making the result and passing the result to displayContent. But I think functions should be communicating with one another via objects. And for displaying, one separate function or object should exist, whom sole work will be just displaying content. Here business logic is mixing with UI.
};

const largestExpenseFunction = () => {
	const categorySort = {};
	let largestExpenseObject;
	let largestExpenseAmount = 0;
	for (const [key1, value1] of Object.entries(expense)) {
		let largestInCategory = 0;
		for (const [key2, value2] of Object.entries(expense[key1])) {
			if (largestInCategory < value2["amount"]) {
				largestInCategory = value2["amount"];
				categorySort[key1] = value2;
			}
		}
	}
	for (const [cat, obj] of Object.entries(categorySort)) {
		if (largestExpenseAmount < obj["amount"]) {
			largestExpenseAmount = obj["amount"];
			largestExpenseObject = obj;
		}
	}
	const displayInfo = `Your Largest expense is ${largestExpenseObject["description"]} (${largestExpenseObject["category"]} category) | Cost is ${largestExpenseObject["amount"]} INR`;
	displayContent(displayInfo);
};

const smallestExpenseFunction = () => {
	const categorySort = {};
	let smallestExpenseObject;
	for (const [key1, value1] of Object.entries(expense)) {
		let totalByCat = makeTotal(expense[key1]);
		let smallestInCategory = totalByCat + 1;
		//! Here I am assigning the smallestNumber by totalling one category's total expense + 1 (why plus 1, let's say if one category has only one expense then later the if condition fails)
		for (const [key2, value2] of Object.entries(expense[key1])) {
			if (smallestInCategory > value2["amount"]) {
				smallestInCategory = value2["amount"];
				categorySort[key1] = value2;
			}
		}
	}
	let totalSorted = 0;
	for (const [key3, value3] of Object.entries(categorySort)) {
		totalSorted += value3["amount"];
	}
	let smallestExpenseAmount = totalSorted + 1;

	for (const [cat, obj] of Object.entries(categorySort)) {
		if (smallestExpenseAmount > obj["amount"]) {
			smallestExpenseAmount = obj["amount"];
			smallestExpenseObject = obj;
			console.log(obj);
		}
	}
	const displayInfo = `Your Smallest expense is ${smallestExpenseObject["description"]} (${smallestExpenseObject["category"]} category) | Cost is ${smallestExpenseObject["amount"]} INR`;
	displayContent(displayInfo);
	//! Okay It became much complicated then I expected.
};

const removeExpenseFunction = (cat, id) => {
	if (isTextValid(cat) && isNumberPositive(id)) {
		if (Object.hasOwn(expense, cat)) {
			if (Object.hasOwn(expense[cat], id)) {
				const theExpense = expense[cat][id];
				delete expense[cat][id];
				displayContent(
					`${theExpense["description"]} has been removed.`,
				);
			} else {
				displayContent(dataDoesnotExist(id, `ID`));
			}
		} else {
			displayContent(dataDoesnotExist(cat, `category`));
		}
	} else {
		displayContent(invalidInput);
	}
};

//* Add Expense - form
addExpense.addEventListener(`submit`, ev => {
	ev.preventDefault();

	const expenseName = document.getElementById(`e_name`);
	const expenseCategory = document.getElementById(`e_category`);
	const expenseAmount = document.getElementById(`e_amount`);
	const expenseAmountNumber = Number(expenseAmount.value);
	addExpenseFunction(
		expenseName.value,
		expenseCategory.value,
		expenseAmountNumber,
	);

	expenseName.value = clearDisplay;
	expenseCategory.value = clearDisplay;
	expenseAmount.value = clearDisplay;

	//! Now the event listener is doing minimal work. receiving data, passing the data in a function, clearing the input fields.
});

//* View Expense - button
viewExpenseBtn.addEventListener(`click`, () => {
	listDisplay.textContent = clearDisplay;
	viewExpenseFunction();
});

//* Calculate Expense - button
calculateExpenseBtn.addEventListener(`click`, () => {
	calculateExpenseFunction();
});

//* Calculate by Category - form
calculateByCategory.addEventListener(`submit`, ev => {
	ev.preventDefault();

	const categoryName = document.getElementById(`byCategory`);
	calcByCategoryFunction(categoryName.value);

	categoryName.value = clearDisplay;
});

//* Largest Expense - button
largestExpenseBtn.addEventListener(`click`, () => {
	largestExpenseFunction();
});

//* Smallest Expense - button
smallestExpenseBtn.addEventListener(`click`, () => {
	smallestExpenseFunction();
});

//* Remove Expense - form
removeExpense.addEventListener(`submit`, ev => {
	ev.preventDefault();

	const remCategory = document.getElementById(`category-id`);
	const expenseID = document.getElementById(`removeID`);
	const expIdNum = Number(expenseID.value);

	removeExpenseFunction(remCategory.value, expIdNum);

	remCategory.value = clearDisplay;
	expenseID.value = clearDisplay;
});
