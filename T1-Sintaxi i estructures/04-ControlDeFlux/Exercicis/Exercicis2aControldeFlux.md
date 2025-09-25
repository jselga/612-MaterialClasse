# Exercicis - Control de Flux

## Exercici 1 Mida màxima de càrrega de fitxers
El nostre sistema només acceptarà aquelles imatges que ocupin menys de 5 MB. Hem de determinar si totes les imatges que ha passat l'usuari són menors o iguals al  
mida màxima permesa pel nostre servidor. Si això no és així, li notificarem a l'usuari que el 
fitxer ha excedit la mida màxima.

### Entrades:
Definirem 2 variables, una per a la mida del fitxer i una altra per la mida màxima permesa del nostre sistema.****
### Sortides:
Imprimim el text: "El fitxer compleix amb la mida permesa." si ocupa igual o menys de 5 
MB, o : "El fitxer ha excedit la mida màxima permesa." si ocupa més que aquesta mida.


## Exercici 2  Contrasenya més segura.

Treballarem en el registre dels nostres usuaris a la nostra aplicació, el que necessitarem serà no 
permetre que creïn el compte amb una contrasenya insegura, per la qual cosa, si la contrasenya té 
menys de 12 caràcters, no els permetrem crear el seu compte. 
### Entrades:
Crearem una variable que contindrà la contrasenya amb una longitud inferior a 12 caràcters.
Una altra variable amb una constrasenya amb el nombre de caràcters mínims que demanarem als usuaris.
Finalment, farem l'avaluació i imprimirem el missatge corresponent a la consola.
### Sortides:
En realitzar la comparació hem de veure a la consola el missatge depenent si la longitud de la 
contrasenya és menor, o igual o més gran que la longitud definida.

## Exercici 3 Bullidora elèctrica.
Hauràs de generar el sistema de control d'una bullidora elèctrica. 
Aquest exercici tindrà diversos passos amb diverses avaluacions.  
Aquest codi determina si l'aigua està bullint. La temperatura d'apagada serà quan arribi als 100 graus. A més, no s'engegarà si no té aigua.  
Primer verificarem que la bullidora tingui aigua. Si la bullidora no té aigua, imprimim un missatge informant que no té aigua, i no es pot encendre. Si té aigua, canviarem l'estat d'encesa a true, i imprimirem un missatge que hem encès la bullidora.
Seguidament, mitjançant un *loop*, imprimirem el valor de la temperatura i sumarem a 
cada iteració 25 a aquesta.
Quan s'hagi assolit la temperatura màxima, canviarem l'estat d'encesa a false i imprimirem que la bullidora té aigua calenta i el valor actual de la temperatura.
### Entrades: 
Hem de definir 3 variables: 
- Una per saber si la bullidora té aigua, la qual serà un boolean que tindrà valor inicial *true*
- Una que serà si la bullidora està encesa, que que tindrà valor inicial *false*
- Una altra que serà la temperatura que tindrà valor inicial 0.
### Sortides:
Haurem de veure un missatge per cadascuna de les avaluacions:
- La bullidora està encesa
- Escalfant aigua... la temperatura és de: 0 graus
- Escalfant aigua... la temperatura és de: 25 graus
- Escalfant aigua... la temperatura és de: 50 graus
- Escalfant aigua... la temperatura és de: 75 graus
- La temperatura de la bullidora ha arribat al màxim, la bullidora s'apagarà.
- Ara tens aigua calenta a 100 graus
Però si no es té aigua a la bullidora, només haurem de veure un missatge:
- La bullidora no té aigua, no es pot encendre

## Exercici 4 Bateria portàtil.
Com funciona?
Tenim una bateria portàtil que pot carregar múltiples dispositius. Gràcies als algorismes 
programats en aquesta bateria, aquesta pot proporcionar diferents potències. Per exemple, si connectem un 
telèfon mòbil, proporcionarà 25 watts, si connectem un portàtil, 65 watts, si 
connectem un llum USB només proporcionarà 5 watts,i si connectem algun altre 
dispositiu la pontència serà 0.   
Has de generar el codi de tal manera que depenent de quin dispositiu sigui, imprimirem a la consola la potència lliurada corresponent.
### Entrades: 
Tindrem una variable anomenada `dispositiu` que serà el que avaluarem, i una altra que es dirà 
`potencia` la qual no iniciarem amb cap valor.
### Sortides:
Haurem de determinar la potència subministrada per la bateria i la mostrarem per consola.


