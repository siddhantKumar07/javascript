class animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
    voice(){
        console.log(`${this.name} is making a sound.`);
    }
}
class dog extends animal{
    constructor(name, age, breed){
        super(name, age);
    }
}
const dog1 = new dog("Buddy", 3, "Golden Retriever");   
dog1.eat();
dog1.voice();