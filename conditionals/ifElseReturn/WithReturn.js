function getValue(num){
if(num<=25) return "less than or equal to 25"
else if (num>25&&num<50) return "greater than 25 and less than and equal to 50"
else if(num>50&&num<=75) return "num is greater than 50 and less than and equal 75"
else if(num>75&&num<=100) return " num is greater than that 75 and less than or equal to 100"

}
console.log(getValue(72))
