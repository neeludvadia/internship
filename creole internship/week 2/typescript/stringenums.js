var directions;
(function (directions) {
    directions["north"] = "north";
    directions["east"] = "east";
    directions["south"] = "south";
    directions["west"] = "west";
})(directions || (directions = {}));
;
console.log(directions.east);
console.log(directions.west);
