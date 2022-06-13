function saidyes(){
    document.getElementById("y").innerHTML = " I love u <3";
}
function saidno(){
  let n1 = Math.floor(Math.random()*window.innerHeight);
  let n2 = Math.floor(Math.random()*window.innerWidth);
  document.getElementById('n').style.left = n1 + "px";
  document.getElementById('n').style.top = n2 + "px";
}
