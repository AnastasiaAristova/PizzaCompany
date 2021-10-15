module.exports.pizzaIdArray=[];
module.exports.Pizza = class{
    constructor(id, img, name, price,amount) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}