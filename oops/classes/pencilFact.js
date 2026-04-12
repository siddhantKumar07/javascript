class pencil {
    constructor(color, length,price,brand) {
        this.color = color;
        this.length = length;
        this.price = price;
        this.brand = brand;
    }
}
const pencil1 = new pencil("red", 10, 5, "Faber-Castell");
console.log(pencil1);
const pencil2 = new pencil("blue", 12, 7, "Staedtler");
console.log(pencil2);