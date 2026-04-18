function factory (name,price){
    stock =10;
   return {
    name,
    price,
  checkStock(){
    console.log(`There are ${stock} items in stock`);
  }

   }

}