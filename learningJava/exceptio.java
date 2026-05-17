// import java.lang.Throwable.ArithmeticException;
public class exceptio {
    
    public static void main(String[] args) {
        int age = 10;
        if(age < 18){
            try{
            throw new ArithmeticException("Age must be at least 18 to vote.");
            } catch(ArithmeticException e){
                System.out.println("Caught an exception: " + e.getMessage());
            }
        } else {
            System.out.println("You are eligible to vote.");
        }
    }
}
