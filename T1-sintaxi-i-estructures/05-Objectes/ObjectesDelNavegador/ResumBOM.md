# Resum dels Objectes del Navegador (Browser Object Model - BOM)

El *Browser Object Model* (BOM) representa la finestra del navegador i tots els seus components. El nucli del BOM és l'objecte **`window`**, que serveix com a objecte global en JavaScript del costat del client. Aquest objecte proporciona diverses propietats i mètodes per interactuar amb la finestra del navegador.

Un inconvenient important del BOM és que no està estandarditzat, al contrari del que passa amb el DOM.

| Objecte / Funció | Ús Actual (Segons) | Funció Clau |
| :--- | :--- | :--- |
| `window`, `document`, `location`, `history` | **Molt utilitzats** (✔️) | Funcionalitats bàsiques i navegació. |
| `alert`, `confirm`, `prompt` | **Antics però funcionals** (⚠️) | Interacció amb l'usuari mitjançant diàlegs. |
| `navigator`, `screen` | **Útils en certs casos** (✔️) | Informació sobre el sistema i el navegador. |
| Manipulació directa de finestres (`open`, `resizeTo`) | **Poc recomanat** (⚠️) | Limitat per seguretat. |

## 1. Interacció amb el Navegador. Objectes Predefinits Associats

Els objectes del navegador s'ordenen de forma jeràrquica, tots ells penjant del `window`.

*   **`window`**: L'objecte més important de JavaScript. Permet accedir a les propietats i mètodes del navegador. És un objecte implícit, de manera que es pot ometre el seu nom per accedir als objectes que es troben sota el seu nivell de jerarquia (p. ex., `window.alert()` és el mateix que `alert()`).
*   **`document`**: Es refereix a tot el contingut d'un document HTML. Permet manipular les propietats i el contingut dels elements principals, com `forms`, `images` o `links`.
*   **`location`**: Representa l'URL actual (la seva funció principal és la consulta de les diferents parts de l'URL).
    *   Propietats: `href` (URL completa), `protocol`, `host`/`hostname`, `port`, `pathname` (ruta), `search` (query string, darrera del '?'), i `hash` (fragment identificador, darrera del '#').
    *   Mètodes de navegació: `location.href` es pot utilitzar per carregar una URL nova. `location.assign(url)` carrega un nou document afegint-lo a l'historial. `location.replace(url)` substitueix l'entrada actual de l'historial. `location.reload(forcedReload)` recarrega la pàgina.
