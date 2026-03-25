localStorage.setItem('name', 'Siddhant kumar');
// const name = localStorage.getItem('name');
// console.log(name); // Output: Siddhant kumar

// to store the array and obj in local storage we need to convert them into string using JSON.stringify() and when we want to retrieve the original data type we need to use JSON.parse() to convert the string back to its original data type.
const user = {
    name: 'Siddhant kumar',
    age: 22,
    city: 'Delhi'
}
localStorage.setItem('user', JSON.stringify(user));
const userData = localStorage.getItem('user');
const userObj = JSON.parse(userData);