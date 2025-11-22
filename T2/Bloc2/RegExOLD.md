# Resum sobre Expressions Regulars (RegEx)

Les **expressions regulars** (també anomenades *regex* o *regexp*) són patrons que s'utilitzen per analitzar cadenes de caràcters. Són una eina poderosa per a la coincidència de patrons i la manipulació de text.

## Origen i Propòsit

El concepte d'expressió regular sorgeix l'any 1951 i es va popularitzar principalment a la dècada dels 60 per la seva capacitat d'anàlisi en els compiladors.

Les expressions regulars serveixen per:
1. **Validar** si un text (com ara un correu electrònic, un número de telèfon, una URL o un compte bancari) compleix uns criteris específics.
2. **Trobar** coincidències dins de cadenes de text.
3. **Reemplaçar** coincidències.
4. **Comprovar** que no hi hagi alguna cosa concreta en un text.

## Naturalesa i Comprensió

Les expressions regulars són un concepte comú a tots els llenguatges de programació. El patró o la fórmula de caràcters que defineix l'expressió regular és gairebé idèntica a tots els llenguatges.

A primera vista, les expressions regulars poden semblar complexes, representant una fórmula amb símbols que pot intimidar el programador. No obstant això, la clau és entendre la seva lògica i no memoritzar-les. Si algú no les explica, pot ser difícil comprendre la lògica darrere de la combinació de caràcters.

## Estructures Bàsiques de RegEx

Una expressió regular és una seqüència de caràcters. Un patró pot consistir en caràcters simples (que coincideixen amb seqüències exactes, com `/abc/`) o una combinació de caràcters simples i especials (metacaràcters) que proporcionen flexibilitat.

### Metacaràcters i Símbols Comuns

