// this is from plan.js
//this is step one 

const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

const createPlan = () => {
    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}

const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

const yearlyPlan = createPlan()
console.log(yearlyPlan)

// now make the seeds 
//this is step 2

const newTypes = []
//when you remake your modern farm, you could push the objects 
//onto type instead of making new array

const createCorn = () => {
    // create a  2 corn obj
    // 3 properties: type, height, output 
    const corn = [

        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]
    newTypes.push(corn)
    // return obj
    return corn
}


const cornHole = createCorn()
console.log(cornHole)

const createAsparagus = () => {
    // create a stinky pee obj
    // 3 properties: type, height, output
    const asparagus = {
        type: "Asparagus",
        height: 24,
        output: 4
    }
    newTypes.push(asparagus)
    // return obj
    return asparagus
}

// call func
let stinkyPee = createAsparagus()
console.log(stinkyPee)

const createPotato = () => {
    // create a potato obj
    // 3 properties: type, height, output
    const potato = {
        type: "Potato",
        height: 32,
        output: 2
    }
    newTypes.push(potato)
    // return obj
    return potato
}

const potatoHead = createPotato()
console.log(potatoHead)

const createSunFlower = () => {
    // create sunflower obj
    // 3 properties: type, height, output
    const sunflower = {
        type: "Sunflower",
        height: 380,
        output: 3
    }
    newTypes.push(sunflower)
    // return obj
    return sunflower
}

//call func
const sunShine = createSunFlower()
console.log(sunShine)

const createSoyBean = () => {
    // create a soybean
    // 3 properties: type, height, output
    const soybean = {
        type: "SoyBean",
        height: 20,
        output: 4
    }
    newTypes.push(soybean)
    // return obj
    return soybean
}

//call func
const soyMilk = createSoyBean()
console.log(soyMilk)

const createWheat = () => {
    // create wheat obj
    // 3 properties: type, height, output
    const wheat = {
        type: "Wheat",
        height: 230,
        output: 6
    }
    newTypes.push(wheat)
    // return obj
    return wheat
}

console.log(newTypes[0])




//call func
const wheatThins = createWheat()
console.log(wheatThins)

//now field.js
// this is step three

const grownInField = []

// make func called addplant
const addPlant = (seedObj) => {
    // must accept seed object as input 
    // func will add seed to field
    //loop through plants

    for (const seedObj of newTypes) {

        grownInField.push(seedObj)
    }
    return grownInField
}

const usePlants = () => {
    return { ...grownInField }
}




//is corn an array; yes 

const whatIsCorn = () => {
    console.log(Array.isArray(newTypes[0]))
}

whatIsCorn()

const plantsAdded = addPlant()
console.log(plantsAdded)

const useThese = usePlants()
console.log(useThese)

//from tractor.js
//step 4

const plantSeeds = (yearlyPlan) => {

    for (const crop of newTypes) {

        if (crop === "Asparagus") {
            //invoke factory functions 
            const stinkyPee = createAsparagus()

            //const plantsAdded = addPlant()
            grownInField.push(crop)
        }
        if (crop === "Corn") {
            //invoke factory functions 
            const cornHole = createCorn()

            //const plantsAdded = addPlant()
            grownInField.push(crop)
        }
        if (crop === "Potato") {
            //invoke factory functions 
            const potatoHead = createPotato()
            grownInField.push(crop)
        }
        if (crop === "Wheat") {
            //invoke factory functions 
            const wheatThins = createWheat()

            //const plantsAdded = addPlant()
            grownInField.push(crop)
        }
        if (crop === "Sunflower") {
            //invoke factory functions 
            const sunShine = createSunFlower()

            //const plantsAdded = addPlant()
            grownInField.push(crop)
        }
        if (crop === "Soybean") {
            //invoke factory functions 
            const soyMilk = createSoyBean()

            //constgrownInFieldAdded = addPlant()
            grownInField.push(crop)
        }
    }
    return grownInField
}


const plantThemSeeds = plantSeeds()
console.log(plantThemSeeds)

// corn still works here 
console.log(grownInField[0])


/*
const harvestedFoodArray = []
const harvestPlants = (grownInField) => {
    //must accept grownInField array
    // for (let i = 0; i < newTypes.length; i++) {
    //try iterating with that index loop to get desired 
    //number of stuff on page
    for (const plant of grownInField) {
        for (let i = 0; i < plant.output; i++) {
            if (plant === "Potato") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Asparagus") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Soybean") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Sunflower") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Wheat") {
                harvestedFoodArray.push(plant)
            }
            else {
                harvestedFoodArray.push(plant)
            }
        }

        for (const corn of createCorn()) {
            for (let j = 3; j < corn.output; j++) {
                harvestedFoodArray.push(corn)
            }
        }
    }
    return harvestedFoodArray
}

const farmer = harvestPlants(grownInField)
console.log(farmer)
*/

const harvestedFoodArray = []
const harvestPlants = (grownInField) => {
    //must accept grownInField array
    // for (let i = 0; i < newTypes.length; i++) {
    //try iterating with that index loop to get desired 
    //number of stuff on page
    for (const plant of grownInField) {
        for (let i = 0; i < plant.output; i++) {
            if (plant === "Potato") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Asparagus") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Soybean") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Sunflower") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Wheat") {
                harvestedFoodArray.push(plant)
            }
            else {
                harvestedFoodArray.push(plant)
            }
        }
    }
    for (const corn of createCorn()) {
        for (let j = 3; j < corn.output; j++) {
            harvestedFoodArray.push(corn)
        }
    }
    return harvestedFoodArray
}

const farmer = harvestPlants(grownInField)
console.log(farmer)



const catalog = (harvestedFoodArray) => {
    let catalogHTMLWrap = ''
    for (const food of harvestedFoodArray) {
        catalogHTMLWrap += `<section class="plant"> ${food.type}</section>`
    }
    return catalogHTMLWrap
}

const magazine = catalog(harvestedFoodArray)
console.log(magazine)


const parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = catalog(harvestedFoodArray)

