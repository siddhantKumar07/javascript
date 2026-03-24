// cookies is a small piece of data that a website can store on your computer. It is used to remember information about you, such as your preferences or login status. Cookies are sent back to the server with each request, allowing the website to recognize you and provide a personalized experience. They can be set to expire after a certain time or when you close your browser. Cookies are commonly used for tracking user behavior and delivering targeted advertisements.

//storage limit (usually around 4KB) and should not be used to store large amounts of data. Additionally, cookies can be accessed by other websites if they are not set with the appropriate security flags (such as HttpOnly and Secure).

// To create a cookie, you can use the document.cookie property. For example:
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// To read a cookie, you can access the document.cookie property, which returns a string containing all the cookies for the current page. You can then parse this string to retrieve specific cookie values. For example:
const cookies = document.cookie.split(';');
const usernameCookie = cookies.find(cookie => cookie.trim().startsWith('username='));
const username = usernameCookie ? usernameCookie.split('=')[1] : null;
// To delete a cookie, you can set its expiration date to a past date. For example:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

// It is important to note that cookies have a size limit (usually around 4KB) and should not be used to store large amounts of data. Additionally, cookies can be accessed by other websites if they are not set with the appropriate security flags (such as HttpOnly and Secure).

