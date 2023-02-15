
let a="bacd";
let ae=[];
let ad;
let temp;
let ans3="";
for(let i=0; i<a.length;i++){
    ae[i]=a.charAt(i);
}
sort(ae,ad);
function sort(ae){
let ans=ae.sort();

const print=ae.join(" ");

for(let i=0;i<ae.length/2;i++){
    temp=ae[i];
    ae[i]=ae[ae.length-i-1]
    ae[ae.length-i-1]=temp;
    
}
let ad = ae;


}



