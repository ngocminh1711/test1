let battery = new Battery();
battery.setEnergy(100);
let flashlamp = new Flashlamp();
flashlamp.setBattery(battery);
flashlamp.turnOff();
document.write ("Đèn đang " + flashlamp.checkLight() + "<br>");
battery.decreaseEnergy()
document.write ("Battery info: " + battery.getEnergy() + "<br>");



