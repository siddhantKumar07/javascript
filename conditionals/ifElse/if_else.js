// we have to check which is greater among 5

let a=800,b=90,c=10,d=1200,e=22;

if(a>b&&a>c&&a>d&&a>e){
    console.log(`${a} is greater as compare to other`)
}
else if(b>a&&b>c&&b>d&&b>e){
    console.log(`${b} is greater as compare to other`)
}
else if(c>b&&c>d&&c>a&&c>e){
    console.log(`${c} is greater as compare to other`)
}
else if (d>b&&d>c&&d>a&&d>e){
    console.log(`${d} is greater as compare to other`)
}
else{
    console.log(`${e} is greater as compare to other`)
}