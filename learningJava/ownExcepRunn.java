class NotSufficientBalance extends RuntimeException{
    NotSufficientBalance(String message){
        super(message);
    }
}
public class ownExcepRunn {
    static int balance = 1000;
    static void Withdrawl(int amount) throws NotSufficientBalance{
  if(amount>balance){
  throw new NotSufficientBalance("kya re bikhmangya !!!!");
  }
  else{
    System.out.println("withdrwal amount = "+amount);
  }
    }
    public static void main(String[] args) {
        try{
            Withdrawl(1200);
        }
        catch(NotSufficientBalance e){
            System.out.println(e.getMessage());
        }
    
    }
}
