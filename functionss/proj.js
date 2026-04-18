class youtubeChannel{
     users = []

    subscriber(userName){
        this.users.push(userName);
        userName.update("New subscriber: " + userName.name);
    }
    unsubscriber(userName){
        this.users.pop(userName);
    }
    notifySubscribers(){}

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