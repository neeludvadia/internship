function RepeatingChars(inputstr, times) {
    let myob = {};
    let charr = inputstr.split("");
    charr.sort();
    for (let k = 0; k < charr.length; k++) {
      if (myob[charr[k]] != undefined) {
        myob[charr[k]] = myob[charr[k]] + 1;
      } else {
        myob[charr[k]] = 1;
      }
    }
    let arr1 = Object.entries(myob);
    let a1 = [];
    for (let j = 0; j < arr1.length; j++) {
      let [x, y] = arr1[j];
      if (y === times) {
        a1.push(x);
      }
    }
    return a1;
  }
  console.log(RepeatingChars("tfghhhplffzaaa", 3));