const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    const drover = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drover.push(allDrovers[randomHerderId])
    }
return drover
}

module.exports = { hireDrovers }