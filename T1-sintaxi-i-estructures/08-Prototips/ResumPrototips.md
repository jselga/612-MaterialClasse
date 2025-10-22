# Prototips en JavaScript — Resum

[📚 **Recursos**](#recursos)

## Conceptes i accions amb Prototips

### 1. Principis de POO
Els quatre pilars: **encapsulació**, **abstracció**, **herència** i **polimorfisme**, aplicats al model prototipal de JS.
```js
function Caixa(valorInicial) {
  let _valor = valorInicial; // encapsulació (privat via closura)
  this.llegir = function() { return _valor; }; // abstracció
}
function CaixaEntera(n) { Caixa.call(this, n); } // herència
```
🧩 Exemple: [01-principisPOO.js](./01-principisPOO.js)  
[📘 MDN — OOP en JS](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS)

---

### 2. Prototips
Tots els objectes tenen un **prototip**. Si una propietat no és a l’objecte, es busca a la **cadena de prototips**.
```js
function Robot(nom) { this.nom = nom; }
Robot.prototype.saluda = function() { console.log(`Hola, sóc ${this.nom}`); };
```
🧩 Exemple: [02-proto.js](./02-proto.js)  
[📘 MDN — Object prototypes](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes)

---

### 3. Iterant propietats
Distingir **pròpies** vs **heretades** quan iterem (`for...in` + `hasOwnProperty`).
```js
function Cotxe(marca) { this.marca = marca; }
Cotxe.prototype.tipus = 'turisme';
```
🧩 Exemple: [03-iterant.js](./03-iterant.js)  
[📘 MDN — for...in](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in)

---

### 4. Estenent prototips
Afegir mètodes al **prototype** del constructor per compartir funcionalitat entre instàncies.
```js
function Temporitzador() {}
Temporitzador.prototype.tic = function() { console.log('tic'); };
```
🧩 Exemple: [04-extenent.js](./04-extenent.js)  
[📘 MDN — Prototype chain](https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

### 5. Implementant herència
Relació **pare–fill** amb `Object.create` i correcció de `constructor`.
```js
function Figura() {}
Figura.prototype.area = function() { return 0; };
function Quadrat(c) { Figura.call(this); this.costat = c; }
```
🧩 Exemple: [05-herencia.js](./05-herencia.js)  
[📘 MDN — Herència i cadena de prototips](https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

### 6. Constructor pare
Cridar el **constructor pare** (p. ex. amb `call`) per inicialitzar estat compartit.
```js
function Usuari(email) { this.email = email; }
function Alumne(email, grup) { Usuari.call(this, email); this.grup = grup; }
```
🧩 Exemple: [06-constructora-mare.js](./06-constructora-mare.js)  
[📘 MDN — Function.prototype.call](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

---

### 7. Method override
Redefinir un mètode heretat per canviar el comportament a la subclasse.
```js
function Logger() {}
Logger.prototype.log = function(msg){ console.log('LOG:', msg); };
```
🧩 Exemple: [07-method-override.js](./07-method-override.js)  
[📘 MDN — Sobre-escriptura de mètodes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends#sobre_escritura_de_m%C3%A9todos)

---

### 8. Polimorfisme
Una mateixa interfície (`.metode()`) amb implementacions específiques segons el tipus concret.
```js
function Notificador(){}
Notificador.prototype.enviar = function(){ console.log('Enviant genèric'); };
```
🧩 Exemple: [08-polimorfisme.js](./08-polimorfisme.js)  
[📘 MDN — Polymorphism](https://developer.mozilla.org/es/docs/Glossary/Polymorphism)

---

### 9. Composició vs herència
La **composició** combina comportaments sense jerarquia rígida; sovint és més flexible que l’herència.
```js
const AmbLog = { log(msg){ console.log(`[log] ${msg}`); } };
const AmbValidacio = { valida(txt){ return typeof txt === 'string' && txt.length > 0; } };
```
🧩 Exemple: [09-comp-vs-her.js](./09-comp-vs-her.js)  
[📘 MDN — Composició (OOP en JS)](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS#composici%C3%B3n_en_javascript)

---

### 10. Mixins
Un **mixin** “barreja” mètodes al `prototype` d’un tipus per afegir-hi capacitats addicionals.
```js
const Parla = { parlar(){ console.log('bla bla'); } };
const Corre = { correr(){ console.log('corro!'); } };
```
🧩 Exemple: [10-mixins.js](./10-mixins.js)  
[📘 MDN — Object.assign](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

---

## Recursos
- [MDN – Object prototypes](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN – Herència i prototips](https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN – Function.prototype.call](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN – Polymorphism](https://developer.mozilla.org/es/docs/Glossary/Polymorphism)
- [MDN – Object.assign](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
