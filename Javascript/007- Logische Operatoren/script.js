// Erstelle zwei Zufallszahl zwischen 0 und 100
// Speichere diese jeweils in einer Variable
 
// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
 
// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
 
// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
 
// Erstelle zwei Zufallszahlen zwischen 0 und 100
const nummer1 = Math.floor(Math.random() * 101);
const nummer2 = Math.floor(Math.random() * 101);
 

console.log("Zahl 1: "+nummer1);
console.log("Zahl 2: "+nummer2);
 

if (nummer1 < nummer2 && nummer1 < 50) {
  console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
 
if (nummer1 < 30 || nummer2 < 30) {
  console.log("Eine der beiden ist kleiner als 30");
}
 
if (nummer1 < 50 && nummer2 !== 50) {
  console.log("Erste Zahl klein, zweite kein 50iger");
}
