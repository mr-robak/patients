const patients = require("./patients");

function calculateBMI(height, weight) {
  return (weight / (height * height)).toFixed(1);
}

const bmis = patients.map(function (patient) {
  const { height, weight } = patient;

  return calculateBMI(height, weight); // return BMI for a patient here
});

console.log(bmis);
