// ## Exercici 6: Encesa del molí de cafè.

// Tenim un molí de cafè i espècies, però aquest només engegarà si, el tenim connectat a la corrent elèctrica i si té el contenidor per al cafè mòlt a la base. En cas contrari, i per la seguretat dels nostres usuaris, aquest dispositiu no engegarà si no es compleixen les dues condicions.

// ### Entrades:
// Crearem 2 variables, una per definir si el molí està connectat i una altra per saber si tenen el contenidor a la base. Tots dos són valors booleans.
// Posteriorment, farem l'avaluació i només si es compleixen les dues condicions podem encendre el nostre molí.

// ### Sortides:
// Imprimirem el valor de l'avaluació, si com a mínim un d'aquests valors és fals, hem de veure false,
// però si tots dos són veritables, veurem el valor de true.   

let connected = true;
let container = false;

console.log(`Es pot encendre el molí de cafè? ${connected && container ? "Sí" : "No"}`);