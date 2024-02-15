// Funktion zum Addieren von zwei Zahlen
function addieren(a, b) {
    return a + b;
  }
  
  // Funktion zum Subtrahieren von zwei Zahlen
  function subtraktion(a, b) {
    return a - b;
  }
  
  // Funktion zum Multiplizieren von zwei Zahlen
  function multiplikation(a, b) {
    return a * b;
  }
  
  // Funktion für die Superberechnung (a+b)/2 * a
  function supercalculation(a, b) {
    return ((a + b) / 2) * a;
  }

  /// Ostern 

  function Berechnungostern(year) {
    const a = year % 19;
    const b = Math.floor((7 * a + 1) / 19);
    const m = Math.floor((11 * a + 4 - b) / 29);
    const q = Math.floor(year / 4);
    const w = Math.floor((year + q + 31 - m) / 7);
    const p = 25 - m - w;
  
    if (p > 0) {
      return new Date(year, 3, p - 1);
    } else {
      return new Date(year, 2, 22 + p);
    }
  } 