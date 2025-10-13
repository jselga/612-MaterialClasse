// ## Exercici 4. Bateria portàtil
// Tenim una bateria portàtil que pot carregar múltiples dispositius. Segons el dispositiu connectat, proporcionarà diferents potències:
// - Telèfon mòbil → 25 W
// - Portàtil → 65 W
// - Llum USB → 5 W
// - Qualsevol altre → 0 W  

// ### Entrades
// - Variable`dispositiu`.  
// - Variable`potencia`(sense valor inicial).  

// ### Sortides
// Imprimirem la potència subministrada per la bateria segons el dispositiu.  

// Proposar fer-ho amb altres mètodes com el següent

map = {
    "Telèfon mòbil": "25W",
    "Portàtil": "65W",
    "Llum USB": "5W",
    "Qualsevol altre": "0W"
};
dispositiu = "Llum USB";

console.log(`La potència de ${dispositiu} és ${map[dispositiu]}`);