| Símbol/Caràcter | Nom | Descripció | Exemple | Font(s) |
| :--- | :--- | :--- | :--- | :--- |
| **`[`...`]`** | Conjunts i Rangos | Coincideix amb qualsevol caràcter dins del conjunt. Es poden especificar rangs (ex: `[a-z]` per lletres minúscules). | `[aeiou]` (qualsevol vocal) | |
| **`[^`...`]`** | Negació | Coincideix amb qualsevol caràcter que NO estigui dins del rang o conjunt. | `[^0-9]` (qualsevol cosa que no sigui un dígit) | |
| **`.`** | Punt | Coincideix amb qualsevol caràcter únic (excepte caràcters de nova línia, per defecte). | `a.b` (coincideix amb `acb`, `aXb`) | |
| **`|`** | Alternació | Funció OR, permet coincidir el patró A o el patró B. | `A|B` | |
| **`\`** | Escapament | S'usa per tractar un caràcter especial (metacaràcter) com un caràcter literal (ex: `\.` busca un punt físic). | `\$` (busca el símbol de dòlar literalment) | |
| **`()`** | Grups | S'usa per agrupar parts del patró. Per defecte, són **grups de captura** (per extreure parts de la coincidència). | `(\d+)` (captura un o més dígits) | |
| **`?:`** | No-Captura | S'afegeix al principi d'un grup per agrupar sense capturar la subcadena coincidida (ex: `(?:pattern)`). | - | |

### Ancoratges (Anchors)

Els ancoratges no coincideixen amb caràcters en si mateixos, sinó que indiquen una posició dins la cadena:

| Símbol | Descripció | Font(s) |
| :--- | :--- | :--- |
| **`^`** | Principi de la cadena o de la línia (si s'usa el modificador multilínia `m`). | |
| **`$`** | Final de la cadena o de la línia (si s'usa el modificador multilínia `m`). | |
| **`\b`** | Límits de paraula. | |

### Quantificadors

Els quantificadors especifiquen la quantitat de caràcters que han de coincidir:

| Símbol | Descripció | Equivalència | Font(s) |
| :--- | :--- | :--- | :--- |
| **`*`** | Zero o més ocurrències. | `{0,}` | |
| **`+`** | Una o més ocurrències. | `{1,}` | |
| **`?`** | Zero o una ocurrència. | `{0,1}` | |
| **`{n}`** | Exactament *n* ocurrències. | - | |
| **`{n,}`** | Almenys *n* ocurrències. | - | |
| **`{n,m}`** | Entre *n* i *m* ocurrències. | - | |

**Quantificadors Ambiciosos (Greedy) vs. Perezosos (Lazy):**
Per defecte, els quantificadors operen en mode **ambiciós** (greedy), intentant coincidir tants caràcters com sigui possible. Per activar el mode **perezós** (lazy), que repeteix el mínim de vegades, s'afegeix un signe d'interrogació després del quantificador (ex: `*?`, `+?`).

### Classes de Caràcters Predefinides (Shorthands)

| Símbol | Descripció | Equivalent a | Classe Inversa | Font(s) |
| :--- | :--- | :--- | :--- | :--- |
| **`\d`** | Dígits. | `` | `\D` (no-dígits) | |
| **`\w`** | Caràcters de paraula (lletres, números o guió baix). | `[a-zA-Z0-9_]` | `\W` (no-paraules) | |
| **`\s`** | Caràcters d'espai en blanc (espais, tabulacions, noves línies). | - | `\S` (no-espais) | |

## Implementació i Mètodes (Exemples en JavaScript)

Tot i que els patrons són generals, la manera de crear i utilitzar regex varia. Per exemple, en Python, cal importar el mòdul `re` i anteposar una `r` a la cadena de l'expressió regular.

En **JavaScript**, es poden crear expressions regulars usant una notació literal (entre barres `/patron/`) o utilitzant la funció `RegExp` (constructor).

| Mètode JS | Objectiu | Argument Global (g) | Descripció | Font(s) |
| :--- | :--- | :--- | :--- | :--- |
| `regex.test(cadena)` | Verifica si hi ha una coincidència. | No. | Retorna `true` o `false`. | |
| `regex.exec(cadena)` | Busca una coincidència. | No. | Retorna un array amb detalls (text, índex). | |
| `cadena.match(regex)` | Busca ocurrències. | Sí. | Retorna la primera coincidència. Amb `g`, retorna totes les coincidències. | |
| `cadena.search(regex)` | Busca un patró. | No. | Retorna l'índex de la primera ocurrència, o `-1`. | |
| `cadena.replace(regex, reemplaçament)` | Reemplaça la primera ocurrència. | Sí. | Amb `g`, reemplaça totes les ocurrències. | |
| `cadena.replaceAll(regex, reemplaçament)` | Reemplaça totes les ocurrències. | No necessari. | Reemplaça totes les ocurrències per defecte. | |

### Arguments (Flags) en JavaScript

Els arguments o *flags* modifiquen el comportament de la coincidència:

*   **`i` (Ignore):** Ignora la distinció entre majúscules i minúscules.
*   **`g` (Global):** Troba totes les coincidències dins de la cadena, en lloc d'aturar-se després de la primera.
*   **`m` (Multiline):** Habilita que els ancoratges `^` i `$` coincideixin amb l'inici i final de línies individuals dins d'una cadena multilínia.
*   **`u` (Unicode):** Gestiona correctament els caràcters Unicode, especialment parells substituts.

## Funcionalitats Avançades

### Afirmacions (Lookarounds)
Permeten coincidir un patró basant-se en el que el segueix (anticipació) o el que el precedeix (retrospectiva), sense incloure el patró condicionant en la coincidència.

*   **Anticipació Positiva:** `X(?=Y)`: Coincideix X si va seguit de Y.
*   **Anticipació Negativa:** `X(?!Y)`: Coincideix X si NO va seguit de Y.
*   **Retrospectiva Positiva:** `(?<=Y)X`: Coincideix X si va precedit de Y.
*   **Retrospectiva Negativa:** `(?<!Y)X`: Coincideix X si NO va precedit de Y.

## Consells i Eines

1. **Entendre, no Memoritzar:** L'objectiu no és memoritzar els patrons, sinó entendre la lògica de la seva construcció.
2. **Utilitzar Eines:** És recomanable utilitzar eines com Google, GitHub Copilot o ChatGPT per generar expressions regulars si es programa ràpidament, però és imprescindible entendre-les per poder-les llegir i modificar.
3. **RegEx 101:** Aquesta eina en línia permet inserir una expressió regular i la divideix per grups, explicant pas a pas què fa cada part.
4. **Dividir la Complexitat:** Les expressions regulars molt complexes es poden reduir a conjunts més petits o a subgrups. Cal pensar en unitats de 4, 5 o 6 caràcters que indiquen coses molt petites, i anar-les ajuntant.
5. **Proves i Optimització:** Sempre cal provar les expressions regulars amb diferents cadenes d'entrada i considerar optimitzar-les per al rendiment si els patrons són molt complexos.

***

**En analogia**, entendre les expressions regulars és com aprendre a llegir la partitura d'una orquestra. A primera vista, la partitura (la regex) sembla una combinació caòtica de símbols (quantificadors, metacaràcters). Però un cop aprenem el significat de cada símbol —les notes, els ritmes i els instruments—, podem desxifrar la melodia (el patró) completa, independentment de si hem escrit la peça nosaltres mateixos o si ens l'ha passat un altre músic.
