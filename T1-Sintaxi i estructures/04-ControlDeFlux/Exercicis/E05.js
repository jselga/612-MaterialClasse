// ## Exercici 5. Molí de cafè
// Als molins de cafè es pot seleccionar el nombre de tasses que necessitem.  

// 1. Verificarem que l’usuari hagi col·locat el contenidor de cafè mòlt.  
// 2. Verificarem el nombre de tasses seleccionat.  
// 3. Determinarem el temps de funcionament del molí segons la selecció.  

// ### Entrades
// - Variable booleana `teContenidor`.  
// - Variable `numTasses`.  
// - Constant amb el temps en segons per tassa.  

// ### Sortides
// - Si no hi ha contenidor → *"Error: el molí no té contenidor."*  
// - Si el nombre de tasses és menor o igual a 0 → *"No s’ha seleccionat cap tassa."*  
// - En cas contrari → *"Iniciant procés..."* i després el missatge amb el nombre de tasses i el temps total.  

const cup_time = 20;

moli_cafe = {
    teContenidor: false,
    numTasses: 10,
};

if (!moli_cafe.teContenidor) {
    console.log("Error: el molí no té contenidor.");
}
if (moli_cafe.numTasses == 0) {
    console.log('No s’ha seleccionat cap tassa.');
} else {
    console.log("Iniciant procés...");
    console.log(`${moli_cafe.numTasses} tasses en ${moli_cafe.numTasses * cup_time} segons.`);
}