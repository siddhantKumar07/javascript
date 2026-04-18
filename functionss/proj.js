class youtubeChannel{
     subscriber = []

    subscriber(userName){
        this.subscriber.push(userName);
        userName.update("New subscriber: " + userName.name);
    }
    unsubscriber(userName){
      this.subscriber = this.subscriber.filter((user) => {
  return user.name !== userName.name;
});
        userName.update("Unsubscribed: " + userName.name);
    }
    notifySubscribers(message)
    {
        this.subscriber.forEach(user => {
            user.update(message);
        });
    }
  checkSubscribers(){
    console.log("Number of subscribers:", this.subscriber);
  }
}
class user{
    constructor(name){
        this.name = name;
    }
update(message){
    console.log(this.name+" "+message);
}

}
let channel = new youtubeChannel();
let user1 = new user("Alice");
channel.subscriber(user1);
channel.checkSubscribers();
let user2 = new user("Bob");
channel.subscriber(user2);
channel.checkSubscribers();
channel.unsubscriber(user1);
channel.checkSubscribers(user1);
channel.notifySubscribers("New video uploaded! at the Channel");