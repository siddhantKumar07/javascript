// Optional Chaining in JavaScript is a feature that lets you safely access nested object properties without causing an error if something is null or undefined.
// It uses the ?. operator.
const user = {
  profile: {
    contact: {
      email: "rahul@email.com"
    }
  }
};
console.log(user.profile.contact.email)// if email or contact or any key is not present in the chain it will throw error 
console.log(user.profile?.contact?.email);// but with this it will not throw any error it only shows undefined
//If any property in the chain is missing, JavaScript safely returns undefined.