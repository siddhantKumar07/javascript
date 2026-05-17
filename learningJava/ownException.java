//i am going to create my own exception class by extending the Exception class
// by exception class i can create a compile time exception and by runtime exception i can create a runtime exception

class InvalidAgeException extends Exception{
      InvalidAgeException(String message){
        super(message);
      }
}
public class ownException {
    static void age(int age) throws InvalidAgeException{
     if(age<0||age>120){
        throw new InvalidAgeException("age must be greater than 0 and less than 111");
     }
     else{
        System.out.println("valid age");
     }
    }
    public static void main(String[] args) {

        try{
            age(-5);
        }
        catch(InvalidAgeException e){
            System.out.println(e.getMessage());
            // e.printStackTrace();
        }
    }
}
