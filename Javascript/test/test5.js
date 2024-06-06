

// Zähle wie oft a oder e oder ö vorkommen
const data3 = "Das Leben ist schön";
const wörter = data3.split("");
let ergebnis = 0;

for (let i = 0; i < wörter.length; i++) { // Nutze "<" anstelle von "<="
    if (wörter[i] == "a" || wörter[i] == "e" || wörter[i] == "ö") {
        ergebnis++; 
    }
}

console.log(ergebnis)




const data1 = "4,9,-3,-4,-5,10,-2,1,14";
let numbers1 = data1.split(",").map(Number); // Wandelt die Strings in Zahlen um
let sum = 0;
let count = 0;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    sum += numbers1[i];
    count++;
  }
}

const Mittelwert = sum / count;

console.log(Mittelwert);

// Der gegebene String mit Zahlen
const data1 = "4,9,-3,-4,-5,10,-2,1,14";

// Schritt 1: Den String in ein Array von Zahlen umwandeln
const numbers = data1.split(',').map(Number);

// Initialisiere Variablen für die Summe und Anzahl der negativen und geraden Zahlen
let sum = 0;
let count = 0;

// Schritt 2: Durchlaufe das Array und finde negative und gerade Zahlen
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 && numbers[i] % 2 === 0) {
        sum += numbers[i];
        count++;
    }
}

// Schritt 3: Berechne den Mittelwert dieser Zahlen
const average = count > 0 ? sum / count : 0;

// Ergebnis ausgeben
console.log("Der Mittelwert der negativen und geraden Zahlen ist:", average);

