function isEmailValid(inputEmail) {
    console.log(inputEmail);
  
    let emailPattern = /^[A-Za-z0-9]+@{1}[a-zA-Z0-9]+\.[A-Za-z]/g;
  
    console.log(emailPattern.test(inputEmail));
  }
  
  console.log(isEmailValid("somebody@somewhere"));
  console.log(isEmailValid("person@company.com"));
  console.log(isEmailValid("20ceuod026@ddu.sce.in"));
  console.log(isEmailValid("neel.udvadia@gmail.com"));