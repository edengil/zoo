class Whale extends Mammal {
    food = new Food("Plankton",2000000)
    constructor(name,foodType = Whale.food,durationPregnancy){
        super(name,foodType,durationPregnancy)
        this.name = name
        this.durationPregnancy =durationPregnancy
        this.foodType = foodType
    }
}