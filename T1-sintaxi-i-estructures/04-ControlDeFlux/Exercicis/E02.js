// ## Exercici 2. Contrasenya més segura
// En el registre d’usuaris de la nostra aplicació, no permetrem crear un compte amb una contrasenya insegura. Si la contrasenya té menys de 12 caràcters, el compte no es podrà crear.

// ### Entrades
// - Una variable que contingui una contrasenya amb longitud inferior a 12 caràcters.  
// - Una altra variable amb el nombre mínim de caràcters requerits.  

// ### Sortides
// En realitzar la comparació, a la consola ha d’aparèixer el missatge corresponent segons si la longitud de la contrasenya és menor, igual o superior a la definida.  

let password = "admin";
const min = 12;

if (password.length < min) {
    console.log("La contrasenya ha de ser més llarga.");
} else if (password.length == min) {
    console.log("La contrasenya té exactament el mínim de caràcters necessaris.");
} else {
    console.log("La contrasenya és segura.");
}