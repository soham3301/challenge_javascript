//? Challenge 28 - Inventory Management System

const addProduct = document.getElementById(`addProduct`);
const viewInventoryBtn = document.getElementById(`view-inventory`);
const searchProduct = document.getElementById(`searchProduct`);
const increaseStock = document.getElementById(`increase-stock`);
const decreaseStock = document.getElementById(`decrease-stock`);
const checkValueBtn = document.getElementById(`check-value`);
const liveResultDisplay = document.getElementById(`output`);
const clearDisplay = ``;
const invalidInput = `Invalid Input`;

const productData = [
	{ id: `bo875`, name: `Body Oil`, price: 75, quantity: 220 },
	{ id: `sp126`, name: `Soap`, price: 20, quantity: 700 },
	{ id: `bc992`, name: `Biscuit`, price: 10, quantity: 3000 },
	{ id: `pc420`, name: `Potato Chips`, price: 5, quantity: 80 },
	{ id: `bl419`, name: `Body Lotion`, price: 90, quantity: 40 },
	{ id: `mk276`, name: `Milk`, price: 30, quantity: 1400 },
	{ id: `cf745`, name: `Coffee`, price: 45, quantity: 550 },
	{ id: `ms229`, name: `Masala`, price: 15, quantity: 1800 },
	{ id: `bt555`, name: `Butter`, price: 55, quantity: 300 },
	{ id: `oo822`, name: `Olive Oil`, price: 110, quantity: 400 },
];

class Product {
	constructor(id, name, price, quantity) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}
	increaseNumbers(quan) {
		this.quantity += quan;
	}

	decreaseNumbers(quan) {
		this.quantity -= quan;
	}
}

const products = {};

for (let i = 0; i < productData.length; i++) {
	//! Note:- Here I am simulating loading data from database where every key (id) is already unique.
	products[productData[i][`id`]] = new Product(
		productData[i][`id`],
		productData[i][`name`],
		productData[i][`price`],
		productData[i][`quantity`],
	);
}

//* Helper Functions

const emptyCheck = data => (data !== `` ? true : false);
const zeroCheck = amount => (amount > 0 ? true : false);
const idAlreadyExist = the_id => Object.hasOwn(products, the_id);
const productNotExist = p_data =>
	`Invalid Data (${p_data}) | This Product doesn't exist.`;

const addProductToInventory = (prod_id, prod_name, prod_price, prod_quan) => {
	if (!idAlreadyExist(prod_id)) {
		products[prod_id] = new Product(
			prod_id,
			prod_name,
			prod_price,
			prod_quan,
		);
		return `${prod_quan} number of ${prod_name}s added to inventory.`;
	} else {
		return `${prod_id} ID already exist. Can't add product.`;
	}
};

const increaseQuantity = (p_id, p_quan) => {
	const theProduct = products[p_id];
	theProduct.increaseNumbers(p_quan);
	return theProduct;
};

const decreaseQuantity = (p_id, p_quan) => {
	const theProduct = products[p_id];
	if (p_quan <= theProduct.quantity) {
		theProduct.decreaseNumbers(p_quan);
		return theProduct;
	} else {
		return `Insufficient Quantity (only ${theProduct.quantity}) | Decrease Failed.`;
	}
};

const calcTotal = () => {
	let totalAmount = 0;
	for (const [key, value] of Object.entries(products)) {
		totalAmount += value["quantity"] * value["price"];
	}
	return totalAmount;
};

//* Add Product Event Listener
addProduct.addEventListener(`submit`, ev => {
	ev.preventDefault();

	const p_id = document.getElementById(`p_id`);
	const p_name = document.getElementById(`p_name`);
	const p_price = document.getElementById(`p_cost`);
	const p_price_num = Number(p_price.value);
	const p_quantity = document.getElementById(`p_quan`);
	const p_quantity_num = Number(p_quantity.value);

	if (
		emptyCheck(p_id.value) &&
		emptyCheck(p_name.value) &&
		zeroCheck(p_price_num) &&
		zeroCheck(p_quantity_num)
	) {
		const addProductResult = addProductToInventory(
			p_id.value,
			p_name.value,
			p_price_num,
			p_quantity_num,
		);
		liveResultDisplay.textContent = addProductResult;
	} else {
		liveResultDisplay.textContent = invalidInput;
	}

	p_id.value = clearDisplay;
	p_name.value = clearDisplay;
	p_price.value = clearDisplay;
	p_quantity.value = clearDisplay;
});

