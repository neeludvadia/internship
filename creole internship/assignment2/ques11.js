let s="i am a string";

function altcapital(input) {
   return input
     .split("")
     .map((el, index) => (index % 2 === 0 ? el[0].toUpperCase() : el))
     .join("");
 }
 console.log(altcapital(s));
//altupper(s);

//function altupper(s){
  // q=s.charAt(0);
  // q1=q.toUpperCase();
   //r=s.substr(2,3);
   //r1=r.charAt(1);
   //r2=r1.toUpperCase();
   //u=s.charAt(5);
   //u1=u.toUpperCase();
   //p=s.substr(7);
   //p1=p.charAt(7);
   //p2=p1.toUpperCase();
   //let anns=q1+" "+s.charAt(2)+r2+" "+u1+" "+p2+s.substr(8); 
   //console.log(anns);
//}
