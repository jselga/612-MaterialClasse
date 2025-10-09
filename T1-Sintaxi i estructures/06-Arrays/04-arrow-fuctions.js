// function hola(){
//     return 'Hola món';
// }
// Fat arrow functions Funció anònima, s'ha d'assignar a una variable o constant
// const hola = ()=>{
//  return 'Hola món';
// }

//Amb return implícit, només una sola línia
// const hola = ()=> 'Hola món';


const hola = (missatge)=> missatge +' Hola món';
// Si tenim només un paràmetre es poden ometre els parèntesis
// const hola = missatge=> missatge +' Hola món';
// const resultat = hola();
const resultat = hola('chanchito feliz');
console.log(resultat);