//* View Inventory Event Listener
viewInventoryBtn.addEventListener(`click`, () => {
	const listResultDisplay = document.getElementById(`myList`);
	listResultDisplay.textContent = clearDisplay;
	for (const [key, value] of Object.entries(products)) {
		const listItem = document.createElement(`li`);
		listItem.className = `dynamic-item`;
		listItem.textContent = `Product ID: ${key} >> Name: ${value["name"]} >> Price: ${value["price"]} >> Quantity: ${value["quantity"]}`;
		listResultDisplay.appendChild(listItem);
	}
	//! BUG Found. If clicked after any other submit button, this view inventory doesn't work.
});

//* Search Product Event Listener
searchProduct.addEventListener(`submit`, ev => {
	ev.preventDefault();

	const product_id = document.getElementById(`search-product`);

	if (emptyCheck(product_id.value)) {
		if (idAlreadyExist(product_id.value)) {
			const theProduct = products[product_id.value];
			liveResultDisplay.textContent = `Product Found | ${theProduct["name"]}, Cost: ${theProduct["price"]} INR and Quantity: ${theProduct["quantity"]}`;
		} else {
			liveResultDisplay.textContent = productNotExist(product_id.value);
		}
	} else {
		liveResultDisplay.textContent = invalidInput;
	}

	product_id.value = clearDisplay;
});

//* Increase Stock Event Listener
increaseStock.addEventListener(`submit`, ev => {
	ev.preventDefault();

	const p_id = document.getElementById(`inc-stock-id`);
	const p_quantity = document.getElementById(`inc-stock-quantity`);
	const p_quan_num = Number(p_quantity.value);

	//! Should event listeners include such if else or loops? Or they should belong inside a function outside event listeners?
	if (emptyCheck(p_id.value) && zeroCheck(p_quan_num)) {
		if (idAlreadyExist(p_id.value)) {
			const resultProduct = increaseQuantity(p_id.value, p_quan_num);
			liveResultDisplay.textContent = `${p_quan_num} number of ${resultProduct.name}s has been added.`;
			console.log(products);
		} else {
			liveResultDisplay.textContent = productNotExist(p_id.value);
		}
	} else {
		liveResultDisplay.textContent = invalidInput;
	}
	p_id.value = clearDisplay;
	p_quantity.value = clearDisplay;
});

//* Decrease Stock Event Listener
decreaseStock.addEventListener(`submit`, ev => {
	ev.preventDefault();

	const p_id = document.getElementById(`dec-stock-id`);
	const p_quantity = document.getElementById(`dec-stock-quantity`);
	const p_quan_num = Number(p_quantity.value);

	if (emptyCheck(p_id.value) && zeroCheck(p_quan_num)) {
		if (idAlreadyExist(p_id.value)) {
			const resultProduct = decreaseQuantity(p_id.value, p_quan_num);
			if (typeof resultProduct === `string`) {
				liveResultDisplay.textContent = resultProduct;
			} else {
				liveResultDisplay.textContent = `${p_quan_num} number of ${resultProduct.name}s has been removed.`;
			}
		} else {
			liveResultDisplay.textContent = productNotExist(p_id.value);
		}
	} else {
		liveResultDisplay.textContent = invalidInput;
	}

	p_id.value = clearDisplay;
	p_quantity.value = clearDisplay;
});

//* Check Inventory Value Event Listener
checkValueBtn.addEventListener(`click`, () => {
	const totalValue = calcTotal();
	//! Displaying data like 20 soap x price = total soap price and later adding the whole price would be more user friendly.
	liveResultDisplay.textContent = `Total Inventory Value: ${totalValue} INR`;
});
