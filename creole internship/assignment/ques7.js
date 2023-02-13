let string = "Web Development Tutorial";

let string1=string.substring(4,15);
let string2=string.substring(0,3);
let string3=string.substring(16,24);
largeststring(string1,string2,string3);
function largeststring(string1,string2,string3){
    if(string1.length>string2.length || string1.length>string3.length){
        console.log(string1);
    }else if(string2.length>string3.length || string2.length>string1.length){
        console.log(string2);
    }else{
        console.log(string3);
    }
}

