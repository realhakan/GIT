///Aufgabe 1

	//Erstelle ein Array mit folgenden Werten:
	//4,1,2,3
	///Füge die Werte 17 und 199 dazu
	
		///a. Gib alle Werte in einer Schleife aus!
		///b. Zähle alle Werte zusammen und gib das Ergebnis aus
		///c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus
		

let arr = [4,1,2,3,17,199]
let summe = 0


for(let index = 0; index < arr.length; index++){
    console.log(arr[index])
}

for (let i = 0; i < arr.length; i++) {
    summe += arr[i];
}

let divison = summe /arr.length

console.log(summe)
console.log(divison)


	
///Aufgabe 2

	///Erstelle ein Array mit folgenden Strings:
	///"Susi", "Paula", "Hans"
	
	///Gib folgenden Satz aus:
	///"Meine Freunde sind Susi, Paula und Hans
	
	///Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
///"Meine Freunde sind Susi, Paula, Hans und Sepp 


const array = ["Susi", "Paula", "Hans"]

const wörter = array.split(",")




console.log("Meine Freunde sind "+ array)