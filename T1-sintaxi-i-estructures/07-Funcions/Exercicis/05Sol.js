function ordenar (text,fn){
 let resultat = text.toLowerCase()
    .split('')
    .filter(lletra => lletra !==' ')
    .sort()
    .join('');
    fn(resultat);    
}
ordenar('hola mon', console.log);