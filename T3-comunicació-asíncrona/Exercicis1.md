# Exercicis de pràctica: Promeses i async / await

> Objectiu: practicar l’asincronia en JavaScript abans de començar amb Fetch i APIs.

---

## Exercici 1 – Promesa bàsica
Crea una promesa que:
- es resolgui al cap d’1 segon
- retorni un missatge de text

Mostra el resultat per consola utilitzant `.then()`.

Fitxer d’exemple:
- `01-promeses.js`

---

## Exercici 2 – Cadena de promeses
Crea dues funcions que retornin promeses:
- la primera transforma un text
- la segona afegeix informació al resultat

Encadena-les amb `.then()` i mostra el resultat final.

Fitxer d’exemple:
- `02-chain.js`

---

## Exercici 3 – Gestió d’errors
Modifica l’exercici anterior perquè:
- una de les promeses pugui fallar
- gestionis l’error amb `.catch()`

Mostra un missatge d’error clar per consola.

Fitxer d’exemple:
- `03-catch-finally.js`

---

## Exercici 4 – Execució en paral·lel
Crea tres promeses amb temps d’espera diferents.

Prova:
- `Promise.all`
- `Promise.race`
- `Promise.any`
- `Promise.allSettled`

Analitza:
- quin resultat obtens
- quan falla cada cas

Fitxer d’exemple:
- `05-parallel.js`

---

## Exercici 5 – Refactor amb async / await
Reescriu un dels exercicis anteriors utilitzant:
- `async`
- `await`
- `try / catch`

Compara la llegibilitat amb la versió amb `.then()`.

Fitxer d’exemple:
- `07-async.js`

---

## Exercici 6 – Flux complet amb async / await
Crea una funció `main` que:
1. esperi una promesa inicial
2. cridi dues funcions asíncrones
3. mostri tots els resultats per consola

L’objectiu és entendre l’ordre d’execució i el retorn de valors.

---

> Quan aquests exercicis funcionin correctament, ja estàs preparat per treballar amb Fetch i APIs.

---



