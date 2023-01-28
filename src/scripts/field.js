// define a variable w/ value of empty array
// this will store ALL plants growing in field (let variable)

let plantArray = []

// define function addPlant
// function needs to add seed to field
// we use the .push method to push a new object into an array

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const seed of seedObject) {
            plantArray.push(seed)
        }
    }
    else {
        plantArray.push(seedObject)
    }   
}




//export this function at the bottom
// this function returns a COPY of the tilledField array

export const usePlants = () => {
   let copiedArray = []

   for (let plant of plantArray) {
    copiedArray.push(plant)
   }
   return copiedArray
}
