# Classes ES6 en JavaScript — Resum

[📚 **Recursos**](#recursos)

## Conceptes i accions amb Classes ES6

### 1. Classes
Les **classes** proporcionen una sintaxi clara sobre el model de prototips per definir **constructors** i **mètodes d'instància**.
```js
class Persona {
  constructor(nom) { this.nom = nom; }   // constructor
  saludar() { console.log(`Hola, sóc ${this.nom}`); } // mètode d'instància
}
```
🧩 Exemple: [01-classes.js](./01-classes.js)  
[📘 MDN — Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

### 2. Membres privats
Els **camps/mètodes privats** (prefix `#`) només són accessibles dins de la classe: útils per a **encapsulació**.
```js
class Compte {
  #saldo = 0;
  ingressar(q) { this.#saldo += q; }
  veure() { return this.#saldo; }
}
```
🧩 Exemple: [02-privat.js](./02-privat.js)  
[📘 MDN — Camps privats](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

---

### 3. Mètodes estàtics
Un **mètode estàtic** pertany a la classe (no a la instància) i es crida com `Classe.metode()`.
```js
class Util {
  static suma(a, b) { return a + b; }
}
console.log(Util.suma(2, 3));
```
🧩 Exemple: [03-static.js](./03-static.js)  
[📘 MDN — Static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

---

### 4. Getters i Setters
Controlen l’accés i la validació en **lectura** (`get`) i **escriptura** (`set`) de propietats.
```js
class Persona {
  constructor(nom) { this._nom = nom; }
  get nom() { return this._nom.toUpperCase(); }
  set nom(v) { this._nom = String(v).trim(); }
}
```
🧩 Exemple: [04-get-set.js](./04-get-set.js)  
[📘 MDN — Getters/Setters](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/get)

---

### 5. Herència
`extends` crea una subclasse; **`super()`** invoca el constructor/mètode del pare.
```js
class Animal { sonar(){ console.log('so genèric'); } }
class Gos extends Animal {
  sonar(){ console.log('borda'); } // sobreescriptura
}
```
🧩 Exemple: [05-herencia.js](./05-herencia.js)  
[📘 MDN — Extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

---

### 6. Method override
Una subclasse pot **sobreescriure** mètodes del pare per canviar el comportament.
```js
class Logger { log(m){ console.log('LOG:', m); } }
class Debugger extends Logger {
  log(m){ console.debug('DEBUG:', m); } // override
}
```
🧩 Exemple: [06-method-override.js](./06-method-override.js)  
[📘 MDN — Override](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends#sobre_escritura_de_m%C3%A9todos)

---

### 7. Mixins
Un **mixin** “barreja” comportaments en una classe sense heretar d’ella, normalment amb `Object.assign` o `Object.setPrototypeOf`  sobre `prototype`.
```js
const Volador = { volar(){ console.log('volo!'); } };
class Superheroi {}
Object.assign(Superheroi.prototype, Volador);
```
🧩 Exemple: [07-mixins.js](./07-mixins.js)  
[📘 MDN — Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
[📘 MDN — Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

---

## Recursos
- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN – Private Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN – Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [MDN – Getters/Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN – Inheritance (extends)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [MDN – Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN – Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)