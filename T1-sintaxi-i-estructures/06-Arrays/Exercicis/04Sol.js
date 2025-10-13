const usuaris = [
    { edat: 17, nom: 'Nico', pla: 'premium' },
    { edat: 13, nom: 'Chanchito', pla: 'premium' },
    { edat: 32, nom: 'Mary', pla: 'free' },
    { edat: 25, nom: 'Robin', pla: 'gold' },
];

// function cntPaidUsers(usrs){

//     return usrs.reduce((acc,el)=>{
//         if (el.pla!=='free'){
//             return acc+1;
//         }
//         return acc;

//     },0);
// }
// Versió millorada:
function cntPaidUsers(usrs) {

    return usrs.reduce((acc, el) => {
        return el.pla !== 'free' ? acc + 1 : acc
    }, 0);
}
function cntAdultUsers(usrs) {
    return usrs.reduce((acc, el) => 
        el.edat >17 ? acc+1:acc, 0);
}
console.log(cntPaidUsers(usuaris));
console.log(cntAdultUsers(usuaris));


//Sortida
// 3
// 2