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