*   **`history`**: Emmagatzema referències a les pàgines web visitades. Permet navegar per la llista d'historial.
    *   Mètodes: `history.back()`, `history.forward()` (mouen un pas), i `history.go(n)` (mouen un nombre específic de pàgines, amb nombres negatius per anar endarrere).
    *   Gestió d'estats: Es pot manipular la pila de l'historial amb `pushState` (afegeix un nou estat) i `replaceState` (reemplaça l'estat actual sense recarregar).
    *   Esdeveniment: L'esdeveniment `popState` es dispara quan l'usuari utilitza els botons d'endarrere/endavant del navegador o els mètodes `history`.
*   **`screen`**: Correspon a la pantalla utilitzada per l’usuari. Totes les seves propietats són de lectura.
    *   Propietats: `screen.width` i `screen.height` (mida total), `screen.availableWidth` i `screen.availableHeight` (espai utilitzable excloent elements del sistema com la barra de tasques). També `colorDepth` i `pixelDepth`.
*   **`navigator`**: Permet identificar les característiques del navegador.
    *   Propietats: `appName` (nom), `appVersion` (versió), `platform` (plataforma), `userAgent` (informació completa), i `cookieEnable` (informa si té activades les *cookies*).

## 2. Generació de text i elements HTML des de codi

JavaScript permet generar codi HTML, convertint un document estàtic en una aplicació dinàmica.
*   **`document.write()`**: Escriptura de contingut al document.
*   **`document.writeln()`**: Escriu al document afegint un caràcter de línia nova al final.
*   L'objecte `document` permet accedir als elements d'un formulari de diverses maneres (p. ex., `document.forms.elements.value` o `document.<nomFormulari>.<nomElement>.value`).

## 3. Gestió de l'aparença de la finestra

La gestió de la mida i la posició utilitza propietats i mètodes de l'objecte `window`:

*   **Mides Internes i Externes:**
    *   `innerWidth` i `innerHeight`: Altura i amplada interiors (utilitzables) de la finestra en píxels, incloent-hi la barra de desplaçament vertical si n'hi ha.
    *   `outerWidth` i `outerHeight`: Altura i amplada totals de la finestra, incloent-hi barres d'eines i *scrollbars*.
*   **Posicionament:**
    *   `screenX` i `screenY`: Distància horizontal i vertical de la finestra des de la vora superior esquerra de la pantalla.
    *   `moveTo(x, y)`: Mou la finestra a coordenades absolutes (respecte a la cantonada superior esquerra de la pantalla).
    *   `moveBy(x, y)`: Desplaçament relatiu de la finestra.
*   **Redimensionament:** `resizeTo(x, y)` modifica l'ample i l'altura de la finestra. Aquesta manipulació és **poc recomanada** (⚠️).
*   **Scroll:** Les propietats `pageXOffset` i `pageYOffset` retornen els píxels desplaçats horitzontalment i verticalment. També es pot accedir com a `window.scrollX` i `window.scrollY`. Els mètodes `window.scrollTo()` i `window.scrollBy()` controlen la posició de desplaçament.

## 4. Creació de noves finestres. Comunicació entre finestres

*   **Creació i tancament:**
    *   `window.open(url, nom, atributs)`: Obre una nova finestra o pestanya. El tercer paràmetre defineix l'aparença amb atributs com `height`, `width`, `scrollbars`, `toolbar`, i `menubar`. Aquesta pràctica és **poc recomanada** per limitacions de seguretat.
    *   `window.close()`: Tanca la finestra actual. Només es poden tancar pantalles secundàries creades amb `open()` sense que el navegador demani confirmació a l'usuari.
*   **Gestió del focus:**
    *   `window.focus()`: Porta la finestra al primer pla (enfoca).
    *   `window.blur()`: Fa que la finestra perdi el focus (desenfoca).
*   **Comunicació entre finestres/frames:**
    *   **Finestra creadora:** La propietat `window.opener` apunta a la finestra principal que va obrir la secundària.
    *   **Frames (iframes):** Per accedir al contingut d'un `iframe`, s'accedeix a l'objecte `window` a través de la propietat `contentWindow` de l'element *iframe*. Des d'un *iframe*, es pot accedir a la finestra pare amb `window.parent`.
    *   **Missatgeria *Cross-frame*:** La comunicació s'aconsegueix utilitzant el mètode `postMessage` a la finestra objectiu. L'altra finestra pot rebre aquests missatges escoltant l'esdeveniment *message* a l'objecte `window`.

## 5. Interacció amb l'usuari

*   **Diàlegs (Popup):** Mètodes de l'objecte `window` considerats **antics, però funcionals** (⚠️):
    *   `window.alert()`: Mostra un missatge simple.
    *   `window.confirm()`: Presenta un missatge amb botons "OK" i "Cancel·la".
    *   `window.prompt()`: Permet a l'usuari introduir dades.
*   **Mètodes de Temporització:** Permeten executar codi amb retards o de forma periòdica.
    *   `setTimeout()`: Executa un bloc de codi una vegada després d'un retard donat en mil·lisegons. Es pot cancel·lar amb `clearTimeout()`.
    *   `setInterval()`: Executa codi repetidament a intervals especificats en mil·lisegons. Es pot cancel·lar amb `clearInterval()`.
    *   `requestAnimationFrame()`: Optimitzat per a animacions, sol·licitant al navegador que cridi la funció abans del proper repintat.
*   **Esdeveniments (Events):** L'objecte `window` proporciona esdeveniments per respondre a les interaccions:
    *   `load`: Es dispara quan tota la pàgina, inclosos els recursos (imatges, scripts), s'ha carregat completament.
    *   `unload`: Es dispara just abans que la pàgina es descarregui.
    *   `scroll`: Es dispara quan l'usuari fa *scroll*.
    *   `resize`: Ocorre quan la finestra es redimensiona.
    *   `focus`/`blur`: Quan la finestra guanya o perd el focus.
    *   `popState`: Es dispara quan l'usuari fa clic als botons d'historial o s'utilitzen els mètodes `history`.

## 6. Mecanismes del navegador per a l'emmagatzematge i la recuperació d'informació

Els objectes d'emmagatzematge web, **`localStorage`** i **`sessionStorage`**, permeten guardar parelles clau/valor al navegador.

**Diferències Clau i Limitacions:**
*   A diferència de les *cookies*, no s'envien al servidor amb cada petició.
*   Poden emmagatzemar més dades (almenys 5MB en la majoria de navegadors).
*   L'emmagatzematge està lligat a l'origen (domini/protocol/port).

| Característica | `localStorage` | `sessionStorage` |
| :--- | :--- | :--- |
| **Persistència** | No expira, sobreviu al reinici del navegador. | Sobrevivència limitada: sobreviu a l'actualització de la pàgina, però no al tancament de la pestanya. |
| **Compartició** | Compartit entre totes les pestanyes i finestres del mateix origen. | Només visible dins de la pestanya actual (però compartit entre iframes del mateix origen). |
| **Dades** | Clau i valor han de ser cadenes de text (strings). Els objectes s'han de convertir amb `JSON.stringify` i `JSON.parse`.

**API Comuna:**
*   `setItem(key, value)`: Emmagatzema.
*   `getItem(key)`: Obté el valor per la clau.
*   `removeItem(key)`: Elimina la clau.
*   `clear()`: Elimina tot.
*   `key(index)`: Obté la clau en una posició donada.
*   `length`: Nombre d'ítems.

**Esdeveniment *Storage***:
Aquest esdeveniment es dispara en tots els objectes `window` (pestanyes) que tenen accés a l'emmagatzematge modificat, **excepte en la finestra que va causar el canvi**. Això permet a diferents finestres del mateix origen intercanviar missatges. L'esdeveniment conté la clau, l'`oldValue`, el `newValue`, l'URL del document on es va actualitzar i l'objecte d'emmagatzematge (`storageArea`).****