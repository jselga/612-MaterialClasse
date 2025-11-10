# Bloc 1 — Exercicis de manipulació del DOM (bàsic)

---

## Indicacions prèvies


Per a aquests exercicis bàsics, crea els fitxers següents al **mateix directori**:
- `ex1.js`
- `ex2.js`
- `ex3.js`

> Edita `index.html` per canviar el `<script src="...">` i provar cada exercici.

Contenidor comú dins d’`index.html`:
```html
<div id="contenidor"></div>
```

---

## Exercici 1 — Generador de llista
**Objectiu:** Practicar **creació** i **inserció** d’elements amb `createElement` i `appendChild`.

### Dades d’entrada
```js

const noms = ["Anna", "Jordi", "Laia", "Pau"]; // pots canviar/afegir noms
```

### Tasques
1. Selecciona l’element amb id `contenidor`.
2. Crea un element `<ul>` i, per a cada nom, crea un `<li>` amb contingut de text.
3. Afegeix tota la llista al `#contenidor`.

### Requisits
- No utilitzis `innerHTML` per construir la llista; usa nodes (`createElement`, `appendChild`).
- Mantén el codi net i llegible (variables amb nom clar, comentaris curts si cal).

### Resultat esperat (HTML generat)
```html
<div id="contenidor">
  <ul>
    <li>Anna</li>
    <li>Jordi</li>
    <li>Laia</li>
    <li>Pau</li>
  </ul>
</div>
```

---

## Exercici 2 — Taula de productes
**Objectiu:** Construir una estructura més complexa (taula) i assignar **atributs** i **classes**.

### Dades d’entrada
```js

const productes = [
  { nom: "Ordinador", preu: 850 },
  { nom: "Teclat", preu: 40 },
  { nom: "Ratolí", preu: 25 }
];
```

### Tasques
1. Crea un `<table>` amb `<thead>` i `<tbody>`.
2. Al `<thead>`, afegeix una fila amb dues columnes: **Nom** i **Preu (€)**.
3. Per a cada producte, crea una fila `<tr>` amb `<td>` corresponents i insereix-la al `<tbody>`.
4. Afegeix la taula al `#contenidor`.

### Requisits
- Si `preu > 100`, afegeix la classe `car` a la fila.
- No facis servir `innerHTML` per a les files: crea elements i assigna el text corresponent.

### Resultat orientatiu
```html
<table>
  <thead>
    <tr><th>Nom</th><th>Preu (€)</th></tr>
  </thead>
  <tbody>
    <tr class="car"><td>Ordinador</td><td>850</td></tr>
    <tr><td>Teclat</td><td>40</td></tr>
    <tr><td>Ratolí</td><td>25</td></tr>
  </tbody>
</table>
```

> (Pots afegir estils CSS opcionals a `index.html` per visualitzar millor la taula.)

---

## Exercici 3 — Substituir i eliminar nodes
**Objectiu:** Consolidar **replaceChild** i **remove** sense fer servir esdeveniments.

### HTML base dins d’`index.html`
```html
<div id="info">
  <p id="missatge">Benvingut/da al portal</p>
</div>
```

### Tasques (a `ex3-modificacio.js`)
1. Substitueix el paràgraf `<p id="missatge">` per un de nou amb el text `Has accedit com a convidat.`
   - Crea un `<p>` nou amb `document.createElement('p')` i `textContent`.
   - Localitza el vell amb `document.getElementById('missatge')` i fes `replaceChild` des del pare (`#info`).
2. Elimina tot el contingut del `div#info` utilitzant una de les dues opcions:
   - `info.innerHTML = ''` **(no recomanat, només per veure la diferència)**, o
   - Millor: elimina de forma segura tots els fills amb un bucle `while (info.firstChild) info.removeChild(info.firstChild);`.

### Requisits
- No utilitzis cap listener ni `onclick`; tot es fa quan es carrega el script.
- Escriu el codi de manera clara i segmentada en funcions si ho consideres.

---

