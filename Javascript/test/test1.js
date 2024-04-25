const data = "Hans geht heute schwimmen ! das ist gut"

//Gib jedes 3te Wort aus
//Output
//Hans schwimmen gut

const Wörter = data.splitt("")


for (let i = 0; i < Wörter.length; i += 3) {
    ergebnis += Wörter[i] + " ";
  }


  console.log(ergebnis.trim());









  const numbers = "8,2,1,4,6,1,8,7"

///Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
///output


const numbersarray = numbers.split(",").map(Number);

const zählen = numbersarray.filter(num => num >= 4 && num < 8).length;


console.log(zählen);



//  Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
//  output : 3




const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,14"
const temperaturesWeek2 = "-1,5,3,-10,11,2,30,-8,-44"

const TemperatureArray1 = temperaturesWeek1.slpitt(",".map(Number));
const TemperatureArray2 = temperaturesWeek1.slpitt(",".map(Number));




function mittelwertwoche1(TemperatureArray1){
    TemperatureArray1 ++ / 9
}

let resultwoche1 = mittelwertwoche1 (TemperatureArray1)

console.log(resultwoche1)

function mittelwertwoche2 (TemperatureArray2){
    TemperatureArray2 ++ / 9
}

let resultwoche2 = mittelwertwoche1 (TemperatureArray1)

console.log(mittelwertwoche2)





///Berechne den Mittelwert der Temperaturen der beiden Wochen
///Gib aus
// Mittelwert Woche 1: xxx
// Mittelwert Woche 2: xxx
