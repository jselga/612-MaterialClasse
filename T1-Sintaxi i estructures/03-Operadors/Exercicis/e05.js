// ## Exercici 5: Mostrar contingut a usuaris.
// Mostrarem 4 tipus de contingut, això dependrà de quin paquet tinguin contractat els nostres usuaris:
// - no registrats
// - amb pla free
// - Nacional
// - IBER
// - EUR
// - AllAccess
//      (Els usuaris AllAccess tindran accés a tots els continguts)  

// Entre els continguts a mostrar tindrem:
// - Contingut lliure: aquell contingut que permetrem que visualitzin tots els usuaris, encara que no tinguin un compte registrat.   

// - Contingut free: contingut que només podràn veure els usuaris que inguin un compte registrat.
// - Contingut EUR: contingut que només podràn veure els usuaris amb el paquet EUR.
// - Contingut Nacional: tindran accés els usuaris amb el paquet nacional i IBER.
// - Contingut Península Ibèrica: que ho podran veure els usuaris amb el paquet IBER.
// Aquí hauràs de determinar si els següents usuaris poden accedir a aquest contingut, segonsels seus paquets contractats.

// ### Entrades: 
// Crearem una variable que tindrà el paquet de l'usuari.
// Realitzarem 5 avaluacions, cadascuna per un tipus de contingut depenent del paquet, i haurem de tornar true, si el paquet del nostre usuari li permet veure el contingut.

// ### Sortides:
// Imprimirem el paquet del nostre usuari, a més de les 5 avaluacions, indicant a quin contingut
// correspon.


//let pla = "unregistered";
//let pla = "free";
//let pla = "national";
//let pla = "IBER";
//let pla = "EUR";
let pla = "AllAccess";

console.log(`
    Pot veure contingut free: ${pla != "unregistered"},
    Pot veure contingut EUR: ${["EUR", "AllAccess"].includes(pla)},
    Pot veure contingut Nacional: ${["national", "IBER", "AllAccess"].includes(pla)},
    Pot veure contingut Península Ibèrica: ${["IBER", "AllAccess"].includes(pla)}`);