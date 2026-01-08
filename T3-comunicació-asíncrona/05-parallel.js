const p1 = Promise.resolve(3);
// const p1 = Promise.reject(3);
// const p2 = 42;
const p2 = Promise.reject(42);
const p3 = new Promise((res, rej) => {
    setTimeout(res, 1000, 'foo');
});
/** Espera que es resolguin totes, si alguna es rebutja salta el catch */
// Promise.all([p1, p2, p3])
//     .then(valors => console.log('all', valors))
//     .catch(e => console.log('error a all', e)
//     )

/** Espera que es resolgui o es rebutgi la primera de les promeses  */
Promise.race([p1,p2,p3])
.then( valor => console.log('race', valor))
.catch(e=> console.log('error a race', e)
)
/**
 * 
 */

// Promise.any([p1,p2,p3])
// .then(valor => console.log({valor}))
// .catch(e=> console.log({e})
// )

// Promise.allSettled([p1, p2, p3])
//     .then(valors => console.log({ valors }))
//     .catch(e => console.log({ e })
//     )
