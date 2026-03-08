// find the largest element from to the obj
let marks = {
  math: 80,
  science: 90,
  english: 70
};
console.log(Math.max(...Object.values(marks)))

//second   
let max=0;
 for (const key in marks) {
    if(marks[key]>max){
        max=marks[key]
    }
    
 }
 console.log(max)