## Exercici 5 Molí de cafè.
Als molins de cafè normalment podem fer una selecció de quantes tasses 
necessitarem, per això primer verificarem que l'usuari tingui el contenidor de cafè 
mòlt, verificarem quina ha estat la seva selecció i depenent d'això determinarem quan temps ha de funcionar el molí per lliurar a l'usuari la quantitat correcta.
### Entrades: 
Anem a definir 3 variables:
- Una per saber si el molí té el contenidor.
- El nombre de tasses que necessitem.
- Una constant que tindrà el temps de segons en què ha de funcionar el molí per tassa.
### Sortides:
Si el molí no té el contenidor, haurem d'imprimir el missatge d'error que ens dirà que no es 
pot encendre el contenidor. Addicionalment, si el nombre de tasses és menor o igual a 0, tindrem 
imprimir que no s'ha seleccionat un nombre de tasses per realitzar el procés.
Per contra, imprimirem que s'està iniciant el procés, per posteriorment imprimir el 
nombre de tasses i temps que prendrà.


## Exercici 6 Prèstecs
Treballem en un banc que ofereix préstecs a molts clients, alguns tenen un compte amb nosaltres.
Tindrem un llistat d'usuaris dels quals haurem de determinar la taxa d'interès que els oferirem, basat en la puntuació.
Primer haurem de determinar si l'usuari té un compte al nostre banc, després haurem de determinar la taxa d'interès depenent de la puntuació de crèdit.  
Considerant que als nostres clients els podrem oferir un descompte del 10% en el préstec, 
sempre que la taxa no sigui menor a 15%.
Haurem de determinar , si podem donar-los un préstec o no, i de quant serà la seva taxa d'interès si està aprovat.
### Entrades: 
Definirem 3 variables:
- Una per saber si el sol·licitant té compte.
- Una altra per a la puntuació de crèdit del sol·licitant.
- I una taxa d'interès, que estarà buida.
  
Per a l'avaluació, tindrem 3 taxes:
- 10% per a puntuacions de 750 o majors 
- 15% per a puntuacions d'entre 749 a 700
-  i 20% per a puntuacions de 650 a 699.
-   Si la puntuació és menor de 650, no podrem oferir-los un 
crèdit.
Finalment,per aquells que siguin clients i tinguin una taxa resultant igual o superior al 15% els hi podrem oferir un descompte addiconal del 10% sobre la taxa aplicada.
### Sortides:
Haurem d'imprimir a la consola quina serà la taxa d'interès si s'aprova.


## Exercici 7 Alimentador mascota 
Estem automatitzant un alimentador automàtic per a gossos i gats, per això haurem de determinar la quantitat de menjar que alliberarà l'alimentador depenent del seu pes i tipus de mascota
### Entrades: 
Tindrem una variable per al tipus de mascota, una altra per al pes, i una altra per a la quantitat de menjar.

Si és un gos, la quantitat de menjar es basa en el pes:
- Menys de 5 kg → 100g
- 5 – 9,99 kg → 200g
- 10 – 19,99 kg → 300g
- 20 kg o més → 400g   
  
Si és un gat, la quantitat de menjar és:
- Menys de 3 kg → 50g   
- 3 – 5,99 kg → 100g
- 6 kg o més → 150g
### Sortides:
En realitzar les validacions, haurem d'imprimir a la consola la quantitat de grams que tornarà 
l'alimentador depenent del tipus de mascota corresponent amb el pes.

## Bonus

Si has acabat els exercicis i vols praticar més, fes una versió on els missatges surtin utilitzant document.write o alert per veureu-ho en el navegador, pots nombrar els exercicis com Xnav.js, on X és el numero d'exercici.
També pots practicar amb prompt per demanar les entrades al navegador.  
<b> Recorda que aquests exercicis no seràn compatibles amb Nodejs



