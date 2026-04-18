class youtubeChannel{
     users = []

    subscriber(userName){
        this.users.push(userName);
        userName.update("New subscriber: " + userName.name);
    }
    unsubscriber(userName){
      this.users = this.users.filter((user) => {
  return user.name !== userName.name;
});
    }
    notifySubscribers(){}
  checkSubscribers(){
    console.log("Number of subscribers:", this.users);
  }
}
class user{
    constructor(name){
        this.name = name;
    }
update(message){
    console.log(message);
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