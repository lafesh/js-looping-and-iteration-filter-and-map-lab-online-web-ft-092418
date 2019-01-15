// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
    const income = driver.filter(array => array.revenue > revenue )
    return income
}

function driverNamesWithRevenueOver(driver, revenue) {
    const names = driver.filter(array => array.revenue > revenue)
    return names.map(array => array.name)
}

function exactMatch(driver, attribute) {
    return driver.filter(function(driver) {
        for (const key in attribute) { result = driver[key] === attribute[key]}
        return result
    })    
}

function exactMatchToList(driver, attribute) {
    const list = driver.filter(function(driver) {
        for (const key in attribute) { result = driver[key] === attribute[key]}
        return result
    })   
    return list.map(array => array.name)
}