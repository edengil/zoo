class ClownFish extends Fish {
    food = new Food("Algae",3)
    constructor(name, lowestDepth, food = ClownFish.food) {
        super(name, food, lowestDepth);
        this.name = name;
        this.lowestDepth = lowestDepth;
        this.food = food;
    }
}