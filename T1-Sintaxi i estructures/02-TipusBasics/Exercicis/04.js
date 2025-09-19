let estocProductes=[10,2,null,3,null,5,null,8,22];
console.log(estocProductes);
// console.log("Tipus de cada element");
// console.log(typeof estocProductes[0]);
// console.log(typeof estocProductes[1]);
// console.log(typeof estocProductes[2]);
// console.log(typeof estocProductes[3]);
// console.log(typeof estocProductes[4]);
// ... Millor fem servir un for

for (let index = 0; index < estocProductes.length; index++) {
console.log(index+": "+ typeof estocProductes[index]);

    
}

