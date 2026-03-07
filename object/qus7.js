// use Object.entries() to print
// title : javaScript
// duration: 4 weeks

const course ={
    title :"javaScript",
    duration:"4 weeks"
};
// console.log(Object.entries(course))
console.log(Object.entries(course).forEach((val)=>{
    console.log(`${val[0]} : ${val[1]}`)
    
}))