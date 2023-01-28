// define and export harvestPlants function

export const grownPlants = (plantsArray) => {
    let seedsArray = [];

    for (let plants of plantsArray) {
        if (plants.type === "Corn") {
            for (let i = 0; i < plants.output / 2; i++) {
                seedsArray.push(plants);
            } 
        } else {
            for (let i = 0; i < plants.output; i++) {
                seedsArray.push(plants);
            }
        }
    }
  
    return seedsArray
}
