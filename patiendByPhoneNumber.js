const patients = require("./patients");

const phoneNumber = process.argv[2];

const specificPatient = patients.find((patient) => {
  return phoneNumber === patient.phoneNumber;
});

specificPatient === undefined
  ? console.log(
      `Patient with a phone number: ${phoneNumber}
doesn't seem to exist.`
    )
  : console.log(specificPatient);
