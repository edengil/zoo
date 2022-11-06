class Goose extends Bird {
    constructor(name, wingSpan,foodType =new Food("Seeds",1000)){
        super(name,foodType,wingSpan)
        this.name = name
        this.wingSpan =wingSpan
        this.foodType = foodType
    }
}




