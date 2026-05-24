
let reset =document.querySelector("#reset");
let download = document.querySelector("#download");
let urlInput = document.getElementById("image-url");
let file =null;
let image=null;
        let drawWidth =null;
        let drawHeight =null;
        let x =null;
        let y =null;
urlInput.addEventListener("change", (e) => {

    const img = new Image();

    img.crossOrigin = "anonymous";

    img.src = e.target.value;

    img.onload = () => {

        const displayWidth = canvasImg.clientWidth;
        const displayHeight = canvasImg.clientHeight;

        const dpr = window.devicePixelRatio || 1;

        canvasImg.width = displayWidth * dpr;
        canvasImg.height = displayHeight * dpr;

        ctx.scale(dpr, dpr);

        ctx.clearRect(0, 0, displayWidth, displayHeight);

        // keep aspect ratio
        const imgRatio = img.width / img.height;
        const canvasRatio = displayWidth / displayHeight;



        if (imgRatio > canvasRatio) {
            drawWidth = displayWidth;
            drawHeight = displayWidth / imgRatio;
        } else {
            drawHeight = displayHeight;
            drawWidth = displayHeight * imgRatio;
        }

        x = (displayWidth - drawWidth) / 2;
         y = (displayHeight - drawHeight) / 2;

        ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    img.onerror = () => {
        alert("Image failed to load");
    };

    urlInput.value = "";
});

//canvas 
let inputImage = document.getElementById("file-input");
let canvasImg = document.getElementById("preview-image");
let ctx = canvasImg.getContext("2d");

inputImage.addEventListener("change", (e) => {

    file = e.target.files[0];

    const img = new Image();

    img.src = URL.createObjectURL(file);

    img.onload = () => {
  image = img;
    const displayWidth = canvasImg.clientWidth;
    const displayHeight = canvasImg.clientHeight;

    const dpr = window.devicePixelRatio || 1;

    canvasImg.width = displayWidth * dpr;
    canvasImg.height = displayHeight * dpr;

    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // image original size
    const imgWidth = img.width;
    const imgHeight = img.height;

    // aspect ratios
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = displayWidth / displayHeight;

    // contain behavior
    if (imgRatio > canvasRatio) {
        drawWidth = displayWidth;
        drawHeight = displayWidth / imgRatio;
    } else {
        drawHeight = displayHeight;
        drawWidth = displayHeight * imgRatio;
    }

    // center image
     x = (displayWidth - drawWidth) / 2;
     y = (displayHeight - drawHeight) / 2;

    ctx.drawImage(img, x, y, drawWidth, drawHeight);
};
});

// for reset button
reset.addEventListener("click",()=>{
    previewImage.src = "";
});

// for download the image 

download.addEventListener("click", async()=>{
    let url = previewImage.src;
try{
    let response = await fetch(url);
    let blob = await response.blob();// it will convert the response into the blob data which is used to download the image
     let blobUrl = URL.createObjectURL(blob);// it will create a temporary url for the blob data which can be used to download the image

     let a = document.createElement("a");
     a.href = blobUrl;
        a.download = "image.jpg";
        a.click();
        URL.revokeObjectURL(blobUrl);
}catch(error){
    console.error("Error downloading the image:", error);
}

})

// for filters 
const filters={
    brightness:{
        name:"Brightness :",
        unit:"%",
        default:100,
        min:0,
        max:200,
        step:1
    },
    contrast:{
        name:"Contrast :",
        unit:"%",
        default:100,    
        min:0,
        max:200,
        step:1
    },
    exposure:{
        name:"Exposure :",
        unit:"%",
        default:100,
        min:0,
        max:200,
        step:1
    },
    saturation:{
        name:"Saturation :",
        unit:"%",
        default:100,
        min:0,
        max:200,    
        step:1
    },
    grayscale:{
        name:"Grayscale :",
        unit:"%",
        default:0,
        min:0,
        max:100,
        step:1
    },
    sepia:{
        name:"Sepia :",
        unit:"%",
        default:0,
        min:0,
        max:100,
        step:1
    },
    invert:{
        name:"Invert :",
        unit:"%",
        default:0,
        min:0,
        max:100,
        step:1
    },
    blur:{  
    name:"Blur :",
    unit:"px",
    default:0,
    min:0,
    max:20,
    step:0.1
},
    hueRotation:{
        name:"Hue Rotation :",
        unit:"deg",
        default:0,
        min:0,
        max:360,
        step:1
    },
    opacity:{
        name:"Opacity :",
        unit:"%",
        default:100,
        min:0,
        max:100,
        step:1
    }

}

function createfilters(name,unit,defaultValue,min,max,step){

    // creating the container;
let container = document.createElement("div");

//creating the label for the name;
let label = document.createElement("label");
label.textContent=name;

// creating the input type range according to the parameter
let input = document.createElement("input");
input.type="range"
input.value =defaultValue;
input.unit=unit;
input.min=min;
input.max=max;
input.step=step;

container.appendChild(label);
container.appendChild(input);

// return the container
return container;
}

let adjustcontainer = document.querySelector(".adjust")

// selecting the data from the objects

for(let key in filters){
    let filter = filters[key];
    let building = createfilters(filter.name,filter.unit,filter.default,filter.min,filter.max,filter.step);
       console.dir(building);
    // storing the returned element in to the adjust container

    adjustcontainer.append(building);
}


function applyFilters(){
   ctx.filter='blur(5px'
   ctx.drawImage(image,x,y,drawWidth,drawHeight);
}



