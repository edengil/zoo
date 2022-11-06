const TOW_WEEKS_IN_DAYS = 14;
const WEEKS = 2
const DAYS_IN_WEEK = 7 

class Zoo {
    constructor() {
        this.animals = [];
        this.foodSupply = {};
    }
    addAnimalFactory(type, name, info) {
        if(type === "Lion"){
                
                let lion = new Lion(name, info)
                this.animals.push(lion);
                this.addTwoWeeksFoodSupply(lion.foodType);

        }else if (type === "Whale"){

                let whale = new Whale(name, info)
                this.animals.push(whale);
                this.addTwoWeeksFoodSupply(whale.foodType);
                
        }else if (type === "Goose"){
                let goose = new Goose(name, info)
                this.animals.push(goose);
                this.addTwoWeeksFoodSupply(goose.foodType);
        }else if (type === "SnowyOwl"){
                let snowy_owl = new SnowyOwl(name, info)
                this.animals.push(snowy_owl);
                this.addTwoWeeksFoodSupply(snowy_owl.foodType);
        }else if (type === "ClownFish"){
                let clown_fish = new ClownFish(name, info)
                this.animals.push(clown_fish);
                this.addTwoWeeksFoodSupply(clown_fish.foodType);
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
        const amount = food.dailyQuantity * TOW_WEEKS_IN_DAYS;

        if (type in this.foodSupply) {
            this.foodSupply[type] += amount;        
        }
        else {
            this.foodSupply[type] = amount;
        }

    }
    removeFromSupply(food) {
        this.foodSupply[food.type] -= food.dailyQuantity;
        if (this.foodSupply[food.type] === 0) {
            this.addTwoWeeksFoodSupply(food);
        }
    }
    feedAnimalsForTwoWeeks() {
        for (let i = 0; i < WEEKS; i++) {
            console.log(`Week ${i + 1}`);
            for (let j = 0; j < DAYS_IN_WEEK; j++) {
                console.log(`Day ${j + 1}`);
                for (let animal of this.animals) {
                    animal.eat();
                    this.removeFromSupply(animal.foodType);
                }
            }
        }
    }
}
