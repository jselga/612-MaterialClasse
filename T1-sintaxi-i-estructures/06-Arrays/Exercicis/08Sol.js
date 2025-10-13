const usuaris = [
    { edat: 17, nom: 'Nico', pla: 'premium' },
    { edat: 13, nom: 'Chanchito', pla: 'free' },
    { edat: 32, nom: 'Mary', pla: 'free' },
    { edat: 25, nom: 'Robin', pla: 'gold' },
];

function getPaidUsers(usrs){

    return usrs.filter(u=> u.pla !=='free');
}
const pagaments = getPaidUsers(usuaris);
pagaments.sort((a,b)=>{
    if(a.edat <b.edat) return 1;
    if(a.edat >  b.edat) return -1;
    return 0;
});
console.log(pagaments);
llista = pagaments.map(u=>`<li>${u.nom} </li>`)
 const html = `<ul>
    ${llista.join(`
        `)}
 </ul>`
 console.log(html);
 // Si es vol veure al navegador descomentar
//  document.writeln(html);
/**
 * Usuaris de pagament
 *  Ordenar de major a menor edat
 *  Crear plantilla html
 *  imprimir
 * <ul>
 * <li>Robin</li>
 * <li>Nico</li>
 * </ul>
 */