class SnowyOwl extends Bird {
    food = new Food("Worms",100)
    constructor(name, foodType = SnowyOwl.food, wingSpan){
        super(name,foodType,wingSpan)
        this.name = name
        this.wingSpan =wingSpan
        this.foodType = foodType
    }
}