let add = document.querySelector("#add");
let close = document.querySelector(".close");
   let formContainer = document.querySelector(".form-container");
   const radios = document.querySelectorAll('input[name="category"]');
add.addEventListener("click", function() {
    formContainer.style.display = "block";
});
close.addEventListener("click", function() {
    formContainer.style.display = "none";
});


  

  radios.forEach(radio => {
    radio.addEventListener('change', function () {
      console.log("Selected:", this.value);
    });
  });
