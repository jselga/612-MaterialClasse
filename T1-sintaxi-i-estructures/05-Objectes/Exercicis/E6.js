class Atac {
    constructor(nom, dany, energia) {
        this.nom = nom;
        this.dany = dany;
        this.energia = energia;
        this.to_string = function () {
            return `  - ${this.nom}: ${this.dany} dany, requereix ${this.energia} energia`;
        }
    }
}
class Carta {
    constructor(nom, vida, tipus, atacs, debilitats) {
        this.nom = nom;
        this.vida = vida;
        this.tipus = tipus;
        this.atacs = atacs;
        this.energia = 0;
        this.debilitats = debilitats;
        this.atacar = function (objectiu, index_atac) {
            if (!(0 <= index_atac && index_atac < atacs.length)) {
                console.log(`L'atac amb index ${index_atac} no existeix`);
                return;
            }
            const atac = this.atacs[index_atac];
            if (this.energia < atac.energia) {
                console.log(`No hi ha prou energia (${this.energia}/${atac.energia}) per fer l'atac ${atac.nom}`);
                return;
            }
            this.energia -= atac.energia;
            objectiu.rebreAtac(atac.dany);
            console.log(`${this.nom} ha utilitzat ${atac.nom} i gastat ${atac.energia}`);
            console.log(`${objectiu.nom} ha rebut ${atac.dany} de dany`);
        };
        this.rebreAtac = function (dany) {
            this.vida -= dany;
            if (this.vida < 0) {
                this.vida = 0;
            }
        }
        this.afegir_energia = function (quantitat) {
            this.energia += quantitat;
        }
        this.print = function () {
            console.log(`- Nom: ${this.nom}`);
            console.log(`- Punts de vida: ${this.vida}`);
            console.log(`- Tipus: ${this.tipus}`);
            console.log(`- Atacs:`);
            this.atacs.forEach(atac => {
                console.log(`${atac.to_string()}`);
            });
            console.log(`- Energia: ${this.energia}`);
            console.log(`- Debilitat: ${this.debilitats}`);

        }
    }
}

let carta1 = new Carta("Drac de Foc", 100, "Foc", [new Atac("Cridada", 30, 2), new Atac("Cop Ígnic", 50, 3)], "Aigua");
let carta2 = new Carta("Serp Aquàtica", 120, "Aigua", [new Atac("Tsunami", 40, 2)], "Elèctric");

console.log(`=======================================`);
console.log(`# Estat inicial #`);
carta1.print();
console.log(`----------`);
carta2.print();
console.log(`=======================================`);
console.log(`# Atac sense energia #`);
carta1.atacar(carta2, 0);
console.log(`=======================================`);
console.log(`# Afegir energia i printar estats #`);
carta1.afegir_energia(5);
carta2.afegir_energia(3);
carta1.print();
console.log(`----------`);
carta2.print();
console.log(`=======================================`);
console.log(`# Index d'atac incorrecte #`);
carta1.atacar(carta2, 5);
console.log(`=======================================`);
console.log(`# Atac correcte de drac a serp #`);
carta1.atacar(carta2, 1);
console.log(`~~~~~~~~~~`);
carta1.print();
console.log(`----------`);
carta2.print();
console.log(`=======================================`);
console.log(`# Atac correcte de serp a drac #`);
carta2.atacar(carta1, 0);
console.log(`~~~~~~~~~~`);
carta1.print();
console.log(`----------`);
carta2.print();
console.log(`=======================================`);
