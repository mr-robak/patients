const patients = require("./patients");

function calculateBMR(weight, height, ageOfUser, genderOfUser) {
  return genderOfUser === "m"
    ? Math.round(10 * weight + 6.25 * height * 100 - 5 * ageOfUser + 50)
    : Math.round(10 * weight + 6.25 * height * 100 - 5 * ageOfUser - 150);
}

const allBMRs = patients.map((patient) => {
  const { weight, height, age, gender } = patient;
  return calculateBMR(weight, height, age, gender);
});

console.log(allBMRs);
