# 📎 Annex – Tips finals i on buscar ajuda (abans del lliurament)

Aquest annex serveix com a **guia ràpida** per orientar-vos en l’última fase del projecte. No és una llista de requisits nous, sinó **consells pràctics** per saber **què revisar** i **on documentar-vos** si alguna part no acaba de funcionar.

Podeu veure un exemple funcional de l'aplicació a [https://hub.docker.com/r/jselga/taskmanager-demo](https://hub.docker.com/r/jselga/taskmanager-demo)

```
docker run -dp 8000:80 jselga/taskmanager-demo
```

---

## 🧩 Formulari (React Hook Form)

Si el formulari no funciona com esperàveu:

- Reviseu **els exercicis de classe (1–3)** sobre formularis.
- Comproveu:
  - que els `id` i `name` dels camps coincideixen
  - que `register` està ben aplicat
  - que els errors es mostren amb `formState.errors`
- Feu servir `console.log(data)` al `onSubmit` per veure què s’està capturant realment.

👉 Abans de buscar fora, **torneu a mirar els exemples fets a classe**.

---

## 🧪 Validacions (Zod)

Si una validació no salta o salta quan no toca:

- Reviseu el `schema` de Zod:
  - tipus (`string`, `enum`, `boolean`, `date`)
  - longitud mínima o màxima
- Pareu atenció a:
  - dates (`z.coerce.date()`)
  - valors per defecte dels `select`

👉 Aquesta part **no s’ha fet tota pas a pas a classe**, per tant:

> documentar-se forma part de la pràctica.

---

## 🗂️ Llista i taula de tasques

Si no sabeu com mostrar les dades:

- Reviseu els exemples de classe sobre:
  - arrays
  - `.map()`
- Primer feu:
  - una **llista senzilla**
- Després:
  - una **taula** (`<table>`)

👉 No intenteu fer la taula directament si abans no enteneu bé la llista.

---

## 🔄 localStorage i useEffect

Si voleu persistir dades:

- Documenteu-vos bé sobre:
  - `useEffect`
  - quan s’executa i per què
- Recordeu:
  - `localStorage` només guarda **strings**
  - cal fer `JSON.stringify` i `JSON.parse`

👉 Aquest punt **no s’ha treballat  a classe**: s’espera iniciativa i prova-error.

---

## 🧠 Ordre recomanat si us bloquegeu

Si no sabeu per on seguir, aquest ordre sol funcionar:

1. Formulari validat
2. `console.log(data)`
3. Guardar dades a l'estat (`useState`) i mostrar dades per consola
4. Mostrar llista amb valors precarregats (seeders)
5. Marcar com a feta
6. Eliminar
7. Vincular formulari amb llista
8. Persistència amb `localStorage`
9. Altres Extres 

---

## 📚 Fonts recomanades

Millor documentar-se aquí que copiar codi sense entendre’l:

- Documentació oficial de **React**, **React Hook Form** i **Zod**
- Exemples vistos a classe
- MDN (arrays, dates, localStorage)
- StackOverflow (llegint la pregunta i la resposta, no només el codi)

---

## ⚠️ Recordatori final

> Copiar fragments sense entendre’ls **es nota**.

En canvi:

- provar
- equivocar-se
- i explicar què no ha funcionat (al README)

👉 **es valora positivament**.

---

**Aquest annex és orientatiu i no substitueix l’enunciat principal.**

