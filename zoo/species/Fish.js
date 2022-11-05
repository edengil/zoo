class Fish extends Animal {
    constructor(name, foodType, lowestDepth) {
      super(name, foodType);
      this.lowestDepth = lowestDepth;
    }
    toString(){
      return ` Specie: Fish ${super.toString()} Lowest Depth: ${this.lowestDepth}`;
    }
}
  
  
  
  
  