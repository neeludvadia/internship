sum1=0;
ans=0;
for(let num1=0;num1<1000;num1++){
    if(num1%3==0 || num1%5==0){
        sum1=sum1+num1
    }
}
    for(let num2=0 ;num2<1000;num2++){
        if(num2%3==0 && num2%5==0){
            ans=ans+num2;
        }
    }

console.log(sum1);
console.log(ans);
