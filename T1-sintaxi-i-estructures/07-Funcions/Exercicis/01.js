const obj = {
    nom: 'Nicolas',
};
function Extendre() {

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