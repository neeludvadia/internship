//numeric enums
var cardinaldirections;
(function (cardinaldirections) {
    cardinaldirections[cardinaldirections["north"] = 1] = "north";
    cardinaldirections[cardinaldirections["east"] = 2] = "east";
    cardinaldirections[cardinaldirections["south"] = 3] = "south";
    cardinaldirections[cardinaldirections["west"] = 4] = "west";
})(cardinaldirections || (cardinaldirections = {}));
console.log(cardinaldirections.north);
console.log(cardinaldirections.west);
// we can  add unique values to enums which will stop auto increment
var statuscodes;
(function (statuscodes) {
    statuscodes[statuscodes["notfound"] = 404] = "notfound";
    statuscodes[statuscodes["success"] = 200] = "success";
    statuscodes[statuscodes["accepted"] = 202] = "accepted";
    statuscodes[statuscodes["badrequest"] = 400] = "badrequest";
})(statuscodes || (statuscodes = {}));
console.log(statuscodes.notfound);
console.log(statuscodes.success);
