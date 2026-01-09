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

🧩 Exemple:
- [`01-promeses.js`](01-promeses.js)

---

## 4. Flux i gestió d’errors amb promeses
Les promeses permeten:
- Encadenar operacions
- Centralitzar errors
- Executar codi final independentment del resultat

Això resol molts problemes dels callbacks.

🧩 Exemples:
- Encadenar operacions: [`02-chain.js`](02-chain.js)
- Centralitzar errors i execucció de codi final: [`03-catch-finally.js`](03-catch-finally.js)
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

🧩 Exemple:
- [`05-parallel.js`](05-parallel.js)

---

## 6. Async / Await
Sintaxi moderna basada en promeses.

Avantatges:
- Millor llegibilitat
- Codi més proper al model síncron
- Ideal per projectes reals

> És la forma recomanada a partir d’ara.  

🧩 Exemples:
- Passar paràmetres a promeses: [`06-args.js`](06-args.js)
- Ús d'async / await: [`07-async.js`](07-async.js)
---

## 7. Fetch: aplicació pràctica de l’asincronia
`fetch()` permet comunicar-se amb servidors:
- Retorna una **Promise**
- No bloqueja l’execució del codi
- S’integra directament amb `async / await`
- Normalment treballa amb JSON (dependrà del servidor)


### 7.1 Flux bàsic d'una petició
1. Fer la petició amb `fetch(url)`
2. Esperar la resposta (`response`)
3. Processar dades les dades (`response.json()` o `response.text()` )
4. Gestionar errors (`catch`)
5. Utilitzar les dades (`then`)

```js
fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
```

>Important: si fem `fetch` amb then l'asíncronia està gestionada però si no (p.e. dins d'una funció) farem servir `async` i `await`


🧩 Exemple:
- Petició bàsica amb fetch: [`08-fetch.js`](08-fetch.js)
  
---


### 7.2. APIs REST 
Una API REST:
- Exposa recursos mitjançant URLs
- Utilitza [mètodes HTTP](#verbs-http-en-apis-rest)
- Retorna dades estructurades

#### Verbs HTTP en APIs REST

| Verb HTTP | Acció principal        | Descripció breu                                   | Exemple d’endpoint        | Retorna dades? |
|----------|------------------------|--------------------------------------------------|---------------------------|----------------|
| GET      | Llegir                 | Obté dades d’un recurs o una col·lecció           | `/posts`<br>`/posts/1`    | Sí             |
| POST     | Crear                  | Crea un nou recurs                                | `/posts`                  | Sí             |
| PUT      | Actualitzar (complet)  | Substitueix totes les dades d’un recurs           | `/posts/1`                | Sí             |
| PATCH    | Actualitzar (parcial)  | Modifica només alguns camps del recurs            | `/posts/1`                | Sí             |
| DELETE   | Eliminar               | Elimina un recurs                                 | `/posts/1`                | Normalment no  |



### 7.3 Opcions de fetch
`fetch` permet configurar la petició mitjançant un objecte d’opcions:

- `method`: el verb http 
- `headers`: la capçalera de les dades, s'especifica informació com el tipus de contingut, autorització, etc
- `body`: el cos de les dades que enviem
- `cache`: indicar com es gestiona el cache
  
Això permet:
- Enviar dades
- Indicar el tipus de contingut
- Preparar operacions `POST, PUT/PATCH o DELETE` (`GET` és l'operació per defecte no cal especificar-la)
- Indicar la forma de recàrrega  de les dades

🧩 Exemple:
- Petició amb opcions: [`09-options.js`](09-options.js)
#### Verbs HTTP amb fetch

| Verb HTTP | Acció | Base URL | Endpoint | URL final | Exemple amb fetch |
|----------|-------|----------|----------|-----------|-------------------|
| GET | Llegir llista | `BASE_URL` | `/recurs` | `BASE_URL/recurs` | `fetch(`${BASE_URL}/recurs`)` |
| GET | Llegir detall | `BASE_URL` | `/recurs/:id` | `BASE_URL/recurs/1` | `fetch(`${BASE_URL}/recurs/1`)` |
| GET | Llegir amb filtres | `BASE_URL` | `/recurs?camp=valor` | `BASE_URL/recurs?camp=valor` | `fetch(`${BASE_URL}/recurs?camp=valor`)` |
| POST | Crear recurs | `BASE_URL` | `/recurs` | `BASE_URL/recurs` | `fetch(`${BASE_URL}/recurs`, { method: 'POST', ... })` |
| PUT | Actualitzar tot | `BASE_URL` | `/recurs/:id` | `BASE_URL/recurs/1` | `fetch(`${BASE_URL}/recurs/1`, { method: 'PUT', ... })` |
| PATCH | Actualitzar parcial | `BASE_URL` | `/recurs/:id` | `BASE_URL/recurs/1` | `fetch(`${BASE_URL}/recurs/1`, { method: 'PATCH', ... })` |
| DELETE | Eliminar | `BASE_URL` | `/recurs/:id` | `BASE_URL/recurs/1` | `fetch(`${BASE_URL}/recurs/1`, { method: 'DELETE' })` |


---

### 7.4 Errors i cancel·lació de peticions
- `fetch` **no llança error** per errors HTTP (404, 500)
- Només falla automàticament per errors de xarxa

Per això cal:
- Comprovar `response.ok`
- Utilitzar `try / catch`

> La gestió correcta d’errors és clau en aplicacions reals.

En alguns casos cal cancel·lar una petició:
- Canvi de vista
- Nova cerca
- Usuari impacient 

Es fa servir `AbortController`.

🧩 Exemple:
- Cancel·lació de petició: [`10-cancel.js`](10-cancel.js)

### 7.5 . APIs públiques per practicar
Els exercicis posteriors es basaran en consumir dades d’aquestes APIs públiques:

#### JSONPlaceholder
API falsa per fer proves.

- Web: https://jsonplaceholder.typicode.com
- Ideal per:
  - posts
  - usuaris
  - comentaris

#### PokéAPI
API pública amb dades reals de Pokémon.

- Web: https://pokeapi.co
- Ideal per:
  - llistes
  - detalls
  - relacions entre recursos

> Aquestes APIs permeten practicar fetch sense necessitat de backend propi.  

Altres APIs públiques:

- [Star Wars API - SWAPI](https://swapi.info/)
- [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API/#/)
- Cerca la teva API amb el tema que t'interessi
---
## Referències oficials

- MDN – Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- MDN – async / await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

