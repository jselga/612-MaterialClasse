function creaUsuari(nom, cognom, data_naixement, adreca, edat, pais_naixement, subscripcio_activa) {
    return {
        nom,
        cognom,
        data_naixement,
        adreca,
        edat,
        pais_naixement,
        subscripcio_activa
    };
}

let user = creaUsuari("Chanchito", "Feliç", "10 d’abril de 1992", "Av. Sempre Viva, 742", "31 anys", "Mèxic", true);
let user2 = creaUsuari("Chanchito", "Trist", "25 de juny de 1985", "Carrer Lluna, 123", "38 anys", "Espanya", false);
let user3 = creaUsuari("Felipe", "Schurmann", "3 de setembre de 2000", "Boulevard del Sol, 456", "23 anys", "Argentina", true);

console.log(user);
console.log(user2);
console.log(user3);