
let zoo = new Zoo();
zoo.addAnimalFactory("Lion", "Nala", 1);
zoo.addAnimalFactory("Whale", "Willy", 1);
zoo.addAnimalFactory("Lion", "Simba", 1);
zoo.addAnimalFactory("SnowyOwl", "Hedwig", 1);
zoo.addAnimalFactory("Goose", "Akka", 1);
zoo.addAnimalFactory("ClownFish", "Nemo", 1);
zoo.addAnimalFactory("ClownFish", "Marlin", 1);
console.log(zoo.toString());
zoo.feedAnimalsForTwoWeeks();