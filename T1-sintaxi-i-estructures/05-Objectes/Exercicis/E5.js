class Llibre {
    constructor(titol, autor, any_publicacio, categoria, num_pagines) {
        this.titol = titol;
        this.autor = autor;
        this.any_publicacio = any_publicacio;
        this.categoria = categoria;
        this.num_pagines = num_pagines;
    }
}


let llibre1 = new Llibre("Llibre A", "Autor A", null, "Ficció", null);
let llibre2 = new Llibre("Llibre B", "Autor B", 2021, null, 300);
let llibre3 = new Llibre("Llibre C", null, null, "Història", 150);

console.log(llibre1);
console.log(llibre2);
console.log(llibre3);