// patientByEmail.js
const patients = require("./patients");
const email = process.argv[2];

// radolthineg@mayoclinic.com
// console.log(patients);

let specificPatient = patients.find((patient) => {
  //   console.log(patient);
  // your logic here
  return email === patient.email;
});

specificPatient === undefined
  ? console.log(`cant find patient with an email: ${email}`)
  : console.log(specificPatient);
