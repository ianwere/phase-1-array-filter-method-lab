const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArray,name) {
  return driversArray.filter(drivers =>drivers.toLowerCase()===name.toLowerCase()); 
}
function fuzzyMatch(driversArray,letters) {
    return driversArray.filter(drivers =>drivers.startsWith(letters));
}
function matchName(driverObjects,name) {
  return driverObjects.filter(driver => driver.name === name );
}