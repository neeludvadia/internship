let a="bacd";
let ae=[];
let ad=[];
let temp;
let ans3="";
for(let i=0; i<a.length;i++){
    ae[i]=a.charAt(i);
}
sort(ae,ad);
function sort(ae){
let ans=ae.sort();
print(ae);

for(let i=0;i<ae.length/2;i++){
    temp=ae[i];
    ae[i]=ae[ae.length-i-1]
    ae[ae.length-i-1]=temp;
    
}
print(ae);
}




function print(ae){
    for(let j=0; j<4;j++){
          ans3=ans3+ae[j];

    }
    console.log(ans3);
}