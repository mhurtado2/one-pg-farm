

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