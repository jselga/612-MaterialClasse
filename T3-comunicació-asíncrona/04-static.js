let promesa1 = new Promise((res, rej) => {
    res(2);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1.then(valor => {
    
    if (valor > 10) {
        return promesa2;
    }
    return Promise.reject('Valor menor a 10')
    // return Promise.resolve(555)
    

}).then((valor2) => {
    console.log('segona promesa');
    
    return valor2;

})
    .catch(e => console.log(e))
    .finally(() => console.log('estem a finally!')
    )