let number=[0,4,7,8,2,3]
let min = number.length
let max=-1;

for(let i=0; i<number.length;i++){
     if(max<number[i]){
        max=number[i];
    }
}
alert(max);