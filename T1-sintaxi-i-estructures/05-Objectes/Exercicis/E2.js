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

if ("adreca" in user) {
    delete user.adreca;
}

if ("alcada" in user) {
    delete user.alcada;
}

user.subscripcio_activa = !user.subscripcio_activa;

console.log(user);