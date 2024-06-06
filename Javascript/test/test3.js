//Suche alle geraden Zahlen (modulo) und berechne den Mittelwert dieser

const data1 = "4,9,-3,-9,-5,10,2,1,14"
let numbers1 = data1.split(",");
let sum = 0;
let count = 0;


 
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
      sum += numbers1[i];
      count++;
      console.log(count)
    }
  }

const Mittelwert = sum / numbers1.length;


console.log(Mittelwert)
 
