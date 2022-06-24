let adam = new Human("Adam", "male", 70);
let eva = new Human("Eva", "female", 50);
adam.say("Hello everyone! I am Adam");
eva.say("Hello everyone! I am Eva");
let apple = new Apple(20)
while (apple.isEmpty() !== true) {
  document.write("Adam ăn táo " + "<br>");
  adam.eat(apple);
  document.write( "Quả táo còn: " + "<br>");
  document.write(apple.getWeight() + " đơn vị " + "<br>");
  document.write("Cân nặng của Adam: " + adam.getWeight() + " đơn vị " + "<br>");
  document.write("<br>");

  eva.eat(apple);
  document.write( "Quả táo còn: " + "<br>");
  document.write(apple.getWeight() + " đơn vị " + "<br>");
  document.write("Cân nặng của Eva: " + eva.getWeight() + " đơn vị " + "<br>");
  document.write("<br>");
}
