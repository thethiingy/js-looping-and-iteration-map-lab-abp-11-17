// Code your solution in this file.
/*
    lowerCaseDrivers - this function takes an array of drivers,
    and returns an array of the drivers names in lowercase.
*/
function lowerCaseDrivers(drivers) {
  return drivers.map(function(d) { return d.toLowerCase(); } );
}
/*
    nameToAttributes - this function takes an array of drivers with
    their first and last name separated by a space, and returns an
    array of JavaScript objects with firstName and lastName attributes.
*/
function nameToAttributes(drivers) {
  return drivers.map(function(d) { return {'firstName': d.split(' ')[0], 'lastName':d.split(' ')[1]} });
}
/*
    attributesToPhrase - this function takes an array of drivers as
    JavaScript objects and returns a string saying "<NAME OF DRIVER>
    is from <HOMETOWN>" for each JavaScript object in the array.
    Note that between the < and > we are looking for the value stored
    in the name and hometown object attributes, not the
    strings "DRIVER" or "HOMETOWN".
*/
function attributesToPhrase(drivers) {
  return drivers.map(
    function(d) {
      return `${d.name} is from ${d.hometown}`;
    });
}
