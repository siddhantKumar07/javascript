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
console.log("hey broo")
console.log("hey broo")
function add(a,b){
    return a+b;
}
console.log(add(2,3));

function add(...a){
return a.forEach(element => {
    console.log(element);
});
}
add(1,2,3,4,5);
add(1,2,3,4,5);
add(1,2,3,4,5,555);
