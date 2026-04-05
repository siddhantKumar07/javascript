class BiscuitFactory {
    constructor(name,quantity,price,flavour){
     this.name=name;
     this.quantity=quantity;
     this.price=price;
     this.flavour=flavour
    }
    details(){
        console.log(`biscuit name :${this.name}, quantity in 1 packet :${this.quantity}, price :${this.price} and  flavour :${this.flavour}`)
    }
}

const parle = new BiscuitFactory("parleG",8,5,"sweet")
parle.details();
const hideandseek = new BiscuitFactory("hide and seek",10,10,"chocolate")
hideandseek.details();
