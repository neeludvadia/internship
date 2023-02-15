let cat = "my cat is very beautiful";
let myarr3=cat.split(" ");
let key= "cat";
let flag=0;
let ans4= search(myarr3,key)
console.log(ans4);


function search(myarr3,key){
    for(let i=0;i<myarr3.length;i++){
        if(myarr3[i]==key){
                flag=flag+1;
        }    
        
    }
    return flag;
}