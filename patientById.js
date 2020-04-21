const patients = require("./patients");

const id = parseInt(process.argv[2]);

const specificPatient = patients.find(function (patient) {
  // console.log("WHAT IS PATIENT?", patient);
  // if (id === patient.id) {
  //   return true;
  // } else {
  //   return false;
  // }
  // below is alternative to above if statement:
  return id === patient.id; //returns true or false
});

if (specificPatient !== undefined) {
  console.log("OUTPUT:", specificPatient);
} else {
  console.log(`Patient with id: ${id}, not found`);
}

console.log("OUTPUT:", specificPatient);
