function findMatching(drivers, stringName) {
  return drivers.filter(name =>
    name.toLowerCase() === stringName.toLowerCase()
  )
}

function fuzzyMatch(drivers, partialStr) {
  return drivers.filter(name =>
    // returns the first index at which a given element can be found in the array, else -1
    name.toLowerCase().indexOf(partialStr.toLowerCase()) === 0
  )
}


function matchName(driversObjs, stringName) {
  return driversObjs.filter(i => i.name === stringName)
}