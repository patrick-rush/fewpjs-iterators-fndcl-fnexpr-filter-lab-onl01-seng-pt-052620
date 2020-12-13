function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.toLowerCase().startsWith(string.toLowerCase())
    })
}

function matchName(drivers, name) {
    return drivers.filter(driverObject => {
        return driverObject.name === name
    })
}