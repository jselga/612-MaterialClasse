// ## Exercici 6. Préstecs
// Un banc ofereix préstecs a diferents clients, alguns dels quals ja tenen un compte.  

// 1. Verificarem si el sol·licitant té un compte.  
// 2. Determinarem la taxa d’interès segons la seva puntuació de crèdit:  
//    - ≥ 750 → 10%  
//    - 700 – 749 → 15%  
//    - 650 – 699 → 20%  
//    - < 650 → No es concedeix préstec.  

// 3. Els clients amb compte poden obtenir un descompte addicional del 10% sempre que la taxa resultant sigui igual o superior al 15%.  

// ### Entrades
// - Variable `teCompte`.  
// - Variable `puntuacioCredit`.  
// - Variable `taxaInteres` (sense valor inicial).  

// ### Sortides
// Imprimirem la taxa d’interès si s’aprova el préstec.  

client = {
    teCompte: true,
    puntuaciCredit: 800
}

if (client.puntuaciCredit < 650) {
    client.taxaInteres = "No es concedeix préstec.";
} else if (650 <= client.puntuaciCredit && client.puntuaciCredit < 700) {
    client.taxaInteres = "20%";
} else if (700 <= client.puntuaciCredit && client.puntuaciCredit < 750) {
    client.taxaInteres = "15%";
} else {
    client.taxaInteres = "10%";
}

console.log(`La taxa d'interés és ${client.taxaInteres}`);