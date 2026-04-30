class statics {
     static int a = 10;
    static {
        System.out.println("Static Block 1");
    }

    static {
        System.out.println("Static Block 2");
    }
    static void display() {
        System.out.println("Value of a: " + a);
        System.out.println("Static method");
    }

    public static void main(String[] args) {
        System.out.println("Main method");
        statics.display();
    }
}