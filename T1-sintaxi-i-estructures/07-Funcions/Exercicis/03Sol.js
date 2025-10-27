function callback(fn, ...rest){
    fn(...rest);
}
callback((...args)=>{
    console.log(args);
    
},1,2,3,4);

// [1,2,3,4]
