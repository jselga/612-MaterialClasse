// const usuari = {
//     nom: 'Chanchito',
//     cognom: 'Feliz',
//     nomComplet() {
//         return `${usuari.nom} ${usuari.cognom}`;
//     }
// };
// console.log(usuari.nomComplet());
const usuari = {
    nom: 'Chanchito',
    cognom: 'Feliz',
    get nomComplet() {
        return `${usuari.nom} ${usuari.cognom}`;
    },
    set nomComplet(valor){

        const [nom, cognom] = valor.split(' ');
        this.nom=nom;
        this.cognom =cognom;
    }
};
usuari.nomComplet ='Hola mundo';
console.log(usuari.nomComplet);
