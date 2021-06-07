// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  let blocks
  if (street > 42) {
    blocks = street - 42;
  } else if (street < 42) {
    blocks = 42 - street;
  }
  return blocks
}

function distanceFromHqInFeet(street) {
  let feet = distanceFromHqInBlocks(street) * 264;
  return feet
}

function distanceTravelledInFeet(startLocation, currentLocation) {
  let distance = Math.abs(startLocation - currentLocation)
  return distance * 264
}

function calculatesFarePrice(start, destination) {
  let traveledInFeet = distanceTravelledInFeet(start, destination)
  let cost
  if (traveledInFeet <= 400 ) {
    cost = 0
  } else if (traveledInFeet > 400 && traveledInFeet < 2000) {
    cost = (traveledInFeet - 400) * 0.02
  } else if (traveledInFeet >= 2000 && traveledInFeet <= 2500) {
    cost = 25.00
  } else if ( traveledInFeet > 2500) {
    cost = "cannot travel that far"
  }
  return cost
  //400ft free
  //.02 * ft
  //2000-2500 flat
  //>2500 cannot travel
}