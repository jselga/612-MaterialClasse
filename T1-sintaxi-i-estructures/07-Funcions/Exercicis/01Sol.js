const obj = {
    nom: 'Nicolas',
};
function Extendre(){
    this.login = ()=>{
        console.log(`logged in as user ${this.nom}`);
        
    }
    this.logout = ()=>{
        console.log(`logged out as user ${this.nom}`);
        
    }
}
Extendre.call(obj);

console.log(obj);
obj.login();
obj.logout();
//SORTIDA: 
// {
//   nom: 'Nicolas',
//   login: [Function (anonymous)],
//   logout: [Function (anonymous)]
// }
// logged in as user Nicolas
// logged out as user Nicolas