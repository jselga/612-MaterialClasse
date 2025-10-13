// ## Exercici 3. Bullidora elèctrica
// Has de generar el sistema de control d’una bullidora elèctrica.  
// La bullidora no s’engegarà si no té aigua i s’apagarà quan arribi a 100 °C.

// 1. Verificarem que la bullidora tingui aigua.  
//    - Si no en té, imprimirem un missatge indicant - ho i no s’encendrà.  
//    - Si en té, l’estat d’encesa passarà a `true` i imprimirem un missatge confirmant - ho.  

// 2. Mitjançant un * loop *, imprimirem la temperatura en intervals de 25 graus fins a arribar a 100.

// 3. Quan s’assoleixi la temperatura màxima, l’estat d’encesa passarà a `false` i imprimirem que la bullidora té aigua calenta.  

// ### Entrades
//     - Variable booleana`teAigua`, inicialitzada a`true`.  
// - Variable booleana`encesa`, inicialitzada a`false`.  
// - Variable`temperatura`, inicialitzada a 0.  

// ### Sortides
//     - * "La bullidora està encesa" *
//     - * "Escalfant aigua... la temperatura és de: X graus" * (per cada iteració)
// - * "La temperatura ha arribat al màxim, la bullidora s’apagarà." *
//     - * "Ara tens aigua calenta a 100 graus" *

//     Si no hi ha aigua, només s’ha d’imprimir:
// - * "La bullidora no té aigua, no es pot encendre." *  

let bullidora = {
    power: true,
    aigua: false,
    temperatura: 0,
    esta_encesa: function () {
        return this.power;
    }
};

console.log("* La bullidora està encesa *");

while (bullidora.temperatura < 100) {
    console.log(`* Escalfant aigua... la temperatura és de: ${bullidora.temperatura} graus *`);
    bullidora.temperatura += 25;
}

console.log("* La temperatura ha arribat al màxim, la bullidora s’apagarà. *");
console.log("* Ara tens aigua calenta a 100 graus. *");



