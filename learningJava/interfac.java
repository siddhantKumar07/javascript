interface animal {
    void eat();
    void sleep();
    void name();
    String name="animal";
    default void interDetails(){
        System.out.println("This is an animal interface."); 
        System.out.println("all the variables in interface are by default static and final, so we can access them using the interface name.");
        System.out.println("all the methods in interface are by default abstract, so we need to provide implementation for them in the implementing class.");
    }
}
class Dog implements animal{
    public void eat() {
        System.out.println("Dog is eating.");
    }
    public void sleep() {
        System.out.println("Dog is sleeping.");
    }
    public void name() {
        System.out.println("The name of the animal is: " + name);
    }
}
public class interfac {
    public static void main(String[] args) {
   System.out.println(animal.name);
    Dog d = new Dog();
    d.interDetails();
    d.eat();
    d.sleep();
    d.name();

    }
}
