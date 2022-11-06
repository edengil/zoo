class Mammal extends Animal {
  constructor(name, foodType, durationPregnancy) {
    super(name, foodType);
    this.durationPregnancy = durationPregnancy;
  }
  toString(){
    return ` Specie: Mammal ${super.toString()} Duration Pregnancy: ${this.durationPregnancy}`;
  }
}





