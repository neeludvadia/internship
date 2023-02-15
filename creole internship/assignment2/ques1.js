let string = "i am a string";
let size=string.length;
let string2="";

function reverse (string){
for(let i=size-1;i>0;i--){
    string2+=string.charAt(i);
  
}
return string2;
}
console.log(reverse(string));




