let inputImage = document.getElementById("file-input");
let previewImage = document.getElementById("preview-image");
let reset =document.querySelector("#reset");
let download = document.querySelector("#download");
inputImage.addEventListener("input",(e)=>{
previewImage.src = URL.createObjectURL(e.target.files[0]);
inputImage.value = "";
})


// for reset button
reset.addEventListener("click",()=>{
    previewImage.src = "";
});

// for download the image 
download.addEventListener("click",()=>{
    if(previewImage.src){
        let a = document.createElement("a");
        a.href = previewImage.src;
        a.download = "image.jpg";
        a.click();
    }
});


// previewImage.src = URL.createObjectURL(e.target.files[0]);
