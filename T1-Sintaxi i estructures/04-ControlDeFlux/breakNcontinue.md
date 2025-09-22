# `break` i `continue` en bucles a JavaScript

Els bucles (`for`, `while`, `do...while`) permeten recórrer col·leccions o repetir instruccions.  
Les instruccions **`break`** i **`continue`** modifiquen aquest flux.

---

## 🔹 `break`
- **Funció:** Atura completament l'execució del bucle i en surt.
- **Exemple bàsic:**
  ```js
  for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
  }
  // imprimeix 0,1,2,3,4 i després surt
  ```

### ✅ Bons usos
- Sortir quan s’ha trobat el resultat desitjat (evitar iteracions innecessàries).
- Millorar el rendiment en cerques o processos llargs.

### ⚠️ Mals usos
- Sortir de diversos bucles imbricats sense control (codi confús).
- Substituir condicions ben dissenyades amb un `break` improvisat.
- Fer el codi més difícil de mantenir.

---

## 🔹 `continue`
- **Funció:** Salta l'iteració actual i continua amb la següent.
- **Exemple bàsic:**
  ```js
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
  }
  // imprimeix 0,1,3,4 (salta el 2)
  ```

### ✅ Bons usos
- Ometre casos específics dins del bucle sense parar l’execució.
- Mantenir el codi més net en comptes de fer un `if` molt gran que englobi tot el cos del bucle.

### ⚠️ Mals usos
- Abusar de `continue` quan es podria refactoritzar la lògica amb condicions més clares.
- Amagar errors lògics saltant iteracions en lloc de tractar-los adequadament.
- Dificultar la lectura amb massa condicions de `continue` dins d’un sol bucle.

---

## 🔑 Resum de bones pràctiques
- **Claror:** Usa `break` i `continue` només quan millorin la llegibilitat.  
- **Eficiència:** `break` és útil per evitar iteracions innecessàries.  
- **Neteja:** `continue` pot simplificar condicions, però evita abusar-ne.  
- **Alternatives:** A vegades, `filter`, `some`, `every` o `find` són millors opcions que un bucle amb `break/continue`.

---

## 📊 Taula comparativa

| Aspecte            | `break` 🛑 | `continue` ⏭️ |
|--------------------|------------|---------------|
| Què fa             | Atura completament el bucle | Salta només l’iteració actual |
| Quan s’usa         | Quan ja tenim el resultat i no cal seguir | Quan volem ignorar un cas concret però continuar |
| Benefici           | Estalvia temps i recursos | Simplifica condicions |
| Risc               | Pot fer codi confús si s’abusa | Pot amagar errors i fer el codi menys clar |
