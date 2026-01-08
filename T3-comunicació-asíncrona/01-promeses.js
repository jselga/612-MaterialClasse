let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello World'), 1000);
    // setTimeout(() => reject('Error de càrrega'), 1000);
    //    setTimeout(()=> resolve(42),10000);
    // resolve(42);
})

// console.log(promesa);
promesa.then(
    valor => console.log(valor),
    e => console.log('error', e),

)


