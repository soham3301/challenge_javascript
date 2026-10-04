const firstName = prompt(`Enter your first name`);
const lastName = prompt(`Enter your last name`);
const birthYear = Number(prompt(`Enter your birth year`));

const createUsername = (fName, lName, bYear) => {
  let usernameStarter = `@`;
  let lastTwoDigits = String(birthYear).slice(-2);
  return (
    usernameStarter +
    firstName.toLowerCase() +
    lastName.toLowerCase() +
    lastTwoDigits
  );
};

alert(createUsername(firstName, lastName, birthYear));

//! Note:- two usernames could become same. need to check a database of username before this.
