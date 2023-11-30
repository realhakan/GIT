let Bananpriceperkilo = 2.14;
let applepriceperkilo = 3.43;
console.log("Ein Kilo Bananen kosten " + Bananpriceperkilo)
console.log("Ein Kilo apfel kosten " + applepriceperkilo)

let Banane = "Banane";
let Apple = "Apfel";

let gewichtapfelprokilo = 1/0.34;
let gewichtbananeprokilo = 1/0.22;

console.log("Ein Apfel kostet " + (applepriceperkilo/gewichtapfelprokilo)*1); 

console.log("Apfel pro Kilo: ", gewichtapfelprokilo);
console.log("Bananen pro Kilo: ", gewichtbananeprokilo);

///Ein Apfel pro kilo////

let preisvonachtäpfeln = (applepriceperkilo/gewichtapfelprokilo)*8;

console.log("8 Äpfel kosten " + preisvonachtäpfeln + "€")

let Preisvonbananen17 = (Bananpriceperkilo/gewichtbananeprokilo)*17

console.log("17 kilo Bananen kosten " + Preisvonbananen17 + "€")

let Preisvonbananen1tonne = Bananpriceperkilo*1000

console.log("17 kilo Bananen kosten " + Preisvonbananen1tonne + "€")

let Preisvonapfel1tonne = applepriceperkilo * 1000

console.log("Eine tonne Äpfel kosten " + Preisvonapfel1tonne + "€")




