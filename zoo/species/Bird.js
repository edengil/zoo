class Bird extends Animal {
    constructor(name, foodType, wingSpan) {
      super(name, foodType);
      this.wingSpan = wingSpan;
    }
    toString(){
      return ` Specie: Bird ${super.toString()} Wing Span: ${this.wingSpan}`;
    }
}
  
  
  
  
