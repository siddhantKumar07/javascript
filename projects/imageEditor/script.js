let inputImage = document.getElementById("file-input");
let previewImage = document.getElementById("preview-image");

inputImage.addEventListener("input",(e)=>{
previewImage.src = URL.createObjectURL(e.target.files[0]);
inputImage.value = "";
})



// previewImage.src = URL.createObjectURL(e.target.files[0]);
