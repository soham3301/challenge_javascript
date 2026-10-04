const enteredYear = Number(prompt(`Enter the year`));

if (enteredYear % 400 === 0) {
  alert(`It's a rare type of Leap Year`);
} else if (enteredYear % 4 === 0) {
  if (enteredYear % 100 === 0) {
    alert(`Not a leap year. Century Exception`);
  } else {
    alert(`You got a leap year`);
  }
} else {
  alert(`Not a leap year`);
}
