class Whale extends Mammal {
    constructor(name, durationPregnancy, foodType =new Food("Plankton",2000000)){
        super(name,foodType,durationPregnancy)
        this.name = name
        this.durationPregnancy =durationPregnancy
        this.foodType = foodType
    }
}

