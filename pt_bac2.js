
function sum() {
  let a = +document.getElementById('a').value;
  let b = +document.getElementById('b').value;
  let c = +document.getElementById('c').value;

  if (a === 0) {
    if (b === 0) {
      if (c === 0) {
        document.getElementById('result').innerHTML = "Vo so nghiem"
      } else {
        document.getElementById('result').innerHTML = "Phuong trinh vo nghiem"
      }
    } else {
      let x = -c / b;
      document.getElementById('result').innerHTML = "Nghiem x =" + x
    }
  } else {
    let delta = Math.pow(b, 2) - (4 * (a * c));
    if (delta > 0) {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById('result').innerHTML = "Nghiem x1=" + x1 + "Nghiem x2" + x2;
    } else if (delta === 0) {
      let x = -b / (2 * a)
      document.getElementById('result').innerHTML = "Nghiem kep x=" + x
    }
    else
      {
        document.getElementById('result').innerHTML = "Phuong trinh vo nghiem"
      }
    }
}
  
