//? Challenge 25 & 26 - Bank Account & ATM Simulator

const bankAccount = {
	name: "Soham",
	number: 122329845,
	pin: 12345,
	balance: 1500,
	deposit: function (amount) {
		if (amount >= 0) {
			this.balance += amount;
			return `Deposit ${amount} INR || New Balance: ${this.balance}`;
		} else {
			return `Negative amount can not be deposited.`;
		}
	},
	withdraw: function (amount) {
		if (amount <= this.balance && amount >= 0) {
			this.balance -= amount;
			return `Withdraw ${amount} INR || New Balance: ${this.balance}`;
		} else {
			return `Insufficient Balance`;
		}
	},
	checkBalance: function () {
		return `Account Holder: ${this.name} || Account Number: ${this.number} || Balance: ${this.balance}`;
	},
	checkLogin: function (ac, pin) {
		//* A very basic form of authentication. Not for production.
		if (ac === this.number && pin === this.pin) {
			return true;
		} else {
			return false;
		}
	},
	//* Note:- If I can create a class, then I can generate so many objects and also introduce transfer money between two bank accounts.
};

const acNumber = document.getElementById(`account-number`);
const acPIN = document.getElementById(`pin`);
const loginBtn = document.getElementById(`loginBtn`);

const loginFailed = document.getElementById(`login-failed`);
const afterLoginDiv = document.getElementById(`after-login`);

const deposit = document.getElementById(`deposit`);
const depositBtn = document.getElementById(`depositBtn`);
const withdraw = document.getElementById(`withdraw`);
const withdrawBtn = document.getElementById(`withdrawBtn`);
const balanceBtn = document.getElementById(`checkBalBtn`);

const resultDisplay = document.getElementById(`result`);
const logout = document.getElementById(`logout`);

//* Note:- I don't think this is a good architecture. When user submits their credentials, it should be varified in the server, not in the front-end.
loginBtn.addEventListener(`click`, () => {
	const receivedAccountNumber = Number(acNumber.value);
	const receivedPIN = Number(acPIN.value);

	if (bankAccount.checkLogin(receivedAccountNumber, receivedPIN)) {
		//* Note:- I am just hiding and displaying the menu using css. I believe in real world this is not how login works.
		afterLoginDiv.style.display = `block`;
	} else {
		loginFailed.textContent = `Invalid Credentials - Login Failed`;
	}
});

depositBtn.addEventListener(`click`, () => {
	const depositAmount = Number(deposit.value);
	const result = bankAccount.deposit(depositAmount);
	resultDisplay.textContent = result;
});

withdrawBtn.addEventListener(`click`, () => {
	const withdrawAmount = Number(withdraw.value);
	const result = bankAccount.withdraw(withdrawAmount);
	resultDisplay.textContent = result;
});

balanceBtn.addEventListener(`click`, () => {
	const result = bankAccount.checkBalance();
	resultDisplay.textContent = result;
});

logout.addEventListener(`click`, () => {
	afterLoginDiv.style.display = `none`;
});
