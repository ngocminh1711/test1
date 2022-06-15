function sum() {
  let c = +document.getElementById('c').value;
  let f = +document.getElementById('f').value;
  f = ((9 * c) / 5) + 32;
  document.getElementById('f').innerHTML = "" + f;
}

