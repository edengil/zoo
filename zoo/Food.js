class Food {
    constructor(type,dailyQuantity){
        this.type = type;
        this.dailyQuantity = dailyQuantity;
    }
    toString(){
        return `Food Type:${this.type} \nDaily Quantity: ${this.dailyQuantity} grams`
    }
}
