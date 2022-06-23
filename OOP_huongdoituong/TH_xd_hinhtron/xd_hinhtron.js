class circle {
  constructor(radius, color)  {
    this.radius = radius;
    this.color = color;
  }
  getCircle() {
    return this.radius + " " + " Màu của vòng tròn là " +   this.color ;
  }
 Area (){
    return Math.PI * this.radius* this.radius;
 }
}
let Circle = new circle(2, "blue")
document.write("Hình tròn có bán kính bằng: " + Circle.getCircle());
document.write("<br>")
document.write("Diện tích hình tròn là : "+ Circle.Area());
document.write()
