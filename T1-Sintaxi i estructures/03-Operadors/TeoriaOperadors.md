# Operadors

## Declaracions, instruccions i Expressions

- [Declaration](#declaration)
- [Statement](#statement)
- [Expression](#expression)

### Declaration (declaració)

Una declaració defineix que existeix una entitat, encara que de vegades no li assignis cap valor inicial  
És quan crees o declares alguna cosa: una variable, una funció, una classe…
(Bàsicament, poses un nom a una entitat dins el codi).  
Les podem indentificar perque van precedides de les paraules reservades següents:

- let
- const
- function
- async function
- class
- export
- import
- ...

#### Exemple

```js
// Variable declaration
let x;

// Function declaration
function suma(a, b) {
  return a + b;
}

// Class declaration
class Persona {
  constructor(nom) {
    this.nom = nom;
  }
}
```

### Statement (setència/instrucció)

Un statement sol ser una línia completa (acaba amb ; encara que a JS sigui opcional).  
És una ordre completa que el motor de JS pot executar.
Té efectes (side effects): crea variables, executa codi, fa bucles, condicions…  
Les podem indentificar perque solen contenir alguna de les paraules reservades següents:

- if
- for
- else
- switch
- ...

#### Exemple

```js
let y = 5; // statement (declaració + assignació)
if (y > 3) {
  // statement condicional
  console.log("OK"); // statement d’execució
}
for (let i = 0; i < 3; i++) {
  // statement bucle
  console.log(i);
}
```

### Expression (expressió)

Una expressió sempre produeix un valor, encara que no l’utilitzis.  
És un fragment de codi que retorna un valor.
Les expressions poden viure dins d’altres statements.

- 4+6
- x=4
- myfunction()
- ...

#### Exemples

```js
3 + 4; // expression → retorna 7
"hola".toUpperCase(); // expression → retorna "HOLA"
x * 2; // expression
true && false; // expression → retorna false

//o també function expressions com:
const suma = function (a, b) {
  return a + b;
};
```

## Conclusió

```js
// Declaració
let z;

// Expressió
5 * 10; // retorna 50

// Statement
z = 5 * 10; // assigna el valor (statement que conté una expressió)
```

Si no li pots fer un console.log, és una declaration si li pots fer és una expressió.

- Declaration → defineix alguna cosa nova (variable, funció, classe).

- Expression → retorna un valor (es pot ficar dins un statement).

- Statement → ordre completa que s’executa (pot contenir declaracions i expressions).

## Operadors amb JS

Amb els operadors podem crear expressions i així crear algoritmes per poder solucionar els problemes que hagin de resoldre les nostres aplicacions.

- [Aritmètics](01-aritmetics.js)
- [Asignació](02-assignacio.js)
- [Comparació](03-comparacio.js)
- [Lògics](04-logics.js)
- [Bitwise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) (Poc utilitzat): Fa l'operació logica bit a bit i es fa servir amb un sol símbol | per OR i & per AND
  #### Exemples
  ```js
  console.log(5 & 3);
  // Sortida: 1
  // 5 = 0101 (binari)
  // 3 = 0011
  //  & = 0001 → resultat = 1
  console.log(1 | 3); // 0011 Resultat de 0001 OR 0011
  // Sortida: 3
  ```
