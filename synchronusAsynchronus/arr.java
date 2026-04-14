import java.util.*;
public class arr{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arr[] = {1,2,3,4,5};
        System.out.println(Arrays.toString(arr));

        int arr2[][] = new int[2][3];
        System.out.println("enter the elements of 2D array");
        for(int i=0; i<arr2.length; i++){
            for(int j=0; j<arr2[i].length; j++){
                arr2[i][j] = sc.nextInt();

            }
        }
        System.out.println(Arrays.deepToString(arr2));

        int arr3[][] = {{1,2,3},{4,5,6}};
        System.out.println(Arrays.deepToString(arr3));
    }
}
