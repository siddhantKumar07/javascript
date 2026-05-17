class myRunnable implements Runnable {
    public void run(){
        for(int i=0; i<5; i++){
            System.out.println("Thread is running: " + Thread.currentThread().getName());
        }
    }
}
class thread extends Thread {
    public void run(){
        for(int i=0; i<5; i++){
            System.out.println("Thread is running: " + Thread.currentThread().getName());
        }
    }
}
public class threa {
    public static void main(String[] args) {
        myRunnable r1 = new myRunnable();
        thread t1 = new thread();
        Thread t2 = new Thread(r1);
        t1.start();
        t2.start();
    }
}
