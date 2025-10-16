const obj = {
    nom: 'Nicolas',
};
function extendre(user){

};
const usuari = extendre(obj);
console.log(usuari);
usuari.login();

//SORTIDA: 
// {
//   nom: 'Nicolas',
//   login: [Function (anonymous)],
//   logout: [Function (anonymous)]
// }
// logged in as user Nicolas
// logged out as user Nicolas