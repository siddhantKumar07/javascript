let add = document.querySelector("#add");
let close = document.querySelector(".close");
   let formContainer = document.querySelector(".form-container");
add.addEventListener("click", function() {
    formContainer.style.display = "block";
});
close.addEventListener("click", function() {
    formContainer.style.display = "none";
});