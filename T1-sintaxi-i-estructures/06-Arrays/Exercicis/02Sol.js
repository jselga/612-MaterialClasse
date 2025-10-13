const myArray=[
    "Hola",
    12,
    "Món",
    {},
    {id:15},
    ['lala'],
]

// nombres, strings, objectes
function divideixPerTipus(arr){
 return{
    nombres: arr.filter(n=> typeof n ==='number'),
    strings:arr.filter(n=> typeof n ==='string'),
    objectes: arr.filter(n=> typeof n ==='object'),
 }
}
const nouArray= divideixPerTipus(myArray);
console.log(nouArray);
//Sortida:
// {
//   nombres: [ 12 ],
//   strings: [ 'Hola', 'Món' ],
//   objectes: [ {}, { id: 15 }, [ 'lala' ] ]
// }