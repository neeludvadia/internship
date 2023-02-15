let mystring="i am string";
let myarr=mystring.split(" ");

for(let i=0;i<myarr.length;i++){
    myarr[i]=myarr[i].charAt(0).toUpperCase()+myarr[i].slice(1);
}

let stri2=myarr.join(" ");
console.log(stri2);











//let w= "i am string";
//let ans="";
//firstcapital(w);

//function firstcapital(w){
  //  let one=w.substr(0,1);
   // let one1=one.toUpperCase()//i
    //let three=w.substr(2,3);
    //let three1=three.charAt(0);
    //let three2=three1.toUpperCase()
    //let six=w.substr(5);
    //let six1=six.charAt(0);
    //let six2=six1.toUpperCase();
    //ans=ans+one1+" "+three2+"m"+" "+six2+"tring";
    //console.log(ans);
//}
