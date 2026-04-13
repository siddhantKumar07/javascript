function getData(data,callback){
    setTimeout(() => {
        console.log("Data fetched: " + data);
        let others ={
            name : "John Doe",
            age : 30,
            city : "New York"
        }
        callback(others);
    }, 2000);

}

function processData(others){
    console.log("Data processed");
    console.log("Name: " + others.name);    
    console.log("Age: " + others.age);
    console.log("City: " + others.city);
}
getData("Sample Data", processData); // Data fetched: Sample Data will be printed after 2 seconds and then Data processed, Name: John Doe, Age: 30, City: New York will be printed immediately after that

