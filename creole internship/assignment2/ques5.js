let str1="hello";
let index=4;

let ar=[];
let ar2=["a","e","i","o","u"];

for(let i=0; i<str1.length;i++){
    ar[i]=str1.charAt(i);
}

check(ar,index,ar2);


function check(str1,index,ar2){
    for(let i=0;i<4;i++){
        if(str1[index]==ar2[i] ){
            console.log("vovel");
        }
        
        
    }
    
    
}