# Asincronia en JavaScript

> Objectiu: disposar d’una base teòrica mínima per entendre Fetch i el consum d’APIs, i passar ràpidament a la pràctica.

---

## 1. Per què cal l’asincronia?
JavaScript és **no bloquejant**. Això permet:
- Continuar executant codi mentre espera una resposta.
- Evitar que la interfície quedi congelada.

Casos típics d’asincronia:
- Peticions a servidors (APIs)
- Temporitzadors
- Lectura de dades

> Idea clau: el codi **no espera** automàticament.

---

## 2. Callbacks (context històric)
Primer mecanisme per gestionar tasques asíncrones:
- Funcions passades com a paràmetres
- S’executen quan la tasca acaba

Limitacions:
- Poc llegible
- Difícil de mantenir (callback hell)

> Només s’introdueixen per entendre l’evolució.

---

## 3. Promeses: el concepte clau
Una **Promise** representa una operació que acabarà en el futur.

Estats possibles:
- `pending`
- `fulfilled`
- `rejected`

> Fetch i la majoria d’eines modernes treballen amb promeses.  

🧩 Exemples:
- [`01-promeses.js`](01-promeses.js)
- [`02-chain.js`](02-chain.js)
---

## 4. Flux i gestió d’errors amb promeses
Les promeses permeten:
- Encadenar operacions
- Centralitzar errors
- Executar codi final independentment del resultat

Això resol molts problemes dels callbacks.

🧩 Exemple:
- [`03-catch-finally.js`](03-catch-finally.js)
---

## 5. Execució en paral·lel
Quan tenim diverses operacions asíncrones que poden executar-se alhora, JavaScript ofereix diversos mètodes estàtics de `Promise` per coordinar-les segons el comportament que ens interessa.

### Promise.all()
Executa diverses promeses en paral·lel i **només resol correctament si totes tenen èxit**. Si una falla, tota l’operació falla.

> Útil quan totes les dades són imprescindibles per continuar.

### Promise.race()
Retorna el resultat de **la primera promesa que acaba**, tant si és un èxit com un error.

> Útil per gestionar temps d’espera o competicions entre operacions.

### Promise.any()
Retorna el resultat de **la primera promesa que té èxit**. Només falla si totes fallen.

> Útil quan n’hi ha prou amb una resposta correcta.

### Promise.allSettled()
Espera que **totes les promeses acabin**, independentment de si tenen èxit o fallen, i retorna l’estat de cadascuna.

> Útil per analitzar resultats parcials sense interrompre el flux.
🧩 Exemples:
- [`05-parallel.js`](05-parallel.js)
- [`06-args.js`](06-args.js)
---

## 6. Async / Await
Sintaxi moderna basada en promeses.

Avantatges:
- Millor llegibilitat
- Codi més proper al model síncron
- Ideal per projectes reals

> És la forma recomanada a partir d’ara.

---

## 7. Fetch: aplicació pràctica de l’asincronia
`fetch()` permet comunicar-se amb servidors:
- Retorna una Promise
- Normalment treballa amb JSON

Flux general:
1. Fer la petició
2. Esperar la resposta
3. Processar dades
4. Gestionar errors

---

## 8. APIs REST (context mínim)
Una API REST:
- Exposa recursos mitjançant URLs
- Utilitza mètodes HTTP
- Retorna dades estructurades

> L’objectiu és consumir APIs, no implementar-les.

---

## 9. Errors i cancel·lació de peticions
En aplicacions reals cal:
- Diferenciar errors de xarxa i errors HTTP
- Gestionar excepcions
- Cancel·lar peticions quan cal

---
## Referències oficials

- MDN – Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- MDN – async / await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

