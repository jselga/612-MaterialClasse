// 1. this fa referencia a un objecte si estem en un objecte
// 2. this fa referencia al objecte window o global (node) si estem en una funció
// 3. new fa referencia a l'objecte que serà creat            
 
// Cas 1:
// const user = {
//     name: 'Nicolas',
//     login(){
//         console.log(this);
//     }
// };
// user.logout = function (){
//     console.log(this);
    
// }
// // user.login();
// user.logout();
// Cas 2:
// function log(){
//     console.log(this);
    
// }
// log();

function Log(missatge){
    this.missatge = missatge;
    console.log(this);
    
}
 
/** Quan fem servir la paraula reservada de this
 *  es crea un objecte literal
 *  es vincula aquest objecte a this
 *  es vincula al prototip
 *  si no retorna res, retorna this
 */
const l = new Log('Hola')