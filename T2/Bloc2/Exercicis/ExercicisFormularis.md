# Bloc 2 — Exercicis de Formularis i Validacions


## 1. Exercici 1 — Capturar *submit* i llegir valors
**Objectiu:** entendre com funciona l’esdeveniment *submit*, prevenir l’enviament i obtenir valors amb `.value`.

### HTML base
```html
<form id="form-basic">
  <label for="nom">Nom</label>
  <input id="nom" name="nom" type="text" />

  <label for="edat">Edat</label>
  <input id="edat" name="edat" type="number" />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" />

  <label for="telefon">Telèfon</label>
  <input id="telefon" name="telefon" type="tel" />

  <button type="submit">Enviar</button>
</form>
```

### Tasques
- Captura l’esdeveniment *submit*.
- Fes servir `event.preventDefault()`.
- Mostra per consola els valors introduïts a `nom`, `edat`, `email` i `telefon`.


---

## 2. Exercici 2 — Validacions i errors al DOM
**Objectiu:** construir una funció `validate()` bàsica i mostrar errors al DOM.

### HTML base
```html
<form id="form-validacio">
  <label for="nom2">Nom</label>
  <input id="nom2" name="nom" type="text" />

  <label for="edat2">Edat</label>
  <input id="edat2" name="edat" type="number" />

  <label for="email2">Email</label>
  <input id="email2" name="email" type="email" />

  <label for="url">Web (opcional)</label>
  <input id="url" name="url" type="url" />

  <button type="submit">Enviar</button>
</form>

<div id="errors"></div>
```

### Tasques
- Valida:
  - Nom obligatori i mínim 3 caràcters.
  - Edat > 0.
  - Email amb format vàlid (p.ex. amb una expressió regular simple)
  - Si s’introdueix `url` (camp opcional), comprovar que tingui format vàlid (`type="url"` ja aplica restriccions per HTML, però s'ha de fer la validació també amb JS utilitzant regex si cal).
- Si hi ha errors, mostra’ls dins un `<ul>` a `#errors`.
- Si no hi ha errors, mostra un missatge d’èxit.  

> Nota: Per defecte hi ha camps que el navegador els valida per HTML (com per exemple email i url). Si es vol deshabilitar la validació HTML s'ha de posar `novalidate` al tag `<form>`.

---

## 3. Exercici 3 — Formulari de tasques amb llistat
**Objectiu:** crear un mini-CRUD senzill utilitzant validació i manipulació del DOM.

### HTML base
```html
<form id="form-tasca">
  <label for="nom-tasca">Nom de la tasca</label>
  <input id="nom-tasca" name="nom" type="text" />

  <label for="categoria-tasca">Categoria</label>
  <select id="categoria-tasca" name="categoria">
    <option value="">-- Tria categoria --</option>
    <option value="casa">Casa</option>
    <option value="feina">Feina</option>
    <option value="estudis">Estudis</option>
  </select>

  <label for="data-tasca">Data</label>
  <input id="data-tasca" name="data" type="date" />

  <button type="submit">Afegir tasca</button>
</form>

<div id="errors"></div>
<ul id="llistaTasques"></ul>
```

### Tasques
- Crea una funció `validate(dades)` que retorni un array d’errors.
- Si hi ha errors: mostrar-los al costat de cada camp.
- Si no n’hi ha: afegir la tasca al `<ul>` i fer `form.reset()`.
- Valida:
  - Nom obligatori i mínim 3 caràcters.
  - Nom alfabètic
  - Categoria seleccionada (no pot ser `value=""`)
  - Data amb format DD/MM/YYYY
  - Data no anterior a l'actual
### Pistes
- Usa delegació de funcions: `validate()`, `renderErrors()`, `render()`.
- Pots usar `.value` o `FormData`.

---

## 4. Exercici 4  — Ús de *FormData*
**Objectiu:** refactoritzar l’exercici 3 reutilitzant *FormData* i `Object.fromEntries()`.

### Tasques
- Substitueix l’obtenció manual de valors per:
```js
const formData = new FormData(event.target);
const dades = Object.fromEntries(formData.entries());
```
- Verifica amb `console.table(dades)` que tot es llegeix correctament.

### Extra
- Marca les entrades invàlides amb una classe CSS (`is-invalid`).
- Data vàlida (no pot ser dia 32, ni més 13, ni any superior a 2027)
- Data vàlida avançada (ha de seguir el calendari, no pot ser 31/11, ni 30/02) 
- Afegeix altres camps com checkbox i/o radiobutton
- Refactoritzar el codi per tenir funcions del tipus isAlphabet, notEmpty, ...

---


