class youtubeChannel{
     users = [];

    subscriber(userName){
        users.push(userName);
    }
    unsubscriber(userName){
        users.pop(userName);
    }
    
}