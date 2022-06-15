function sum() {
  let x = +document.getElementById('x').value;
  let from = +document.getElementById('from').value;
  let to = +document.getElementById('to').value;
  ketqua = (x * to) / from ;
  document.getElementById('ketqua').innerHTML = 'Kết quả: ' + ketqua;
}
