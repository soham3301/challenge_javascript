//? Challenge 16 - Shopping Cart

const cartArray = [
	{ name: `Book`, price: 300, quantity: 10 },
	{ name: `Egg`, price: 20, quantity: 15 },
	{ name: `Milk`, price: 55, quantity: 12 },
	{ name: `Bulb`, price: 250, quantity: 3 },
	{ name: `Mat`, price: 33, quantity: 5 },
];

//* NOTE:- I thought saving the discount data somehow and passing the data for calculation is a better design rather than hard coding the data inside if else but I could not structure the discount data.

// const discountData = {
// 	1000: 0,
// 	3000: 5,
// 	5000: 10,
// };

const calcDiscount = totalAmount => {
	if (totalAmount < 1000) {
		return 0;
	} else if (totalAmount >= 1000 && totalAmount < 3000) {
		return (totalAmount * 5) / 100;
	} else if (totalAmount >= 3000 && totalAmount < 5000) {
		return (totalAmount * 10) / 100;
	} else if (totalAmount >= 5000) {
		return (totalAmount * 20) / 100;
	}
};

const calcTotalBill = cart => {
	let bill = 0;
	for (let i = 0; i < cart.length; i++) {
		bill += cart[i]["price"] * cart[i]["quantity"];
	}

	const discountAmount = calcDiscount(bill);

	return `
Subtotal: ₹${bill}
Discount: ₹${discountAmount}
Total: ₹${bill - discountAmount}
    `;
};

console.log(calcTotalBill(cartArray));
