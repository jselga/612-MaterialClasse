function saludar(...rest) {
    console.log(this, rest);

}
// saludar.call({propietat:'hola mon'},1,5);
// saludar.apply({propietat:'hola mon'},[1,5]);
// let nouSaludar = saludar.bind({propietat:'hola mon'});
// nouSaludar(1,5);

// saludar.bind({propietat:'hola mon'})(3,5);

// const usuari = {
//     nom: 'Nico',
//     nacionalitats: ['Chile', 'Colombia', 'NZ'],
//     mostrarNacionalitats() {
//         this.nacionalitats.forEach( function (nacionalitat)  {
//             console.log(this.nom, nacionalitat);
//         }.bind(this));
//     }
// };

const usuari = {
    nom: 'Nico',
    nacionalitats:['Chile','Colombia','NZ'],
    mostrarNacionalitats(){
        let self = this;
        this.nacionalitats.forEach(function (nacionalitat)  {
             console.log(self.nom, nacionalitat);
        });

            
        }


    
};


usuari.mostrarNacionalitats();