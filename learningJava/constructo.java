class some{
String name;
int age;
    some(some obj){
       this.name = obj.name;
         this.age = obj.age;
    }
    some(String name, int age){
        this.name = name;
        this.age = age;
    }
    void details(){
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);

    }
}
public class constructo {
    public static void main(String[] args) {
        some obj = new some("John", 30);

    some obj2 = new some(obj);
    obj2.details();
    }
}
