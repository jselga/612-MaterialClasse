

function log(...args) { console.log(...args); }

class General {
  constructor() {
    this.garantia = 1;
  }
  dObj(label = 'instància') {
    const info = [];
    for (const k in this) {
      const own = Object.prototype.hasOwnProperty.call(this, k);
      info.push({ prop: k, valor: this[k], tipus: typeof this[k], propia: own });
    }
    return { label, info };
  }
}

class Fabricant extends General {
  constructor(nom, comercial, ciutat, telf) {
    super();
    this.nom = nom;
    this.comercial = comercial;
    this.ciutat = ciutat;
    this.telf = telf;
    this.telfEmerg = 112;
  }
}

class Distribuidor extends General {
  constructor(nom, ciutat, telf, fabricant) {
    super();
    this.nom = nom;
    this.ciutat = ciutat;
    this.telf = telf;
    this.fabricant = fabricant;
  }
}

class Equip extends General {
  static dataCompraDefecte = "no especificada";
  constructor(nom, model, fabricant, distribuidor, potencia) {
    super();
    this.nom = nom;
    this.model = model;
    this.fabricant = fabricant;
    this.distribuidor = distribuidor;
    this.potencia = potencia;
    this.dataCompra = Equip.dataCompraDefecte;
  }
  dProp(prop) { return prop + ": " + this[prop]; }
}

function run() {
  const fagor = new Fabricant('Fagor', 'ComercialF', 'Sant Sebastia', '902105011');
  const zanussi = new Fabricant('Zanussi', 'ComercialZ', 'Saragossa', '902105111');
  const balay = new Fabricant('Balay', 'ComercialB', 'Sevilla', '902105211');

  const distr1 = new Distribuidor('Distrib1', 'Barcelona', '931234567', fagor);

  const rentadora = new Equip('rentadora', 'A24', fagor, distr1, 45);
  const planxa = new Equip('planxa', 'E4', balay, distr1, 50);

  log("rentadora.distribuidor.telf (punt):", rentadora.distribuidor.telf);
  log("rentadora['fabricant']['telf'] (claudàtors):", rentadora['fabricant']['telf']);

  log("\nComprovacions ràpides:");
  log("planxa.garantia =", planxa.garantia);
  log("planxa.dProp('model') ->", planxa.dProp('model'));
  log("planxa.dataCompra (defecte) =", planxa.dataCompra);

  // Exemple d'ordenació d'equips
  const equips = [rentadora, planxa];
  equips.sort((a, b) => a.nom.localeCompare(b.nom));
  log("\nOrdenats per nom:", equips.map(e => e.nom).join(", "));

  return { fagor, zanussi, balay, distr1, rentadora, planxa, General, Fabricant, Distribuidor, Equip };
}

run();
