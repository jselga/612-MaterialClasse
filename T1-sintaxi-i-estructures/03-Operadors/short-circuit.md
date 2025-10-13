# Short-circuit i Falsy en JavaScript

## 1. Valors *falsy* i *truthy*
En JS, qualsevol valor es pot convertir implícitament a booleà:

- **Falsy** (es consideren `false` en context booleà):
  - `false`
  - `0` i `-0`
  - `''` (cadena buida)
  - `null`
  - `undefined`
  - `NaN`

- **Truthy**: qualsevol altre valor (incloent `[]`, `{}`, `' '` amb espai, etc.).

Exemple:
```js
if (0) console.log("No s'executa");
if ("Hola") console.log("S'executa"); 
```

---

## 2. Avaluació per curt-circuit (*short-circuit evaluation*)

### 🔸 Operador `||` (OR lògic)
- Avalua d’esquerra a dreta.
- Retorna el **primer valor *truthy*** trobat.
- Si tots són *falsy*, retorna l’últim.

Exemple:
```js
let nom = '';
let username = nom || 'Anònim';
console.log(username); // "Anònim"
```

Patró habitual:
```js
let port = process.env.PORT || 3000;
```

---

### 🔸 Operador `&&` (AND lògic)
- Avalua d’esquerra a dreta.
- Retorna el **primer valor *falsy*** trobat.
- Si tots són *truthy*, retorna l’últim.

Exemple amb funcions:
```js
function fn1(){
  console.log('soc la funció 1');
  return false;
}
function fn2(){
  console.log('soc la funció 2');
  return true;
}
let x = fn1() && fn2();
console.log(x); // false (fn2 no s'executa)
```

---

## 3. Casos pràctics

### ✅ Valors per defecte (`||`)
```js
function greet(nom) {
  let username = nom || "Anònim";
  console.log("Hola, " + username);
}
```

### ✅ Execució condicional (`&&`)
```js
let user = { name: "Cha" };
user && console.log(user.name); // "Cha"
```

### ✅ Curt-circuit simple
```js
let condicio = true;
condicio && console.log("Només s'executa si és true");
```

---

## 4. Atenció amb `||`
Recorda que `0` i `''` també són *falsy*:
```js
let quantitat = 0;
let valor = quantitat || 10;
console.log(valor); // 10 (potser no era l’esperat!)
```

Per diferenciar `null/undefined` de la resta, millor usar **Nullish Coalescing (`??`)**:
```js
let valor = quantitat ?? 10;
console.log(valor); // 0
```

---

## 5. Quadre resum

| Operador | Retorna... | Exemple | Resultat |
|----------|------------|---------|----------|
| `||`     | Primer *truthy* o últim *falsy* | `'' \|\| 'Anònim'` | `"Anònim"` |
| `&&`     | Primer *falsy* o últim *truthy* | `true && "Hola"` | `"Hola"` |
| `??`     | Primer valor **no `null/undefined`** | `0 ?? 10` | `0` |

---