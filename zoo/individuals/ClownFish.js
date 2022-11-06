class ClownFish extends Fish {
    constructor(name, lowestDepth, foodType = new Food("Algae",3)) {
        super(name, foodType, lowestDepth);
        this.name = name;
        this.lowestDepth = lowestDepth;
        this.foodType = foodType;
    }
}



