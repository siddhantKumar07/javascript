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
download.addEventListener("click", async () => {

    const imageURL = previewImage.src;

    try {

        const response = await fetch(imageURL);
        const blob = await response.blob();

        const blobURL = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = blobURL;
        a.download = "image.jpg";

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(blobURL);

    } catch (error) {
        console.log("Download failed", error);
    }
});
