abstract class animal{
    abstract void sound();
   abstract void sleep() ;
    String name;
    animal(String name){
        this.name = name;
    }
    // also can create the default methods in abstatrct class
    void eat() {
        System.out.println(name + " is eating.");
    }
}
class dog extends animal{
    dog(String name){
        super(name);
    }
    void sound(){
        System.out.println(name + " says: Woof!");
    }
    void sleep() {
        System.out.println(name + " is sleeping.");
    }

}
public class abstrac {
    public static void main(String[] args) {

        dog d = new dog("Buddy");
        d.sound();
        d.eat();
        d.sleep();
    }
}