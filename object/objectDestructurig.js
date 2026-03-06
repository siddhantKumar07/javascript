//here i learn about how cam access the obect via destructuring

let user={
    name:"siddhant",
    age:22,
    address:{
        city:"gorakhpur",
        state:"up",
        location:{
            latitude:55.57,
            longitude:25.14,
        }
    }
}
user.address.location.longitude// acessing the value which is in very deep inside a nested deep is quite bulky , like you have to acces it 20 times you have to write this (user.address.location.longitude) 20 times;
// instead of writing the bulky one 20 times you have just to use object destructuring 

let{longitude,latitude} =user.address.location;// now both can be accesable via its name 
console.log(longitude)
console.log(latitude)