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

    // storing the returned element in to the adjust container

    adjustcontainer.append(building);
}