let str="i am an example string";
let arr=["a","x"];
let arr2=[];
let blank="_";
let ans="";

for(let i=0; i<str.length;i++){
    arr2[i]=str.charAt(i);
}
 remove(arr,arr2);

function remove(arr,arr2){
    for(let i=0;i<arr2.length;i++){
if(arr2[i]==arr[0] || arr2[i]==arr[1]){
    arr2.splice(i,1);
    
    }
   
}
print(arr2);

}

function print(arr2){
    for(let i=0; i<arr2.length;i++){
         ans=ans+arr2[i];
        
    }
    console.log(ans);
    
}
   


