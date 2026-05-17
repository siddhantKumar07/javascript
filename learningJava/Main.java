
    
    class daemon extends Thread {

    public void run() {

        while(true) {

            System.out.println("Daemon thread running");
        }
    }
}

public class Main {

    public static void main(String[] args) {

        daemon t1 = new daemon();

        t1.setDaemon(true);

        t1.start();

        System.out.println("Main thread finished");
    }

}
