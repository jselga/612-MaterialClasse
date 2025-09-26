// ## Exercici 4: Triar un aire condicionat adequat.
// Volem triar un sistema d'aire condicionat adequat per a la mida d'una habitació.  
// Necessitem determinar l'àrea d'una habitació per fer la compra d'un aire condicionat.Primer caldrà obtenir l'àrea d'aquesta habitació.   
// Les mides són: 4m de llargada 3.8 m d'ample.  
// Ara, depenent de l'àrea d'aquesta habitació s'haurà de determinar la quantitat de tones refrigerants de l'aparell.En concret farem avaluacions per a 1 tona, 1.5
// tones i 2 tones.   
// - On per a una habitació de 16m < sup > 2</sup > requerirà màxim d'1 tona.
// - Per 1.5 tones seria adequat per a habitacions de 15m < sup > 2</sup > a 25m < sup > 2</sup >.
// - I d'entre 25m<sup>2</sup> a 30m<sup>2</sup> correspondrà col·locar-ne un de 2 tones.  

// Per això haurem de realitzar les avaluacions perquè puguem saber quina de les opcions seria la més adequada.  
// ### Entrades:
// Crearem una variable per al càlcul de l'àrea de l'habitació.
// El següent és que crearem 3 variables més per avaluar si la nostra habitació compleix les condicions per saber així quin aire condicionat hem d'instal·lar.  

// Imprimirem cadascuna d'aquestes variables, però ara afegirem al nostre { console.log } de quin sistema d'aire condicionat es tracta o si es tracta de l'àrea de la nostra habitació. 
// ### Sortides:
// Haurem de veure 4 dades a la nostra consola:
// - L'àrea de l'habitació.
// - Si és adequat per a 1 tona.
// - Si és adequada per a 1.5 tones.
// - Si és adequada per a 2 tones.

let llargada = 4;
let amplada = 3.8;
let area = llargada * amplada;

console.log(area)
console.log(area < 16);
console.log(15 <= area && area <= 25);
console.log(25 <= area && area <= 30);