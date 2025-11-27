## 1. Què és React i per què l’utilitzem?
React és una biblioteca JavaScript per construir interfícies d’usuari basades en **components**.

Avantatges principals:
- Permet dividir la UI en peces reutilitzables.
- Facilita la gestió d’estat i la reactivitat.
- Ajuda a organitzar projectes més complexos.
- És molt utilitzat en el sector professional.

Aquest bloc introdueix React per preparar l’alumnat pel projecte final del mòdul.

---

## 2. Crear un projecte React amb Vite
Vite permet crear projectes React de dues maneres: **amb plantilla directa** o **amb menú interactiu**.

### 🔹 Opció A — Crear projecte amb menú interactiu (també vàlid)
Si no especifiques plantilla, Vite et mostrarà un menú perquè triïs framework i variant:
```bash
npm create vite@latest
```
El menú et demanarà:
1. **Nom del projecte** (si no el passes com a argument)
2. **Framework** → tria: `React`
3. **Variant** → tria:
   - **`JavaScript` (React JS)** (Opció recomanada)
   - `JavaScript-SWC` (React JS amb SWC, més ràpid)
   - `TypeScript` (React TypeScript)
   - Altres (les veurem més endavant)
4. **Rolldown**: (No, per defecte)
5. **Instal·lació i arrancada automàtica**: Instal·la dependències i arrenca el servidor de desenvolupament  

### 🔹 Opció B — Crear projecte amb plantilla (recomanat per evitar errors)
```bash
npm create vite@latest my-app -- --template react
```
Aquesta opció demanarà les opcions 4 i 5 de l'opció A de forma interactiva de totes maneres. 


> 💡 Tant l’opció A com l’opció B activen el suport per JSX automàticament. No cal configurar Babel manualment.

### Crear projecte 

```bash
npm create vite@latest 
```
Segueix el menu interactiu i si has dit que no volies l'opció 5, hauràs de fer:
```
cd <nom-del-projecte>
npm install
npm run dev
```

Vite és una eina de desenvolupament ràpida, senzilla i ideal per introduir React.

### Fitxers rellevants
- `package.json` — dependències i scripts
- `vite.config.js` — configuració del projecte
- `index.html` — punt inicial on React injecta l’aplicació
- `src/` — codi principal

---