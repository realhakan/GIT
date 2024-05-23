

// Zähle wie oft a oder e oder ö vorkommen
const data3 = "Das Leben ist schön";
const wörter = data3.split("")
let ergebnis =0;
let count = 0;


for (let i = 0; i <= wörter.length; i++) {
    if (wörter[i] == "a" || wörter[i] == "e" ||  wörter[i] == "ö") 
    wörter[i] += ergebnis;
}

console.log(ergebnis)

