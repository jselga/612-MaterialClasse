# Exercici Previa al Projecte: Consum d’APIs amb Fetch o Axios

Objectiu: practicar la comunicació asíncrona en React mitjançant el consum d’una API, gestionant correctament els estats loading, error i data.

L’exercici s’ha de fer amb:

React (amb el gestor Vite)

Components funcionals

useEffect

Fetch o Axios (pots triar la que vulguis)

## 1. Elecció de l’API

Escull una API pública relacionada amb una temàtica que t’interessi.

Pots fer servir les APIs següents:  
- [Repositori del Projecte](https://github.com/jselga/APIRestFullZelda): Segueix les instruccions d'instal·lació per tenir-la disponible al teu sistema local
- [Hyrule Compendium API](https://botw-compendium.herokuapp.com/): L'API pública en la que està basada la del projecte
- buscar-ne una altra (documenta-la breument)

> ⚠️ L’API ha de permetre com a mínim peticions GET per tots els elements i per un en concret

## 2. Llistat d’elements (GET)

Implementa un component que faci una petició GET a l’API i mostri una llista d’elements

### Requisits

- mostrar un estat Loading… mentre arriba la resposta

- mostrar un missatge d’error si la petició falla

- renderitzar una llista o taula d'elements
- usar key correctament

## 3.  Detall d’un element

Fes que cada element de la llista sigui seleccionable.

Quan l’usuari seleccioni un element mostra informació ampliada.  
Opcions: 
- un segon component
- un bloc sota la llista
- o una vista de detall simple


## 4. Hook personalitzat

Extreu la lògica asíncrona a un custom hook (useFetch o useAxios).

### Requisits
El hook ha de retornar com a mínim:

- data
- loading
- error

> No és necessari implementar POST / PUT / DELETE en aquest punt

## 5. Fetch o Axios

Has d’escollir una sola opció:

- fetch

- axios

I justificar breument per què has triat aquesta opció quins avantatges li veus per al projecte final. 

## 6. Documentació mínima
Inclou un petit apartat (README o comentaris) on indiquis:

- API utilitzada

- endpoint(s)

- eina escollida (Fetch o Axios)

-  dificultats trobades
## 7. (Opcional) Ampliació
Si vols una posada a punt abans del projecte pots:
 - Provar altres peticions com POST / PUT / DELETE
 - Refactoritzar el custom hook per poder fer totes les peticions en un sol hook
 - Provar l'opció fetch/axios no escollida prèviament per acabar de decidir quina faràs al projecte
  
