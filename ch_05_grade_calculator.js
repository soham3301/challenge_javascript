const mark = Number(prompt(`Enter Your Mark`));

if (mark < 0 || mark > 100) {
  alert(`Invalid Input`);
} else if (mark >= 90 && mark <= 100) {
  alert(`Grade A`);
} else if (mark >= 80 && mark < 90) {
  alert(`Grade B`);
} else if (mark >= 70 && mark < 80) {
  alert(`Grade C`);
} else if (mark >= 60 && mark < 70) {
  alert(`Grade D`);
} else {
  alert(`Grade F`);
}

//! I checked the input with string, it doesn't throw an error, just runs the else block
