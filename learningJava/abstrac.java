abstract class animal{
    abstract void sound();
    String name;
    animal(String name){
        this.name = name;
    }
    // also can create the default methods in abstatrct class
    void eat() {
        System.out.println(name + " is eating.");
    }
    void sleep() {
        System.out.println(name + " is sleeping.");
    }
}

public class abstrac {
    public static void main(String[] args) {
    }
}