function crearEsdeveniment(nom, durada, entrades) {
    return {
        nom,
        durada,
        entrades,
        mostrarInformacio: function () {
            console.log(`nom: ${nom}\ndurada: ${durada}\nentrades disponibles: ${entrades}\n`);
        },
        comprarEntrada: function (quantitat) {
            if (quantitat < 0) {
                return "Error: Quantitat negativa";
            } else if (5 < quantitat) {
                return "Error: No es poden comprar més de 5 entrades";
            }
            if (entrades < quantitat) {
                return "No queden prou entrades";
            }
            entrades -= quantitat;
            return `${quantitat} entrades comprades!`;
        },
        cancellarEntrada: function (quantitat) {
            entrades += quantitat;
        }
    }
}

nanowar = crearEsdeveniment("Concert: Nanowar of Steel", 120, 50);

// 1. Mostrar la informació de l’esdeveniment.
nanowar.mostrarInformacio();

// 2. Comprar 3 entrades.
nanowar.comprarEntrada(3);

// 3. Mostrar la informació.
nanowar.mostrarInformacio();

// 4. Intentar comprar 6 entrades.
nanowar.comprarEntrada(6);

// 5. Cancel·lar 2 entrades.
nanowar.cancellarEntrada(2);

// 6. Mostrar la informació.
nanowar.mostrarInformacio();