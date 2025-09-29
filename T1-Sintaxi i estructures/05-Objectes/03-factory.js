let user = {
    id: 1,
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave..-');

    },
};

// let user1 = {
//     id: 2,
//     email: 'chanchito@holamundo.io',
//     name: 'Chanchito',
//     activo: false, 
//     recuperarClave: function(){
//         console.log('Recuperando clave..-');

//     },
// };

function crearUsuario(name,email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave..-');

        },
    };
}
let user1 = crearUsuario('Chanchito','chanchito@holamundo.io');
let user2 = crearUsuario('Felipe','felipe@holamundo.io');
console.log(user1);
console.log(user2);
