let electriclamp = new Electriclamp (false);
let switchbutton = new Switchbutton(electriclamp,false);
switchbutton.connectToLamp();
for (let i = 1; i <=20; i++) {
  if (i % 2 == 0) {
    switchbutton.switchOn();
    electriclamp.setStatus(true)
    console.log(switchbutton.switchOn());
    console.log(electriclamp.getStatus());
  }
  else {
    switchbutton.switchOff();
    electriclamp.setStatus(false)
    console.log(switchbutton.switchOff());
    console.log(electriclamp.getStatus());
  }
}
