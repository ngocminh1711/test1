function  changeimg() {

  let srcImage;
  let valueDataId;

  let nameID = document.getElementById("img1").getAttribute("data-id");
  if (nameID === 'cat') {
    srcImage = 'img/panda_swap_part1x1.jpg';
  valueDataId = 'panda';
  }
  else if(nameID === 'panda') {
    srcImage = 'img/monkey_part1x1.jpg';
    valueDataId = 'monkey';
  }
  else {
    srcImage = 'img/funny-cat1_part1x1.jpg'
    valueDataId= 'cat'
  }
  document.getElementById("img1").setAttribute('src', srcImage);
  document.getElementById('img1').setAttribute('data-id',valueDataId);
  checkWin()
}
function changeimg1() {

  let srcImage;
  let valueDataId;

  let nameID = document.getElementById('img2').getAttribute('data-id')
  if (nameID === 'cat') {
    srcImage = 'img/panda_swap_part2x1.jpg'
    valueDataId = 'panda'
  } else if (nameID === 'panda') {
    srcImage = 'img/monkey_part2x1.jpg'
    valueDataId = 'monkey'
  } else {
    srcImage = 'img/funny-cat1_part2x1.jpg'
    valueDataId = 'cat'
  }
  document.getElementById('img2').setAttribute('src', srcImage);
  document.getElementById('img2').setAttribute('data-id', valueDataId);
  checkWin()
}
function  changeimg2() {

  let srcImage;
  let valueDataId;

  let nameID = document.getElementById("img3").getAttribute("data-id");
  if (nameID === 'cat') {
    srcImage = 'img/panda_swap_part3x1.jpg';
    valueDataId = 'panda';
  }
  else if(nameID === 'panda') {
    srcImage = 'img/monkey_part3x1.jpg';
    valueDataId = 'monkey';
  }
  else {
    srcImage = 'img/funny-cat1_part3x1.jpg'
    valueDataId= 'cat'
  }
  document.getElementById("img3").setAttribute('src', srcImage);
  document.getElementById('img3').setAttribute('data-id', valueDataId);
  checkWin()
}
function  changeimg3() {

  let srcImage;
  let valueDataId;

  let nameID = document.getElementById("img4").getAttribute("data-id");
  if (nameID === 'cat') {
    srcImage = 'img/panda_swap_part4x1.jpg';
    valueDataId = 'panda';
  }
  else if(nameID === 'panda') {
    srcImage = 'img/monkey_part4x1.jpg';
    valueDataId = 'monkey';
  }
  else {
    srcImage = 'img/funny-cat1_part4x1.jpg'
    valueDataId= 'cat'
  }
  document.getElementById("img4").setAttribute('src', srcImage);
  document.getElementById('img4').setAttribute('data-id', valueDataId);
  checkWin()
}
function  changeimg4() {

  let srcImage;
  let valueDataId;

  let nameID = document.getElementById("img5").getAttribute("data-id");
  if (nameID === 'panda') {
    srcImage = 'img/funny-cat1_part5x1.jpg'
    valueDataId = 'cat'
  } else if (nameID === 'cat') {
    srcImage = 'img/monkey_part5x1.jpg'
    valueDataId = 'monkey'
  } else {
    srcImage = 'img/panda_swap_part5x1.jpg'
    valueDataId = 'panda'
  }
  document.getElementById("img5").setAttribute('src', srcImage);
  document.getElementById('img5').setAttribute('data-id', valueDataId);
  checkWin()
}
function checkWin(){
  let nameDataID1 = document.getElementById("img1").getAttribute("data-id");
  let nameDataID2 = document.getElementById("img2").getAttribute("data-id");
  let nameDataID3 = document.getElementById("img3").getAttribute("data-id");
  let nameDataID4 = document.getElementById("img4").getAttribute("data-id");
  let nameDataID5 = document.getElementById("img5").getAttribute("data-id");
   if (nameDataID1 === nameDataID2) {
     if( nameDataID2 === nameDataID3){
      if (nameDataID3 === nameDataID4) {
        if (nameDataID4 === nameDataID5) {
          document.getElementById("img1").style.border = '1px solid blue';
          document.getElementById("img2").style.border = '1px solid blue';
          document.getElementById("img3").style.border = '1px solid blue';
          document.getElementById("img4").style.border = '1px solid blue';
          document.getElementById("img5").style.border = '1px solid blue';
        }
      }
     }
   }
   else {
     document.getElementById("img1").style.border = '';
     document.getElementById("img2").style.border = '';
     document.getElementById("img3").style.border = '';
     document.getElementById("img4").style.border = '';
     document.getElementById("img5").style.border = '';

   }
}
