class Food {
    constructor(type,dailyQuantity){
        this.type = type;
        this.dailyQuantity = dailyQuantity;
    }
    toString(){
        return `Food Type:${this.type} \n Daily Quantity: ${this.dailyQuantity} grams`
    }
    get type(){
        return this.type
    }
    get dailyQuantity(){
        return this.dailyQuantity
    }
}