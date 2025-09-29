const punt ={
    x: 10,
    y: 15,
};
// Assingem una propietat nova a l'objecte punt
Object.assign(punt,{z:20});
console.log(punt);
// Copiem l'objecte a un nou objecte
let clonePunt = Object.assign({},punt);
console.log(clonePunt);

// Fem copia però modificant les propietats que ja existeixen i afegint-ne de noves
let clonePunt2 = Object.assign({},punt,{t:21,x:1});
console.log(clonePunt2);

// Spread operator (forma moderna)
let copia3 = {...punt}
console.log(copia3);
// Alternatives fer un for paràmetre a paràmetre DESACONESELLAT
