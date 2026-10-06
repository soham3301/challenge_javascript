//? Challenge 14 - Product Inventory

const porductArray = [
	{ name: "Keyboard", price: 1500, quantity: 4 },
	{ name: "Mouse", price: 300, quantity: 10 },
	{ name: "SSD", price: 5000, quantity: 7 },
	{ name: "Monitor", price: 8000, quantity: 6 },
	{ name: "UPS", price: 3000, quantity: 12 },
];

const findCost = arr => {
	const costDetails = {};
	let totalValue = 0;

	for (let i = 0; i < arr.length; i++) {
		let cost = arr[i]["price"] * arr[i]["quantity"];
		costDetails[arr[i]["name"]] = cost; //* I could have made another array of objects but I thought this pattern is more useful until I explicitely need something like name = monitor, price = someprice or any other format.
		totalValue += cost;
	}

	return { costDetails, totalValue }; //* Returned total value together in the same object. I guess I have found this style more easy for me to work with.
};

console.log(findCost(porductArray));
