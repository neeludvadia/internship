//enums as function
enum appstatus {
    ACTIVE,
    INACTIVE,
    ONHOLD
}
function checkstatus(status:appstatus){
    console.log(status);
}
checkstatus(appstatus.INACTIVE);