// 

import { createAsparagus } from "./seeds/asparagus.js"

import { createSoybean } from "./seeds/soybean.js"

import { createWheat } from "./seeds/wheat.js"

import { createPotato } from "./seeds/potato.js"

import { createCorn } from "./seeds/corn.js"

import { createSunflower } from "./seeds/sunflower.js"

import { addPlant } from "./field.js"

// define and export a plantSeeds function
// this will take in plantingPlan as a parameter
// reminder that plan is in an ARRAY and consists of 3 arrays
// it represents the rows in the field



export const plantSeeds = (plantingPlan)=> {
    // the plan is an array consisting of 3 arrays
    // bring in plan array
    for (let row of plantingPlan) {
        for (let seedObject of row) {
            if (seedObject === "Asparagus") {
                const asparagus = createAsparagus()
                addPlant(asparagus)
            }
            else if (seedObject === "Corn") {
                const cornArray = createCorn()
                addPlant(cornArray)
            }
            else if (seedObject === "Wheat") {
                const wheat = createWheat()
                addPlant(wheat)
            }
            else if (seedObject === "Soybean") {
                const soybean = createSoybean()
                addPlant(soybean) // says CreateSoybean not defined but plantSeeds function is console logging properly??
            }
            else if (seedObject === "Sunflower") {
                const sunflower = createSunflower()
                addPlant(sunflower)
            }
            else if (seedObject === "Potato") {
                const potato = createPotato()
                addPlant(potato)
            }
        }
    }
}