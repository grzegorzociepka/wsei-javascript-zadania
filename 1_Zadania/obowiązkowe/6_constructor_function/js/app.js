//0
function Basket() {
    this.products = [],
    this.sum = 0
}

Basket.prototype.addProduct = function(name,price){
    this.products.push({name:name,price:price});
};

Basket.prototype.showBasket = function(){
    for(let i=0;i<this.products.length;i++){
        console.log(this.products[i]);
    }
};


