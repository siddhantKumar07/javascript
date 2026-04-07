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
parle.details();// biscuit name :parleG, quantity in 1 packet :8, price :5 and  flavour :sweet
const hideandseek = new BiscuitFactory("hide and seek",10,10,"chocolate")
hideandseek.details();// biscuit name :hide and seek, quantity in 1 packet :10, price :10 and  flavour :chocolate

const britannia = new BiscuitFactory("britannia",12,15,"butter")
britannia.details();

// thats all about today class and object in js, see you in next topic.
// In the above code we have created a class called BiscuitFactory which has a constructor to initialize the properties of the class and a method called details to display the details of the biscuit. We have created three objects of the class and called the details method to display the details of each biscuit.    

// Note: In JavaScript, we can create a class using the class keyword and define a constructor to initialize the properties of the class. We can also define methods inside the class to perform certain actions. We can create objects of the class using the new keyword and call the methods to perform actions on the objects.

// In the above code, we have created a class called BiscuitFactory which has a constructor to initialize the properties of the class and a method called details to display the details of the biscuit. We have created three objects of the class and called the details method to display the details of each biscuit.