class Goose extends Bird {
    food = new Food("Seeds",1000)
    constructor(name, foodType = Goose.food, wingSpan){
        super(name,foodType,wingSpan)
        this.name = name
        this.wingSpan =wingSpan
        this.foodType = foodType
    }
}