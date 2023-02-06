var weekend;
(function (weekend) {
    weekend[weekend["friday"] = 1] = "friday";
    weekend[weekend["saturday"] = 2] = "saturday";
    weekend[weekend["sunday"] = 3] = "sunday";
})(weekend || (weekend = {}));
console.log(weekend.saturday);
console.log(weekend["saturday"]);
console.log(weekend[3]);
