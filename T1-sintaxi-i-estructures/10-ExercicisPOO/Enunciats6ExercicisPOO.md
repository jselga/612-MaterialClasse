#  Exercicis POO: Prototips i Classes en JS

##  1. Objectes i constructors

**Objectiu:** comprendre com definir objectes i constructors amb `prototype`.

### Activitat

1. Crea un objecte `rectangle1` amb dues propietats (`costat1`, `costat2`) i dos mètodes que calculin:
   - `area()` → producte dels costats  
   - `perimetre()` → suma doble dels costats  
   Prova els mètodes amb els valors 2 i 3.

2. Defineix una **funció constructora** `Rectangle2` amb paràmetres pels costats i crea una instància `rectangle2`.

3. Defineix una constructora buida `Rectangle3` i afegeix-hi **via `prototype`**:
   - dues propietats per defecte (`costat1 = 10`, `costat2 = 20`)
   - els mètodes `area` i `perimetre`.  
   Crea una instància `rectangle3` i comprova el funcionament.

4. Modifica els valors de `rectangle3` a 4 i 5 i comprova que els càlculs segueixen sent correctes.

---

## 2. ES5 – Classes i instàncies: *Fabricant, Distribuïdor, Equip*

**Objectiu:** practicar la relació entre objectes mitjançant propietats i mètodes.

### a) Constructors i instàncies

1. Defineix les constructores següents:

```js
function Fabricant(nom, comercial, ciutat, telf) {
  this.nom = nom;
  this.comercial = comercial;
  this.ciutat = ciutat;
  this.telf = telf;
  this.telfEmerg = 112;
}

function Distribuidor(nom, ciutat, telf, fabricant) {
  this.nom = nom;
  this.ciutat = ciutat;
  this.telf = telf;
  this.fabricant = fabricant;
}

function Equip(nom, model, fabricant, distribuidor, potencia) {
  this.nom = nom;
  this.model = model;
  this.fabricant = fabricant;
  this.distribuidor = distribuidor;
  this.potencia = potencia;
}
```

2. Crea les instàncies amb les dades següents:

- **Fabricants:**  
    - 'Fagor', 'ComercialF', 'Sant Sebastia', '902105011' 
    - 'Zanussi', 'ComercialZ', 'Saragossa', '902105111' 
    - 'Balay', 'ComercialB',' Sevilla', '902105211' 
- **Distribuïdors:**  

    - 'Distrib1','Barcelona','931234567', fagor 
    - 'Distrib2','Barcelona','931234568', fagor
    - ‘Distrib3', 'Girona', '972123456',zanussi
- **Equips:**  
    - 'rentadora', 'A24', fagor, distr1, 45 
    - 'planxa', 'E4',balay , distr1, 50
    - 'aspiradora', 'B48', zanussi, distr1, 30 
    - 'batedora', 'Z10', fagor, distr1, 5
3. Mostra el telèfon del **distribuïdor i fabricant** de la rentadora:  
   accedint a la propietat amb:
   -  **notació de punts**,  
   - i  amb **claudàtors**.

4. Implementa la funció `dObj(obj)` que mostri dinàmicament les propietats, valors i tipus.

5. Modifica el fabricant de `distrib1` a *Zanussi* i comprova el canvi.

6. Canvia el comercial de *Zanussi* a `"Comercial_nou"`. Comprova si el distribuïdor manté el valor vell o s’actualitza.

7. Fes una còpia de `distr3` anomenada `distr3b` i canvia el seu fabricant a *Balay*. Verifica que `distr3` segueix amb *Zanussi*.

8. Executa `fagor = zanussi;` i analitza el contingut de `fagor.nom`. Explica què ha passat (assignació per referència).

9.  Comprova si encara existeixen les dades originals de *Fagor* i restaura-les.

### b) Arrays i mètodes

10. Defineix un array `arrEquips` amb totes les instàncies d’`Equip`.  
11. Mostra el contingut amb `dObj` i observa com tracta els objectes.  
12. Afegeix un mètode propi `imprimir()` a `arrEquips` per mostrar el contingut.  
13. Defineix dos mètodes:
    - `sortAlf()` → ordena per `nom`
    - `sortNum()` → ordena per `potencia`
14. Redefineix-los perquè rebin el camp d’ordenació com a paràmetre.

### c) Propietats i mètodes nous

15. Afegeix `temperaturaMax = 100` a l’objecte `planxa`.  
16. Afegeix la propietat `dataCompra` a la **classe Equip** via `prototype` amb valor `"no especificada"`.  Comprova el valor de la propietat.
17. Assigna la data actual a `planxa.dataCompra` en format  `localeDateString` i comprova'n el valor. 
18. Afegeix el mètode `dProp(prop)` a la classe Equip que mostri el nom i valor d’una propietat.

### d) Eliminació de propietats

19. Elimina `temperaturaMax` de `planxa` i comprova.  
20. Elimina `dataCompra` de `planxa` i comprova.   
21. Elimina `dataCompra` de la classe `Equip` i comprova.  

### e) Herència via `prototype`

22. Defineix una constructora `General` amb propietat `garantia` amb valor per defecte 1 i mètode `dObj` que reutilitza la funció `dObj` creada al punt 4.


23. Fes que `Fabricant`, `Distribuidor` i `Equip` **heretin** de `General`.   
  

Comprova que totes les instàncies disposen de la propietat `garantia` i el mètode `dObj`.
Per tal que funcioni correctament és important l'ordre de creació. Analitza que passa si no és així i corregeix-ho.

---

## 🧩 Extensió: Repetir amb **Classes ES6+**

Per consolidar l’aprenentatge, repeteix l’exercici 2 fent servir la sintaxi moderna:

```js
class General {
  constructor() {
    this.garantia = 1;
  }
  dObj() { /* ... */ }
}

class Fabricant extends General {
  constructor(nom, comercial, ciutat, telf) {
    super();
    this.nom = nom;
    this.comercial = comercial;
    this.ciutat = ciutat;
    this.telf = telf;
  }
}
```

Compara el comportament amb la versió basada en `prototype` i comenta:
- avantatges de llegibilitat,
- com es gestiona `super()` i l’herència,
- si els mètodes de classe s’afegeixen també al `prototype`.

---

