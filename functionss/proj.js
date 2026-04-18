class youtubeChannel{
     users = []

    subscriber(userName){
        this.users.push(userName);
        userName.update("New subscriber: " + userName.name);
    }
    unsubscriber(userName){
       this.users= this.users.filter(()=>{
        return userName.name!==userName.name;
       })
    }
    notifySubscribers(){}
  checkSubscribers(){
    console.log("Number of subscribers:", this.users.length);
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