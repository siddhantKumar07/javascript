let form =document.querySelector("form");
let nameInput = form.querySelector("input[placeholder='Name']");
let roleInput = form.querySelector("input[placeholder='Role']");
let bioInput = form.querySelector("textarea[placeholder='Bio']");
let photoInput = form.querySelector("input[placeholder='Photo URL']");

const userManager ={
    users: [],

    init : function (){
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm :function(e){
    e.preventDefault();
    // let name = nameInput.value;
    // let role = roleInput.value;
    // let bio = bioInput.value;
    // let photo = photoInput.value;
    // let user = {
    //     name: name,
    //     role: role, 
    //     bio: bio,
    //     photo: photo
    // }
    console.log(this);
}
}


 
