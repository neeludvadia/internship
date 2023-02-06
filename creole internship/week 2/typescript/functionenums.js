//enums as function
var appstatus;
(function (appstatus) {
    appstatus[appstatus["ACTIVE"] = 0] = "ACTIVE";
    appstatus[appstatus["INACTIVE"] = 1] = "INACTIVE";
    appstatus[appstatus["ONHOLD"] = 2] = "ONHOLD";
})(appstatus || (appstatus = {}));
function checkstatus(status) {
    console.log(status);
}
checkstatus(appstatus.INACTIVE);
