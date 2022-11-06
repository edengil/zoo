class Lion extends Mammal {
    constructor(name, durationPregnancy, foodType=new Food("Meat",6000)){
        super(name,foodType,durationPregnancy)
        this.name = name
        this.durationPregnancy =durationPregnancy
        this.foodType = foodType
    }
}

