
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
// accesing the nested object 
console.log(user.address.city)// here i access the city of the user
console.log(user.name)// here i access the name of the user
console.log(user.address.location.latitude)// here i acees the attitude via goingn to the deep of the nested object
console.log(user.address.location.longitude)