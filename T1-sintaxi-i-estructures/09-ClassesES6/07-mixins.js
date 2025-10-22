const Entity = {
    save() {
        console.log('saving from Entity');
    },
}
const Updating = {
    update() {
        console.log('updating Entity');
    },
}
class User {
    constructor(name) {
        this.name = name;
    }
    //Method Override
    save() {
        console.log('saving from User');
    }
}
// // Això assigna tot el que tingui Entity 
// // al prototype de User
// Object.assign(User.prototype, Entity);

// //D'aquesta manera s'assignen els mètodes en el prototype superior 
// // com en el cas de l'herència amb extend
// Object.setPrototypeOf(User.prototype, Entity);

// // Finalment si volem fer una composició com a mixin
const newProto = Object.assign({},Entity,Updating);
Object.setPrototypeOf(User.prototype, newProto);

const u = new User('John Doe');

console.log(u);
u.save();
