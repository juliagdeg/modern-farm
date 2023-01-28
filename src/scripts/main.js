console.log("Welcome to the main module")

import { usePlants } from "./field.js"

import { plantSeeds } from "./tractor.js"

import { createPlan } from "./plan.js"

import { grownPlants } from "./harvester.js"

import { catalog } from "./catalog.js"


const plan = createPlan()
console.log(plan);

plantSeeds(plan);


const newPlants = usePlants();
console.log(newPlants)

const harvestPlants = grownPlants(newPlants)
console.log(harvestPlants)

const catalogHTML = document.querySelector(".container")
catalogHTML.innerHTML = catalog(harvestPlants)


// console.log(plan)
// console.log(corn)
// console.log(asparagus)

// console.log(tilledField)