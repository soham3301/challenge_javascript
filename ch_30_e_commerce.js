//? Challenge 30 - Mini E Commerce System

const productContainer = document.getElementById(`product-list`);
const cartContainer = document.getElementById("cart-list");
const emptyMsg = document.getElementById("empty-cart-msg");
const displayMessage = document.getElementById(`message`);
const checkOut = document.getElementById(`checkout`);
const subtotalAmountDisplay = document.getElementById(`subtotal`);
const discountAmountDisplay = document.getElementById(`discount`);
const totalAmountDisplay = document.getElementById(`total-amount`);
const receiptSection = document.getElementById(`receipt-section`);
const closeReceiptBtn = document.getElementById(`close-receipt-btn`);

const products = [
	{ id: 1, name: "Laptop", price: 77000, stock: 20 },
	{ id: 2, name: "Mouse", price: 2300, stock: 150 },
	{ id: 3, name: "Keyboard", price: 5000, stock: 80 },
	{ id: 4, name: "Monitor", price: 12000, stock: 65 },
	{ id: 5, name: "SSD", price: 8000, stock: 35 },
	{ id: 6, name: "Speaker", price: 3500, stock: 75 },
	{ id: 7, name: "UPS", price: 6000, stock: 40 },
];

const cart = {};

//* Note:- Currently, revenue is doing nothing. Just added this so when user paid something the amount doesn't go away.
let revenue = 0;

const messageBox = message => {
	displayMessage.style.display = `none`;
	displayMessage.textContent = ``;

	if (message["status"]) {
		displayMessage.style.backgroundColor = `#90EE90`;
	} else {
		displayMessage.style.backgroundColor = `#FFCCCB`;
	}

	displayMessage.textContent = message["data"];
	displayMessage.style.display = `block`;
};

const calcDiscount = the_amount => {
	//* 0 to 5000 > No discount || 5000 to 10000 > 5% || 10000 to 50000 > 10% || above 50000 > 20%

	if (the_amount < 5000) {
		return 0;
	} else if (the_amount >= 5000 && the_amount < 10000) {
		return (the_amount * 5) / 100;
	} else if (the_amount >= 10000 && the_amount < 50000) {
		return (the_amount * 10) / 100;
	} else {
		return (the_amount * 20) / 100;
	}
};

const cartToStock = item_id => {
	for (let i = 0; i < products.length; i++) {
		if (products[i]["id"] === item_id) {
			products[i]["stock"]++;
		}
	}
};

const getTotalAmount = () => {
	let totalAmount = 0;

	for (const [id, item] of Object.entries(cart)) {
		totalAmount += item["price"] * item["quantity"];
	}

	return totalAmount;
};

const amountAfterDiscount = totalAmount => {
	const discount = calcDiscount(totalAmount);

	return totalAmount - discount;
};

const confirmPayment = amount => {
	const enterAgain = Number(
		prompt(
			`You are about to Pay ₹${amount}? Enter the same again to further proceed.`,
		),
	);

	if (enterAgain === amount) {
		return true;
	} else {
		return false;
	}
};

const updateTotal = () => {
	subtotalAmountDisplay.textContent = ``;
	discountAmountDisplay.textContent = ``;
	totalAmountDisplay.textContent = ``;

	const totalAmount = getTotalAmount();
	const discount = calcDiscount(totalAmount);
	const finalAmount = amountAfterDiscount(totalAmount);

	subtotalAmountDisplay.textContent = `Subtotal: ₹${totalAmount}`;
	discountAmountDisplay.textContent = `Discount: ₹${discount}`;
	totalAmountDisplay.textContent = `Total: ₹${finalAmount}`;
};

const clearCart = () => {
	//* NOTE:- Here I am clearing cart, simulating checkout. But in real world, this data will go to shipping section for product shipping.
	for (const key in cart) {
		if (cart.hasOwnProperty(key)) {
			delete cart[key];
		}
	}
};

const displayReceipt = (total_amount, subtotal_amount) => {
	receiptSection.style.display = `block`;

	const subTotalDisplay = document.getElementById(`subtotal-amount`);
	const discountDisplay = document.getElementById(`discount-amount`);
	const finalTotalDisplay = document.getElementById(`final-total`);

	const discount_amount = calcDiscount(subtotal_amount);

	subTotalDisplay.textContent = `₹${subtotal_amount}`;
	discountDisplay.textContent = `₹${discount_amount}`;
	finalTotalDisplay.textContent = `₹${total_amount}`;

	closeReceiptBtn.addEventListener(`click`, () => {
		subTotalDisplay.textContent = ``;
		discountDisplay.textContent = ``;
		finalTotalDisplay.textContent = ``;

		receiptSection.style.display = `none`;
	});
};

