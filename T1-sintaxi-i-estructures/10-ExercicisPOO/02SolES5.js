//e) Herència

function General() {
  this.garantia = 1;
};
General.prototype.dObj = function () {
  dObj(this);
};
// ---------------- a) Constructors i instàncies ---------------- 
// a.1 Funcions constructores

function Fabricant(nom, comercial, ciutat, telf) {
  this.nom = nom;
  this.comercial = comercial;
  this.ciutat = ciutat;
  this.telf = telf;
  this.telfEmerg = 112;
  General.call(this);
};

function Distribuidor(nom, ciutat, telf, fabricant) {
  this.nom = nom;
  this.ciutat = ciutat;
  this.telf = telf;
  this.fabricant = fabricant;
  General.call(this);
};

function Equip(nom, model, fabricant, distribuidor, potencia) {

  this.nom = nom;
  this.model = model;
  this.fabricant = fabricant;
  this.distribuidor = distribuidor;
  this.potencia = potencia;
  General.call(this);
};


// dObj_s simple: propietats enumerables pròpies
const dObj_s = function (obj) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      console.log(`${prop}: ${obj[prop]} Type: ${typeof obj[prop]}`);
    }
  }
};

// dObj descriptiu: propietats més noms del objectes que conté
function dObj(obj) {
  let msg = "Objecte:";
  for (const prop in obj) {
    // if(true){
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const valor = obj[prop];
      if (typeof valor !== "function") {
        if (typeof valor === "object" && valor !== null) {
          if ("nom" in valor) msg += ` ${prop}: ${valor.nom} (objecte)`;
          else msg += ` ${prop}: [objecte]`;
        } else {
          msg += ` ${prop}: ${valor} (${typeof valor})`;
        }
      }
    }
  }
  console.log(msg);
}


//a.2 Instàncies
let fagor = new Fabricant('Fagor', 'ComercialF', 'Sant Sebastia', '902105011');
const zanussi = new Fabricant('Zanussi', 'ComercialZ', 'Saragossa', '902105111');
const balay = new Fabricant('Balay', 'ComercialB', 'Sevilla', '902105211');

const distr1 = new Distribuidor('Distrib1', 'Barcelona', '931234567', fagor);
const distr2 = new Distribuidor('Distrib2', 'Barcelona', '931234568', fagor);
const distr3 = new Distribuidor('Distrib3', 'Girona', '972123456', zanussi);

const equip1 = new Equip('rentadora', 'A24', fagor, distr1, 45);
const equip2 = new Equip('planxa', 'E4', balay, distr1, 50);
const equip3 = new Equip('aspiradora', 'B48', zanussi, distr1, 30);
const equip4 = new Equip('batedora', 'Z10', fagor, distr1, 5);

console.log("== (a.3) Mostra el telèfon del distribuïdor i fabricant de la rentadora ==");
console.log("Telèfon distribuidor rentadora equip1.distribuidor.telf:", equip1.distribuidor.telf);
console.log("Telèfon distribuidor rentadora equip1['distribuidor']['telf']:", equip1['distribuidor']['telf']);
console.log("Telèfon fabricant rentadora equip1.fabricant.telf:", equip1.fabricant.telf);
console.log("Telèfon fabricant rentadora equip1['fabricant']['telf']:", equip1['fabricant']['telf']);


console.log("\n== (a.4) Comprovació dObj  ==");
dObj(fagor);
dObj(distr1);
dObj(equip1);


console.log("\n== (a.5) Canvi fabricant de distr1 -> Zanussi ==");
console.log("distr1.fabricant.nom =", distr1.fabricant.nom);
distr1.fabricant = zanussi;
console.log("distr1.fabricant.nom =", distr1.fabricant.nom);

console.log("\n== (a.6) Canvi comercial de Zanussi -> 'Comercial_nou' ==");
console.log("distr1.fabricant.comercial =", distr1.fabricant.comercial);
zanussi.comercial = "Comercial_nou";
console.log("distr1.fabricant.comercial =", distr1.fabricant.comercial);

console.log("\n== (a.7) Còpia de distr3 a distr3b i canvi fabricant -> Balay ==");
// Còpia que manté la referència
// const distr3b = {...distr3};
// Còpia profunda
const distr3b = JSON.parse(JSON.stringify(distr3));
distr3b.fabricant = balay;
console.log("distr3.fabricant.nom =", distr3.fabricant.nom, "| distr3b.fabricant.nom =", distr3b.fabricant.nom);
dObj(distr3);
dObj(distr3b);

console.log("\n== (a.8) fagor = zanussi (assignació per referència) ==");
const fagorOriginal = JSON.parse(JSON.stringify(fagor));
fagor = zanussi;
console.log("fagor.nom =", fagor.nom, "-> ara és 'Zanussi'");
/* Ara per l'assignació per referència, fagor apunta a l'objecte zanussi, 
per tant, aquest agafa les seves dades.*/

