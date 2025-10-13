const usuaris = [
    { edat: 17, nom: 'Nico', pla: 'premium' },
    { edat: 13, nom: 'Chanchito', pla: 'free' },
    { edat: 32, nom: 'Mary', pla: 'free' },
    { edat: 25, nom: 'Robin', pla: 'gold' },
];

const users = [
  { age: 27, name: 'Liam', membership: 'premium' },
  { age: 22, name: 'Emma', membership: 'free' },
  { age: 29, name: 'James', membership: 'free' },
  { age: 23, name: 'Olivia', membership: 'gold' },
];

const usersCatala = users.map(u=>({
    edat: u.age,
    nom: u.name,
    pla: u.membership
}))
// const usuarisTots= usuaris.concat(usersCatala);
const usuarisTots= [...usuaris,...usersCatala];
const usuarisOrdenats =usuarisTots.sort((a,b)=>{
    if(a.edat<b.edat) return 1
    if(a.edat>b.edat) return -1
    return 0
})
function llistarHtml(arr){
    return  arr.map(u=>
        `<li>Nom: ${u.nom}, Edat: ${u.edat} </li>`)
}  
const llista = llistarHtml(usuarisOrdenats);
const html =`
<ul>
 ${llista.join(`
    `)}
 </ul>`

console.log(html);
document.writeln(html)


// Unificar les estructures d'usuaris i user
// fusionar els arrays
// Ordenar per edat
// Crear plantilla HTML

// <li> Nom: nom, Edat: edat</li>
// Imprimir la llista
