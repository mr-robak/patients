const patients = require("./patients");

const allIDs = patients.map((patient) => {
  return patient.id;
});

console.log(allIDs);
