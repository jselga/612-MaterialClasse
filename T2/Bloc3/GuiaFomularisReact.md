# De formularis clàssics en React a React Hook Form + Zod

Aquesta guia recull **tot el procés d’evolució** fet a classe, des dels formularis controlats clàssics en React fins a la integració amb **React Hook Form (RHF)**, **Zod** i el seu **resolver**.

L'objectiu d'aquest guia juntament amb els *commits* de la branca **example-forms** és poder entendre de manera **ordenada i progressiva** per què fem cada pas, què millorem i com es fa.

Per seguir el pas a pas ens podem situar a la branca **example-forms** i seguir els commits etiquetats com:  
#### Formularis clàssics
- FormsInit
- FormsBase-1
- FormsBase-2
- FormsBase-3 


#### Formularis amb llibreries
- ReactHookForms
- ZodValidation
- RHForms&Zod



---

## Índex
- [De formularis clàssics en React a React Hook Form + Zod](#de-formularis-clàssics-en-react-a-react-hook-form--zod)
      - [Formularis clàssics](#formularis-clàssics)
  - [Índex](#índex)
  - [Formularis controlats en React](#formularis-controlats-en-react)
    - [Exemple reduït](#exemple-reduït)
  - [Limitacions del model clàssic](#limitacions-del-model-clàssic)
    - [❌ Massa `useState`](#-massa-usestate)
    - [❌ Validacions disperses](#-validacions-disperses)
    - [❌ Dificultat per reutilitzar validacions](#-dificultat-per-reutilitzar-validacions)
    - [❌ Rendiment](#-rendiment)
  - [Introducció a React Hook Form](#introducció-a-react-hook-form)
    - [Exemple mínim](#exemple-mínim)
  - [Migració del formulari clàssic a RHF](#migració-del-formulari-clàssic-a-rhf)
  - [Validació amb Zod](#validació-amb-zod)
    - [Exemple d’esquema](#exemple-desquema)
  - [Integració Zod + RHF mitjançant resolvers](#integració-zod--rhf-mitjançant-resolvers)
    - [Error handling automàtic](#error-handling-automàtic)
  - [Com queda un formulari final](#com-queda-un-formulari-final)
  - [Seqüència didàctica i beneficis](#seqüència-didàctica-i-beneficis)
    - [A classe:](#a-classe)
    - [Beneficis:](#beneficis)
  - [Errors comuns i com depurar](#errors-comuns-i-com-depurar)
    - [❌ `errors` sempre està buit](#-errors-sempre-està-buit)
    - [❌ No valida números](#-no-valida-números)
    - [❌ Res no funciona després d’instal·lar dependències](#-res-no-funciona-després-dinstallar-dependències)
  - [Recursos](#recursos)

---

## Formularis controlats en React
En React, la primera manera que aprenem de gestionar formularis és amb **components controlats**.

Això implica:
- Un estat (`useState`) per cada camp, o un objecte gegant.
- Un `onChange` que actualitza l'estat.
- Un `onSubmit` que llegeix l’estat i el valida manualment.

### Exemple reduït
```jsx
function Form() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    if (!name || !lastname) alert("Falten camps");
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={lastname} onChange={e => setLastname(e.target.value)} />
      <button>Enviar</button>
    </form>
  );
}
```

Això funciona, però...

---

## Limitacions del model clàssic
A mesura que el formulari creix:

### ❌ Massa `useState`
Cada camp necessita estat → codi repetitiu.

### ❌ Validacions disperses
Les validacions solen estar:
- al `onSubmit`,
- o en diversos `if` dispersos.

### ❌ Dificultat per reutilitzar validacions
Si vols validar en:
- formulari,
- API backend,
- altres components,

has de duplicar codi.

### ❌ Rendiment
Cada `onChange` re-renderitza el component.

Per això introduïm **React Hook Form**.

---

## Introducció a React Hook Form
React Hook Form és una llibreria que:
- gestiona els inputs sense `useState` per cada camp,
- evita re-renders innecessaris,
- exposa les funcions `register`, `handleSubmit`, `errors`, etc.

Instal·lació:
```bash
npm install react-hook-form
```

### Exemple mínim
```jsx
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <button>Enviar</button>
    </form>
  );
}
```

---

## Migració del formulari clàssic a RHF
Per migrar un formulari clàssic:

1. **Eliminar `useState` dels camps.**
2. Afegir:
   ```js
   const { register, handleSubmit, formState: { errors } } = useForm();
   ```
3. Substituir `value` + `onChange` per:
   ```jsx
   <input {...register('name')} />
   ```
4. Canviar `onSubmit` a:
   ```jsx
   <form onSubmit={handleSubmit(onSubmit)}>
   ```

De moment, la validació encara és manual.

Pròxim pas: **Zod**.

---

## Validació amb Zod
Zod és una llibreria per definir **esquemes de validació** de manera declarativa.

Instal·lació:
```bash
npm install zod
```

### Exemple d’esquema
```js
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "El nom és obligatori"),
  lastname: z.string().min(1, "El cognom és obligatori"),
  email: z.string().email().optional(),
});
```

Aquest esquema és reutilitzable a:
- formulari React,
- APIs backend,
- validacions del servidor.

---

## Integració Zod + RHF mitjançant resolvers
Per fer que **React Hook Form utilitzi Zod automàticament**, instal·lem resolvers:

```bash
npm install @hookform/resolvers
```

I llavors fem:

```jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../schemas/user";

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(userSchema)
});
```

Ara qualsevol input registrat es valida segons l’esquema Zod.

### Error handling automàtic
```jsx
{errors.name && <p>{errors.name.message}</p>}
```

Això ja ho tens aplicat al teu `Form.jsx` actual.

---

## Com queda un formulari final
Exemple complet basat en el teu projecte:

```jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "./schemas/user";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(userSchema) });

  function onSubmit(data) {
    console.log("Validat:", data);
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nom</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Cognom</label>
        <input {...register("lastname")} />
        {errors.lastname && <p>{errors.lastname.message}</p>}
      </div>

      <button>Enviar</button>
    </form>
  );
}
```

A partir d’aquí, només cal que afegeixis camps al `userSchema` per obtenir validacions automàtiques.

---

## Seqüència a classe:
1. **Mostrar formulari bàsic** amb `useState`.
2. Identificar problemes: repetició de codi + validació manual.
3. Introduir React Hook Form i adaptar codi.
4. Introduir Zod i validació mitjançant *schema*.
5. Integrar Zod + RHF amb resolvers.


### Beneficis:
- Menys codi repetit.
- Validacions reutilitzables.
- Millor rendiment.
- Codi més net i mantenible.
### Després de classe
6. Afegir nous camps: email, edat, etc.
7. Afegir i comprovar validacions.
8. [Tutorial RHF](https://react-hook-form.com/get-started) 
9. Exercicis de consolidació: Refer els exercicis 1-3 de formularis de la col·lecció anterior 
 
---

## Errors comuns i com depurar
### ❌ `errors` sempre està buit
Solució: assegura’t que:
```js
resolver: zodResolver(userSchema)
```

### ❌ No valida números
Recorda que tots els inputs donen **strings**.

Exemple:
```js
age: z.string().refine(v => !isNaN(Number(v)))
```

### ❌ Res no funciona després d’instal·lar dependències
Revisa:
```bash
npm install
npm run dev
```

---

## Recursos
- React Hook Form: https://react-hook-form.com
- Zod: https://zod.dev
- Repositori oficial RHF/Zod: https://github.com/react-hook-form/resolvers
- MDN formularis HTML (per als fonaments): https://developer.mozilla.org/en-US/docs/Learn/Forms

---


