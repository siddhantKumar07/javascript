let form =document.querySelector("form");
let nameInput = form.querySelector("input[placeholder='Name']");
let roleInput = form.querySelector("input[placeholder='Role']");
let bioInput = form.querySelector("textarea[placeholder='Bio']");
let photoInput = form.querySelector("input[placeholder='Photo URL']");
let cardContainer = document.querySelector(".card-container");

const userManager ={
    users: [],

    init : function (){
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm :function(e){
    e.preventDefault();
    let name = nameInput.value;
    let role = roleInput.value;
    let bio = bioInput.value;
    let photo = photoInput.value;
    this.addUser({
        name,
        role,
        bio,
        photo
    });
   cardContainer.innerHTML += `
   <div class="card">
      <img src="${photo}" />
      <h3>${name}</h3>
      <h5>${role}</h5>
      <p>${bio}</p>
      <button onclick="userManager.removeUser('${name}')">Remove</button>
    </div>`;

},
 addUser : function(user){
    this.users.push(user);
},

removeUser : function(name){
    this.users = this.users.filter(user => user.name !== name); 
    cardContainer.innerHTML = this.users.map(user => `
    <div class="card">
      <img src="${user.photo}" />
        <h3>${user.name}</h3>
        <h5>${user.role}</h5>
        <p>${user.bio}</p>
        <button onclick="userManager.removeUser('${user.name}')">Remove</button>
    </div>`).join('');
}
};
userManager.init();
console.log(userManager.users);

 
