// session storage is a web storage object that allows you to store key-value pairs in the browser. It is similar to local storage, but the data stored in session storage is only available for the duration of the page session. This means that the data will be lost when the user closes the browser or navigates away from the page.

//storage limit (usually around 5MB) and should not be used to store large amounts of data. Additionally, session storage is specific to the domain and cannot be accessed by other websites.

// To use session storage, you can use the following methods:
// setItem(key, value): This method is used to store a key-value pair in session storage. The key is a string that identifies the data, and the value can be any data type (string, number, object, etc.). For example:
sessionStorage.setItem('name', 'John Doe');
// getItem(key): This method is used to retrieve the value associated with a specific key from session storage. If the key does not exist, it returns null. For example:
const name = sessionStorage.getItem('name');
// removeItem(key): This method is used to remove a specific key-value pair from session storage. For example:
sessionStorage.removeItem('name');
// clear(): This method is used to remove all key-value pairs from session storage. For example:
sessionStorage.clear();

// length: This property returns the number of key-value pairs currently stored in session storage. For example:
const length = sessionStorage.length;
// key(index): This method returns the name of the key at the specified index in session storage. For example:
const firstKey = sessionStorage.key(0);
// It is important to note that session storage has a storage limit (usually around 5MB) and should not be used to store large amounts of data. Additionally, session storage is specific to the domain and cannot be accessed by other websites.

