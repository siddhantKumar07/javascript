class Som{
constructor(name,age){
    this.name = name;
    this.age = age;
}
displayInfo(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
}
const som1 = new Som("siddhant", 20);
som1.displayInfo();