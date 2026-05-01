 class parent {
    void show(){
        System.out.println("parent class");
    }
    void display(){
        System.out.println("parent class display method");
    }
    
}
class child extends parent{
    void show(){
        System.out.println("child class");
    }
    void display(){
        System.out.println("child class display method with parameter: ");
    }
}
public class poly {
    public static void main(String[] args) {
        parent obj = new child()
        obj.show();
    }
   
}