const checkoutProceed = (user_paid, total_amount, subtotal_amount) => {
	if (user_paid < total_amount) {
		const remainingAmount = total_amount - user_paid;
		const theMessage = {
			status: false,
			data: `You are short of ₹${remainingAmount} for checkout.`,
		};
		messageBox(theMessage);
	} else if (user_paid > total_amount) {
		//* Note:- I should ask user to add the extra money to some kind of wallet.
		const extraAmount = user_paid - total_amount;
		const theMessage = {
			status: false,
			data: `You entered ₹${extraAmount} more than actual checkout amount. Checkout Stopped.`,
		};
		messageBox(theMessage);
	} else {
		if (confirmPayment(user_paid)) {
			revenue += user_paid;
			displayReceipt(total_amount, subtotal_amount);
			const theMessage = {
				status: true,
				data: `Purchase Successfull`,
			};
			messageBox(theMessage);
			clearCart();
			updateTotal();
			renderProducts();
			renderCart();

			//
		} else {
			const theMessage = {
				status: false,
				data: `Your Payment was not confirmed. Transaction Cancelled.`,
			};
			messageBox(theMessage);
		}
	}
};

const renderCart = () => {
	cartContainer.innerHTML = ``;

	if (Object.keys(cart).length === 0) {
		emptyMsg.style.display = `block`;
		cartContainer.appendChild(emptyMsg);
		return;
	}

	emptyMsg.style.display = `none`;

	for (const [item_id, item] of Object.entries(cart)) {
		const itemDiv = document.createElement(`div`);
		const detailsDiv = document.createElement(`div`);
		const title = document.createElement(`h4`);
		const itemTotal = item["price"] * item["quantity"];
		const pricePara = document.createElement(`p`);
		const removeBtn = document.createElement(`button`);

		itemDiv.className = `cart-item`;
		detailsDiv.className = `cart-item-details`;
		title.textContent = item["name"];
		pricePara.textContent = `₹${item["price"].toLocaleString()} x ${item["quantity"]} = ₹${itemTotal.toLocaleString()}`;
		removeBtn.textContent = `Remove`;
		removeBtn.className = `remove-btn`;

		detailsDiv.appendChild(title);
		detailsDiv.appendChild(pricePara);
		removeBtn.addEventListener(`click`, () => {
			removeFromCart(item["id"]);
		});
		itemDiv.appendChild(detailsDiv);
		itemDiv.appendChild(removeBtn);
		cartContainer.appendChild(itemDiv);
	}
};

const renderProducts = () => {
	productContainer.innerHTML = ``;
	for (let i = 0; i < products.length; i++) {
		const item = products[i];
		const card = document.createElement(`div`);
		const title = document.createElement(`h3`);
		const price = document.createElement(`p`);
		const stock = document.createElement(`p`);
		const button = document.createElement(`button`);

		card.className = `product-card`;
		title.textContent = `${item["name"]} (ID: ${item["id"]})`;
		price.textContent = `Price: ${item["price"]} INR`;
		stock.textContent = `Stock: ${item["stock"]}`;
		button.textContent = `Add to Cart`;
		button.className = `primary-btn`;

		button.addEventListener(`click`, () => addToCart(item["id"]));
		card.append(title, price, stock, button);
		productContainer.appendChild(card);
	}
};

const addToCart = p_id => {
	displayMessage.style.display = `none`;
	displayMessage.textContent = ``;
	for (let i = 0; i < products.length; i++) {
		const item = products[i];
		if (item["id"] === p_id) {
			if (item["stock"] >= 1) {
				const theMessage = {
					status: true,
					data: `${item["name"]} added to Cart.`,
				};
				messageBox(theMessage);
				if (Object.hasOwn(cart, item["id"])) {
					cart[item["id"]]["quantity"]++;
					item["stock"]--;
				} else {
					//* NOTE:- Here I am creating a different object which has a quantity property to count how many of it is inside the cart.
					const cartItem = {
						id: item["id"],
						name: item["name"],
						price: item["price"],
						quantity: 1,
					};
					cart[item["id"]] = cartItem;
					item["stock"]--;
				}
			} else {
				const theMessage = {
					status: false,
					data: `Not Enough ${item["name"]} in Stock`,
				};
				messageBox(theMessage);
			}
		}
	}

	renderProducts();
	renderCart();
	updateTotal();
	//* NOTE:- But I think product object should not have a property called stock. The stock sould be counted separately inside inventory. A product does not need to know how many of it exist. The inventory should know this.
};

const removeFromCart = p_id => {
	const item = cart[p_id];
	const theMessage = {
		status: false,
		data: `${item["name"]} removed from Cart.`,
	};

	if (item["quantity"] > 1) {
		item["quantity"]--;
		cartToStock(p_id);
	} else {
		delete cart[p_id];
		cartToStock(p_id);
	}

	messageBox(theMessage);

	renderProducts();
	renderCart();
	updateTotal();
};

checkOut.addEventListener(`submit`, ev => {
	ev.preventDefault();

	const enteredAmount = document.getElementById(`checkout-amount`);
	const receivedAmount = Number(enteredAmount.value);
	const amountBeforeCheckout = getTotalAmount();
	const finalAmount = amountAfterDiscount(amountBeforeCheckout);

	if (receivedAmount > 0 && finalAmount > 0) {
		checkoutProceed(receivedAmount, finalAmount, amountBeforeCheckout);
	} else {
		const theMessage = {
			status: false,
			data: `Your cart is Empty.`,
		};
		messageBox(theMessage);
	}

	enteredAmount.value = ``;
});

renderProducts();
renderCart();
