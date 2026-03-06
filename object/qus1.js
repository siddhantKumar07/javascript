// can an object key  be a number or boolean
let obj ={
    47:"age",
    true:"yes"//This happens due to type coercion of property keys in JavaScript objects, where non-string keys like numbers and booleans are converted to strings before being stored.
}
console.log(obj)
console.log(typeof(obj[true],obj[47]))
//In JavaScript, object property keys are automatically converted to strings (except Symbol).
//So when numbers or booleans are used as keys, JavaScript coerces them into strings internally, which is why the object definition works.

/*
Internally JavaScript stores it as:
{
  "47": "age",
  "true": "yes"
}
  */