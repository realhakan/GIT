///Gib jedes zweite Wort aus, verdopple jeden Buchstaben und ersetze 
///Leerzeichen mit_
///lleebbeenn_iisstt

const data2 = "Das Leben ist schön"

let wörter = data2.split(" ");
let ergebnis = "";

for (let i = 0; i < wörter.length; i++) {

  if (i % 2 === 1) {

    for (let j = 0; j < wörter[i].length; j++) {
      ergebnis += wörter[i][j] + wörter[i][j];
    }
    ergebnis += "_";
  }
}

console.log(ergebnis)


////////////////////////////////////////////////////

/// suche alle negativen und geraden Zahlen (modulo) und berechne den Mittelwert dieser

const data1 = "4,9,-3,-4,-5,10,-2,1,14";
const numbers = data1.split(',')
let sum = 0;
let count = 0;


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 && numbers[i] % 2 === 0) {
        sum += numbers[i];
        count++;
    }
}

console.log(count)

const Mittelwert = sum / count;

console.log(Mittelwert);


////////////////////////////////////////////

const data3 = "Das Leben ist schön"

const wörter2 = data3.split("");
let ergebnis2 = 0;

for (let i = 0; i < wörter2.length; i++) { // Nutze "<" anstelle von "<="
    if (wörter2[i] == "ä" || wörter2[i] == "ü" || wörter2[i] == "ö") {
        ergebnis2++; 
    }
}

console.log(ergebnis2)


