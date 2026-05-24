let reset =document.querySelector("#reset");
let download = document.querySelector("#download");
let urlInput = document.getElementById("image-url");
let file =null;
let image=null;
let drawWidth =null;
let drawHeight =null;
let x =null;
let y =null;
let currentImage = null;

urlInput.addEventListener("change", (e) => {

    const img = new Image();

    img.crossOrigin = "anonymous";

    img.src = e.target.value;

    img.onload = () => {

        currentImage = img;

        const displayWidth = canvasImg.clientWidth;
        const displayHeight = canvasImg.clientHeight;

        const dpr = window.devicePixelRatio || 1;

        canvasImg.width = displayWidth * dpr;
        canvasImg.height = displayHeight * dpr;

        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.scale(dpr, dpr);

        ctx.clearRect(0, 0, displayWidth, displayHeight);

        const imgRatio = img.width / img.height;
        const canvasRatio = displayWidth / displayHeight;

        // let drawWidth, drawHeight, x, y;

        if (imgRatio > canvasRatio) {

            drawWidth = displayWidth;
            drawHeight = displayWidth / imgRatio;

        } else {

            drawHeight = displayHeight;
            drawWidth = displayHeight * imgRatio;
        }

        x = (displayWidth - drawWidth) / 2;
        y = (displayHeight - drawHeight) / 2;

        ctx.drawImage(currentImage, x, y, drawWidth, drawHeight);
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
currentImage = img;
    const displayWidth = canvasImg.clientWidth;
    const displayHeight = canvasImg.clientHeight;

    const dpr = window.devicePixelRatio || 1;

    canvasImg.width = displayWidth * dpr;
    canvasImg.height = displayHeight * dpr;

   ctx.setTransform(1, 0, 0, 1, 0, 0);

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

    // remove filters
    ctx.filter = "none";

    // clear canvas
    ctx.clearRect(0,0,canvasImg.width,canvasImg.height);

    // reset filters object
    for(let key in filterForApply){
        delete filterForApply[key];
    }
});

// for download the image 

download.addEventListener("click", ()=>{

    // convert canvas into image url
    const url = canvasImg.toDataURL("image/png");

    // create download link
    const a = document.createElement("a");

    a.href = url;

    a.download = "filtered-image.png";

    a.click();
});

// for filters 
const filters={
    brightness:{
        name:"Brightness",
        unit:"%",
        default:100,
        min:0,
        max:200,
        step:1
    },
    contrast:{
        name:"Contrast",
        unit:"%",
        default:100,    
        min:0,
        max:200,
        step:1
    },
    exposure:{
        name:"exposure",
        unit:"%",
        default:100,
        min:0,
        max:200,
        step:1
    },
    saturation:{
        name:"Saturate",
        unit:"%",
        default:100,
        min:0,
        max:200,    
        step:1
    },
    grayscale:{
        name:"Grayscale",
        unit:"%",
        default:0,
        min:0,
        max:100,
        step:1
    },
    sepia:{
        name:"Sepia",
        unit:"%",
        default:0,
        min:0,
        max:100,
        step:1
    },
    invert:{
        name:"Invert",
        unit:"%",
        default:0,
        min:0,
        max:100,
        step:1
    },
    blur:{  
    name:"Blur",
    unit:"px",
    default:0,
    min:0,
    max:20,
    step:0.1
},
    hueRotation:{
        name:"hue-rotate",
        unit:"deg",
        default:0,
        min:0,
        max:360,
        step:1
    },
    opacity:{
        name:"opacity",
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

input.addEventListener("input",(e)=>{
    let value = input.value;
    applyFilters(name.toLowerCase(),value,unit);

});
container.appendChild(label);
container.appendChild(input);

// return the container
return container;
}

let adjustcontainer = document.querySelector("#range-buttons");

// selecting the data from the objects

for(let key in filters){
    let filter = filters[key];
    let building = createfilters(filter.name,filter.unit,filter.default,filter.min,filter.max,filter.step);
       console.dir(building);
    // storing the returned element in to the adjust container

    adjustcontainer.prepend(building);
}


const filterForApply = {};

function applyFilters(name, value, unit) {
  name = name.toLowerCase().trim();
    // store filter value
    // example:
    // filterForApply["brightness"] = "120%"
    if(name !== "exposure"){
    filterForApply[name] = `${value}${unit}`;
    }



      // exposure filter
    if(name === "exposure"){
        applyExposure(value);
    }
    else{
        // store filter
        filterForApply[name] = `${value}${unit}`;
    }



    // convert object into array
    // example:
    // [
    //   ["brightness","120%"],
    //   ["contrast","150%"]
    // ]
    const filterArray = Object.entries(filterForApply);


    // convert every array item into filter string
    // example:
    // "brightness(120%)"
    const filterStrings = filterArray.map((item) => {

        // item[0] = filter name
        // item[1] = filter value
        return `${item[0]}(${item[1]})`;
    });


    // join all filters into one string
    // example:
    // "brightness(120%) contrast(150%)"
    const finalFilter = filterStrings.join(" ");


    // apply filters
    try{
 ctx.filter = finalFilter;
 console.log("Applied filter:", finalFilter);
    }
    catch(error){
        console.error("Error applying filter:", error);
    }
   


    // clear old image
    ctx.clearRect(0, 0, canvasImg.width, canvasImg.height);


    // redraw image
  ctx.drawImage(currentImage, x, y, drawWidth, drawHeight);
}

// separate exposure function
function applyExposure(value){

    filterForApply.brightness = `${value}%`;

    filterForApply.contrast = `${100 + value/5}%`;
}



// for prebuilt feature buttons 
const prebuiltFilters = {
    normal: "none",

    vintage: "sepia(0.6) contrast(1.1) brightness(0.9)",

    oldFilm: "grayscale(0.4) sepia(0.7) contrast(1.3)",

    retroWarm: "sepia(0.5) saturate(1.4) hue-rotate(-10deg)",

    classicBW: "grayscale(1)",

    softGray: "grayscale(0.7) brightness(1.1)",

    highContrastMono: "grayscale(1) contrast(1.5)",

    vibrant: "saturate(2)",

    brightPop: "brightness(1.2) saturate(1.8)",

    coolVibrance: "saturate(1.8) hue-rotate(15deg)",

    moody: "brightness(0.8) contrast(1.3)",

    darkCinema: "brightness(0.7) contrast(1.4) saturate(0.8)",

    tealOrange: "contrast(1.2) saturate(1.4) hue-rotate(-15deg)",

    warm: "sepia(0.3) saturate(1.3)",

    cool: "hue-rotate(180deg)",

    ice: "brightness(1.1) hue-rotate(160deg) saturate(1.2)",

    dreamy: "blur(1px) brightness(1.1) saturate(1.3)",

    neon: "contrast(1.5) saturate(2) brightness(1.2)",

    ghost: "grayscale(1) opacity(0.7)",

    inverted: "invert(1)",

    clarendon: "contrast(1.2) saturate(1.35)",

    juno: "contrast(1.15) saturate(1.4) sepia(0.15)",

    lark: "brightness(1.1) contrast(0.9) saturate(1.2)",

    cyberpunk: "contrast(1.4) saturate(2) hue-rotate(290deg)",

    sunset: "sepia(0.4) saturate(1.8) hue-rotate(-20deg)",

    horror: "grayscale(0.8) contrast(2) brightness(0.6)",

    matrix: "grayscale(1) sepia(1) hue-rotate(50deg) saturate(5)"
};

let prebuiltButtonsContainer = document.getElementById("prebuiltButtons");

for(let key in prebuiltFilters){
    let button = document.createElement("button");
    button.textContent = key;
    button.addEventListener("click",()=>{
        const filterValue = prebuiltFilters[key];
        ctx.filter = filterValue;
        ctx.clearRect(0, 0, canvasImg.width, canvasImg.height);
ctx.drawImage(currentImage, x, y, drawWidth, drawHeight);
    });
    prebuiltButtonsContainer.append(button);
}
