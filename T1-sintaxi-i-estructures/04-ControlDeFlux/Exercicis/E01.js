// ## Exercici 1. Mida màxima de càrrega de fitxers
// El nostre sistema només acceptarà imatges que ocupin menys de 5 MB. Hem de determinar si totes les imatges que ha introduït l’usuari són menors o iguals a la mida màxima permesa pel nostre servidor. Si no és així, notificarem a l’usuari que el fitxer ha excedit la mida màxima.

// ### Entrades
// Definirem dues variables:  
// - Una per a la mida del fitxer.  
// - Una altra per a la mida màxima permesa pel sistema.  

// ### Sortides
// Imprimirem:  
// - *"El fitxer compleix amb la mida permesa."* si ocupa igual o menys de 5 MB.  
// - *"El fitxer ha excedit la mida màxima permesa."* si ocupa més.  


let mida = 10;
const max = 5;

if (mida <= max) {
    console.log("El fitxer compleix amb la mida permesa.");
} else {
    console.log("El fitxer ha excedit la mida màxima permesa.");
}