const patients = require("./patients");

// map executes a callback for each element in the array
const anonymizedData = patients.map((patient) => {
  const { id, age, gender, height, weight, dailyExercise } = patient;
  // return an object with id and age, it gets added to the output array
  return {
    id: id,
    age: age,
    gender: gender,
    height: height,
    weight: weight,
    dailyExercise: dailyExercise,
  };
});

console.log(anonymizedData);
