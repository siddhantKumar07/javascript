class any<T>{
     T data;
     void hello(T anything){
  System.out.println(anything);
     }

}


public class NewGEn{
    <T> void hey(T data){
System.out.println(data);
    }
    public static void main(String[] args) {
        NewGEn obj = new NewGEn();
        obj.hey("heellllloooooo");
    }
}