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

// for to select the image from the local coputer
inputImage.addEventListener("input",(e)=>{
previewImage.src = URL.createObjectURL(e.target.files[0]);
inputImage.value = "";
})


// for reset button
reset.addEventListener("click",()=>{
    previewImage.src = "";
});

// for download the image 

download.addEventListener("click", async()=>{
    let url = previewImage.src;
try{
    let response = await fetch(url);
    let blob = await response.blob();
     let blobUrl = URL.createObjectURL(blob);

     let a = document.createElement("a");
     a.href = blobUrl;
        a.download = "image.jpg";
        a.click();
        URL.revokeObjectURL(blobUrl);
}catch(error){
    console.error("Error downloading the image:", error);
}

})