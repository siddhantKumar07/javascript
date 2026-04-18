function factory (name,price){
    stock =10;
   return {
    name,
    price,
  checkStock(){
    console.log(`There are ${stock} items in stock`);
  },
addStock(qnty){
    stock += qnty;
    console.log(`Added ${qnty} items to stock. Total stock: ${stock}`);
   }

}