function add() {
  var  a = +document.getElementById('a').value;
  var b = +document.getElementById('b').value;
  let result = a + b ;
  document.getElementById('result').innerHTML = "Kết quả:" + result;
}
function sub() {
  var  a = +document.getElementById('a').value;
  var b = +document.getElementById('b').value;
  let result = a - b ;
  document.getElementById('result').innerHTML = "Kết quả:" + result;
}
function Mu() {
  var a = +document.getElementById('a').value;
  var b = +document.getElementById('b').value;
  let result = a * b;
  document.getElementById('result').innerHTML = "Kết quả:" + result;
}
function Div() {
  var a = +document.getElementById('a').value;
  var b = +document.getElementById('b').value;
  let result = a / b;
  document.getElementById('result').innerHTML = "Kết quả:" + result;
}


