# Exercicis – Fetch + DOM amb APIs públiques

> Objectiu: practicar **fetch** i **asincronia** integrant-los amb **manipulació bàsica del DOM**

API base:
- https://jsonplaceholder.typicode.com

> Els exercicis es fan amb **HTML + JS** i s’executen al navegador.

---

## Exercici 1 – GET i mostrar dades al DOM
Carrega una llista de posts i mostra’ls en una pàgina HTML.

- Endpoint: `/posts`
- Mostra per cada post:
  - títol
  - cos del missatge

Requisits:
- Crear els elements amb JavaScript (`createElement`)
- Afegir-los al DOM (`appendChild` o similar)

Objectiu:
- Connectar fetch amb manipulació del DOM

---

## Exercici 2 – Detall amb interacció
Permet que l’usuari seleccioni un post per veure’n el detall.

- Pots fer servir:
  - un botó
  - o un enllaç

Quan es cliqui:
- Fes un `GET /posts/{id}`
- Mostra el detall a la mateixa pàgina

Objectiu:
- Practicar esdeveniments (`addEventListener`)
- Treballar amb dades dinàmiques

---

## Exercici 3 – Formulari i POST
Afegeix un formulari HTML per crear un nou post.

- Camps:
  - títol
  - contingut

Quan s’enviï el formulari:
- Evita el comportament per defecte (`preventDefault`)
- Envia les dades amb `POST /posts`
- Mostra la resposta al DOM

Objectiu:
- Integrar formularis, fetch i asincronia

---

## Exercici 4 – Actualitzar dades (PATCH o PUT)
Permet modificar un post existent.

- Pots reutilitzar el formulari anterior
- Envia només un camp (`PATCH`) o tot el recurs (`PUT`)

Mostra al DOM:
- les dades abans
- les dades després

Objectiu:
- Entendre actualització de dades

---

## Exercici 5 – Eliminar un element (DELETE)
Afegeix un botó per eliminar un post.

Quan l’usuari confirmi:
- Fes un `DELETE /posts/{id}`
- Elimina l’element del DOM

Objectiu:
- Sincronitzar estat del servidor i del DOM

---
 ## Exercici 6 – Consulta a altres APIs públiques

 Busca una API pública. Pots triar una proporcionada a classe o buscar-ne una amb una temàtica que t'interessi.
 Com que la majoria només permeten fer `GET` fes el següent:
  - Llista un seguit d'elements (tots o una part)
  - Fes que cada element sigui seleccionable i mostri informació ampliada de l'element
  - Si l'API ho permet aplica un filtre.
  - Documenta en el mateix fitxer .JS com funciona l'API seleccionada destacant els *endpoints* que has fet servir. 



