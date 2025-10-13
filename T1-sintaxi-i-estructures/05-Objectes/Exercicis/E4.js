function Esdeveniment(nom, durada, entrades) {
    this.nom = nom;
    this.durada = durada;
    let entrades_disp = entrades;
    this.mostrarInformacio = function () {
        console.log(`nom: ${this.nom}\ndurada: ${this.durada}\nentrades disponibles: ${entrades_disp}\n`);
    };
    this.comprarEntrada = function (quantitat) {
        if (quantitat < 0) {
            return "Error: Quantitat negativa";
        } else if (5 < quantitat) {
            return "Error: No es poden comprar més de 5 entrades";
        }
        if (entrades_disp < quantitat) {
            return "No queden prou entrades";
        }
        entrades_disp -= quantitat;
        return `${quantitat} entrades comprades!`;
    };
    this.cancellarEntrada = function (quantitat) {
        entrades_disp += quantitat;
    };
}

nanowar = new Esdeveniment("Concert: Nanowar of Steel", 120, 50);

// 1. Mostrar la informació de l’esdeveniment.
nanowar.mostrarInformacio();

// 2. Comprar 3 entrades.
nanowar.comprarEntrada(3);

// 3. Mostrar la informació.
nanowar.mostrarInformacio();

// 4. Intentar canviar directament el valor de la propietat d’entrades a 100.
nanowar.entrades = 100;

// 5. Cancel·lar una entrada.
nanowar.cancellarEntrada(1);

// 6. Mostrar la informació.
nanowar.mostrarInformacio();