/* Les dades de fagor no existiran una vegada
es canvii l'assignació per referència, ja que l'objecte
fagor sempre apuntará a zanussi i això implica que qualsevol
canvi en qualsevol dels dos afectarà a l'altre.

L'única forma de recuperar les dades es clonant
fagor abans de fer l'assignació per referència.*/
console.log("\n== (a.9) Restaurar dades originals de Fagor ==");
fagor = fagorOriginal;

dObj(fagor);

/* ---------------- b) Arrays i mètodes ---------------- */
console.log("\n== (b) Array d'equips i ordres ==");
console.log("\n== (b.11) Mostra l'array amb dObj==");
const arrEquips = [equip1, equip2, equip3, equip4];
dObj(arrEquips)
// 12: imprimir()
arrEquips.imprimir = function () {
  for (let i = 0; i < this.length; i++) {
    dObj(this[i]);
  }
};

// 13: sortAlf / sortNum
// Mètode compacte amb localeCompare
arrEquips.sortAlf = function () {
  this.sort((a, b) => a.nom.localeCompare(b.nom));
};
// Mètode tradicional amb ifs
arrEquips.sortAlfTrad = function () {
  this.sort((a, b) => {
    if (a.nom > b.nom) return 1;
    if (a.nom < b.nom) return -1;
    return 0;
  })
};
arrEquips.sortNum = function () {
  this.sort((a, b) => a.potencia - b.potencia);
};

// 14: versió parametritzada
// Per seguretat caldria afegir condició de typeof per saber si el camp és ordenable 
arrEquips.sortAlf = function (camp = "nom") {
  this.sort((a, b) => a[camp].localeCompare(b[camp]));
};

arrEquips.sortNum = function (camp = "potencia") {
  this.sort((a, b) => a[camp] - b[camp]);
};


console.log("imprimir():"); arrEquips.imprimir();
arrEquips.sortAlf(); console.log("\nOrdenat per nom (fix):"); arrEquips.imprimir();
arrEquips.sortNum(); console.log("\nOrdenat per potència (fix):"); arrEquips.imprimir();
arrEquips.sortAlf('model'); console.log("\nOrdenat per nom (param):"); arrEquips.imprimir();
arrEquips.sortNum('potencia'); console.log("\nOrdenat per potència (param):"); arrEquips.imprimir();

/* ---------------- c) Propietats i mètodes nous ---------------- */
console.log("\n== (c) Propietats i mètodes nous ==");
equip2.temperaturaMax = 100;
console.log("planxa.temperaturaMax =", equip2.temperaturaMax);

Equip.prototype.dataCompra = "no especificada";
console.log("Equip.prototype.dataCompra =", Equip.prototype.dataCompra);

equip2.dataCompra = new Date().toLocaleDateString();
console.log("planxa.dataCompra =", equip2.dataCompra);

Equip.prototype.dProp = function (prop) {
  console.log(`${prop}: ${this[prop]}`);
};
equip2.dProp('model');

/* ---------------- d) Eliminació de propietats ---------------- */
console.log("\n== (d) Eliminacions ==");
delete equip2.temperaturaMax;
console.log("després delete planxa.temperaturaMax ->", ('temperaturaMax' in equip2));
delete equip2.dataCompra;
console.log("després delete planxa.dataCompra (instància) ->", ('dataCompra' in equip2), "valor heretat:", equip2.dataCompra);
delete Equip.prototype.dataCompra;
console.log("després delete Equip.prototype.dataCompra ->", ('dataCompra' in Equip.prototype));

/* ---------------- e) Herència via prototype ---------------- */
console.log("\n== (e) Herència via prototype ==");


// IMPORTANT: establir la cadena prototipal *abans* de crear noves instàncies que la necessitin
Fabricant.prototype = Object.create(General.prototype);
Fabricant.prototype.constructor = Fabricant;
Distribuidor.prototype = Object.create(General.prototype);
Distribuidor.prototype.constructor = Distribuidor;
Equip.prototype = Object.create(General.prototype);
Equip.prototype.constructor = Equip;

// Reafegir mètode dProp a prototip d'Equip (perquè hem reassignat el prototype)
Equip.prototype.dProp = function (prop) { console.log(`${prop}: ${this[prop]}`); };

// Noves instàncies per comprovar herència
const f2 = new Fabricant('ProvaFab', 'ComX', 'Ciutat', '900');
const d2 = new Distribuidor('ProvaDist', 'Ciutat', '901', f2);
const e2 = new Equip('ProvaEquip', 'M1', f2, d2, 1);

console.log("f2.garantia =", f2.garantia, "| d2.garantia =", d2.garantia, "| e2.garantia =", e2.garantia);
console.log("e2.dObj() -> (propietats pròpies):"); e2.dObj();
console.log("f2.dObj() -> (propietats pròpies):"); f2.dObj();
