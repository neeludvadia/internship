let num1=25;
let num2=50;
let ans= cal (num1,num2);

function cal (num1,num2){
    if(num1==50 || num2==50){
        return true;
    }else if(num1 + num2 == 50){
        return true;
    }else{
        return false;
    }

}
console.log(ans);