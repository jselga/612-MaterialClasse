# Arrays en JavaScript — Resum e
## Què és un array?

Un **array** és una estructura que permet emmagatzemar múltiples valors dins d’una sola variable.

```js
const fruits = ["poma", "plàtan", "kiwi"];
console.log(fruits[0]); // "poma"
```

Els arrays a JavaScript són **dinàmics**, poden contenir valors de diferents tipus i la seva mida pot variar.

```js
const barrejats = ["hola", 3, true, null];
```

[📚 **Recursos**](#-recursos)

## Conceptes i accions amb Arrays
Al llarg d'aquest resum trobareu diferents conceptes i mètodes dels arrays


### 1. Afegir elements
Afegir valors a l’inici o final d’un array amb `push()` i `unshift()`.
```js
const nums = [1, 2, 3];
nums.push(4);   // Afegir al final
nums.unshift(0); // Afegir al principi
console.log(nums); // [0, 1, 2, 3, 4]
```
🧩 Exemple: [01-afegir.js](./01-afegir.js)   

📚 **Referència:**  
- [MDN – Array.prototype.push()](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN – Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)  
---


### 2. Eliminar elements
Eliminar elements amb `pop()`, `shift()` o `splice()`.   
```js
nums.pop();     // Elimina l’últim
nums.shift();   // Elimina el primer
console.log(nums); // [1, 2, 3]
```

🧩 Exemple: [02-eliminar.js](./02-eliminar.js)

📚 **Referència:**  
- [MDN – Array.prototype.push()](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  
- [MDN – Array.prototype.pop()](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

---

### 3. Buscar valors primitius
Cercar posicions o existència amb `indexOf()` o `includes()`.  

```js
const noms = ["Anna", "Joan", "Maria"];

console.log(noms.includes("Anna")); // true
console.log(noms.indexOf("Joan"));  // 1
```
📚 **Referència:**  
- [MDN – includes()](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)  
  

🧩 Exemple: [03-buscar-primitius.js](./03-buscar-primitius.js)

---

### 4. Arrow Fuctions
Les "Arrow Functions" són funcions anònimes que ens permeten aplicar funcions curtes dins de mètodes propis dels arrays com per exemple `map()` o `forEach()`. Les farem servir més endavant per molts usos però introduïm el concepte en l'exemple per poder-ho aplicar als apartats posteriors.  

🧩 Exemple: [04-arrow-fuctions.js](./04-arrow-fuctions.js)

---

### 5. Cerca per referència
Recordem que els Arrays són objectes i per tant s'emmagatzemen per referència no per valor

🧩 Exemple: [05-buscar-referencia.js](./05-buscar-referencia.js)

---

### 6. Buidar arrays
Eliminar tots els elements d’un array amb diferents tècniques (`length = 0`, `splice()`, etc.).  
🧩 Exemple: [06-buidant-arrays.js](./06-buidant-arrays.js)

---

### 7. Combinar arrays
Unir dos o més arrays amb `concat()`  
🧩 Exemple: [07-combinant.js](./07-combinant.js)

---

### 8. Spread operator
Fer còpies i combinar arrays amb l’operador d’expansió spread operator `...`.  
🧩 Exemple: [08-spread.js](./08-spread.js)

---

### 9. Unir valors amb `join()`
Convertir arrays a text amb separadors personalitzats.  
🧩 Exemple: [09-join.js](./09-join.js)

---

### 10. Ordenar elements
Ordenar valors amb `sort()` i invertir amb `reverse()`.    
🧩 Exemple: [10-ordre.js](./10-ordre.js)

---

### 11. Validar condicions
Comprovar elements amb `every()` i `some()`.   
🧩 Exemple: [11-every-some.js](./11-every-some.js)

---

### 12. Filtrar contingut
Crear nous arrays amb condicions (`filter()`).  
🧩 Exemple: [12-filter.js](./12-filter.js)

---

### 13. Map — transformar valors
Aplicar funcions a cada element per obtenir un nou array (`map()`).  
🧩 Exemple: [13-map.js](./13-map.js)

---

### 14. Reduce — acumular resultats
Combinar tots els valors en un únic resultat (`reduce()`).  
🧩 Exemple: [14-reduce.js](./14-reduce.js)

---

## 📚 Recursos
- [MDN – Arrays](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info – Arrays](https://javascript.info/array-methods)
- [W3Schools – JS Arrays](https://www.w3schools.com/js/js_arrays.asp)

---

