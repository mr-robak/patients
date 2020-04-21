// arrayPractice.js
const patients = require("./patients");

// accesing elements in an array
const firstPatient = patients[0];

// console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

// console.log(tenthPatient);

// DIY
function consoleLogNthElement(n) {
  console.log(patients[n]);
}
// - console.log the second patient from the array
consoleLogNthElement(1);

consoleLogNthElement(patients.length - 2);
// - console.log the last patient from the array
