let rectangle = new Rectangle (100,100,300,500);
document.write("<br>");
rectangle.setHeight(+prompt("Nhập chiều dài: "));
rectangle.setWidth(+prompt("Nhập chiều rộng: "));
document.write(rectangle.getRectangle());
document.write("<br>");
document.write("Diện tích của hình chữ nhật là: " + rectangle.getPerimeter());
document.write("<br>");
document.write("Chu vi của hình chữ nhật là: " + rectangle.getArea());
rectangle.displayRectangle();




