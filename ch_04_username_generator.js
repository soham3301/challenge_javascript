const firstName = prompt(`Enter your first name`);
const lastName = prompt(`Enter your last name`);
const birthYear = Number(prompt(`Enter your birth year`));

const createUsername = (fName, lName, bYear) => {
  let usernameStarter = `@`;
  let lastTwoDigits = String(bYear).slice(-2);
  return (
    usernameStarter + fName.toLowerCase() + lName.toLowerCase() + lastTwoDigits
  );
};

alert(createUsername(firstName, lastName, birthYear));

//! Note:- two usernames could become same. need to check a database of username before this.
