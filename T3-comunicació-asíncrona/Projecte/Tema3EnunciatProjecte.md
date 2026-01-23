# M0612: Desenvolupament en entorn Client
## Tema 3: Comunicació Asíncrona client-servidor i llibreries

## Frontend CRUD amb comunicació asíncrona


## Què has de fer

Has de desenvolupar una **aplicació frontend** que consumeixi una **API REST** i permeti fer totes les operacions **CRUD** (crear, llegir, actualitzar i eliminar dades) utilitzant **peticions asíncrones**.

El projecte es realitzarà **al teu ritme**, amb un total de **12 hores lectives** de classe.

---

## Resultats d'aprenentatge:

- RA5: Desenvolupa aplicacions web interactives integrant mecanismes de maneig

  d'esdeveniments.
- RA6: Desenvolupa aplicacions web analitzant i aplicant les característiques del model

  d'objectes del document.
- RA7: Desenvolupa aplicacions web dinàmiques, reconeixent i aplicant mecanismes de

  comunicació asíncrona entre client i servidor.



## Tecnologies



- **Framework frontend**: React
- **Peticions asíncrones**: Fetch API o Axios
- **Estilització**: CSS, Bootstrap, TailwindCSS o similar

Evitar:

- XMLHttpRequest (XHR)
- Callback Hell

---

## API de treball

Treballarem amb la següent API:

[https://github.com/jselga/APIRestFullZelda](https://github.com/jselga/APIRestFullZelda)

Aquesta API ja inclou:

- Base de dades
- Endpoints CRUD
- Documentació d’instal·lació i ús

Has de seguir **la documentació del repositori** per posar l’API en funcionament abans de començar el frontend.

Els principals endpoints són:

- /materials
- /monsters



---

# Desenvolupament del projecte

El projecte s’organitza en **fases**. No totes les fases tenen el mateix pes, però totes són necessàries per completar el projecte.

---

## Fase 0 – Preparació

- Posar en funcionament l’API seguint la documentació
- Provar els endpoints a [Swagger](http\://localhost:3001/api-docs) o aplicacions Postman, ThunderClient 
- Entendre quines dades retorna l’API

No cal modificar el backend.

---

## Fase 1 – Configuració del projecte

- Crear el projecte amb React  
  Exemple:
  ``` 
  npm create vite@latest frontend-zelda 
  cd frontend-zelda
  npm install
  npm run dev
  ```

   

- Organitzar les carpetes del projecte
- Instal·lar la llibreria d'estil escollida:
  - [**https://getbootstrap.com/**](https://getbootstrap.com/)
  - [**https://tailwindcss.com/docs/installation/using-vite**](https://tailwindcss.com/docs/installation/using-vite)
  - RTFM

---

## Fase 2 – Connexió amb l’API

- Fer peticions asíncrones amb Fetch o Axios
- Centralitzar les crides a l’API en un fitxer o servei
- Gestionar errors bàsics de les peticions

---

## Fase 3 – Llistat d’elements

- Mostrar una llista d’elements obtinguts de l’API
- Mostrar informació rellevant (nom, tipus, etc.)
- Mostrar una miniatura de la imatge

La llista s’ha d’actualitzar quan es fan canvis (afegir, editar o eliminar).

---

## Fase 4 – Vista de detall

- Poder seleccionar un element de la llista
- Mostrar el detall complet de l’element
- Mostrar la imatge en gran
- Afegir opcions per editar o eliminar

Es pot fer amb una vista nova o amb una finestra modal.

---

## Fase 5 – Formulari d’alta i edició

- Crear un formulari per afegir elements
- Reutilitzar el mateix formulari per editar
- Validar els camps obligatoris
- Mostrar missatges d’error clars

---

## Fase 6 – Eliminació amb confirmació

- Mostrar un missatge de confirmació abans d’eliminar
- Eliminar l’element mitjançant una petició DELETE
- Actualitzar la llista sense recarregar la pàgina

---

## Fase 7 – Millores (opcional)

Aquestes millores no són obligatòries, però poden ajudar a millorar la nota:

- Indicador de càrrega (loading)
- Gestió d’errors més completa
- Missatges d’èxit o error
- Cerca o filtres
- Millores visuals i d’accessibilitat
- Reutilització de components

---

## Documentació

El projecte ha d’incloure un **README** amb:

- Descripció breu del projecte
- Tecnologies utilitzades
- Com executar el projecte

---

## Notes importants

- El projecte es desenvoluparà durant **12 hores lectives**
- Cada alumne pot avançar al seu ritme
- El codi ha de ser clar i ordenat
- Davant de dubtes, pregunta abans de fer canvis importants

