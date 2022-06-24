class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('mycanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'car8byte.png';
        this.ctx.drawImage(image, this.x, this.y)
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveLeft() {
        this.x -= 5;
    }
    moveRight() {
        this.x += 5;
    }
    moveTop() {
      this.y -= 5;
    }
    moveBot(){
      this.y += 5;
    }
}
