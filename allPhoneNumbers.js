const patients = require("./patients");

const allPhoneNumbers = patients.map((patient) => {
  return patient.phoneNumber;
});

console.log(allPhoneNumbers);
