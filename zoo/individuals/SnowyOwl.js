class SnowyOwl extends Bird {
    constructor(name, wingSpan, foodType = new Food("Worms",100)){
        super(name,foodType,wingSpan)
        this.name = name
        this.wingSpan =wingSpan
        this.foodType = foodType
    }
}


