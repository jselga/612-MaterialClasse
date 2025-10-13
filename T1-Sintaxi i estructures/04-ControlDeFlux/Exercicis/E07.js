// ## Exercici 7. Alimentador de mascotes
// Automatitzarem un alimentador per a gossos i gats. La quantitat de menjar dependrà del tipus i pes de la mascota.  

// ### Entrades
// - Variable `tipusMascota`.  
// - Variable `pes`.  
// - Variable `quantitatMenjar`.  

// #### Gossos
// - < 5 kg → 100 g  
// - 5 – 9,99 kg → 200 g  
// - 10 – 19,99 kg → 300 g  
// - ≥ 20 kg → 400 g  

// #### Gats
// - < 3 kg → 50 g  
// - 3 – 5,99 kg → 100 g  
// - ≥ 6 kg → 150 g  

// ### Sortides
// S’imprimirà la quantitat de grams corresponent segons el tipus de mascota i el seu pes.  

mascota = {
    tipusMascota: "gos",
    pes: 32
}

if (mascota.tipusMascota == "gos") {
    if (mascota.pes < 5) {
        console.log(`100g`);
    } else if (5 <= mascota.pes && mascota.pes < 10) {
        console.log(`200g`);
    } else if (10 <= mascota.pes && mascota.pes < 20) {
        console.log(`300g`);
    } else {
        console.log(`400g`);
    }
} else if (mascota.tipusMascota == "gat") {
    if (mascota.pes < 3) {
        console.log(`50g`);
    } else if (3 <= mascota.pes && mascota.pes < 6) {
        console.log(`100g`);
    } else {
        console.log(`150g`);
    }
}