// local storage is a web storage object that allows you to store key-value pairs in the browser. It is similar to session storage, but the data stored in local storage persists even after the browser is closed. This means that the data will be available the next time the user visits the website.

// you can only store strings in local storage. If you want to store other data types (like objects or arrays), you need to convert them to strings using JSON.stringify() before storing them, and then use JSON.parse() to retrieve the original data type when you get the item from local storage.

//storage limit (usually around 5MB) and should not be used to store large amounts of data. Additionally, local storage is specific to the domain and cannot be accessed by other websites.

// To use local storage, you can use the following methods:
// setItem(key, value): This method is used to store a key-value pair in local storage. The key is a string that identifies the data, and the value can be any data type (string, number, object, etc.). For example:
localStorage.setItem('name', 'John Doe');
// getItem(key): This method is used to retrieve the value associated with a specific key from local storage. If the key does not exist, it returns null. For example:
const name = localStorage.getItem('name');
// removeItem(key): This method is used to remove a specific key-value pair from local storage. For example:
localStorage.removeItem('name');
// clear(): This method is used to remove all key-value pairs from local storage. For example:
localStorage.clear();
// length: This property returns the number of key-value pairs currently stored in local storage. For example:
const length = localStorage.length;
// key(index): This method returns the name of the key at the specified index in local storage. For example:
const firstKey = localStorage.key(0);

// It is important to note that local storage has a storage limit (usually around 5MB) and should not be used to store large amounts of data. Additionally, local storage is specific to the domain and cannot be accessed by other websites.

