function suma(fn, ...rest){
 let resultat = rest.reduce((acc,el)=>{
    return acc+el;
 },0);
 fn(resultat);
}

suma(res=> {
    console.log(res);
    
},1,2,3,4,5)