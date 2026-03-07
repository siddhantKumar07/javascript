const obj1 ={
    info:{
       
        score:100
    }
}

const clone ={...obj1};

clone.info.score=120;//the problem is score  share the same memory because it is nested obj , i have to deep clone it,
console.log(obj1.info.score);// ? Its print 120
let deep =JSON.parse(JSON.stringify(obj1))
deep.info.score=555;
console.log(deep)
console.log(obj1.info.score)
