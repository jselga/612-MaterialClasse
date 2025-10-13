const usuaris = [
    { edat: 17, nom: 'Nico', pla: 'premium' },
    { edat: 13, nom: 'Chanchito', pla: 'premium' },
    { edat: 32, nom: 'Mary', pla: 'free' },
    { edat: 25, nom: 'Robin', pla: 'gold' },
];
// function getOldest(arr){
//     let oldest = arr[0];
//     for (let u of arr){
//         if(oldest.edat < u.edat){
//             oldest =u;
//         }
//     }
//     return oldest

// }

function getOldest(arr){
    return arr.reduce((oldest,u) =>
        oldest.edat < u.edat ? u: oldest
    ,arr[0]);

}

const oldest = getOldest(usuaris);
console.log(oldest);
// Sortida 
// { edat: 32, nom: 'Mary', pla: 'free' }