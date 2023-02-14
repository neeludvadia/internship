let w= "i am string";
let ans="";
firstcapital(w);

function firstcapital(w){
    let one=w.substr(0,1);
    let one1=one.toUpperCase()//i
    let three=w.substr(2,3);
    let three1=three.charAt(0);
    let three2=three1.toUpperCase()
    let six=w.substr(5);
    let six1=six.charAt(0);
    let six2=six1.toUpperCase();
    ans=ans+one1+" "+three2+"m"+" "+six2+"tring";
    console.log(ans);
}
