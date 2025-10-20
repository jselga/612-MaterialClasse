let fly = {
    fly(){
        console.log("Volant...");
        
    }
}
let swim ={
    swim(){
        console.log('Nadant...');
        
    }
}
let walk ={
    walk(){
        console.log('Caminant...');
        
    }
}
// vola, nada, camina, és animal
function Duck(){}
Object.assign(Duck.prototype,fly,swim,walk);
// nada, camina, és animal
function Dog(){}
//  nada, és animal
function Fish(){}
// vola, però res de les altres propietats
function Plane(){}
Object.assign(Plane.prototype,fly)


