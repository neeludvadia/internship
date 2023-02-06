//numeric enums
enum cardinaldirections{
    north=1,
    east,
    south,
    west
}
console.log(cardinaldirections.north);
console.log(cardinaldirections.west);


// we can  add unique values to enums which will stop auto increment
enum statuscodes {
    notfound = 404,
    success = 200,
    accepted = 202,
    badrequest = 400
}

console.log(statuscodes.notfound);

console.log(statuscodes.success);