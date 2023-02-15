let stre = "abbcddeikl";
let order;
function sort (str,value){
    let arr = str.split("");
    if (value == 'false'){
        order = arr.sort().join("");
    }
    else{
        order = arr.sort().reverse().join("");
    }
    if(order == str){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
sort (stre, 'false');