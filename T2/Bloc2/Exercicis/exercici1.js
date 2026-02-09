// - Captura l’esdeveniment *submit*.
// - Fes servir `event.preventDefault()`.
// - Mostra per consola els valors introduïts a `nom`, `edat`, `email` i `telefon`.

document.addEventListener('DOMContentLoaded', e => {
    const form = document.getElementById("form-basic");
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fdata = new FormData(event.target);
        const data = {
            nom: fdata.get('nom'),
            edat: fdata.get('edat'),
            email: fdata.get('email'),
            telefon: fdata.get('telefon')
        }

        console.log(`data.nom: ${data.nom}`);
        console.log(`data.edat: ${data.edat}`);
        console.log(`data.email: ${data.email}`);
        console.log(`data.telefon: ${data.telefon}`);
    });
});