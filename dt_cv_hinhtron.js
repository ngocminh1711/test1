function sum() {
  let r = +document.getElementById('r').value;
  let PI = Math.PI;
  S = Math.pow(r,2)*PI;
  document.getElementById('S').innerHTML= "Diện tích: =" +S;
  C = (r*2)*PI;
  document.getElementById('C').innerHTML= "Chu vi: =" +C;
}
