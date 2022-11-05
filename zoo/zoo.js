class Zoo {
    constructor() {
        this.animals = [];
        this.foodSupply = {};
    }
    addAnimalFactory(type, name, info) {
        if(type === "Lion"){
                this.animals.push(new Lion(name, info));
                this.addTwoWeeksFoodSupply(Lion.food);
        }else if (type === "Whale"){
                this.animals.push(new Whale(name, info));
                this.addTwoWeeksFoodSupply(Whale.food);
        }else if (type === "Goose"){
                this.animals.push(new Goose(name, info));
                this.addTwoWeeksFoodSupply(Goose.food);
        }else if (type === "SnowyOwl"){
                this.animals.push(new SnowyOwl(name, info));
                this.addTwoWeeksFoodSupply(SnowyOwl.food);
        }else if (type === "ClownFish"){
                this.animals.push(new ClownFish(name, info));
                this.addTwoWeeksFoodSupply(ClownFish.food);
        }else{
                console.log(`Animal type ${type} is not exists in the world`);
        }
    }
    toString() {
        let strAnimals = "[";
        for (let animal of this.animals) {
            strAnimals += `{\n${animal.toString()} \n},\n`;
        }
        strAnimals += "]\n";
        let totalAnimals = `Total number of animals: ${this.animals.length}`;
        return strAnimals + totalAnimals;
    }
    addTwoWeeksFoodSupply(food) {
        const type = food.type;
        const amount = food.dailyQuantityKG * TOW_WEEKS_IN_DAYS;
        if (type in this.foodSupply) {
            this.foodSupply[type] += amount;
        }
        else {
            this.foodSupply[type] = amount;
        }
    }
    removeFromSupply(food) {
        this.foodSupply[food.type] -= food.dailyQuantityKG;
        if (this.foodSupply[food.type] === 0) {
            this.addTwoWeeksSupply(food);
        }
    }
    feedAnimalsForTwoWeeks() {
        for (let i = 0; i < 2; i++) {
            console.log(`Week ${i + 1}`);
            for (let j = 0; j < 7; j++) {
                console.log(`Day ${j + 1}`);
                for (let animal of this.animals) {
                    animal.eat();
                    this.removeFromSupply(animal.food);
                }
            }
        }
    }
}