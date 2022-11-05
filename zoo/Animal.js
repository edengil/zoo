class Animal {
  constructor(name, species, foodType, dailyAmountOfFood) {
    this.name = name;
    this.foodType = foodType;
  }
  toString(){
    return `Name: ${this.name} eat ${this.foodType.toString()}`
  }
  eat() {
    console.log(`${this._name}: is full`);
  }
  get food(){
    this.food
  }
}
