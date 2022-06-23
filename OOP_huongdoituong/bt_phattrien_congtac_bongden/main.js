let electriclamp = new Electriclamp (false);
let switchbutton = new Switchbutton(electriclamp,false);
switchbutton.connectToLamp();
for (let i = 1; i <=20; i++) {
  if (i % 2 !== 0) {
    switchbutton.switchOn();
    console.log(switchbutton.switchOn());
    electriclamp.setStatus(true)
    console.log(electriclamp.getStatus());
  }
  else {
    switchbutton.switchOff();
    console.log(switchbutton.switchOff());
    electriclamp.setStatus(false)
    console.log(electriclamp.getStatus());
  }
}
