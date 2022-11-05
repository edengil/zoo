class Mammal extends Animal {
  constructor(name, foodType, durationPregnancy) {
    super(name, foodType);
    this.durationPregnancy = durationPregnancy;
  }
  toString(){
    return ` Specie: Mammal ${super.toString()} Duration Pregnancy: ${this.durationPregnancy}`;
  }
}








// class Lion extends Mammal {
//   constructor(name) {
//     super(name, "Mammal", "meat", "6 kg", "9 months");
//   }
//   getSpecies() {
//     return this.species;
//   }
//   getFoodType() {
//     return this.foodType;
//   }
//   getDailyAmountOfFood() {
//     return this.dailyAmountOfFood;
//   }
//   getDailydurationPregnancy() {
//     return this.durationPregnancy;
//   }
// }

// const Simba = new Lion("Simba");
// console.log(Simba.getDailyAmountOfFood());
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
