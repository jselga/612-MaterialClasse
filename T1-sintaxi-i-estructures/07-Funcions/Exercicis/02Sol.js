const obj = {
    nom: 'Nicolas',
};
function extendre(user){
    user.login = ()=>{
          console.log(`logged in as user ${user.nom}`);
    };
    user.logout = ()=>{
    console.log(`logged out as user ${user.nom}`);
    }; 
    return Object.assign(user);

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