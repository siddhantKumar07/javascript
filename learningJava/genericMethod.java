public class genericMethod {
    <T> void display(T data){
        System.out.println("Data: " + data);
    }
    public static void main(String[] args) {
        genericMethod obj = new genericMethod();
        genericMethod obj2 = new genericMethod();
        genericMethod obj3 = new genericMethod();
        obj.display(12);
        obj2.display("hell.o");
        obj3.display(3.55423333);
    }
}
