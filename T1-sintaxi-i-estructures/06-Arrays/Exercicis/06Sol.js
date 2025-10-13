const myArray=[
    "Hola",
    12,
    true,
    "Món",
    {},
    {id:15},
    ['lala'],
]

// nombres, strings, objectes
function divideixPerTipus(arr){
 return arr.reduce((acc,el)=>{
        let clau = typeof el;
        acc[clau]= acc[clau] ? acc[clau]:[];
        acc[clau].push(el);
        return acc;
    },{});

}

let arr = divideixPerTipus(myArray);
console.log(arr);
/**
 * {
  string: [ 'Hola', 'Món' ],
  number: [ 12 ],
  boolean: [ true ],
  object: [ {}, { id: 15 }, [ 'lala' ] ]
}

 */