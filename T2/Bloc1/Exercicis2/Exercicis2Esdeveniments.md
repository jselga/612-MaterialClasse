# Exercicis 2 — Esdeveniments del DOM

Aquesta activitat  introdueix la gestió d’esdeveniments dins el DOM mitjançant un recorregut pas a pas. L’objectiu és practicar la planificació del codi i la cerca autònoma de solucions, partint de pistes i orientacions generals.

**Estructura**: es manté l’HTML original (`Ex_Events_DOM.html`) i s’elabora tot el codi a `Ex_Events_DOM.js` (sense modificar l’HTML).

**Objectiu**: treballar el model d’esdeveniments modern del DOM amb `addEventListener`, propagació i `CustomEvent`, evitant `onclick` inline i APIs obsoletes.&#x20;

---

## Fitxers de treball

- `Ex_Events_DOM.html` (donat; no modificar).
- `Ex_Events_DOM.js` (a crear/modernitzar).
- Carpeta `img/` amb: `gnulinux.jpg`, `gnu.jpg`, `linux.jpg`.

---

## Requisits funcionals

1. **Precarrega d’imatges**: guarda en un array les URL de `gnulinux.jpg`, `gnu.jpg` i `linux.jpg`.
2. **Estil dels rètols**: tots els `<h2>` damunt de cada imatge en color `#aaaaff`.
3. **Atributs comuns de les imatges**: totes les `<img>` amb `alt="gnu/linux"`, `width="125"` i `height="125"`.
4. **Clic (una vegada)**: canvia la imatge de forma **rotatòria**: original → gnu → linux → original … (per cada `<img>` independentment).
5. **Doble clic**: amaga només la imatge doble-clicada.
6. **Botó de “Mostra totes”**: creat via DOM **just abans** del `<p id="pId">Imatges</p>` (si no fos possible, al final de la pàgina). Només és **visible** quan **hi ha** imatges ocultes; en clicar, les torna a mostrar.
7. **Clic al contenidor**: si es clica dins el `<div>` que conté la imatge **però no sobre la imatge**, mostra el missatge: *"Cal clicar sobre la imatge"*.
8. **CustomEvent**: mantén una **llista d’imatges amagades** amb `CustomEvent` per notificar canvis a l’estat (oculta/mostra) i que el botó es pugui actualitzar de manera reactiva.
9. **Estil de codi**: usa `DOMContentLoaded`, `const`/`let`, `for...of` o `forEach`, `dataset`, funcions pures on tingui sentit, comentaris i noms clars.

---

## 0 · Arrencada segura

**Què fer**: Assegura que el codi s’executa quan el DOM estigui llest.

**Pistes**

- Event: `DOMContentLoaded` sobre `document`.
- Diferència amb `window.onload`: el primer no espera imatges/CSS.

**APIs clau**: `document.addEventListener('DOMContentLoaded', handler)`

---

## 1 · Precarregar imatges i constants

**Què fer**: Defineix un array amb les rutes de les imatges i precarrega-les.

**Pistes**

- Crea `const IMG_URLS = ['img/gnulinux.jpg', 'img/gnu.jpg', 'img/linux.jpg']`.
- La precàrrega es pot fer creant `new Image()` per cada ruta.
- No és necessari gestionar `onload` per aquest exercici.

**APIs clau**: `Image`, arrays, `map`

---

## 2 · Seleccions i normalització d’estils/atributs

**Què fer**: Selecciona els `div` que contenen `h2 + img`, aplica color als `h2` i fixa `alt="gnu/linux"` i `width`/`height` a `125` per a totes les imatges.

**Pistes**

- Selectors CSS útils: `body > div`, `body > div > h2`, `body > div > img`.
- Recorre NodeList amb `for...of` o `forEach`.
- Pots modificar atributs via propietats (`img.alt = ...`) o `setAttribute`.

**APIs clau**: `querySelectorAll`, `for...of`, `Element.style`, `setAttribute`

---

## 3 · Estat i utilitats de canvi rotatori

**Què fer**: Cada `<img>` ha de conèixer en quin estat del cicle està (0,1,2) i, en fer clic, avançar al següent.

**Pistes**

- Desa l’índex a `img.dataset.index` (string). Converteix amb `Number()` quan calgui.
- Crea funcions pures: `nextIndex(i)`, `setImageByIndex(img, i)`, `rotateImage(img)`.
- Inicialitza totes les imatges amb l’índex `0` al carregar.

**APIs clau**: `dataset`, `Number`, arrays, modularització amb funcions

---

## 4 · Clic i doble clic a la imatge

**Què fer**:

- `click` → rota la imatge.
- `dblclick` → amaga només la imatge clicada i notifica el canvi.

**Pistes**

- Afegeix listeners a cada `img` amb `addEventListener('click', ...)` i `addEventListener('dblclick', ...)`.
- Per ocultar, pots emprar `style.visibility = 'hidden'` o una classe CSS.
- En ocultar/mostrar, **emet** un esdeveniment personalitzat perquè altres parts del codi reaccionin.

**APIs clau**: `addEventListener`, `EventTarget.dispatchEvent`, `CustomEvent({bubbles:true})`, `currentTarget`

---

## 5 · Botó “Mostra totes” (creació i ubicació)

**Què fer**: Crea el botó via DOM i insereix-lo **abans** de `<p id="pId">`

**Pistes**

- Crea l’element&#x20;
- Afegeix el Text.
- Insereix de forma precisa.



---

## 6 · Estat: llista d’ocultes i visibilitat del botó

**Què fer**: Mostra/amaga el botó segons si hi ha imatges ocultes. Reacciona automàticament als canvis d’estat.

**Pistes**

- Fes una funció `updateButtonVisibility()` que comprovi si alguna `img` té `visibility === 'hidden'` (o la classe `.hidden`).
- Escolta el teu `CustomEvent` a un punt alt del DOM (p. ex. `document`) per recalcular la visibilitat.
- El clic al botó ha de "mostrar totes" (reverteix l’ocultació i emet l’esdeveniment perquè s’actualitzi l’estat sense dependències directes).

**APIs clau**: `some`, `style.display`, `addEventListener` global, `dispatchEvent`

---

## 7 · Clic al contenidor (però no a la imatge)

**Què fer**: Si es clica el `div` però **no** la `img`, mostra un avís que digui "Cal clicar sobre la imatge".

**Pistes**

- Listener al `div` (els "cards").
- Usa `e.target.closest('img')` per saber si el clic prové d’una imatge o d’un altre punt del div.
- Només mostra el missatge si **no** s’ha clicat cap `img`.

**APIs clau**: `closest`, `alert`, propagació (no cal `stopPropagation` si la lògica és correcta)

---

## Bonus · Variants i millores

- **Delegació**: en comptes d’afegir un listener a cada imatge, es pot posar **un sol listener** al contenidor (o al `document`) i utilitzar `e.target.closest('img')` per detectar si el clic prové d’una imatge. Aquest patró redueix listeners, millora el rendiment i funciona també amb elements afegits dinàmicament.
- **Classes CSS**: alterna `.hidden` amb `classList.toggle()` en lloc d’estils inline.
- **Accessibilitat**: gestiona `keydown` (Enter/Espai) per activar el botó via teclat.

---

##

##
