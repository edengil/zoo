class Lion extends Mammal {
    food = new Food("Meat",6000)
    constructor(name,foodType=Lion.food,durationPregnancy){
        super(name,foodType,durationPregnancy)
        this.name = name
        this.durationPregnancy =durationPregnancy
        this.foodType = foodType
    }
}