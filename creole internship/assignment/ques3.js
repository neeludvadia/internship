let char ="abcd"
let ans = py(char);
function py(char){
if(char.startsWith("py")){
    console.log(char);
}else{
let ans = "Py"+char;
console.log(ans);
}
}
