// patientsWeighingLessThan.js
const patients = require("./patients");

const weight = process.argv[2];

const specificPatient = patients.filter((patient) => {
  return patient.weight < weight;
});

console.log("OUTPUT:", specificPatient);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(
  `NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}kg:`,
  specificPatient.length
);
