function valorsAbsoluts(arr){
return arr.map(n=>Math.abs(n));
}
 const nombres = [-2,3,5,-15];

 const absoluts = valorsAbsoluts(nombres);

 console.log(absoluts);
 // Sortida
 //[2,3,5,15];