// # Exercicis 2 — Esdeveniments del DOM

// Aquesta activitat  introdueix la gestió d’esdeveniments dins el DOM mitjançant un recorregut pas a pas. L’objectiu és practicar la planificació del codi i la cerca autònoma de solucions, partint de pistes i orientacions generals.

// **Estructura**: es manté l’HTML original (`Ex_Events_DOM.html`) i s’elabora tot el codi a `Ex_Events_DOM.js` (sense modificar l’HTML).

// **Objectiu**: treballar el model d’esdeveniments modern del DOM amb `addEventListener`, propagació i `CustomEvent`, evitant `onclick` inline i APIs obsoletes.&#x20;

// ---

// ## Fitxers de treball

// - `Ex_Events_DOM.html` (donat; no modificar).
// - `Ex_Events_DOM.js` (a crear/modernitzar).
// - Carpeta `img/` amb: `gnulinux.jpg`, `gnu.jpg`, `linux.jpg`.

// ---

// ## Requisits funcionals

document.addEventListener('DOMContentLoaded', e => {


    // 1. **Precarrega d’imatges**: guarda en un array les URL de `gnulinux.jpg`, `gnu.jpg` i `linux.jpg`.
    const imagesrcs = ['gnulinux.jpg', 'gnu.jpg', 'linux.jpg'];
    const images = [new Image(125, 125), new Image(125, 125), new Image(125, 125)];
    const tg = new Image(125, 125).src = images[0];
    const gnu = new Image(125, 125).src = images[1];
    const tux = new Image(125, 125).src = images[2];

    // 2. **Estil dels rètols**: tots els `<h2>` damunt de cada imatge en color `#aaaaff`.
    const h2s = document.querySelectorAll("h2");
    h2s.forEach(element => {
        element.style = "color: #aaaaff;"
    });

    // 3. **Atributs comuns de les imatges**: totes les `<img>` amb `alt="gnu/linux"`, `width="125"` i `height="125"`.
    const imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        img.setAttribute("alt", "gnu/linux");
        img.setAttribute("width", "125");
        img.setAttribute("height", "125");
        img.index = 0;
    });

    // 4. **Clic (una vegada)**: canvia la imatge de forma **rotatòria**: original → gnu → linux → original … (per cada `<img>` independentment).
    const nextsrc = {
        "img/gnulinux.jpg": "img/linux.jpg",
        "img/linux.jpg": "img/gnu.jpg",
        "img/gnu.jpg": "img/gnulinux.jpg",
    };
    const nextindex = {
        0: 1,
        1: 2,
        2: 0
    };

    imgs.forEach(img => {
        img.addEventListener("click", e => {
            e.stopPropagation();
            img.setAttribute("src", nextsrc[img.getAttribute("src")]);
        });
    });

    // 5. **Doble clic**: amaga només la imatge doble-clicada.
    /* codi del 6 */
    let amagades = [];
    let mostratotes = document.createElement("button");
    mostratotes.innerText = "Mostra totes";
    mostratotes.style.visibility = "hidden";
    mostratotes.onclick = () => {
        while (amagades.length != 0) {
            amagades.pop().style.visibility = "visible";
        }
        mostratotes.style.visibility = "hidden";
    };
    document.body.insertBefore(mostratotes, document.getElementById("pId"));

    /* codi del 5 */
    imgs.forEach(img => {
        img.addEventListener("dblclick", e => {
            e.stopPropagation();
            img.style.visibility = "hidden";
            amagades.push(img);
            mostratotes.style.visibility = "visible";
        });
    });

    // 6. **Botó de “Mostra totes”**: creat via DOM **just abans** del `<p id="pId">Imatges</p>` (si no fos possible, al final de la pàgina). Només és **visible** quan **hi ha** imatges ocultes; en clicar, les torna a mostrar.
    // fet a sobre el codi del 5

    // 7. **Clic al contenidor**: si es clica dins el `<div>` que conté la imatge **però no sobre la imatge**, mostra el missatge: *"Cal clicar sobre la imatge"*.
    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.addEventListener('click', e => {
            let missatge = document.createElement('p');
            missatge.style.backgroundColor = "yellow";
            missatge.style.border = "3px solid black";
            missatge.style.borderRadius = "5px";
            missatge.innerText = "Cal clicar sobre la imatge";
            div.appendChild(missatge);

            setTimeout(() => {
                if (missatge && missatge.parentElement) {
                    missatge.remove();
                }
            }, 2000);
        })
    });

    // 8. **CustomEvent**: mantén una **llista d’imatges amagades** amb `CustomEvent` per notificar canvis a l’estat (oculta/mostra) i que el botó es pugui actualitzar de manera reactiva.

    // 9. **Estil de codi**: usa `DOMContentLoaded`, `const`/`let`, `for...of` o `forEach`, `dataset`, funcions pures on tingui sentit, comentaris i noms clars.

});
// ---

// ## 0 · Arrencada segura

// **Què fer**: Assegura que el codi s’executa quan el DOM estigui llest.

// **Pistes**

// - Event: `DOMContentLoaded` sobre `document`.
// - Diferència amb `window.onload`: el primer no espera imatges/CSS.

// **APIs clau**: `document.addEventListener('DOMContentLoaded', handler)`

