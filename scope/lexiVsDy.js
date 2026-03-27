function outer (){
    let variable = 10;
    function inner(){
        console.log(variable); // This will work because inner function has access to the variables of the outer function 
        }
    inner();
}

function testLexicalScope() {
    let x =5 ;
    outer();
}
testLexicalScope();