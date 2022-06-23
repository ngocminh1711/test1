class Circles {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}
  createCircle() {
  var ctx = document.getElementById("myCanvas").getContext("2d");
  var circle = new Circle(500, 500, 80);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fill();
}


