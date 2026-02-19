function scoreCalculator(...score) {
    let total=0;
for(let key of score){
total+=key;
}
return total;
}

console.log(`total score is equal to ${scoreCalculator(22,5,44,6,16,85)} in 20 overs`)