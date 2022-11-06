class Animal {
  constructor(name, foodType) {
    this.name = name;
    this.foodType = foodType;
  }
  toString(){
    return `Name: ${this.name} eat ${this.foodType.toString()}`
  }
  eat() {
    console.log(`${this.name}: is full`);
  }
  get food(){
    this.food
  }
}


