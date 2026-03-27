let add = document.querySelector("#add");
let close = document.querySelector(".close");
add.addEventListener("click", function() {
    let formContainer = document.querySelector(".form-container");
    formContainer.style.display = "block";
});
close.addEventListener("click", function() {
    let formContainer = document.querySelector(".form-container");
    formContainer.style.display = "none";
});