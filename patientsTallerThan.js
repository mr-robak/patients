const patients = require("./patients");

const height = process.argv[2];

const specificPatient = patients.filter((patient) => {
  //   console.log(patients);
  return patient.height > height;
});

// console.log(specificPatient);
console.log("OUTPUT:", specificPatient);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(
  `NUMBER OF PATIENTS taller THAN ${height}m:`,
  specificPatient.length
);
