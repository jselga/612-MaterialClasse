// 1. Substitueix el paràgraf `<p id="missatge">` per un de nou amb el text `Has accedit com a convidat.`
//    - Crea un `<p>` nou amb `document.createElement('p')` i `textContent`.
const p = document.createElement('p');
p.textContent = "Has accedit com a convidat.";

//    - Localitza el vell amb `document.getElementById('missatge')` i fes `replaceChild` des del pare (`#info`).
const missatge = document.getElementById("missatge");
const info = document.getElementById("info");
info.replaceChild(p, missatge);

// 2. Elimina tot el contingut del `div#info` utilitzant una de les dues opcions:
//    - `info.innerHTML = ''` **(no recomanat, només per veure la diferència)**, o
// info.innerHTML = "";

//    - Millor: elimina de forma segura tots els fills amb un bucle `while (info.firstChild) info.removeChild(info.firstChild);`.
while (info.firstChild) {
    info.removeChild(info.firstChild);
}