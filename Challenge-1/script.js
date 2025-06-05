const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMI Mark:" + BMIMark);
console.log("BMI John:" + BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log("whether Mark has a higher BMI than John: " + markHigherBMI);
