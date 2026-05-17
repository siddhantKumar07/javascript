public class localinn {
    void display(){
        int x = 10;
        class inner{
            void show(){
                System.out.println("value of x = "+x);
            }
        }
        inner i = new inner();
        i.show();
    }
    public static void main(String[] args) {
        localinn obj = new localinn();
        obj.display();
    }
}
