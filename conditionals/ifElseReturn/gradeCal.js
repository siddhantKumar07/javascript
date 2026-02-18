function Result(grade){
if(grade>=90&&grade<=100){
    return "A+"
}
else if(grade>=80&&grade<90){
    return "A"
}
else if(grade>=70&&grade<80){
    return "B"
}
else if(grade>=60&&grade<70){
    return "C"
}
else if(grade>=33&&grade<60){
    return "D"
}
else{
    return "fail"
}
}

console.log(Result(70))