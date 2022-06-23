class Switchbutton {
  status
  lamp;
  constructor(lamp, status) {
    this.status = status;
    this.lamp = lamp;
  }
  getLamp(){
    return this.lamp;
  }
  setLamp(lamp) {
    this.lamp = lamp;
    return this.lamp;
  }
    switchOn() {
     this.status = true;
     return "Đèn đang bật";

    }
    switchOff() {
      this.status = false;
      return "Đèn đang tắt";
    }
    connectToLamp(electriclamp) {
    return this.lamp = electriclamp;
    }
}

