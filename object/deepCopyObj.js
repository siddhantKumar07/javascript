const obj1 = {
  name: "Rahul",
  address: {
    city: "Lucknow"
  }
};

const obj2 = { ...obj1 };

obj2.address.city = "Delhi";// it changes the value of obj1 also because nested obj is refering to the same memory space in the memory;
obj2.name="kaho";// it does not affect the name of obj1
console.log(obj1.name)
console.log(obj1.address.city); // Delhi

// deep copy 
const object = {
  name: "Rahul",
  address: {
    city: "Lucknow"
  }
};
const objs = JSON.parse(JSON.stringify(object));// it create a fully new object 
objs.address.city = "Delhi";//it does not modify the old one 
console.log(object.address.city);