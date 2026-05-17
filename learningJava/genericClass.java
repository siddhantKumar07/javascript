class details<t>{
    t data;

    void setdata(t data){
        this.data = data;
    }
    t getdata(){
        return data;
    }
}
public class genericClass {
    public static void main(String[] args) {
        details<Integer> obj = new details<>();
        obj.setdata(255);
        details<String> obj2 = new details<>();
        obj2.setdata("hey i learned the generic");

        System.out.println(obj.getdata());
        System.out.println(obj2.getdata());
    }
}
