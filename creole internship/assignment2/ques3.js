let stt="xybbbefaaag";
let anss=Common(stt);
console.log(anss);
function Common(inputstr) {
  let Obj = {};
  let charr = inputstr.split("");
  charr.sort();
  for (let k = 0; k < charr.length; k++) {
    if (Obj[charr[k]] != undefined) {
      Obj[charr[k]] = Obj[charr[k]] + 1;
    } else {
      Obj[charr[k]] = 1;
    }
  }
  return Object.entries(Obj)[0];
}
