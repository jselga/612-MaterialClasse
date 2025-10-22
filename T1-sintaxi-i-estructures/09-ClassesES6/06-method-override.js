class Entity {
    constructor(id){
        this.id = id;
        this.created_at = new Date();
    }
    save(){
        console.log('saving from Entity');
        
    }
}
class User extends Entity {
    constructor(name){
        super(1);
        this.name=name;
    }
    save(){
        super.save();
        console.log('saving from User');
        
    }
}
const u = new User('John Doe');
console.log(u);
u.save();
