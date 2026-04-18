class youtubeChannel{
     users = [];

    subscriber(userName){
        users.push(userName);
    }
    unsubscriber(userName){
        users.pop(userName);
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