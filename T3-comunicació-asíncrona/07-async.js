let promesa1 = param1 => new Promise((res, rej) => {
    // càlculs
    const b = 'helloworld'
    res(b);
});

let promesa2 = param2 => new Promise((res, rej) => {
    // càlculs
    res(param2 + ', Hello World');
});

let promesa3 = (param1, param2) => new Promise((res, rej) => {
    res('MonkeyDLuffy');
})

// Promise.resolve('Primer Valor')
//     .then(a => promesa1(a))
//     .then(b => promesa2(b))
//     .then ((a,b)=>promesa3(a,b))

// No es pot fer! Implica dirty code    


async function main() {
    try {
        const a = await Promise.resolve('Primer valor');
        console.log('a:', a);

        const b = await promesa1(a);
        console.log('b:', b);

        const c = await promesa2(b);
        console.log('c:', c);

        const d = await promesa3(a, b);
        console.log('d:', d);

    } catch (error) {
        console.log({ error });
    }
}
main();