class Rectangle {
  x;
  y;
  height;
  width;

  constructor(x,y,width, height) {
    this.x = x;
    this.y = y;
    this.height = height
    this.width = width;
  }
  getPerimeter() {
    return 2 *(this.height + this.width);
  }

  getArea() {
    return (this.height * this.width );
  }

  getRectangle() {
    return "chiều dài là "+ this.width + " và chiều rộng là " + this.height;
  }
  setHeight(height) {
    this.height = height;
  }
  setWidth(width) {
    this.width = width;
  }
  displayRectangle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.rect(this.x, this.y,this.width, this.height);
    ctx.fillStyle = "#31fa2a";
    ctx.fill();
    ctx.closePath();
  }
}

