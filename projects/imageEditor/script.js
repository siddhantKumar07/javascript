let inputImage = document.getElementById("file-input");
let previewImage = document.getElementById("preview-image");
let reset =document.querySelector("#reset");
let download = document.querySelector("#download");
let urlInput = document.getElementById("image-url");

// for url input
urlInput.addEventListener("input",(e)=>{
    previewImage.src = e.target.value;
    urlInput.value = "";
});

// for to select the image fro the local coputer
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
