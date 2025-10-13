 
#  Objectes del Navegador (BOM)

Utilitzeu funcions amb els paràmetres adequats i executeu-les.  
Referència: [JavaScript Reference Objects – W3Schools](https://www.w3schools.com/jsref/default.asp)

---

## 🧩 Exercici 1 – Objecte `document`
Crea un formulari que permeti **canviar el color de fons** de la pàgina web.  
El formulari ha de tenir:
- Un selector amb els valors: `red`, `blue`, `green`, `yellow`
- Un botó per aplicar el canvi

Quan l’usuari faci clic al botó, s’ha de canviar el color de fons de la pàgina segons l’opció triada.

> 💡 *Pista:* pots accedir al valor amb `document.nomFormulari.color.value`  
> i modificar el color amb `document.body.style.backgroundColor = colorSeleccionat`.

---

## 🧩 Exercici 2 – Generar HTML amb `document.write`
Partint de l’exercici anterior, **genera el formulari complet** (selector i botó) amb codi JavaScript utilitzant `document.write()`.

L’objectiu és entendre com el navegador genera contingut dinàmic abans del DOM complet.

---

## 🧭 Exercici 3 – Objecte `location`
Mostra l’adreça actual (`location.href`) i permet que l’usuari introdueixi una **nova URL** mitjançant `prompt()`.  
Demana confirmació amb `confirm()` abans de redirigir-hi.

> Exemple: introduir `http://www.google.com` i demanar confirmació abans d’anar-hi.

---

## 🧭 Exercici 4 – Objecte `navigator`
Fes un script que **llisti tota la informació disponible** de l’objecte `navigator` (nom del navegador, idioma, plataforma, etc.).

Mostra la informació amb `document.write()` o dins d’un element HTML.  
Utilitza un bucle `for...in` per recórrer les propietats i `typeof` per filtrar només les que siguin valors (no funcions ni objectes).

> 💬 *Prova-ho a diferents navegadors i compara els resultats.*

---

## 💻 Exercici 5 – Objecte `screen`
Mostra informació sobre la pantalla de l’usuari (`screen.width`, `screen.height`, `availWidth`, `availHeight`, etc.).  
Presenta les dades en una llista HTML o taula.

---

## 🪟 Exercici 6 – Objecte `window.open`
Crea un botó que obri una nova finestra (`window.open`) amb:
- L’adreça `https://www.w3schools.com/`
- Mida: 300 × 400 píxels
- Amb `scrollbars` i `toolbar` visibles

---

## 🪟 Exercici 7 – Gestió avançada de finestres
Fes un script que:
1. **Des de la finestra principal**, permeti:
   - Obrir una finestra secundària de 600×200 píxels, centrada a la pantalla  
   - Mostrar barra d’eines, menú i barres de desplaçament  
2. **A la finestra secundària**, mostra:
   - Un `<h2>` amb el text “Finestra Secundària”  
   - Les opcions d’obertura utilitzades  
3. **A la finestra principal**, afegeix botons per:
   - Tancar la finestra secundària  
   - Enfocar-la (`focus()`)  
   - Desenfocar-la (`blur()`)  
   - Canviar el color del text de la secundària a blau  
4. **A la finestra secundària**, afegeix:
   - Un botó per tancar-se a ella mateixa  
   - Un botó per canviar el color del text de la finestra principal mitjançant `window.opener`

> ⚠️ *Recorda:* per evitar errors CORS, cal executar-ho sota un **servidor web**, com per exemple l'extensió **Live Server** (no directament amb `file://`).

---

## 🪟 Exercici 8 – Desplaçament de finestres
Crea un script que:
1. Obri una finestra nova.  
2. Mitjançant un botó, demana amb `prompt()` els valors de desplaçament **X** i **Y**.  
3. Mostra la posició actual del vèrtex superior esquerre (`screenX`, `screenY`) i la posició nova.  
4. Desplaça la finestra amb `moveBy(x, y)` i actualitza les dades mostrades.

---

## 💡 Recomanacions
- Usa `console.log()` per depurar el comportament de les propietats.  
- Evita fer servir `document.write()` després que el document s’hagi carregat.  
- Per provar `window.open` i similars, activa els **pop-ups** del navegador.  
- Els exercicis 6–8 són ideals per entendre la relació entre **finestres**, **DOM** i **BOM**.

---
