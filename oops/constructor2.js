class collegeNewAdimission {
    age;
    name;
    city;
    mobileNumber;
    branch;
    constructor(age, name, city, mobileNumber, branch) {
        this.age = age;
        this.name = name;
        this.city = city;
        this.mobileNumber = mobileNumber;
        this.branch = branch;
    }
    details = function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Mobile Number: ${this.mobileNumber}, Branch: ${this.branch}`);
    }

}
const student1 = new collegeNewAdimission(18, "Alice", "New York", "1234567890", "Computer Science");
const student2 = new collegeNewAdimission(19, "Bob", "Los Angeles", "0987654321", "Mechanical Engineering");
student1.details(); // Output: Name: Alice, Age: 18, City: New York, Mobile Number: 1234567890, Branch: Computer Science