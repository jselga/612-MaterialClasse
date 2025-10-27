const obj = {
    nom: 'Nicolas',
};
function extendre(user){
    const methods = {
        login(){
          console.log(`logged in as user ${this.nom}`);  
    },
        logout(){
            console.log(`logged out as user ${this.nom}`);
        }
};
    return Object.assign(user,methods);

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