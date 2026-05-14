function  some() {
    console.log('this is some function');
}
some();

let a = some;
console.log("hello");
a();

let obj={
    
    mthod:function(){
        for(let i=0;i<5;i++){
            console.log(i);
        }
    },
    some:"hello"
}
obj.mthod();
console.log(obj.some);
console.log("hey br")


