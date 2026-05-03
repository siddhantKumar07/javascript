import java.util.Arrays;
public class thro {
    public static void main(String[] args) {
        int arr[]= new int[5];
        try{
            System.out.println(arr[5]);
        }
        catch(Exception e){
    e.getMessage();
    e.printStackTrace();
        }
        // catch(Throwable e){
        //     System.out.println("exception occurs ");
        // e.printStackTrace();
        // }
    }
}