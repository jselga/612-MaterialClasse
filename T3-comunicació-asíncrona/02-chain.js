let promesa1 = new Promise((res,rej)=>{
    res(12);
});

let promesa2 = new Promise((res,rej)=>{
    rej(15);
});

promesa1.then( valor =>{
    // return valor +18;
   if (valor >10) {
    return promesa2;
   }
   
    
}).then((valor2)=>{
    console.log('la segona promesa',valor2);
    
})