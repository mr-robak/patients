const patients = require("./patients");
const firstPatient = patients[2];

const {
  weight,
  height,
  age,
  dailyExercise,
  firstName,
  lastName,
} = firstPatient;

const fullName = `${firstName} ${lastName}`;

function validateExcercise() {
  console.log(fullName);
  if (dailyExercise == "no") {
    ("does not exercise");
  } else {
    console.log("this patient exercises");
  }
}

validateExcercise();

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient
// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"
