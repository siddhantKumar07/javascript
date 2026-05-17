public class arith {
    static void division(int a, int b) throws ArithmeticException {
        try{
            throw new ArithmeticException("Division by zero is not allowed.");
            int result = a / b;
            System.out.println("Result: " + result);
        } catch(ArithmeticException e){
            System.out.println("Caught an exception: " + e.getMessage());
        }
    }
}
